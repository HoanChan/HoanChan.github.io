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

function changeThemeMode() {
  if (themeMode == "vs") {
    document.getElementById('_theme').href = "https://golden-layout.com/assets/css/goldenlayout-light-theme.css";
  } else {
    document.getElementById('_theme').href = "https://golden-layout.com/files/latest/css/goldenlayout-dark-theme.css";
  }
  monaco.editor.setTheme(themeMode);
}