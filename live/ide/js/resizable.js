(function ($) {
  function getData(element, dataName, defaultValue, defaultUnit) {
    let sizeData = String(element.data(dataName));
    let size = parseInt(sizeData) || defaultValue;
    if (sizeData.endsWith("%")) { return { size, unit: "%" }; }
    if (sizeData.endsWith("px")) { return { size, unit: "px" }; }
    if (sizeData.endsWith("em")) { return { size, unit: "em" }; }
    if (sizeData.endsWith("rem")) { return { size, unit: "rem" }; }
    return { size, unit: defaultUnit };
  }
  function HideResize() {
    let size = 8;
    $(".resizable.column").each(function (index, element) {
      let resizableV = $(this);
      if (resizableV.css('display') == 'none' || resizableV.css("visibility") == "hidden") {
        resizableV.prev().css("width", "");
        resizableV.next().css("width", "");
        return;
      } else {
        let leftSize = getData(resizableV, "size", 50, "%");
        resizableV.css("width", size + "px");
        resizableV.prev().css("width", "calc(" + leftSize.size + leftSize.unit + " - " + size / 2 + "px)");
        resizableV.next().css("width", "calc(100% - " + leftSize.size + leftSize.unit + " - " + size / 2 + "px)");
      }
    });

    $(".resizable.row").each(function (index, element) {
      let resizableH = $(this);
      if (resizableH.css('display') == 'none' || resizableH.css("visibility") == "hidden") {
        resizableH.prev().css("height", "");
        resizableH.next().css("height", "");
        return;
      } else {
        let topSize = getData(resizableH, "size", 50, "%");
        resizableH.css("height", size + "px");
        resizableH.prev().css("height", "calc(" + topSize.size + topSize.unit + " - " + size / 2 + "px)");
        resizableH.next().css("height", "calc(100% - " + topSize.size + topSize.unit + " - " + size / 2 + "px)");
      }
    });
  }
  $(window).resize(function () {
    HideResize();
  });
  $(document).ready(function () {
    let size = 8;
    let resizableV = $(".resizable.column");
    let resizableH = $(".resizable.row");
    resizableV.each(function (index) { dragElement(this, true); });
    resizableH.each(function (index) { dragElement(this, false); });
    HideResize();
    function dragElement(element, vertical) {
      let max = getData($(element), "max", 100, "%");
      let min = getData($(element), "min", 0, "%");
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
          let maxS = max.size;
          if (max.unit == "px") maxS = max.size / rect.width * 100;
          if (max.unit == "em") maxS = (max.size * parseFloat(el.parent().css("font-size"))) / rect.width * 100;
          if (max.unit == "rem") maxS = (max.size * parseFloat($("body").css("font-size"))) / rect.width * 100;
          let minS = min.size;
          if (min.unit == "px") minS = min.size / rect.width * 100;
          if (min.unit == "em") minS = (min.size * parseFloat(el.parent().css("font-size"))) / rect.width * 100;
          if (min.unit == "rem") minS = (min.size * parseFloat($("body").css("font-size"))) / rect.width * 100;
          if (vertical) {
            let leftWidth = Math.min(maxS, Math.max(minS, x / el.parent().width() * 100));
            let rightWidth = 100 - leftWidth;
            el.prev().css("width", "calc(" + leftWidth + "% - " + size / 2 + "px)");
            el.next().css("width", "calc(" + rightWidth + "% - " + size / 2 + "px)");
          }
          else {
            let topHeight = Math.min(maxS, Math.max(minS, y / el.parent().height() * 100));
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