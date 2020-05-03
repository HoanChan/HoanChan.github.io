
var $selectLanguage;
var $compilerOptions;
var $commandLineArguments;
var $insertTemplateBtn;
var $runBtn;
var $navigationMessage;
var $about;
var $statusLine;

var themeMode = localStorageGetItem("themeMode") || "vs-dark";

function localStorageSetItem(key, value) {
  try {
    localStorage.setItem(key, value);
  } catch (ignorable) {
  }
}

function localStorageGetItem(key) {
  try {
    return localStorage.getItem(key);
  } catch (ignorable) {
    return null;
  }
}
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
var sourceEditor, stdinEditor, stdoutEditor, compileOutputEditor, stderrEditor, sandboxMessageEditor;
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
  stdinEditor = monaco.editor.create(document.getElementById("input"), {
    value: "First line\nSecond line\nThird line\nLast line",
    language: "plaintext",
    automaticLayout: true, // the important part
    lineNumbers: "on",
    roundedSelection: false,
    scrollBeyondLastLine: false,
    readOnly: false,
    theme: themeMode,
    minimap: { enabled: false }
  });
  stdoutEditor = monaco.editor.create(document.getElementById("output"), {
    value: "output",
    language: "plaintext",
    automaticLayout: true, // the important part
    lineNumbers: "on",
    roundedSelection: false,
    scrollBeyondLastLine: false,
    readOnly: false,
    theme: themeMode,
    minimap: { enabled: false }
  });
  compileOutputEditor = monaco.editor.create(document.getElementById("compile"), {
    value: "compile",
    language: "plaintext",
    automaticLayout: true, // the important part
    lineNumbers: "on",
    roundedSelection: false,
    scrollBeyondLastLine: false,
    readOnly: false,
    theme: themeMode,
    minimap: { enabled: false }
  });
  stderrEditor = monaco.editor.create(document.getElementById("error"), {
    value: "err",
    language: "plaintext",
    automaticLayout: true, // the important part
    lineNumbers: "on",
    roundedSelection: false,
    scrollBeyondLastLine: false,
    readOnly: false,
    theme: themeMode,
    minimap: { enabled: false }
  });
  sandboxMessageEditor = monaco.editor.create(document.getElementById("sandbox"), {
    value: "sandbox",
    language: "plaintext",
    automaticLayout: true, // the important part
    lineNumbers: "on",
    roundedSelection: false,
    scrollBeyondLastLine: false,
    readOnly: false,
    theme: themeMode,
    minimap: { enabled: false }
  });

  if (getIdFromURI()) {
    loadSavedSource();
  } else {
    loadRandomLanguage();
  }
  sourceEditor.focus();
  sourceEditor.getModel().onDidChangeContent(function (e) {
    onChangeContent(sourceEditor, parseInt($selectLanguage.val()));
  });
});
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
  $statusLine = $("#status-line");
  $compilerOptions = $("#compiler-options");
  $commandLineArguments = $("#command-line-arguments");
  $commandLineArguments.attr("size", $commandLineArguments.attr("placeholder").length);
  $runBtn = $("#run-btn").click(function (e) { run(); stdoutEditor.focus(); document.getElementById("output").scrollIntoView(); });
  $selectLanguage = $("#select-language").change(function (e) {
    if (!isEditorDirty) {
      insertTemplate();
    } else {
      changeEditorLanguage();
    }
  });
  // ================================== //
  $('.dot').parent().click(function (event) {
    $(event.target).children('.dot')[0].hidden = true;
  });

  $(`input[name="theme-mode"][value="${themeMode}"]`).prop("checked", true);
  $("input[name=\"theme-mode\"]").on("change", function (e) {
    $('#site-settings').modal('hide');
    themeMode = e.target.value;
    localStorageSetItem("themeMode", themeMode);
    monaco.editor.setTheme(themeMode);
    sourceEditor.focus();
  });
});
function ShareUrl() {
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val(window.location.href).select();
  document.execCommand("copy");
  $temp.remove();
  showMess("Thông báo", "Địa chỉ trang web đã được copy vào ClipBoard, hãy dán vào nơi khác để chia sẻ cho mọi người");
}

function showMess(title, content) {
  $("#mess-modal #title").html(title);
  $("#mess-modal .content").html(content);
  $("#mess-modal").modal("show");
}