function ShareUrl() {
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val(window.location.href).select();
  document.execCommand("copy");
  $temp.remove();
  showMess("Thông báo", "Địa chỉ trang web đã được copy vào ClipBoard, hãy dán vào nơi khác để chia sẻ cho mọi người");
}

function showMess(title, content) {
  $("#Mess-modal #title").html(title);
  $("#Mess-modal .content").html(content);
  $("#Mess-modal").modal("show");
}