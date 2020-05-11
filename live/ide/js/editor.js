(function ($) {
  $(document).ready(function () {
    $('#btnAddProblem').click(function (e) {
      e.preventDefault();
      let field = $(`<div class="field"></div>`).insertBefore($(this));
      let inputGroup = $(`<div class="ui right mini action input w-100"></div>`).appendTo(field);;
      let input = $(`<input type="text" value="Problem">`).appendTo(inputGroup);
      let deleteButton = $(`<button class="ui right teal icon button"><i class="minus icon"></i></button>`).appendTo(inputGroup);
      $(input).change(function (e) {
        e.preventDefault();

      });
      $(deleteButton).click(function (e) {
        e.preventDefault();
        $(field).remove();
      });
    });

    $('#btnAddTest').click(function (e) {
      e.preventDefault();
      let field = $(`<div class="field"></div>`).insertBefore($(this));
      let inputGroup = $(`<div class="ui right mini action input w-100"></div>`).appendTo(field);;
      let input = $(`<input type="text" value="Test">`).appendTo(inputGroup);
      let deleteButton = $(`<button class="ui right teal icon button"><i class="minus icon"></i></button>`).appendTo(inputGroup);
      $(input).change(function (e) {
        e.preventDefault();

      });
      $(deleteButton).click(function (e) {
        e.preventDefault();
        $(field).remove();
      });
    });
  });
})(window.jQuery);