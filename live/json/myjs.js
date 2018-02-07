function getName(str) {
    var res = str.toLowerCase().split(" ");
    var first = res.pop();
    return first + res;
}

$(document).ready(function() {
    $('#btnRessult').click(function() {
        var data = JSON.parse($('#txtInput').val());
        data.Data.sort(function(a, b) {
            return getName(a.Name).localeCompare(getName(b.Name));
        });
        var result = JSON.stringify(data, null, 4)
                        .replace(/\s+]/g, "]")
                        .replace(/\[\s+/g,"[")
                        .replace(/\[\{/g,"[\n        {")
                        .replace(/\}\]/g,"}\n    ]");
        $('#txtInput').val(result)[0].select();
        document.execCommand("copy");
    });
});