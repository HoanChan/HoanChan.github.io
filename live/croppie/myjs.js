$(document).ready(function() {
    var $uploadCrop;

    function readFile(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            reader.onload = function(e) {
                $('.upload-demo').addClass('ready');
                $uploadCrop.croppie('bind', {
                    url: e.target.result
                }).then(function() {
                    console.log('jQuery bind complete');
                });

            }

            reader.readAsDataURL(input.files[0]);
        } else {
            alert("Xin lỗi, trình duyệt web của bạn không hỗ trợ FileReader API");
        }
    }

    $uploadCrop = $('#upload-demo').croppie({
        viewport: {
            width: 290,
            height: 290,
            type: 'circle'
        },
        enableExif: false
    });

    $('#upload').on('change', function() {
        readFile(this);
    });
    $('.upload-result').on('click', function(ev) {
        $uploadCrop.croppie('result', {
            type: 'canvas',
            size: {
                width: 400,
                height: 400
            }
        }).then(function(base64image) {
            var link = document.createElement('a');
            link.href = base64image.replace("image/png", "image/octet-stream"); // use realtive url 
            link.download = 'myImage.png';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        });
    });
});