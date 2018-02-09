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
            //alert("Xin lỗi, trình duyệt web của bạn không hỗ trợ FileReader API");
        }
    }
    function copyCanvas(sourceCanvas)
    {
        var canvas = $('#mycanvas')[0];
        var ratio = sourceCanvas.width / sourceCanvas.height;
        var divRatio = canvas.parentElement.clientWidth / canvas.parentElement.clientHeight;
        if(ratio < divRatio)
        {
            canvas.height = canvas.parentElement.clientHeight;
            canvas.width = canvas.height * ratio;
        }else{
            canvas.width = canvas.parentElement.clientWidth;
            canvas.height = canvas.width / ratio;
        }
        //get the destination context
        var destinationCtx = canvas.getContext('2d');
        //draw the image
        destinationCtx.drawImage(sourceCanvas, 0, 0, canvas.width, canvas.height);
    }

    $uploadCrop = $('#upload-demo').on('update.croppie', function(ev, cropData) {
        $uploadCrop.croppie('result', {
            type: 'rawcanvas',
            size: {
                height: 800
            } // { width: 400, height: 400}
        }).then(function(canvas) {
            copyCanvas(canvas);
        });
    }).croppie({
        viewport: {
            width: 290,
            height: 290,
            type: 'square'
        },
        showZoomer: true,
        enableExif: false,
        enableOrientation: true,
        enableResize: true
    });

    $(".btnRotate").click(function() {
        $uploadCrop.croppie('rotate', parseInt($(this).data('rotate')));
    });

    $('#upload').on('change', function() {
        readFile(this);
    });

    $('.upload-result').on('click', function(ev) {
        $uploadCrop.croppie('result', {
            type: 'rawcanvas',
            size: {
                height: 800
            } // { width: 400, height: 400}
        }).then(function(canvas) {
            var realtiveUrl = canvas.toDataURL();
            //"image/png").replace("image/png", "image/octet-stream");
            //.replace(/^data:image\/[^;]/, 'data:application/octet-stream');
            var link = document.createElement('a');
            link.href = realtiveUrl; // use realtive url 
            link.download = 'myImage.png';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        });
    });


    // Filter //

    $("#Filters").on("change", ".Filter input", function() {
        var filterName = $(this).data("filter");
        var filterValue = $(this).val();
        $(this).find("~ .FilterValue").html(filterValue);
        Caman('#mycanvas', function() {
            var caman = this;
            caman.revert(false);
            $(".Filter input").each(function() {
                var name = $(this).data("filter");
                var value = parseFloat($(this).val());
                caman[name](value);
            })
            caman.render();
        });
    });
    var presetRendered = false;

    function applyPreset(element, presetName) {
        if (presetRendered) return;
        var button = $(element);
        var buttonHTML = button.html();
        button.html("Rendering...");
        presetRendered = true;
        Caman('#mycanvas', function() {
            //this.revert(false);
            if (presetName == 'reset') {
                this.reset();
                button.html(buttonHTML);
                presetRendered = false;
            } else {
                this[presetName]().render(function() {
                    button.html(buttonHTML);
                    return presetRendered = false
                });
            }
        });
    }

    $("#PresetFilters").on("click", "a", function() {
        applyPreset(this, $(this).data("preset"));
    })
});