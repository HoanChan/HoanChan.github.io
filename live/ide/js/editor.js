"use strict";
(function ($) {
  let Data = {};
  let SelectedProblemIndex = -1;
  let SelectedTestIndex = -1;
  let textEditor;

  function GetContent() {
    return textEditor.getData().replace(/>[\n\t ]+</g, "><");
  }

  function SetContent(htmlContent) {
    textEditor.setData(htmlContent.replace(/>[\n\t ]+</g, "><"));
  }

  function GetText() {
    return textEditor.editable().getText();
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

  function AddProblem(name, index) {
    let field = $(`<div class="field"></div>`).insertBefore($('#btnAddProblem'));
    let inputGroup = $(`<div class="ui right mini action input w-100"></div>`).appendTo(field);;
    let input = $(`<input type="text" value="${name}">`).appendTo(inputGroup);
    let deleteButton = $(`<button class="ui right teal icon button"><i class="minus icon"></i></button>`).appendTo(inputGroup);
    $(input).change(function (e) {
      e.preventDefault();
      Data[SelectedProblemIndex].Name = input.val();
    });

    $(input).click(function (e) {
      SelectedProblemIndex = index;
      SetContent(Data[index].Content);
      $('#txtTimeLimit').val(Data[index].TimeLimit);
      $('#txtMemoryLimit').val(Data[index].MemoryLimit);
      $('#btnAddTest').parent().find(".field").remove();
      for (let i = 0; i < Data[index].Tests.length; i++) {
        let element = Data[index].Tests[i];
        let test = AddTest(element.Name, i);
        if (i == 0) test.click();
      }
      $('#ProblemList').find('.icon.button').removeClass('red').addClass('teal');
      deleteButton.removeClass('teal').addClass('red');
    });

    $(deleteButton).click(function (e) {
      e.preventDefault();
      var thisIndex = Array.prototype.indexOf.call(field[0].parentNode.children, field[0]);
      Data.splice(thisIndex, 1);
      $(field).remove();
    });
    return input;
  }
  function AddTest(name, index) {
    let field = $(`<div class="field"></div>`).insertBefore($('#btnAddTest'));
    let inputGroup = $(`<div class="ui right mini action input w-100"></div>`).appendTo(field);;
    let input = $(`<input type="text" value="${name}">`).appendTo(inputGroup);
    let deleteButton = $(`<button class="ui right teal icon button"><i class="minus icon"></i></button>`).appendTo(inputGroup);

    $(input).change(function (e) {
      e.preventDefault();
      Data[SelectedProblemIndex].Tests[index].Name = input.val();
    }).click(function (e) {
      SelectedTestIndex = index;
      let test = Data[SelectedProblemIndex].Tests[index];
      $('#txtInput').val(test.Input);
      $('#txtOutput').val(test.Output);
      $('#TestList').find('.icon.button').removeClass('red').addClass('teal');
      deleteButton.removeClass('teal').addClass('red');
    });

    $(deleteButton).click(function (e) {
      e.preventDefault();
      var thisIndex = Array.prototype.indexOf.call(field[0].parentNode.children, field[0]);
      Data[SelectedProblemIndex].Tests.splice(thisIndex, 1);
      $(field).remove();
    });
    return input;
  }
  function showMess(title, content) {
    $("#site-modal #title").html(title);
    $("#site-modal .content").html(content);
    $("#site-modal").modal("show");
  }
  $(document).ready(function () {
    $('.tabular.menu .item').tab();
    $("select.dropdown").dropdown();
    $(".ui.dropdown").dropdown();
    $(".ui.dropdown.site-links").dropdown({ action: "hide", on: "hover" });
    $(".ui.checkbox").checkbox();
    $(".message .close").on("click", function () {
      $(this).closest(".message").transition("fade");
    });
    $('#btnOpen').click(async function (e) {
      let file = await selectFile(".json", false);
      let reader = new FileReader();
      reader.onload = function () {
        Data = JSON.parse(reader.result);
        $('#btnAddProblem').parent().find(".field").remove();
        for (let index = 0; index < Data.length; index++) {
          let element = Data[index];
          let pro = AddProblem(element.Name, index);
          if (index == 0) pro.click();
        }
      };
      reader.readAsText(file);
    });
    $('#btnAddProblem').click(function (e) {
      e.preventDefault();
      AddProblem('Problem', $(this).parent().children().length - 1).click();
    });

    $('#btnAddTest').click(function (e) {
      e.preventDefault();
      AddTest('Test', $(this).parent().children().length - 1).click();
    });

    $('#txtInput').change(function (e) {
      e.preventDefault();
      Data[SelectedProblemIndex].Tests[SelectedTestIndex].Input = $(this).val();
    });
    $('#txtOutput').change(function (e) {
      e.preventDefault();
      Data[SelectedProblemIndex].Tests[SelectedTestIndex].Output = $(this).val();
    });
    $('#txtTimeLimit').change(function (e) {
      e.preventDefault();
      Data[SelectedProblemIndex].TimeLimit = $(this).val();
    });
    $('#txtMemoryLimit').change(function (e) {
      e.preventDefault();
      Data[SelectedProblemIndex].MemoryLimit = $(this).val();
    });
    $('#btnRename').click(function (e) {
      e.preventDefault();
      let str = $('#txtRename').val();
      if (str == "") {
        $('#lblRenameError').html(`<ul class="list"><li>Nhập tên vào đã chứ</li></ul>`).show();
        return;
      }
      $('#lblRenameError').hide();
      for (let index = 0; index < Data[SelectedProblemIndex].Tests.length; index++) {
        let name = str + " " + (index + 1);
        Data[SelectedProblemIndex].Tests[index].Name = name;
        $('#TestList input:nth-child(' + index + ')').val(name);
      }

    });
    textEditor = $('#txtEdit').ckeditor(function () { }, options).editor;
    textEditor.on('change', function () {
      //$("#txtHTML").html(GetContent()).click(); // Gọi sự kiện Click, Chỉ cần bắt được sự kiện Click của txtHTML là được

      Data[SelectedProblemIndex].Content = GetContent();
    });
    window.MonacoResize = function () {
      textEditor.resize("100%", $("#editorContainer").height());
    };
  });
})(window.jQuery);