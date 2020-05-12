(function ($) {
  function HideResize() {
    let size = 8;
    let resizableV = $(".resizable.column");
    let resizableH = $(".resizable.row");
    if (resizableV.css('display') == 'none' || resizableV.css("visibility") == "hidden") {
      resizableV.prev().css("width", "");
      resizableV.next().css("width", "");
      return;
    } else {
      let leftSize = resizableV.data("size") || 50;
      resizableV.css("width", size + "px");
      resizableV.prev().css("width", "calc(" + leftSize + "% - " + size / 2 + "px)");
      resizableV.next().css("width", "calc(" + (100 - leftSize) + "% - " + size / 2 + "px)");
    }
    if (resizableH.css('display') == 'none' || resizableH.css("visibility") == "hidden") {
      resizableH.prev().css("height", "");
      resizableH.next().css("height", "");
      return;
    } else {
      let topSize = resizableH.data("size") || 50;
      resizableH.css("height", size + "px");
      resizableH.prev().css("height", "calc(" + topSize + "% - " + size / 2 + "px)");
      resizableH.next().css("height", "calc(" + (100 - topSize) + "% - " + size / 2 + "px)");
    }
  }
  $(window).resize(function () {
    HideResize();
  });
  $(document).ready(function () {
    let size = 8;
    let max = 70;
    let resizableV = $(".resizable.column");
    let resizableH = $(".resizable.row");
    resizableV.each(function (index) { dragElement(this, true); });
    resizableH.each(function (index) { dragElement(this, false); });
    HideResize();
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
          if (MonacoResize) MonacoResize();
        };
      }
    }
  });
})(window.jQuery);