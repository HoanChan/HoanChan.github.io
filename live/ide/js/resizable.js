(function ($) {
  $(document).ready(function () {
    let size = 8;
    let max = 70;
    let resizable = $(".resizable.column").css("width", size + "px");
    resizable.prev().css("width", "calc(50% - " + size / 2 + "px)");
    resizable.next().css("width", "calc(50% - " + size / 2 + "px)");
    resizable.each(function (index) { dragElement(this, true); });

    resizable = $(".resizable.row").css("height", size + "px");
    resizable.prev().css("height", "calc(50% - " + size / 2 + "px)");
    resizable.next().css("height", "calc(50% - " + size / 2 + "px)");
    resizable.each(function (index) { dragElement(this, false); });

    function dragElement(element, vertical) {
      element.onmousedown = function (e) {
        e = e || window.event;
        e.preventDefault();
        document.onmouseup = function () {/* stop moving when mouse button is released:*/
          document.onmouseup = null;
          document.onmousemove = null;
        };
        document.onmousemove = function (e) {// call a function whenever the cursor moves:
          e = e || window.event;
          e.preventDefault();
          let el = $(element);
          let rect = el.parent()[0].getBoundingClientRect();
          let x = e.clientX - rect.left; //x position within the element.
          let y = e.clientY - rect.top;  //y position within the element.
          if (vertical) {
            let leftWidth = Math.min(max, Math.max(100 - max, x / el.parent().width() * 100));
            let rightWidth = 100 - leftWidth;
            el.prev().css("width", "calc(" + leftWidth + "% - " + size / 2 + "px)");
            el.next().css("width", "calc(" + rightWidth + "% - " + size / 2 + "px)");
          }
          else {
            let topHeight = Math.min(max, Math.max(100 - max, y / el.parent().height() * 100));
            let botHeight = 100 - topHeight;
            el.prev().css("height", "calc(" + topHeight + "% - " + size / 2 + "px)");
            el.next().css("height", "calc(" + botHeight + "% - " + size / 2 + "px)");
          }
        };
      }
    }
  });
})(window.jQuery);