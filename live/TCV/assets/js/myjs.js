function showText() {
    var args = arguments;
    var text = args[0];
    for (var key = 1; key < args.length; key++)
        text = text.replace(new RegExp('\\{' + (key - 1) + '\\}', 'g'), args[key]);
    return text;
}

function getJson(url) {
    var json = [];
    $.ajax({
        type: 'GET',
        url: url,
        dataType: 'json',
        success: function(data) {
            json = data;
        },
        async: false
    });
    return json;
}

function getText(url) {
    var text = "";
    $.ajax({
        type: 'GET',
        url: url,
        dataType: 'text',
        success: function(data) {
            text = data;
        },
        async: false
    });
    return text;
}

function getImage(divID, image) {
    var http = new XMLHttpRequest();
    var image_url = 'assets/img/' + divID + '/' + image;
    http.open('HEAD', image_url, false);
    http.send();
    return http.status != 404 ? image_url : 'assets/img/default-avatar.png';
}

function CreateHTML(data, divID) {
    if ($.isEmptyObject(data)) return "";
    var node = getText("profile.html");
    var text = '<h3 class="info-text">' + data.Text + '</h3>';
    data.Data.forEach(function(p) {
        var phone = "";
        p.Phone.forEach(function(aphone) {
            phone += showText(
                `<div class="info">
                    <i class="material-icons">phone</i>
                    <a href="tel:{0}" class="phone">{0}</a>
                </div>`, aphone);
        });
        var email = "";
        p.Email.forEach(function(aemail) {
            email += showText(
                `<div class="info">
                    <i class="material-icons">email</i>
                    <a href="mailto:{0}" class="email">{0}</a>
                </div>`, aemail);
        });
        text += showText(node, getImage(divID, p.Image), p.Call, p.Name, p.Birthday, phone, email);
    });
    return text;
}

function LoadData() {
    var args = arguments;
    var divID = args[0];
    var html = '';
    for (var key = 1; key < args.length; key++) {
        var data = getJson('assets/data/' + args[key] + '.json');
        html += CreateHTML(data, args[key]);
    }
    $('#' + divID).html(html);
}

function executeAsync(func) {
    setTimeout(func, 0);
}

$(document).ready(function() {
    executeAsync(LoadData('BGH', 'BGH'));
    executeAsync(LoadData('Toan', 'Toan'));
    executeAsync(LoadData('Ly-CN', 'Ly', 'CN'));
    executeAsync(LoadData('Hoa', 'Hoa'));
    executeAsync(LoadData('Sinh-Tin', 'Sinh', 'Tin'));
    executeAsync(LoadData('Van', 'Van'));
    executeAsync(LoadData('Anh', 'Anh'));
    executeAsync(LoadData('Su-Dia-CD', 'Su', 'Dia', 'CD'));
    executeAsync(LoadData('TD-QP', 'TD-QP'));
    // var data = getJson('assets/data/TCV2.json');
    // data.sort(function (a, b) {
    //     return a.B.localeCompare(b.B);
    // });
});