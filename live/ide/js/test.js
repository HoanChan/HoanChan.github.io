/// <reference path="main.js" />
(function ($) {
  var $selectLanguage;
  var Compiler = new window.Compiler();
  var themeMode = Compiler.localStorageGetItem("themeMode") || "vs-dark";
  var fontSize = 14;

  //========================================================================================================================================//
  require.config({ paths: { 'vs': 'https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.20.0/min/vs' } });

  // Before loading vs/editor/editor.main, define a global MonacoEnvironment that overwrites
  // the default worker url location (used when creating WebWorkers). The problem here is that
  // HTML5 does not allow cross-domain web workers, so we need to proxy the instantiation of
  // a web worker through a same-domain script
  window.MonacoEnvironment = {
    getWorkerUrl: function (workerId, label) {
      return `data:text/javascript;charset=utf-8,${encodeURIComponent(`
          self.MonacoEnvironment = {
            baseUrl: 'https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.20.0/min/'
          };
          importScripts('https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.20.0/min/vs/base/worker/workerMain.min.js');`
      )}`;
    }
  };
  var sourceEditor;
  require(["vs/editor/editor.main"], function () {
    // Through the options literal, the behaviour of the editor can be easily customized.
    // Here are a few examples of config options that can be passed to the editor.
    // You can also call editor.updateOptions at any time to change the options.

    sourceEditor = monaco.editor.create(document.getElementById("codeEditor"), {
      value: "// First line\nfunction hello() {\n\talert('Hello world!');\n}\n// Last line",
      language: "javascript",
      automaticLayout: true, // the important part
      lineNumbers: "on",
      roundedSelection: false,
      scrollBeyondLastLine: false,
      readOnly: false,
      theme: themeMode,
    });

    if (Compiler.getIdFromURI()) {
      Compiler.loadSavedSource();
    } else {
      Compiler.loadRandomLanguage();
    }
    sourceEditor.focus();
    sourceEditor.getModel().onDidChangeContent(function (e) {
      Compiler.onChangeContent(sourceEditor.getValue(), parseInt($selectLanguage.val()));
    });
  });
  var TestReults = [];
  var Problem;
  function CreateTestData(index) {
    return `
              <div class="ui relaxed divided list">
                <div class="item">
                  <div class="right floated content">
                    <a class="header">Thời gian thực hiện</a>
                    <div class="text-right description">${TestReults[index] ? TestReults[index].Time / 1000 : 0} s</div>
                  </div>
                  <i class="large middle aligned clock outline icon"></i>
                  <div class="content">
                    <a class="header">Giới hạn thời gian</a>
                    <div class="description">${Problem.TimeLimit / 1000} s</div>
                  </div>
                </div>
                <div class="item">
                  <div class="right floated content">
                    <a class="header">Bộ nhớ sử dụng</a>
                    <div class="text-right description">${TestReults[index] ? TestReults[index].Memory : 0} KB</div>
                  </div>
                  <i class="large middle aligned microchip icon"></i>
                  <div class="content">
                    <a class="header">Giới hạn bộ nhớ</a>
                    <div class="description">${Problem.MemoryLimit} KB</div>
                  </div>
                </div>
                <div class="item">
                  <div class="right floated content">
                    <a class="header">Input</a>
                    <div class="text-right description">${TestReults[index] ? TestReults[index].Input : 0}</div>
                  </div>
                  <i class="large middle aligned keyboard icon"></i>
                  <div class="content">
                    <a class="header">Input</a>
                    <div class="description">${Problem.Tests[index].Input}</div>
                  </div>
                </div>
                <div class="item">
                  <div class="right floated content">
                    <a class="header">Output thực tế</a>
                    <div class="text-right description">${TestReults[index] ? TestReults[index].Output : 0}</div>
                  </div>
                  <i class="large middle aligned desktop icon"></i>
                  <div class="content">
                    <a class="header">Output</a>
                    <div class="description">${Problem.Tests[index].Output}</div>
                  </div>
                </div>
                <div class="item">
                  <div class="ui styled accordion">
                    <div class="title"><i class="dropdown icon"></i>Thông báo biên dịch</div>
                    <div class="content">${TestReults[index] ? TestReults[index].Compile.replace(/\n/g, "<br />") : 0}</div>
                    <div class="title"><i class="dropdown icon"></i>Thông báo lỗi</div>
                    <div class="content">${TestReults[index] ? TestReults[index].Error.replace(/\n/g, "<br />") : 0}</div>
                  </div>                
                </div>
              </div>
            `;
  }
  function CreateTests(file) {
    let reader = new FileReader();
    reader.onload = function () {
      let data = JSON.parse(reader.result);
      console.log(data);
      Problem = data[0];
      $("#left").html("<h2>" + Problem.Name + "</h2>" + "<div>" + Problem.Content + "</div>");
      let tests = Problem.Tests;
      $("#testList").html("");
      for (let index = 0; index < tests.length; index++) {
        let test = $(`<a class="teal item">${tests[index].Name}</a>`)
          .on('click', function () {
            $('#testList .item').removeClass('active');
            $(this).addClass('active');
            $("#testInfo").html(CreateTestData(index));
            $('.ui.accordion').accordion();
          });
        $("#testList").append(test);
        if (index == 0) test.click();
      }
    };
    reader.readAsText(file);
  }

  function selectFile(contentType, multiple) {
    return new Promise(resolve => {
      let input = document.createElement('input');
      input.type = 'file';
      input.multiple = multiple;
      input.accept = contentType;
      input.onchange = _ => {
        let files = Array.from(input.files);
        if (multiple)
          resolve(files);
        else
          resolve(files[0]);
        input.remove();
      };
      input.click();
    });
  }
  function CreateResults() {
    $("#btnRun").addClass("loading");
    let tests = Problem.Tests;
    TestReults = Array(tests.length);
    var Counter = 0;
    for (let index = 0; index < tests.length; index++) {
      let testCompiler = new window.Compiler();
      let result = {};
      testCompiler.setSource = function (value) { sourceEditor.setValue(value); };
      // testCompiler.setInput = function (value) { result.Input = value; };
      result.Input = tests[index].Input;
      testCompiler.setOutput = function (value) { result.Output = value; };
      testCompiler.setError = function (value) { result.Error = value; };
      testCompiler.setCompile = function (value) { result.Compile = value; };
      testCompiler.setSanbox = function (value) { result.Sanbox = value; };
      testCompiler.setStatus = function (status, time, memory) { result.Time = time; result.Memory = memory; };
      testCompiler.getSource = function () { return sourceEditor.getValue(); };
      testCompiler.getInput = function () { return tests[index].Input; };
      testCompiler.getOuput = function () { return tests[index].Output; };
      testCompiler.getLang = function () { return $selectLanguage.val(); };
      testCompiler.afterRun = function () {
        console.log(result);
        TestReults[index] = result;
        testCompiler = null;
        let correct = TestReults[index] && (TestReults[index].Output == Problem.Tests[index].Output);
        let label = correct ? '<div class="ui teal left pointing label">Đúng</div>' : '<div class="ui red left pointing label">Sai</div>';
        $("#testList").children().eq(index).html(`${tests[index].Name} ${label}`).removeClass("active");
        Counter++;
        if (Counter == tests.length) {
          $("#btnRun").removeClass("loading");
          $("#testList .item:first-child").click();
        }
      };
      testCompiler.run();
    }
  }
  //========================================================================================================================================//
  $(document).ready(function () {
    console.log("Hey, HC-IDE is open-sourced. Have fun!");
    $('.tabular.menu .item').tab();
    $("select.dropdown").dropdown();
    $(".ui.dropdown").dropdown();
    $(".ui.dropdown.site-links").dropdown({ action: "hide", on: "hover" });
    $(".ui.checkbox").checkbox();
    $(".message .close").on("click", function () {
      $(this).closest(".message").transition("fade");
    });
    // =================================== //
    loadMessages();
    $("#btnOpenTest").click(async function (e) {
      let file = await selectFile(".json", false);
      CreateTests(file);
    });
    $("#btnSave").click(function (e) {
      Compiler.save()
    });
    $("#btnDownload").click(function (e) {
      var value = parseInt($selectLanguage.val());
      download(sourceEditor.getValue(), fileNames[value], "text/plain");
    });
    $("#btnShare").click(function (e) {
      var $temp = $("<input>");
      $("body").append($temp);
      $temp.val(window.location.href).select();
      document.execCommand("copy");
      $temp.remove();
      showMess("Thông báo", "Địa chỉ trang web đã được copy vào ClipBoard, hãy dán vào nơi khác để chia sẻ cho mọi người");
    });
    $("#btnInsertCode").click(function (e) {
      if (isEditorDirty && confirm("Bạn có chắc sẽ làm điều này không? Toàn bộ mã nguồn hiện tại sẽ bị thay thế.")) {
        Compiler.insertTemplate();
      }
    });

    $("#btnRun").click(function (e) {
      if ($("#btnRun").hasClass("loading")) return;
      CreateResults();
    });
    $selectLanguage = $("#select-language").change(function (e) {
      if (!Compiler.isEditorDirty) {
        Compiler.insertTemplate();
      } else {
        Compiler.changeEditorLanguage();
      }
    });

    Compiler.setSource = function (value) { sourceEditor.setValue(value); };
    Compiler.setLang = function (value) { $selectLanguage.dropdown("set selected", value); };

    Compiler.getSource = function () { return sourceEditor.getValue(); };
    Compiler.getLang = function () { return $selectLanguage.val(); };

    Compiler.setSourceLanguage = function () { monaco.editor.setModelLanguage(sourceEditor.getModel(), $selectLanguage.find(":selected").attr("mode")); };
    Compiler.setSourceFileName = function (fileName) { $(".lm_title")[0].innerText = fileName; };

    Compiler.showError = function (title, content) {
      $("#site-modal #title").html(title);
      $("#site-modal .content").html(content);
      $("#site-modal").modal("show");
    }
    // ================================== //
    $(`input[name="theme-mode"][value="${themeMode}"]`).prop("checked", true);
    $("input[name=\"theme-mode\"]").on("change", function (e) {
      $('#site-settings').modal('hide');
      themeMode = e.target.value;
      Compiler.localStorageSetItem("themeMode", themeMode);
      monaco.editor.setTheme(themeMode);
      sourceEditor.focus();
    });

    $("body").keydown(function (e) {
      var keyCode = e.keyCode || e.which;
      if (keyCode == 120) { // F9
        e.preventDefault();
        Compiler.run();
        return;
      }

      if (keyCode == 112) { // F1
        e.preventDefault();
        $('#info-modal').modal('show');
        return;
      }

      if (keyCode == 118) { // F7
        e.preventDefault();
        wait = !wait;
        localStorageSetItem("wait", wait);
        alert(`Trạng thái chờ chạy lệnh: ${wait ? "ON." : "OFF"}.`);
        return;
      }

      if (keyCode == 113 || (event.ctrlKey && keyCode == 83)) { // F2 || Ctrl + S
        e.preventDefault();
        Compiler.save();
        return;
      }

      if (event.ctrlKey && keyCode == 107) { // Ctrl + +
        e.preventDefault();
        fontSize += 1;
        editorsUpdateFontSize(fontSize);
        return;
      }

      if (event.ctrlKey && keyCode == 109) { // Ctrl + -
        e.preventDefault();
        fontSize -= 1;
        editorsUpdateFontSize(fontSize);
        return;
      }
    });

  });

  function editorsUpdateFontSize(fontSize) {
    sourceEditor.updateOptions({ fontSize: fontSize });
  }

  function showMess(title, content) {
    $("#mess-modal #title").html(title);
    $("#mess-modal .content").html(content);
    $("#mess-modal").modal("show");
  }

  var messagesData = "";
  function showMessages() {
    var $navigationMessage = $("#navigation-message span");
    var $about = $("#about");
    $navigationMessage.html("");
    $navigationMessage.parent().width(0);
    var width = $about.offset().left - parseFloat($about.css("padding-left")) - $navigationMessage.parent().offset().left - parseFloat($navigationMessage.parent().css("padding-left"));
    if (width < 100 || messagesData === undefined) { return; }
    var messages = messagesData["messages"];
    $navigationMessage.css("animation-duration", messagesData["duration"]);
    $navigationMessage.parent().width(width - 5);
    var combinedMessage = "";
    for (var i = 0; i < messages.length; ++i) {
      combinedMessage += `${messages[i]}`;
      if (i != messages.length - 1) {
        combinedMessage += "&nbsp".repeat(Math.min(200, messages[i].length));
      }
    }
    $navigationMessage.html(combinedMessage);
  }

  function loadMessages() {
    $.ajax({
      url: `https://hoanchan.github.io/live/ide/messages.json?${Date.now()}`,
      type: "GET",
      headers: {
        "Accept": "application/json"
      },
      success: function (data, textStatus, jqXHR) {
        messagesData = data;
        showMessages();
      }
    });
  }

  $(window).resize(function () {
    showMessages();
  });
})(window.jQuery);