
var $selectLanguage;
var $compilerOptions;
var $commandLineArguments;
var $insertTemplateBtn;
var $runBtn;
var $navigationMessage;
var $about;
var $statusLine;

var fontSize = 14;

var messagesData;

var layoutConfig = {
    settings: {
        showPopoutIcon: false,
        reorderEnabled: true
    },
    dimensions: {
        borderWidth: 3,
        headerHeight: 22
    },
    content: [{
        type: "row",
        content: [{
            type: "component",
            componentName: "source",
            title: "SOURCE",
            isClosable: false,
            componentState: {
                readOnly: false
            }
        }, {
            type: "column",
            content: [{
                type: "stack",
                content: [{
                    type: "component",
                    componentName: "stdin",
                    title: "STDIN",
                    isClosable: false,
                    componentState: {
                        readOnly: false
                    }
                }]
            }, {
                type: "stack",
                content: [{
                    type: "component",
                    componentName: "stdout",
                    title: "STDOUT",
                    isClosable: false,
                    componentState: {
                        readOnly: true
                    }
                }, {
                    type: "component",
                    componentName: "stderr",
                    title: "STDERR",
                    isClosable: false,
                    componentState: {
                        readOnly: true
                    }
                }, {
                    type: "component",
                    componentName: "compile output",
                    title: "COMPILE OUTPUT",
                    isClosable: false,
                    componentState: {
                        readOnly: true
                    }
                }, {
                    type: "component",
                    componentName: "sandbox message",
                    title: "SANDBOX MESSAGE",
                    isClosable: false,
                    componentState: {
                        readOnly: true
                    }
                }]
            }]
        }]
    }]
};

$(document).ready(function () {
    console.log("Hey, Judge0 IDE is open-sourced: https://github.com/judge0/ide. Have fun!");

    $selectLanguage = $("#select-language");
    $selectLanguage.change(function (e) {
        if (!isEditorDirty) {
            insertTemplate();
        } else {
            changeEditorLanguage();
        }
    });

    $compilerOptions = $("#compiler-options");
    $commandLineArguments = $("#command-line-arguments");
    $commandLineArguments.attr("size", $commandLineArguments.attr("placeholder").length);

    $insertTemplateBtn = $("#insert-template-btn");
    $insertTemplateBtn.click(function (e) {
        if (isEditorDirty && confirm("Are you sure? Your current changes will be lost.")) {
            insertTemplate();
        }
    });

    $runBtn = $("#run-btn");
    $runBtn.click(function (e) {
        run();
    });

    $navigationMessage = $("#navigation-message span");
    $about = $("#about");

    $(`input[name="editor-mode"][value="${editorMode}"]`).prop("checked", true);
    $("input[name=\"editor-mode\"]").on("change", function (e) {
        $('#site-settings').modal('hide');

        editorMode = e.target.value;
        localStorageSetItem("editorMode", editorMode);

        resizeEditor(sourceEditor.getLayoutInfo());
        changeEditorMode();

        sourceEditor.focus();
    });

    $statusLine = $("#status-line");

    $("body").keydown(function (e) {
        var keyCode = e.keyCode || e.which;
        if (keyCode == 120) { // F9
            e.preventDefault();
            run();
        } else if (keyCode == 119) { // F8
            e.preventDefault();
            var url = prompt("Enter URL of Judge0 API:", apiUrl);
            if (url != null) {
                url = url.trim();
            }
            if (url != null && url != "") {
                apiUrl = url;
                localStorageSetItem("api-url", apiUrl);
                showApiUrl();
            }
        } else if (keyCode == 118) { // F7
            e.preventDefault();
            wait = !wait;
            localStorageSetItem("wait", wait);
            alert(`Submission wait is ${wait ? "ON. Enjoy" : "OFF"}.`);
        } else if (event.ctrlKey && keyCode == 83) { // Ctrl+S
            e.preventDefault();
            save();
        } else if (event.ctrlKey && keyCode == 107) { // Ctrl++
            e.preventDefault();
            fontSize += 1;
            editorsUpdateFontSize(fontSize);
        } else if (event.ctrlKey && keyCode == 109) { // Ctrl+-
            e.preventDefault();
            fontSize -= 1;
            editorsUpdateFontSize(fontSize);
        }
    });

    $("select.dropdown").dropdown();
    $(".ui.dropdown").dropdown();
    $(".ui.dropdown.site-links").dropdown({ action: "hide", on: "hover" });
    $(".ui.checkbox").checkbox();
    $(".message .close").on("click", function () {
        $(this).closest(".message").transition("fade");
    });

    showApiUrl();
    loadMessages();

    require(["vs/editor/editor.main", "monaco-vim", "monaco-emacs"], function (ignorable, MVim, MEmacs) {
        layout = new GoldenLayout(layoutConfig, $("#site-content"));

        MonacoVim = MVim;
        MonacoEmacs = MEmacs;

        layout.registerComponent("source", function (container, state) {
            sourceEditor = monaco.editor.create(container.getElement()[0], {
                automaticLayout: true,
                theme: "vs-dark",
                scrollBeyondLastLine: true,
                readOnly: state.readOnly,
                language: "cpp",
                minimap: {
                    enabled: false
                },
                rulers: [80, 120]
            });

            changeEditorMode();

            sourceEditor.getModel().onDidChangeContent(function (e) {
                currentLanguageId = parseInt($selectLanguage.val());
                isEditorDirty = sourceEditor.getValue() != sources[currentLanguageId];
            });

            sourceEditor.onDidLayoutChange(resizeEditor);
        });

        layout.registerComponent("stdin", function (container, state) {
            stdinEditor = monaco.editor.create(container.getElement()[0], {
                automaticLayout: true,
                theme: "vs-dark",
                scrollBeyondLastLine: false,
                readOnly: state.readOnly,
                language: "plaintext",
                minimap: {
                    enabled: false
                }
            });
        });

        layout.registerComponent("stdout", function (container, state) {
            stdoutEditor = monaco.editor.create(container.getElement()[0], {
                automaticLayout: true,
                theme: "vs-dark",
                scrollBeyondLastLine: false,
                readOnly: state.readOnly,
                language: "plaintext",
                minimap: {
                    enabled: false
                }
            });

            container.on("tab", function (tab) {
                tab.element.append("<span id=\"stdout-dot\" class=\"dot\" hidden></span>");
                tab.element.on("mousedown", function (e) {
                    e.target.closest(".lm_tab").children[3].hidden = true;
                });
            });
        });

        layout.registerComponent("stderr", function (container, state) {
            stderrEditor = monaco.editor.create(container.getElement()[0], {
                automaticLayout: true,
                theme: "vs-dark",
                scrollBeyondLastLine: false,
                readOnly: state.readOnly,
                language: "plaintext",
                minimap: {
                    enabled: false
                }
            });

            container.on("tab", function (tab) {
                tab.element.append("<span id=\"stderr-dot\" class=\"dot\" hidden></span>");
                tab.element.on("mousedown", function (e) {
                    e.target.closest(".lm_tab").children[3].hidden = true;
                });
            });
        });

        layout.registerComponent("compile output", function (container, state) {
            compileOutputEditor = monaco.editor.create(container.getElement()[0], {
                automaticLayout: true,
                theme: "vs-dark",
                scrollBeyondLastLine: false,
                readOnly: state.readOnly,
                language: "plaintext",
                minimap: {
                    enabled: false
                }
            });

            container.on("tab", function (tab) {
                tab.element.append("<span id=\"compile-output-dot\" class=\"dot\" hidden></span>");
                tab.element.on("mousedown", function (e) {
                    e.target.closest(".lm_tab").children[3].hidden = true;
                });
            });
        });

        layout.registerComponent("sandbox message", function (container, state) {
            sandboxMessageEditor = monaco.editor.create(container.getElement()[0], {
                automaticLayout: true,
                theme: "vs-dark",
                scrollBeyondLastLine: false,
                readOnly: state.readOnly,
                language: "plaintext",
                minimap: {
                    enabled: false
                }
            });

            container.on("tab", function (tab) {
                tab.element.append("<span id=\"sandbox-message-dot\" class=\"dot\" hidden></span>");
                tab.element.on("mousedown", function (e) {
                    e.target.closest(".lm_tab").children[3].hidden = true;
                });
            });
        });

        layout.on("initialised", function () {
            $(".monaco-editor")[0].appendChild($("#editor-status-line")[0]);
            if (getIdFromURI()) {
                loadSavedSource();
            } else {
                loadRandomLanguage();
            }
            $("#site-navigation").css("border-bottom", "1px solid black");
            sourceEditor.focus();
        });

        layout.init();
    });
});

