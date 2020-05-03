
var defaultUrl = localStorageGetItem("api-url") || "https://api.judge0.com";
var apiUrl = defaultUrl;
var wait = localStorageGetItem("wait") || false;
var pbUrl = "https://pb.judge0.com";
var check_timeout = 200;
var blinkStatusLine = ((localStorageGetItem("blink") || "true") === "true");

var isEditorDirty = false;
var currentLanguageId;

function onChangeContent(sourceEditor, langID) {
  currentLanguageId = langID;
  isEditorDirty = sourceEditor.getValue() != sources[currentLanguageId];
}

function encode(str) {
  return btoa(unescape(encodeURIComponent(str || "")));
}

function decode(bytes) {
  var escaped = escape(atob(bytes || ""));
  try {
    return decodeURIComponent(escaped);
  } catch {
    return unescape(escaped);
  }
}

function showApiUrl() {
  $("#api-url").attr("href", apiUrl);
}

function showError(title, content) {
  $("#site-modal #title").html(title);
  $("#site-modal .content").html(content);
  $("#site-modal").modal("show");
}

function handleError(jqXHR, textStatus, errorThrown) {
  showError(`${jqXHR.statusText} (${jqXHR.status})`, `<pre>${JSON.stringify(jqXHR, null, 4)}</pre>`);
}

function handleRunError(jqXHR, textStatus, errorThrown) {
  handleError(jqXHR, textStatus, errorThrown);
  $runBtn.removeClass("loading");
}

function handleResult(data) {
  timeEnd = performance.now();
  console.log("It took " + (timeEnd - timeStart) + " ms to get submission result.");

  var status = data.status;
  var stdout = decode(data.stdout);
  var stderr = decode(data.stderr);
  var compile_output = decode(data.compile_output);
  var sandbox_message = decode(data.message);
  var time = (data.time === null ? "-" : data.time + "s");
  var memory = (data.memory === null ? "-" : data.memory + "KB");

  $statusLine.html(`${status.description}, ${time}, ${memory}`);

  if (blinkStatusLine) {
    $statusLine.addClass("blink");
    setTimeout(function () {
      blinkStatusLine = false;
      localStorageSetItem("blink", "false");
      $statusLine.removeClass("blink");
    }, 3000);
  }

  stdoutEditor.setValue(stdout);
  stderrEditor.setValue(stderr);
  compileOutputEditor.setValue(compile_output);
  sandboxMessageEditor.setValue(sandbox_message);

  if (stdout !== "") {
    var dot = document.getElementById("stdout-dot");
    if (!dot.parentElement.classList.contains("active")) {
      dot.hidden = false;
    }
  }
  if (stderr !== "") {
    var dot = document.getElementById("stderr-dot");
    if (!dot.parentElement.classList.contains("active")) {
      dot.hidden = false;
    }
  }
  if (compile_output !== "") {
    var dot = document.getElementById("compile-output-dot");
    if (!dot.parentElement.classList.contains("active")) {
      dot.hidden = false;
    }
  }
  if (sandbox_message !== "") {
    var dot = document.getElementById("sandbox-message-dot");
    if (!dot.parentElement.classList.contains("active")) {
      dot.hidden = false;
    }
  }

  $runBtn.removeClass("loading");
}

function getIdFromURI() {
  return location.search.substr(1).trim();
}

function resolveLanguageId(id) {
  id = parseInt(id);
  return languageIdTable[id] || id;
}

function resolveApiUrl(id) {
  id = parseInt(id);
  return languageApiUrlTable[id] || defaultUrl;
}
function run() {
  if (sourceEditor.getValue().trim() === "") {
    showError("Error", "Source code can't be empty!");
    return;
  } else {
    $runBtn.addClass("loading");
  }

  document.getElementById("stdout-dot").hidden = true;
  document.getElementById("stderr-dot").hidden = true;
  document.getElementById("compile-output-dot").hidden = true;
  document.getElementById("sandbox-message-dot").hidden = true;

  stdoutEditor.setValue("");
  stderrEditor.setValue("");
  compileOutputEditor.setValue("");
  sandboxMessageEditor.setValue("");

  var sourceValue = encode(sourceEditor.getValue());
  var stdinValue = encode(stdinEditor.getValue());
  var languageId = resolveLanguageId($selectLanguage.val());
  var compilerOptions = $compilerOptions.val();
  var commandLineArguments = $commandLineArguments.val();

  if (parseInt(languageId) === 44) {
    sourceValue = sourceEditor.getValue();
  }

  var data = {
    source_code: sourceValue,
    language_id: languageId,
    stdin: stdinValue,
    compiler_options: compilerOptions,
    command_line_arguments: commandLineArguments
  };

  timeStart = performance.now();
  $.ajax({
    url: apiUrl + `/submissions?base64_encoded=true&wait=${wait}`,
    type: "POST",
    async: true,
    contentType: "application/json",
    data: JSON.stringify(data),
    success: function (data, textStatus, jqXHR) {
      console.log(`Your submission token is: ${data.token}`);
      if (wait == true) {
        handleResult(data);
      } else {
        setTimeout(fetchSubmission.bind(null, data.token), check_timeout);
      }
    },
    error: handleRunError
  });
}
function fetchSubmission(submission_token) {
  $.ajax({
    url: apiUrl + "/submissions/" + submission_token + "?base64_encoded=true",
    type: "GET",
    async: true,
    success: function (data, textStatus, jqXHR) {
      if (data.status.id <= 2) { // In Queue or Processing
        setTimeout(fetchSubmission.bind(null, submission_token), check_timeout);
        return;
      }
      handleResult(data);
    },
    error: handleRunError
  });
}