$(window).resize(function () {
    layout.updateSize();
    showMessages();
});
function resizeEditor(layoutInfo) {
    if (editorMode != "normal") {
        var statusLineHeight = $("#editor-status-line").height();
        layoutInfo.height -= statusLineHeight;
        layoutInfo.contentHeight -= statusLineHeight;
    }
}

function disposeEditorModeObject() {
    try {
        editorModeObject.dispose();
        editorModeObject = null;
    } catch (ignorable) {
    }
}

function changeEditorMode() {
    disposeEditorModeObject();

    if (editorMode == "vim") {
        editorModeObject = MonacoVim.initVimMode(sourceEditor, $("#editor-status-line")[0]);
    } else if (editorMode == "emacs") {
        var statusNode = $("#editor-status-line")[0];
        editorModeObject = new MonacoEmacs.EmacsExtension(sourceEditor);
        editorModeObject.onDidMarkChange(function (e) {
            statusNode.textContent = e ? "Mark Set!" : "Mark Unset";
        });
        editorModeObject.onDidChangeKey(function (str) {
            statusNode.textContent = str;
        });
        editorModeObject.start();
    }
}

function resolveLanguageId(id) {
    id = parseInt(id);
    return languageIdTable[id] || id;
}

function resolveApiUrl(id) {
    id = parseInt(id);
    return languageApiUrlTable[id] || defaultUrl;
}

function editorsUpdateFontSize(fontSize) {
    sourceEditor.updateOptions({ fontSize: fontSize });
    stdinEditor.updateOptions({ fontSize: fontSize });
    stdoutEditor.updateOptions({ fontSize: fontSize });
    stderrEditor.updateOptions({ fontSize: fontSize });
    compileOutputEditor.updateOptions({ fontSize: fontSize });
    sandboxMessageEditor.updateOptions({ fontSize: fontSize });
}
//=========================================================================================================================================//

function showMessages() {
    var width = $about.offset().left - parseFloat($about.css("padding-left")) -
        $navigationMessage.parent().offset().left - parseFloat($navigationMessage.parent().css("padding-left")) - 5;

    if (width < 200 || messagesData === undefined) {
        return;
    }

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
        url: `messages.json?${Date.now()}`,
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