//===============================================================================================//

function save() {
  var content = JSON.stringify({
    source_code: encode(sourceEditor.getValue()),
    language_id: $selectLanguage.val(),
    compiler_options: $compilerOptions.val(),
    command_line_arguments: $commandLineArguments.val(),
    stdin: encode(stdinEditor.getValue()),
    stdout: encode(stdoutEditor.getValue()),
    stderr: encode(stderrEditor.getValue()),
    compile_output: encode(compileOutputEditor.getValue()),
    sandbox_message: encode(sandboxMessageEditor.getValue()),
    status_line: encode($statusLine.html())
  });
  var filename = "judge0-ide.json";
  var data = {
    content: content,
    filename: filename
  };

  $.ajax({
    url: pbUrl,
    type: "POST",
    async: true,
    headers: {
      "Accept": "application/json"
    },
    data: data,
    success: function (data, textStatus, jqXHR) {
      if (getIdFromURI() != data["short"]) {
        window.history.replaceState(null, null, location.origin + location.pathname + "?" + data["short"]);
      }
    },
    error: function (jqXHR, textStatus, errorThrown) {
      handleError(jqXHR, textStatus, errorThrown);
    }
  });
}

function downloadSource() {
  var value = parseInt($selectLanguage.val());
  download(sourceEditor.getValue(), fileNames[value], "text/plain");
}

function loadSavedSource() {
  snippet_id = getIdFromURI();

  if (snippet_id.length == 36) {
    $.ajax({
      url: apiUrl + "/submissions/" + snippet_id + "?fields=source_code,language_id,stdin,stdout,stderr,compile_output,message,time,memory,status,compiler_options,command_line_arguments&base64_encoded=true",
      type: "GET",
      success: function (data, textStatus, jqXHR) {
        sourceEditor.setValue(decode(data["source_code"]));
        $selectLanguage.dropdown("set selected", data["language_id"]);
        $compilerOptions.val(data["compiler_options"]);
        $commandLineArguments.val(data["command_line_arguments"]);
        stdinEditor.setValue(decode(data["stdin"]));
        stdoutEditor.setValue(decode(data["stdout"]));
        stderrEditor.setValue(decode(data["stderr"]));
        compileOutputEditor.setValue(decode(data["compile_output"]));
        sandboxMessageEditor.setValue(decode(data["message"]));
        var time = (data.time === null ? "-" : data.time + "s");
        var memory = (data.memory === null ? "-" : data.memory + "KB");
        $statusLine.html(`${data.status.description}, ${time}, ${memory}`);
        changeEditorLanguage();
      },
      error: handleRunError
    });
  } else if (snippet_id.length == 4) {
    $.ajax({
      url: pbUrl + "/" + snippet_id + ".json",
      type: "GET",
      success: function (data, textStatus, jqXHR) {
        sourceEditor.setValue(decode(data["source_code"]));
        $selectLanguage.dropdown("set selected", data["language_id"]);
        $compilerOptions.val(data["compiler_options"]);
        $commandLineArguments.val(data["command_line_arguments"]);
        stdinEditor.setValue(decode(data["stdin"]));
        stdoutEditor.setValue(decode(data["stdout"]));
        stderrEditor.setValue(decode(data["stderr"]));
        compileOutputEditor.setValue(decode(data["compile_output"]));
        sandboxMessageEditor.setValue(decode(data["sandbox_message"]));
        $statusLine.html(decode(data["status_line"]));
        changeEditorLanguage();
      },
      error: function (jqXHR, textStatus, errorThrown) {
        showError("Not Found", "Code not found!");
        window.history.replaceState(null, null, location.origin + location.pathname);
        loadRandomLanguage();
      }
    });
  }
}