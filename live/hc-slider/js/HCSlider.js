/// <reference path="TweenMax.js" />
/// <reference path="jquery.js" />
// sửa lại tween cho chạy bằng timer là 1 biến
// viết animation cho caption
//Global
window.fx = {
    version: '1.4.8',
    Effects3D: 48,
    Effects2D: 19,
};
// CSS3 Helper Function
(function ($) {
    $.fn.css3 = function (props) {
        var css = {};
        var prefixes = ['webkit', 'moz', 'ms', 'o'];

        for (var prop in props) {
            // Add the vendor specific versions
            for (var i = 0; i < prefixes.length; i++)
                css['-' + prefixes[i] + '-' + prop] = props[prop];

            // Add the actual version	
            css[prop] = props[prop];
        }

        this.css(css);
        return this;
    };
})(window.jQuery);
// HC Slider main class
(function ($) {
    fx.HC = function (target, opts) {
        this.element = $(target);
        CSSPlugin.defaultTransformPerspective = 1000;
        this.transitions = [];
        this.transitions2D = [];
        this.transitions3D = [];
        for (var afx in fx.HC.transitions){
            var t = new fx.HC.transitions[afx](this);
            if(t.options.requires3d)
                this.transitions3D.push(afx)
            else
                this.transitions2D.push(afx);
            this.transitions.push(afx);
        }
        this.options = $.extend({
            autoplay: true,
            transitions: this.transitions,
            delay: 4,
            shadow: true,
            pagination: true,
            controls: true,
            captions: false,
            barTimer: false,
            circleTimer: false,
            width: null,
            height: null,
            onTransitionEnd: null,
            sliderMode: 'normal', // normal | power
        }, opts);

        // Set the height/width if given [EXPERIMENTAL!]
        this.height = this.options.height ? this.options.height : null;
        this.width = this.options.width ? this.options.width : null;

        // Filter out non compatible transitions
        var newTrans = [];
        $(this.options.transitions).each(function (index, tran) {
            var t = new fx.HC.transitions[tran](this),
        		compatible = true;

            if (t.options.requires3d && !fx.HC.browser.supports3d)
                compatible = false;

            if (t.options.compatibilityCheck)
                compatible = t.options.compatibilityCheck();

            if (compatible)
                newTrans.push(tran);
        });

        this.options.transitions = newTrans;
        
        this.container = $('<div id="HCSlider"></div>').appendTo(this.element);
        if(this.options.shadow) this.shadow = $('<div id="shadow"></div>').appendTo(this.container);
        this.surface = $('<div id="surface"></div>').appendTo(this.container);

        // Listen for click events as we may want to follow a link
        this.container.bind('click', function (event) {
            if ($(event.target).hasClass('hasLink'))
                window.location = $(event.target).data('href');
        });

        this.imageContainer = $('<div id="images" class="loading"></div>').css({
            'position': 'relative',
            //'overflow': 'hidden',
            'overflow': 'visible',
            'min-height': '100px'
        }).appendTo(this.surface);

        // If the height/width is already set then resize the container
        if (this.width && this.height) {
            this.imageContainer.css({
                width: this.width + 'px',
                height: this.height + 'px'
            });
        }

        // Create the placeholders for the current and next image
        this.image1 = $('<div class="image1" style="height: 100%; width: 100%"></div>').appendTo(this.imageContainer);
        this.image2 = $('<div class="image2" style="height: 100%; width: 100%"></div>').appendTo(this.imageContainer);

        $(this.image1).add(this.image2).css({
            'position': 'absolute',
            'top': '0px',
            'left': '0px'
        });

        this.images = new Array();
        this.imageLoadedCount = 0;
        this.currentImageIndex = 0;
        this.nextImageIndex = 1;
        var _this = this;

        // Get a list of the images to use
        if (this.options.sliderMode === 'normal') {
            // <img /> | <a><img /></a>
            this.element.find('img, a img').each(function (index, found_img) {
                var imgClone = found_img.cloneNode(false),
                    link = $(found_img).parent();
                // If this img is directly inside a link then save the link for later use
                if (link.is('a')) $(imgClone).data('href', link.attr('href'));
                _this.images.push(imgClone);
                // Remove the images from the DOM
                $(found_img).remove();
            });
        }
        else {// power
            //<div class="hc-slide">
            //    <img class="hc-bg" src="" />
	        //    <img class="hc-obj" hcdata="" src="" />
            //    <h1 class="hc-obj" hcdata=""></h1>
            //    <p class="hc-obj" hcdata=""></p>
            //</div>
            this.element.find('.hc-slide').each(function (index, found_slide) {
                var found_img = $(found_slide).find('img.hc-bg, a img.hc-bg').get(0);
                var imgClone = found_img.cloneNode(false),
                    link = $(found_img).parent();
                if (link.is('a')) $(imgClone).data('href', link.attr('href'));
                $(imgClone).append($(found_slide).find('.hc-obj'));
                _this.images.push(imgClone);
                $(found_slide).remove();
            });
        }
        // Load the images afterwards as IE seems to load images synchronously
        for (var i = 0; i < this.images.length; i++) {
            var image = new Image();
            image.onload = function () {
                _this.imageLoadedCount++;

                _this.width = _this.width ? _this.width : this.width;
                _this.height = _this.height ? _this.height : this.height;

                if (_this.imageLoadedCount >= _this.images.length) {
                    _this.setupImages();
                    _this.finishedLoading();
                }
            };

            // Load the image to ensure its cached by the browser
            image.src = this.images[i].src;
        }
    };
    fx.HC.prototype = {
        contructor: fx.HC,
        disableMousePause: false,
        next: function (trans, opts) {
            opts = opts || {};
            //opts.direction = 'left';
            //if (this.timer) clearTimeout(this.timer);
            this.showImage(this.currentImageIndex + 1, trans, opts);
        },
        prev: function (trans, opts) {
            opts = opts || {};
            //opts.direction = 'right';
            //if (this.timer) clearTimeout(this.timer);
            this.showImage(this.currentImageIndex - 1, trans, opts);
        },
        showImage: function (index, trans, opts) {
            this.resetTimer();
            this.setNextIndex(index);
            this.setupImages();
            this.transition(trans, opts);
        },
        finishedLoading: function () {
            var _this = this;
            this.container.css({
                width: this.width + 'px',
                height: this.height + 'px'
            });

            this.imageContainer.removeClass('loading');
            this.initPagination();
            this.resizeContainer();
            this.clickable = true;
            this.initControls();
            this.initCaption();
            this.initTimer();
            this.autoPlay();
            // Handle
            this.surface.bind('swipeLeft', function (event) {
                _this.next(null, {});// direction: 'left' });
            }).bind('swipeRight', function (event) {
                _this.prev(null, {});// direction: 'right' });
            }).bind('mouseenter', function (event) {
                _this.enter();
            }).bind('mouseleave', function (event) {
                _this.leave();
            });
        },
        resizeContainer: function () {
            $(this.imageContainer).css({
                width: this.width + 'px',
                height: this.height + 'px'
            });

            $(this.image1).css({
                width: this.width + 'px',
                height: this.height + 'px'
            });

            $(this.image2).css({
                width: this.width + 'px',
                height: this.height + 'px'
            });

            this.container.css({
                width: this.width + 'px',
                height: this.height + 'px' //+ (this.options.pagination ? this.pagination.height() : 0)
            });
        },
        setupImages: function () {
            var img1 = this.getImage(this.currentImageIndex),
				css1 = {
				    'background-image': 'url("' + img1.src + '")',
				    'z-index': 101,
				    'cursor': 'auto'
				};

            // Does this image have an associated link?
            if ($(img1).data('href')) {
                css1.cursor = 'pointer';
                this.image1.addClass('hasLink');
                this.image1.data('href', $(img1).data('href'));
            }
            else {
                this.image1.removeClass('hasLink');
                this.image1.data('href', null);
            }

            this.image1.css(css1).children().remove();

            this.image2.css({
                'background-image': 'url("' + this.getImage(this.nextImageIndex).src + '")',
                'z-index': 100
            }).show(0);
        },
        transition: function (transition, opts) {
            // Allow a transition to be picked from ALL available transitions (not just the reduced set)
            if (transition == undefined || !fx.HC.transitions[transition]) {
                // Pick a transition at random from the (possibly reduced set of) transitions
                var index = Math.floor(Math.random() * (this.options.transitions.length));
                transition = this.options.transitions[index];
            }

            var tran = null;

            try {
                tran = new fx.HC.transitions[transition](this, $.extend(this.options[transition] ? this.options[transition] : {}, opts));
            }
            catch (e) {
                // If an invalid transition has been provided then use the fallback (default is to just switch the image)
                tran = new fx.HC.transition(this, { fallback: true });
            }
            if (this.options.sliderMode === 'normal')
                this.hideInfo(tran);
            else
                this.powerAnimation(tran);
            this.currentImageIndex = this.nextImageIndex;
            this.setNextIndex(this.currentImageIndex + 1);
        },
        powerAnimation: function (tran) {
            this.clickable = false;
            var _this = this;
            $(this.getImage(this.currentImageIndex)).children().each(function (index, obj) {
                var aniObj = obj.cloneNode(false);
                $(aniObj).appendTo(_this.surface);
                var animationData = $(aniObj).attr('hcdata');
                var aniIn = _this.animationDataToObject(animationData, 'in');
                var aniOut = _this.animationDataToObject(animationData, 'out');
                aniIn.css.onComplete = function () {
                    _this.updateCaption();
                    _this.updatePagination();
                    _this.disableMousePause = true;
                    tran.run();
                };
                TweenMax.to(aniObj, aniIn.duration, aniIn.css);
            });
        },
        animationDataToObject: function (animationData, rightText) {
            var result = new Object();
            result.css = {};
            var attributes = animationData.split(';');
            for (var i = 0; i < attributes.length; i++) {
                var entry = attributes[i].split(':');
                var Key = entry[0].trim().toLowerCase();
                if (Key.substring(Key.length - rightText.length, Key.length) == rightText.toLowerCase())
                    if (Key.substring(0, Key.length - rightText.length) == 'duration')
                        result.duration =  parseInt(entry[1].trim());
                    else
                        result.css[Key.substring(0, Key.length - rightText.length)] = entry[1].trim();
            }
            return result;
        },
        hideInfo: function (tran) {
            this.clickable = false;
            var _this = this;
            var tw = function () { };
            if (this.options.captions) {
                tw.cap = TweenMax.to(this.captionBar, 0.5, {
                    rotationX: 270,
                    onComplete: function () {
                        _this.updateCaption();
                        _this.updatePagination();
                        _this.disableMousePause = true;
                        tran.run();
                    },
                    onReverseComplete: function () {
                        _this.clickable = true;
                        _this.disableMousePause = false;
                        _this.autoPlay();
                        if (_this.options.onTransitionEnd) _this.options.onTransitionEnd(_this); 
                    }
                });
            }
            else
            {
                _this.updatePagination();
                _this.disableMousePause = true;
                tran.run();
            }
            if (this.options.controls) {
                tw.nextbtn = TweenMax.to(this.nextButton, 0.5, { width: 0, right: "+=" + this.nextButton.width() });
                tw.prevbtn = TweenMax.to(this.prevButton, 0.5, { width: 0, left: "+=" + this.prevButton.width() });
            }
            if(this.options.pagination)
                tw.paginationBar = TweenMax.to([this.pagination, this.circleTimer], 0.5, { autoAlpha: 0 });
            tran.options.after = function () {
                if(tw.cap) 
                    tw.cap.reversed(0.5);
                else{
                    _this.clickable = true;
                    _this.disableMousePause = false;
                    _this.autoPlay();
                    if (_this.options.onTransitionEnd) _this.options.onTransitionEnd(_this);
                }
                if(tw.nextbtn) tw.nextbtn.reversed(0.5);
                if (tw.prevbtn) tw.prevbtn.reversed(0.5);
                if (tw.paginationBar) tw.paginationBar.reversed(0.5);
            };
        },
        enter: function () { },
        leave: function () { },
        autoPlay: function () {
            if (this.options.autoplay) {
                var _this = this;
                //=== Bar Timer ===//
                var glow = TweenMax.to(this.barTimer.timerGlow, this.options.delay, { ease: Linear.easeNone, left: this.barTimer.width() - this.barTimer.timerGlow.width() });
                var bar = TweenMax.to(this.barTimer.timerBar, this.options.delay, {
                    ease: Linear.easeNone, width: this.barTimer.width() - this.barTimer.timerGlow.height() / 2,
                    onComplete: function () {
                        _this.showImage();
                        this.enter = function () { };
                        this.leave = function () { };
                    },
                    onUpdate: this.drawCircle(),
                });
                this.enter = function () { if (!_this.disableMousePause) { bar.pause(); glow.pause(); } };
                this.leave = function () { if (!_this.disableMousePause) { bar.resume(); glow.resume(); } };
            }
        },
        drawCircle: function () {
            var _this = this;
            return this.options.circleTimer ? function () {
                var per = _this.barTimer.timerBar.width() / (_this.barTimer.width() - _this.barTimer.timerGlow.height() / 2);
                var canvas = _this.circleTimer.timerStroke.get(0);
                var context = canvas.getContext("2d");
                context.clearRect(0, 0, canvas.width, canvas.height);
                context.lineWidth = canvas.height / 3;
                context.strokeStyle = 'gray';
                context.beginPath();
                context.arc(canvas.width / 2, canvas.height / 2, canvas.height / 6, -Math.PI / 2, per * 2 * Math.PI - Math.PI / 2);
                context.stroke();
            } : function () { };
        },
        resetTimer: function () {
            //TweenMax.killAll(false, true, true);
            if (this.options.barTimer) {
                TweenMax.to(this.barTimer.timerGlow, 0.5, { ease: Linear.easeNone, left: -this.barTimer.timerGlow.width() });
                TweenMax.to(this.barTimer.timerBar, 0.5, { ease: Linear.easeNone, width: 0, onUpdate: this.drawCircle() });
            }
        },
        initTimer: function () {
            var _this = this;
            if (this.options.barTimer) {
                this.barTimer = $('<div id="barTimer"></div>');
                this.barTimer.timerGlow = $('<div id="timerGlow" />').appendTo(this.barTimer);
                this.barTimer.timerBar = $('<div id="timerBar" />').appendTo(this.barTimer);
                this.barTimer.appendTo(this.surface);
            }
            if (this.options.circleTimer) {
                this.circleTimer = $('<div id="circleTimer" class="clickable"></div>').click(function () {
                    _this.disableMousePause = _this.disableMousePause === true ? false : true;
                });
                this.circleTimer.timerStroke = $('<canvas id="timerStroke" />').appendTo(this.circleTimer);
                this.circleTimer.timerDot = $('<div id="timerDot" />').appendTo(this.circleTimer);
                this.circleTimer.appendTo(this.surface);
                var canvas = this.circleTimer.timerStroke.get(0);
                canvas.setAttribute('width', this.circleTimer.width());
                canvas.setAttribute('height', this.circleTimer.height());
            }
        },
        initPagination: function () {
            // Should we setup a pagination view?
            if (this.options.pagination) {
                // TODO: Attach to touch events if appropriate
                this.pagination = $('<ul id="pagination"></ul>');
                var _this = this;
                this.pagination.bind('click', function (event) {
                    event.preventDefault();
                    if (_this.clickable) {
                        _this.disableMousePause = true;
                        if (_this.timer) clearTimeout(_this.timer);
                        _this.showImage($(event.target).data('index'));
                    }
                });

                var thumb = $('<div id="thumb"></div>')
                var thumbImage = $('<div id="thumbImage"/>').appendTo(thumb);
                var thumbFrame = $('<div id="thumbFrame"/>').appendTo(thumb);
                TweenMax.set(thumb, { autoAlpha: 0 });
                this.surface.append(thumb);

                $(this.images).each(function (index, image) {
                    var li = $('<li data-index="' + index + '" class="clickable">' + (index + 1) + '</li>')
                        .bind('mouseenter', function (event) {
                            thumbImage.css({
                                'background-image': 'url("' + image.src + '")',
                            });
                            thumb.css({ left: _this.pagination.position().left + $(this).position().left + $(this).outerWidth(true) / 2 - thumb.outerWidth(true) / 2 });
                            TweenMax.to(thumb, 0.2, { autoAlpha: 1 });
                        }).bind('mouseleave', function (event) {
                            TweenMax.to(thumb, 0.2,{ autoAlpha: 0 });
                        });

                    _this.pagination.append(li);
                    if (index == 0)
                        li.css('margin-left', 0).addClass('current');
                });
                this.surface.append(this.pagination);
                if (this.pagination.position().top > this.surface.position().top) {
                    thumb.addClass('up').css({
                        left: this.pagination.position().left,
                        top: this.pagination.position().top + this.pagination.outerHeight(true) / 2 - thumb.outerHeight(true) - this.pagination.find('li').first().height() / 2
                    });
                }
                else {
                    thumb.addClass('bottom').css({
                        left: this.pagination.position().left,
                        top: this.pagination.position().top + this.pagination.outerHeight(true) / 2 + this.pagination.find('li').first().height() / 2
                    });
                }
                this.updatePagination();
            }
        },
        updatePagination: function () {
            if (this.options.pagination && this.pagination) {
                this.pagination.find('li.current').removeClass('current');
                $(this.pagination.find('li')[this.currentImageIndex]).addClass('current');
            }
        },
        initControls: function () {
            if (this.options.controls) {
                var _this = this;
                this.nextButton = $('<a id="next" class="clickable" href="#" />').appendTo(this.surface).bind('click', function (event) {
                    event.preventDefault();
                    if (_this.clickable) {
                        _this.disableMousePause = true;
                        _this.next();
                    }
                });
                this.prevButton = $('<a id="prev" class="clickable" href="#" />').appendTo(this.surface).bind('click', function (event) {
                    event.preventDefault();
                    if (_this.clickable) {
                        _this.disableMousePause = true;
                        _this.prev();
                    }
                });
            }
        },
        initCaption: function () {
            // Should we use captions?
            if (this.options.captions) {
                this.captionBar = $('<div id="caption"></div>').appendTo(this.surface);
                this.updateCaption();
            }
        },
        updateCaption: function () {
            var str = $(this.getImage(this.currentImageIndex)).attr('title');
            if (this.options.captions && this.captionBar) {
                if (str !== "")
                    this.captionBar.html(str);

                this.captionBar.css('opacity', str === "" ? 0 : 1);
            }
        },
        getImage: function (index) {
            index = index % this.images.length;

            return this.images[index];
        },
        setNextIndex: function (nextIndex) {
            if (nextIndex == undefined)
                nextIndex = this.currentImageIndex + 1;

            this.nextImageIndex = nextIndex;

            if (this.nextImageIndex > this.images.length - 1)
                this.nextImageIndex = 0;

            if (this.nextImageIndex < 0)
                this.nextImageIndex = this.images.length - 1;
        },
        increment: function () {
            this.currentImageIndex++;
            if (this.currentImageIndex > this.images.length - 1)
                this.currentImageIndex = 0;
        }
    };
})(window.jQuery);
// HC Browser helper Funtions
(function ($) {
    fx.HC.browser = {
        init: function () {
            // Have we already been initialised?
            if (fx.HC.browser.supportsTransitions !== undefined)
                return;

            var div = document.createElement('div'),
				prefixes = ['-webkit', '-moz', '-o', '-ms'],
				domPrefixes = ['Webkit', 'Moz', 'O', 'Ms'];

            // Does the current browser support CSS Transitions?
            if (window.Modernizr && Modernizr.csstransitions !== undefined)
                fx.HC.browser.supportsTransitions = Modernizr.csstransitions;
            else {
                fx.HC.browser.supportsTransitions = this.supportsCSSProperty('Transition');
            }

            // Does the current browser support 3D CSS Transforms?
            if (window.Modernizr && Modernizr.csstransforms3d !== undefined)
                fx.HC.browser.supports3d = Modernizr.csstransforms3d;
            else {
                // Custom detection when Modernizr isn't available
                fx.HC.browser.supports3d = this.supportsCSSProperty("Perspective");

                if (fx.HC.browser.supports3d && 'webkitPerspective' in $('body').get(0).style) {
                    // Double check with a media query (similar to how Modernizr does this)
                    var div3D = $('<div id="csstransform3d"></div>');
                    var mq = $('<style media="(transform-3d), (' + prefixes.join('-transform-3d),(') + '-transform-3d)">div#csstransform3d { position: absolute; left: 9px }</style>');

                    $('body').append(div3D);
                    $('head').append(mq);

                    fx.HC.browser.supports3d = div3D.get(0).offsetLeft == 9;

                    div3D.remove();
                    mq.remove();
                }
            }

        },
        supportsCSSProperty: function (prop) {
            var div = document.createElement('div'),
				prefixes = ['-webkit', '-moz', '-o', '-ms'],
				domPrefixes = ['Webkit', 'Moz', 'O', 'Ms'];

            var support = false;
            for (var i = 0; i < domPrefixes.length; i++) {
                if (domPrefixes[i] + prop in div.style)
                    support = support || true;
            }

            return support;
        },
        translateX: function (len) {
            return fx.HC.browser.translate(len, 0, 0);
        },
        translateY: function (len) {
            return fx.HC.browser.translate(0, len, 0);
        },
        translateZ: function (len) {
            return fx.HC.browser.translate(0, 0, len);
        },
        translate: function (x, y, z) {
            x = (x != undefined) ? x : 0;
            y = (y != undefined) ? y : 0;
            z = (z != undefined) ? z : 0;

            return 'translate' + (fx.HC.browser.supports3d ? '3d(' : '(') + x + 'px,' + y + (fx.HC.browser.supports3d ? 'px,' + z + 'px)' : 'px)');
        },
        scale: function (x, y, z) {
            x = (x != undefined) ? x : 0;
            y = (y != undefined) ? y : 0;
            z = (z != undefined) ? z : 0;

            return 'scale' + (fx.HC.browser.supports3d ? '3d(' : '(') + x + ',' + y + (fx.HC.browser.supports3d ? ',' + z + ')' : ')');
        },
        rotateX: function (deg) {
            return fx.HC.browser.rotate('x', deg);
        },
        rotateY: function (deg) {
            return fx.HC.browser.rotate('y', deg);
        },
        rotateZ: function (deg) {
            return fx.HC.browser.rotate('z', deg);
        },
        rotate: function (axis, deg) {
            if (!axis in { 'x': '', 'y': '', 'z': '' })
                axis = 'z';

            deg = (deg != undefined) ? deg : 0;

            if (fx.HC.browser.supports3d)
                return 'rotate3d(' + (axis == 'x' ? '1' : '0') + ', ' + (axis == 'y' ? '1' : '0') + ', ' + (axis == 'z' ? '1' : '0') + ', ' + deg + 'deg)';
            else {
                if (axis == 'z')
                    return 'rotate(' + deg + 'deg)';
                else
                    return '';
            }
        }
    };

    $(function () {
        // To continue to work with legacy code, ensure that fx.HC.browser is initialised on document ready at the latest
        fx.HC.browser.init();
    });
})(window.jQuery);
// HC Transition interface
(function ($) {

    fx.HC.transition = function (aHC, opts) {
        this.slider = aHC;
        this.options = $.extend({
            fallback: false,
            requires3d: false,
            effectMode: 'out',
            after: function () {
                // Default callback for after the transition has completed
            }
        }, opts);
        // We need to ensure transitions degrade gracefully if the transition is unsupported or not loaded
        if ((this.options.requires3d && !fx.HC.browser.supports3d) || !fx.HC.browser.supportsTransitions || this.options.fallback === true) {
            var _this = this;

            this.options.after = undefined;

            this.options.setup = function () {
                _this.fallbackSetup();
            };

            this.options.execute = function () {
                _this.fallbackExecute();
            };
        }
    };

    fx.HC.transition.prototype = {
        constructor: fx.HC.transition,
        hasFinished: false, // This is a lock to ensure that the HCTransitionEnd event is only fired once per transition
        run: function () {
            this.slider.imageContainer.css('overflow', this.options.requires3d ? 'visible' : 'hidden');
            if (this.options.setup !== undefined) this.options.setup.call(this);
            if (this.options.effectMode === 'out') this.slider.image1.css({ 'background-image': 'none' });
            if (this.options.execute !== undefined) this.options.execute.call(this);
        },
        finished: function () {

            if (this.hasFinished)
                return;

            this.hasFinished = true;

            this.slider.setupImages();

            if (this.options.after)
                this.options.after.call(this);
        },
        fallbackSetup: function () {

        },
        fallbackExecute: function () {
            this.finished();
        }
    };

    fx.HC.transitions = {};
})(window.jQuery);
// HC transition Base Object for 3D transition effects
(function ($) {
    fx.HC.transition_base = function (aHC, opts) {
        return new fx.HC.transition(aHC, $.extend({
            columns: 7,
            rows: 7,
            forceSquare: false,
            perspective: 1000,
            setup: function () {

                this.slider.image1.css3({
                    'perspective': this.options.perspective,
                    'perspective-origin': '50% 50%'
                });

                var imgWidth = this.slider.image1.width(),
					imgHeight = this.slider.image1.height();

                var colWidth = imgWidth / this.options.columns,
                	rowHeight = imgHeight / this.options.rows;

                if (this.options.forceSquare) {
                    this.options.rows = Math.floor(imgHeight / colWidth);
                    rowHeight = imgHeight / this.options.rows;
                }
                var fragment = document.createDocumentFragment();
                for (var i = 0; i < this.options.columns; i++) {
                    for (var j = 0; j < this.options.rows; j++) {
                        var thisColWidth = Math.ceil(colWidth + 0.5),      // Add 0.5 to round up the number when browser display
                            thisRowHeight = Math.ceil(rowHeight + 0.5),    // eg: 3.24 + 0.5 = 3.74 when display, it locate at 4
                            totalLeft = Math.ceil(colWidth * i),
                            totalTop = Math.ceil(rowHeight * j);
                        var tile = $('<div class="tile tile-' + i + '-' + j + '"></div>').css({
                            width: thisColWidth + 'px',
                            height: thisRowHeight + 'px',
                            position: 'absolute',
                            top: totalTop + 'px',
                            left: totalLeft + 'px'
                        });

                        this.options.renderTile.call(this, tile, i, j, thisColWidth, thisRowHeight, totalLeft, totalTop);

                        fragment.appendChild(tile.get(0));
                    }
                }

                // Append the fragement to the surface
                this.slider.image1.get(0).appendChild(fragment);
            },
            execute: function () {

            },
            renderTile: function (elem, colIndex, rowIndex, colWidth, rowHeight, leftOffset, topOffset) {

            }
        }, opts));
    };
})(window.jQuery);
//=====================================================[ Tiles 3D Effects ]=====================================================//
(function ($) {
    fx.HC.transitions.Tiles3DLeftTopLeft = function (aHC, opts) {
        return new fx.HC.transition_base(aHC, $.extend({
            requires3d: true,
            forceSquare: true,
            columns: 5, // bug with 7 and 9 >"<
            //rows: 1,
            disperseFactor: 10,
            scaleFactor: 0.8,
            duration: 1.5,
            delayBetweenBarsX: 0.2,
            delayBetweenBarsY: 0.15,
            thickness: 15,
            nextImgPos: 'back left',//'back left' 'back right' 'back top' 'back bot' 'left' 'right' 'top' 'bot' 'top bot' 'left right'
            ease: Back.easeInOut,
            renderTile: function (elem, colIndex, rowIndex, colWidth, rowHeight, leftOffset, topOffset) {
                var arrPos = this.options.nextImgPos.split(' ');
                if ($.inArray('back', arrPos) < 0) {
                    if ($.inArray('left', arrPos) >= 0 ||
                        $.inArray('right', arrPos) >= 0) this.options.thickness = colWidth;
                    if ($.inArray('top', arrPos) >= 0 ||
                        $.inArray('bot', arrPos) >= 0) this.options.thickness = rowHeight;
                }

                var haveImage = {
                    'background-image': this.slider.image2.css('background-image'),
                    'background-position': '-' + leftOffset + 'px -' + topOffset + 'px',
                    'background-repeat': 'no-repeat',
                    'z-index': 200
                };

                var haveNoImage = {
                    'background-image': '',
                    background: '#222',
                    'z-index': 190
                }

                var front = $('<div/>').css({
                    width: colWidth + 'px',
                    height: rowHeight + 'px',
                    position: 'absolute',
                    top: '0px',
                    left: '0px',
                    'z-index': 200,
                    'background-image': this.slider.image1.css('background-image'),
                    'background-position': '-' + leftOffset + 'px -' + topOffset + 'px',
                    'background-repeat': 'no-repeat',
                }).css3({
                    'transform': fx.HC.browser.translateZ(this.options.thickness / 2),
                    'backface-visibility': 'hidden'
                });

                var bonus = $.inArray('up', arrPos) >= 0 ||
                            $.inArray('down', arrPos) >= 0 ?
                            ' ' + fx.HC.browser.rotateZ(180) + ' ' : ' ';
                var back = $(front.get(0).cloneNode(false)).css3({
                    'transform': fx.HC.browser.rotateY(180) + bonus + fx.HC.browser.translateZ(this.options.thickness / 2),
                });

                var top = $('<div/>').css({
                    width: colWidth + 'px',
                    height: this.options.thickness + 'px',
                    position: 'absolute',
                    top: -this.options.thickness / 2 + 'px',
                    left: '0px',
                }).css3({
                    'transform': fx.HC.browser.rotateX(90),
                    'backface-visibility': 'hidden'
                });

                var bot = $(top.get(0).cloneNode(false)).css({
                    top: rowHeight - this.options.thickness / 2 - 1 + 'px'
                }).css3({
                    'transform': fx.HC.browser.rotateX(-90)
                });
                var left = $(top.get(0).cloneNode(false)).css({
                    width: this.options.thickness + 'px',
                    height: rowHeight + 'px',
                    top: '0px',
                    left: -this.options.thickness / 2 + 'px',
                }).css3({
                    'transform': fx.HC.browser.rotateY(-90)
                });

                var right = $(left.get(0).cloneNode(false)).css({
                    left: colWidth - this.options.thickness / 2 - 1 + 'px'
                }).css3({
                    'transform': fx.HC.browser.rotateY(90)
                });

                if ($.inArray('back', arrPos) >= 0) back.css(haveImage); else back.css(haveNoImage);
                if ($.inArray('top', arrPos) >= 0) top.css(haveImage); else top.css(haveNoImage);
                if ($.inArray('bot', arrPos) >= 0) bot.css(haveImage); else bot.css(haveNoImage);
                if ($.inArray('back', arrPos) < 0 && $.inArray('left', arrPos) >= 0) left.css(haveImage); else left.css(haveNoImage);
                if ($.inArray('back', arrPos) < 0 && $.inArray('right', arrPos) >= 0) right.css(haveImage); else right.css(haveNoImage);

                $(elem).css({
                    'z-index': (colIndex > this.options.columns / 2 ? 500 - colIndex : 500) + (rowIndex > this.options.rows / 2 ? 500 - rowIndex : 500) // Fix for Chrome to ensure that the z-index layering is correct!
                }).css3({
                    'transform-style': 'preserve-3d',
                    'transform': fx.HC.browser.translateZ(-this.options.thickness / 2),
                }).append(front).append(back).append(left).append(right).append(top).append(bot);
            },
            calcDelay: function (colIndex, rowIndex) {
                return colIndex * this.options.delayBetweenBarsX + rowIndex * this.options.delayBetweenBarsY;
            },
            calcRotation: function (index) {
                return 1;
            },
            bonusFx: function (rotatefunc, tile, index, mid, arrPos) {
                var move = this.options.disperseFactor * (index - mid);
                if ($.inArray('back', arrPos) < 0) { // no bonus if this is title mode
                    if (rotatefunc === 'rotationY') {
                        TweenMax.to(tile, this.options.duration / 2, { top: '+=' + move, ease: Linear.easeNone })
                        TweenMax.to(tile, this.options.duration / 2, { delay: this.options.duration / 2, top: '-=' + move, ease: Linear.easeNone });
                    }
                    else {
                        TweenMax.to(tile, this.options.duration / 2, { left: '+=' + move, ease: Linear.easeNone })
                        TweenMax.to(tile, this.options.duration / 2, { delay: this.options.duration / 2, left: '-=' + move, ease: Linear.easeNone });
                    }

                    TweenMax.to(tile, this.options.duration / 2, { scale: this.options.scaleFactor, ease: Linear.easeNone })
                    TweenMax.to(tile, this.options.duration / 2, { delay: this.options.duration / 2, scale: 1, ease: Linear.easeNone }); 
                }
            },
            mainFx: function (wait, tile, index, rotatefunc, rotateDeg, mid, arrPos, complete) {
                var _this = this;
                TweenMax.delayedCall(wait, function () {
                    if (rotatefunc === 'rotationY')
                        TweenMax.to(tile, _this.options.duration, {
                            rotationY: _this.options.calcRotation.call(_this, index) * rotateDeg,
                            z: -_this.options.thickness / 2,
                            transformOrigin: "50% 50%",
                            transformStyle: "preserve-3d",
                            ease: _this.options.ease,
                            onComplete: complete
                        });
                    else
                        TweenMax.to(tile, _this.options.duration, {
                            rotationX: _this.options.calcRotation.call(_this, index) * rotateDeg,
                            z: -_this.options.thickness / 2,
                            transformOrigin: "50% 50%",
                            transformStyle: "preserve-3d",
                            ease: _this.options.ease,
                            onComplete: complete
                        });
                    _this.options.bonusFx.call(_this, rotatefunc, tile, index, mid, arrPos);
                });
            },
            execute: function () {
                var _this = this;
                var arrPos = this.options.nextImgPos.split(' ');
                var tiles = this.slider.image1.find('div.tile');

                this.slider.image2.hide();

                var count = 0;
                var complete = function () {
                    count++;
                    if (count >= tiles.length) {
                        _this.slider.image2.show(0);
                        tiles.empty().remove();
                        _this.finished();
                    }
                }

                var rotateDeg = 180;
                var rotatefunc = 'rotationY';
                if ($.inArray('back', arrPos) >= 0) {
                    if ($.inArray('left', arrPos) >= 0) { rotateDeg = 180; rotatefunc = 'rotationY'; }
                    if ($.inArray('right', arrPos) >= 0) { rotateDeg = -180; rotatefunc = 'rotationY'; }
                    if ($.inArray('up', arrPos) >= 0) { rotateDeg = 180; rotatefunc = 'rotationX'; }
                    if ($.inArray('down', arrPos) >= 0) { rotateDeg = -180; rotatefunc = 'rotationX'; }
                }
                else {
                    if (this.options.nextImgPos === 'top') { rotateDeg = -90; rotatefunc = 'rotationX'; }
                    if (this.options.nextImgPos === 'bot') { rotateDeg = 90; rotatefunc = 'rotationX'; }
                    if (this.options.nextImgPos === 'left') { rotateDeg = 90; rotatefunc = 'rotationY'; }
                    if (this.options.nextImgPos === 'right') { rotateDeg = -90; rotatefunc = 'rotationY'; }

                    if ($.inArray('top', arrPos) >= 0 &&
                        $.inArray('bot', arrPos) >= 0) { rotateDeg = 90; rotatefunc = 'rotationX'; }
                    if ($.inArray('left', arrPos) >= 0 &&
                        $.inArray('right', arrPos) >= 0) { rotateDeg = 90; rotatefunc = 'rotationY'; }
                }
                var mid = (tiles.length - 1) / 2;

                tiles.each(function (index, tile) {
                    var rowIndex = index % _this.options.rows;              // In the base transition, web loop in rows
                    var colIndex = (index - rowIndex) / _this.options.rows; // first => calc from rows
                    var wait = _this.options.calcDelay.call(_this, colIndex, rowIndex);
                    _this.options.mainFx.call(_this, wait, tile, index, rotatefunc, rotateDeg, mid, arrPos, complete);
                });
            },
        }, opts));
    };
    fx.HC.transitions.Tiles3DLeftBotRight = function (aHC, opts) {
        return new fx.HC.transitions.Tiles3DLeftTopLeft(aHC, $.extend({
            calcDelay: function (colIndex, rowIndex) {
                return (this.options.columns - colIndex) * this.options.delayBetweenBarsX + (this.options.rows - rowIndex) * this.options.delayBetweenBarsY;
            },
        }, opts));
    };
    fx.HC.transitions.Tiles3DLeftMidMid = function (aHC, opts) {
        return new fx.HC.transitions.Tiles3DLeftTopLeft(aHC, $.extend({
            duration: 3,
            delayBetweenBarsX: 0.4,
            delayBetweenBarsY: 0.25,
            calcDelay: function (colIndex, rowIndex) {
                var midCol = (this.options.columns - 1) / 2;
                var midRow = (this.options.rows - 1) / 2;
                return Math.abs(midCol - colIndex) * this.options.delayBetweenBarsX + Math.abs(midRow - rowIndex) * this.options.delayBetweenBarsY;
            },
        }, opts));
    };

    fx.HC.transitions.Tiles3DRightTopLeft = function (aHC, opts) {
        return new fx.HC.transitions.Tiles3DLeftTopLeft(aHC, $.extend({
            nextImgPos: 'back right',
        }, opts));
    };
    fx.HC.transitions.Tiles3DRightBotRight = function (aHC, opts) {
        return new fx.HC.transitions.Tiles3DLeftBotRight(aHC, $.extend({
            nextImgPos: 'back right',
        }, opts));
    };
    fx.HC.transitions.Tiles3DRightMidMid = function (aHC, opts) {
        return new fx.HC.transitions.Tiles3DLeftMidMid(aHC, $.extend({
            nextImgPos: 'back right',
        }, opts));
    };

    fx.HC.transitions.Tiles3DUpTopLeft = function (aHC, opts) {
        return new fx.HC.transitions.Tiles3DLeftTopLeft(aHC, $.extend({
            nextImgPos: 'back up',
        }, opts));
    };
    fx.HC.transitions.Tiles3DUpBotRight = function (aHC, opts) {
        return new fx.HC.transitions.Tiles3DLeftBotRight(aHC, $.extend({
            nextImgPos: 'back up',
        }, opts));
    };
    fx.HC.transitions.Tiles3DUpMidMid = function (aHC, opts) {
        return new fx.HC.transitions.Tiles3DLeftMidMid(aHC, $.extend({
            nextImgPos: 'back up',
        }, opts));
    };

    fx.HC.transitions.Tiles3DDownTopLeft = function (aHC, opts) {
        return new fx.HC.transitions.Tiles3DLeftTopLeft(aHC, $.extend({
            nextImgPos: 'back down',
        }, opts));
    };
    fx.HC.transitions.Tiles3DDownBotRight = function (aHC, opts) {
        return new fx.HC.transitions.Tiles3DLeftBotRight(aHC, $.extend({
            nextImgPos: 'back down',
        }, opts));
    };
    fx.HC.transitions.Tiles3DDownMidMid = function (aHC, opts) {
        return new fx.HC.transitions.Tiles3DLeftMidMid(aHC, $.extend({
            nextImgPos: 'back down',
        }, opts));
    };
})(window.jQuery);
//=====================================================[ Bars 3D Effects ]======================================================//
(function ($) {

    fx.HC.transitions.Bars3DLeftTop = function (aHC, opts) {
        return new fx.HC.transitions.Tiles3DLeftTopLeft(aHC, $.extend({
            forceSquare: false,
            columns: 1,
            rows: 7,
            duration: 2,
            delayBetweenBarsX: 0.22,
            delayBetweenBarsY: 0.22,
            nextImgPos: 'left',
        }, opts));
    };
    fx.HC.transitions.Bars3DLeftBot = function (aHC, opts) {
        return new fx.HC.transitions.Tiles3DLeftBotRight(aHC, $.extend({
            forceSquare: false,
            columns: 1,
            rows: 7,
            duration: 2,
            delayBetweenBarsX: 0.22,
            delayBetweenBarsY: 0.22,
            nextImgPos: 'left',
        }, opts));
    };
    fx.HC.transitions.Bars3DLeftMid = function (aHC, opts) {
        return new fx.HC.transitions.Tiles3DLeftMidMid(aHC, $.extend({
            forceSquare: false,
            columns: 1,
            rows: 7,
            duration: 2,
            delayBetweenBarsX: 0.22,
            delayBetweenBarsY: 0.22,
            nextImgPos: 'left',
        }, opts));
    };

    fx.HC.transitions.Bars3DRightTop = function (aHC, opts) {
        return new fx.HC.transitions.Bars3DLeftTop(aHC, $.extend({
            nextImgPos: 'right',
        }, opts));
    };
    fx.HC.transitions.Bars3DRightBot = function (aHC, opts) {
        return new fx.HC.transitions.Bars3DLeftBot(aHC, $.extend({
            nextImgPos: 'right',
        }, opts));
    };
    fx.HC.transitions.Bars3DRightMid = function (aHC, opts) {
        return new fx.HC.transitions.Bars3DLeftMid(aHC, $.extend({
            nextImgPos: 'right',
        }, opts));
    };

    fx.HC.transitions.Bars3DUpLeft = function (aHC, opts) {
        return new fx.HC.transitions.Bars3DLeftTop(aHC, $.extend({
            columns: 9,
            rows: 1,
            nextImgPos: 'bot',
        }, opts));
    };
    fx.HC.transitions.Bars3DUpRight = function (aHC, opts) {
        return new fx.HC.transitions.Bars3DLeftBot(aHC, $.extend({
            columns: 9,
            rows: 1,
            nextImgPos: 'bot',
        }, opts));
    };
    fx.HC.transitions.Bars3DUpMid = function (aHC, opts) {
        return new fx.HC.transitions.Bars3DLeftMid(aHC, $.extend({
            columns: 9,
            rows: 1,
            nextImgPos: 'bot',
        }, opts));
    };

    fx.HC.transitions.Bars3DDownLeft = function (aHC, opts) {
        return new fx.HC.transitions.Bars3DUpLeft(aHC, $.extend({
            nextImgPos: 'top',
        }, opts));
    };
    fx.HC.transitions.Bars3DDownRight = function (aHC, opts) {
        return new fx.HC.transitions.Bars3DUpRight(aHC, $.extend({
            nextImgPos: 'top',
        }, opts));
    };
    fx.HC.transitions.Bars3DDownMid = function (aHC, opts) {
        return new fx.HC.transitions.Bars3DUpMid(aHC, $.extend({
            nextImgPos: 'top',
        }, opts));
    };

    fx.HC.transitions.Bars3DMixHLeft = function (aHC, opts) {
        return new fx.HC.transitions.Bars3DUpLeft(aHC, $.extend({
            nextImgPos: 'top bot',
            calcRotation: function (index) {
                return index % 2 == 0 ? 1 : -1;
            }
        }, opts));
    };
    fx.HC.transitions.Bars3DMixHRight = function (aHC, opts) {
        return new fx.HC.transitions.Bars3DUpRight(aHC, $.extend({
            nextImgPos: 'top bot',
            calcRotation: function (index) {
                return index % 2 == 0 ? 1 : -1;
            }
        }, opts));
    };
    fx.HC.transitions.Bars3DMixHMid = function (aHC, opts) {
        return new fx.HC.transitions.Bars3DUpMid(aHC, $.extend({
            nextImgPos: 'top bot',
            calcRotation: function (index) {
                return index % 2 == 0 ? 1 : -1;
            }
        }, opts));
    };

    fx.HC.transitions.Bars3DMixVUp = function (aHC, opts) {
        return new fx.HC.transitions.Bars3DMixHLeft(aHC, $.extend({
            columns: 1,
            rows: 7,
            nextImgPos: 'left right',
        }, opts));
    };
    fx.HC.transitions.Bars3DMixVDown = function (aHC, opts) {
        return new fx.HC.transitions.Bars3DMixHRight(aHC, $.extend({
            columns: 1,
            rows: 7,
            nextImgPos: 'left right',
        }, opts));
    };
    fx.HC.transitions.Bars3DMixVMid = function (aHC, opts) {
        return new fx.HC.transitions.Bars3DMixHMid(aHC, $.extend({
            columns: 1,
            rows: 7,
            nextImgPos: 'left right',
        }, opts));
    };
    //=======================================================[ Cube Effects ]========================================================//
    fx.HC.transitions.CubeUp = function (aHC, opts) {
        return new fx.HC.transitions.Bars3DUpLeft(aHC, $.extend({
            columns: 1,
            rows: 1,
            scaleFactor: 0.9,
        }, opts));
    };
    fx.HC.transitions.CubeDown = function (aHC, opts) {
        return new fx.HC.transitions.CubeUp(aHC, $.extend({
            nextImgPos: 'top',
        }, opts));
    };
    fx.HC.transitions.CubeLeft = function (aHC, opts) {
        return new fx.HC.transitions.CubeUp(aHC, $.extend({
            nextImgPos: 'right',
        }, opts));
    };
    fx.HC.transitions.CubeRight = function (aHC, opts) {
        return new fx.HC.transitions.CubeUp(aHC, $.extend({
            nextImgPos: 'left',
        }, opts));
    };

})(window.jQuery);
//====================================================[ Blinds 3D Effects ]=====================================================//
(function ($) {
    fx.HC.transitions.Blinds3DLeftLeft = function (aHC, opts) {
        return new fx.HC.transitions.Tiles3DLeftTopLeft(aHC, $.extend({
            forceSquare: false,
            columns: 9,
            rows: 1,
            duration: 2,
            delayBetweenBarsX: 0.22,
            delayBetweenBarsY: 0.22,
        }, opts));
    };
    fx.HC.transitions.Blinds3DLeftRight = function (aHC, opts) {
        return new fx.HC.transitions.Tiles3DLeftBotRight(aHC, $.extend({
            forceSquare: false,
            columns: 9,
            rows: 1,
            duration: 2,
            delayBetweenBarsX: 0.22,
            delayBetweenBarsY: 0.22,
        }, opts));
    };
    fx.HC.transitions.Blinds3DLeftMid = function (aHC, opts) {
        return new fx.HC.transitions.Tiles3DLeftMidMid(aHC, $.extend({
            forceSquare: false,
            columns: 9,
            rows: 1,
            duration: 2,
            delayBetweenBarsX: 0.22,
            delayBetweenBarsY: 0.22,
        }, opts));
    };

    fx.HC.transitions.Blinds3DRightLeft = function (aHC, opts) {
        return new fx.HC.transitions.Blinds3DLeftLeft(aHC, $.extend({
            nextImgPos: 'back right'
        }, opts));
    };
    fx.HC.transitions.Blinds3DRightRight = function (aHC, opts) {
        return new fx.HC.transitions.Blinds3DLeftRight(aHC, $.extend({
            nextImgPos: 'back right'
        }, opts));
    };
    fx.HC.transitions.Blinds3DRightMid = function (aHC, opts) {
        return new fx.HC.transitions.Blinds3DLeftMid(aHC, $.extend({
            nextImgPos: 'back right'
        }, opts));
    };

    fx.HC.transitions.Blinds3DUpTop = function (aHC, opts) {
        return new fx.HC.transitions.Blinds3DLeftLeft(aHC, $.extend({
            columns: 1,
            rows: 7,
            nextImgPos: 'back up'
        }, opts));
    };
    fx.HC.transitions.Blinds3DUpBot = function (aHC, opts) {
        return new fx.HC.transitions.Blinds3DLeftRight(aHC, $.extend({
            columns: 1,
            rows: 7,
            nextImgPos: 'back up'
        }, opts));
    };
    fx.HC.transitions.Blinds3DUpMid = function (aHC, opts) {
        return new fx.HC.transitions.Blinds3DLeftMid(aHC, $.extend({
            columns: 1,
            rows: 7,
            nextImgPos: 'back up'
        }, opts));
    };

    fx.HC.transitions.Blinds3DDownTop = function (aHC, opts) {
        return new fx.HC.transitions.Blinds3DUpTop(aHC, $.extend({
            nextImgPos: 'back down'
        }, opts));
    };
    fx.HC.transitions.Blinds3DDownBot = function (aHC, opts) {
        return new fx.HC.transitions.Blinds3DUpBot(aHC, $.extend({
            nextImgPos: 'back down'
        }, opts));
    };
    fx.HC.transitions.Blinds3DDownMid = function (aHC, opts) {
        return new fx.HC.transitions.Blinds3DUpMid(aHC, $.extend({
            nextImgPos: 'back down'
        }, opts));
    };
})(window.jQuery);
//=====================================================[ Book 3D Effects ]======================================================//
(function ($) {
    fx.HC.transitions.BookLeft = function (aHC, opts) {
        return new fx.HC.transition(aHC, $.extend({
            requires3d: true,
            perspective: 2000,
            duration: 2,
            direction: 'left',
            ease: Cubic.easeInOut,
            setup: function () {
                var tab = $('<div id="tab"></div>').css({
                    width: '50%',
                    height: '100%',
                    position: 'absolute',
                    top: '0px',
                    left: this.options.direction == 'left' ? '50%' : '0%',
                    'z-index': 101
                }).css3({
                    'perspective': this.options.perspective,
                    'perspective-origin': '50% 50%',
                    'transform-style': 'preserve-3d',
                }),

				front = $('<div/>').appendTo(tab).css({
				    'background-image': this.slider.image1.css('background-image'),
				    'background-position': (this.options.direction == 'left' ? '-' + (this.slider.image1.width() / 2) : 0) + 'px 0',
				    width: '100%',
				    height: '100%',
				    position: 'absolute',
				    top: '0',
				    left: '0',
				}).css3({
				    'backface-visibility': 'hidden'
				}),

				back = $('<div/>').appendTo(tab).css({
				    'background-image': this.slider.image2.css('background-image'),
				    'background-position': (this.options.direction == 'left' ? 0 : '-' + (this.slider.image1.width() / 2)) + 'px 0',
				    width: '100%',
				    height: '100%',
				    position: 'absolute',
				    top: '0',
				    left: '0'
				}).css3({
				    transform: fx.HC.browser.rotateY(180),
				    'backface-visibility': 'hidden'
				}),

				current = $('<div></div>').css({
				    position: 'absolute',
				    top: '0',
				    left: this.options.direction == 'left' ? '0' : '50%',
				    width: '50%',
				    height: '100%',
				    'background-image': this.slider.image1.css('background-image'),
				    'background-position': (this.options.direction == 'left' ? 0 : '-' + (this.slider.image1.width() / 2)) + 'px 0',
				    'z-index': 100
				});

                this.slider.image1.css3({
                    'perspective': '',
                    'perspective-origin': ''
                }).append(tab).append(current);
            },
            execute: function () {
                var _this = this;
                var tab = _this.slider.image1.find('div#tab');
                var complete = function () {
                    _this.slider.image2.show(0);
                    tab.empty().remove();
                    _this.finished();
                }
                TweenMax.to(tab, _this.options.duration, {
                    rotationY: _this.options.direction == 'left' ? -179 : 179,
                    transformOrigin: _this.options.direction + ' center',
                    ease: _this.options.ease,
                    onComplete: complete
                });
            }
        }, opts));
    };
    fx.HC.transitions.BookRight = function (aHC, opts) {
        return new fx.HC.transitions.BookLeft(aHC, $.extend({
            direction: 'right',
        }, opts));
    };
})(window.jQuery);
//====================================================[ Concentric Effects ]====================================================//
(function ($) {
    fx.HC.transitions.Concentric = function (aHC, opts) {
        return new fx.HC.transition(aHC, $.extend({
            duration: 2,
            blockSize: 60,
            delay: 0.2,
            ease: Sine.easeOut,
            alternate: false,
            setup: function () {
                var w = this.slider.image1.width(),
					h = this.slider.image1.height(),
					largestLength = Math.sqrt(w * w + h * h), // Largest length is the diagonal

					// How many blocks do we need?
					blockCount = Math.ceil(((largestLength - this.options.blockSize) / 2) / this.options.blockSize) + 1, // 1 extra to account for the round border
					fragment = document.createDocumentFragment();

                for (var i = 0; i < blockCount; i++) {
                    var thisBlockSize = (2 * i * this.options.blockSize) + this.options.blockSize;

                    var block = $('<div></div>').attr('class', 'block block-' + i).css({
                        width: thisBlockSize + 'px',
                        height: thisBlockSize + 'px',
                        position: 'absolute',
                        top: ((h - thisBlockSize) / 2) + 'px',
                        left: ((w - thisBlockSize) / 2) + 'px',

                        'z-index': 100 + (blockCount - i),

                        'background-image': this.slider.image1.css('background-image'),
                        'background-position': 'center center'
                    }).css3({
                        'border-radius': thisBlockSize + 'px',
                    });

                    fragment.appendChild(block.get(0));
                }
                this.slider.image1.get(0).appendChild(fragment);
            },
            execute: function () {
                var _this = this;

                var blocks = this.slider.image1.find('div.block');
                var count = 0;
                var complete = function () {
                    count++;
                    if (count >= blocks.length) {
                        _this.slider.image2.show(0);
                        blocks.empty().remove();
                        _this.finished();
                    }
                }
                blocks.each(function (index, block) {
                    TweenMax.to(block, _this.options.duration, {
                        delay: ((blocks.length - index - 1) * _this.options.delay),
                        rotationZ: (!_this.options.alternate || index % 2 ? '' : '-') + '180',
                        autoAlpha: 0,
                        ease: _this.options.ease,
                        onComplete: complete
                    });
                });
            }
        }, opts));
    };
    fx.HC.transitions.Concentric2 = function (aHC, opts) {
        return new fx.HC.transitions.Concentric(aHC, $.extend({
            alternate: true,
        }, opts));
    };
})(window.jQuery);
//======================================================[ Swipe Effects ]=======================================================//
(function ($) {
    fx.HC.transitions.SwipeLeft = function (aHC, opts) {
        return new fx.HC.transition(aHC, $.extend({
            duration: 2,
            ease: Sine.easeOut,
            direction: 'left',
            size: 140,
            setup: function () {
                var sizePer = 100 * (this.options.size / this.slider.image1.width() / 3) / 2;
                var rec = this.options.direction === 'right' || this.options.direction === 'down';
                var rec1 = rec ? 0 : 1;
                var rec2 = rec ? 1 : 0;
                var dir = this.options.direction === 'up' || this.options.direction === 'down' ? 'top' : 'left';
                var mask = $('<div id="mask"/>').css({
                    width: '100%',
                    height: '100%',
                    'background-image': this.slider.image1.css('background-image'),
                    'background-position': 'center center'
                }).css3({
                    'mask-image': '-webkit-linear-gradient(' + dir + ', rgba(0,0,0,' + rec1 + ') 0%, rgba(0,0,0,' + rec1 + ') ' + (50 - sizePer) + '%, rgba(0,0,0,' + rec2 + ') ' + (50 + sizePer) + '%, rgba(0,0,0,' + rec2 + ') 100%)',
                    'mask-size': '300%'
                });
                var timer = $('<div id="timer"/>').css({ width: '0px' });
                this.slider.image1.append(mask).append(timer);
            },
            execute: function () {
                var _this = this,
					mask = this.slider.image1.find('div#mask'),
                    timer = this.slider.image1.find('div#timer');
                var complete = function () {
                    _this.slider.image2.show(0);
                    mask.remove();
                    timer.remove();
                    _this.finished();
                };
                var update = function () {
                    var per = _this.options.direction === 'right' || _this.options.direction === 'down' ? 100 - timer.width() : timer.width();
                    mask.css3({
                        'mask-position': _this.options.direction === 'up' || _this.options.direction === 'down' ? '0% ' + per + '%' : per + '% 0%'
                    });
                };
                TweenMax.to(timer, _this.options.duration, {
                    width: 100,
                    ease: _this.options.ease,
                    onUpdate: update,
                    onComplete: complete
                });
            },
            compatibilityCheck: function () {
                return fx.HC.browser.supportsCSSProperty('MaskImage');
            }
        }, opts));
    };
    fx.HC.transitions.SwipeRight = function (aHC, opts) {
        return new fx.HC.transitions.SwipeLeft(aHC, $.extend({
            direction: 'right',
        }, opts));
    };
    fx.HC.transitions.SwipeUp = function (aHC, opts) {
        return new fx.HC.transitions.SwipeLeft(aHC, $.extend({
            direction: 'up',
        }, opts));
    };
    fx.HC.transitions.SwipeDown = function (aHC, opts) {
        return new fx.HC.transitions.SwipeLeft(aHC, $.extend({
            direction: 'down',
        }, opts));
    };
})(window.jQuery);
//=====================================================[ Dissolve Effects ]=====================================================//
(function ($) {
    fx.HC.transitions.Dissolve = function (aHC, opts) {
        return new fx.HC.transition(aHC, $.extend({
            duration: 2,
            ease: Quart.easeIn,
            setup: function () {
                var img = $('<div id="image"/>').css({
                    width: '100%',
                    height: '100%',
                    'background-image': this.slider.image1.css('background-image')
                });
                this.slider.image1.append(img);
            },
            execute: function () {
                var _this = this,
					img = this.slider.image1.find('div#image');
                var complete = function () {
                    _this.slider.image2.show(0);
                    img.remove();
                    _this.finished();
                };
                TweenMax.to(img, _this.options.duration, {
                    autoAlpha: 0,
                    ease: _this.options.ease,
                    onComplete: complete
                });
            }
        }, opts));
    };
})(window.jQuery);
//======================================================[ Blocks Effects ]======================================================//
(function ($) {
    fx.HC.transitions.BlocksRandom = function (aHC, opts) {
        return new fx.HC.transition_base(aHC, $.extend({
            forceSquare: true,
            delayBetweenBlocksX: 0.2,
            delayBetweenBlocksY: 0.15,
            duration: 0.4,
            scale: 0.8,
            ease: Linear.easeIn,
            calcDelay: function (rowIndex, colIndex) { return Math.random() * 2 * this.options.duration; },
            renderTile: function (elem, colIndex, rowIndex, colWidth, rowHeight, leftOffset, topOffset) {
                $(elem).css({
                    'background-image': this.slider.image1.css('background-image'),
                    'background-position': '-' + leftOffset + 'px -' + topOffset + 'px'
                });
            },
            execute: function () {
                var _this = this;
                var blocks = this.slider.image1.find('div.tile');
                var count = 0;
                var complete = function () {
                    count++;
                    if (count >= blocks.length) {
                        _this.slider.image2.show(0);
                        blocks.empty().remove();
                        _this.finished();
                    }
                };
                blocks.each(function (index, block) {
                    var rowIndex = index % _this.options.rows;              // In the base transition, web loop in rows
                    var colIndex = (index - rowIndex) / _this.options.rows; // first => calc from rows
                    var wait = _this.options.calcDelay.call(_this, colIndex, rowIndex);
                    TweenMax.to(block, _this.options.duration, {
                        delay: wait,
                        scale: _this.options.scale,
                        autoAlpha: 0,
                        ease: _this.options.ease,
                        onComplete: complete
                    });
                });
            }
        }, opts));
    };
    fx.HC.transitions.BlocksTopLeft = function (aHC, opts) {
        return new fx.HC.transitions.BlocksRandom(aHC, $.extend({
            calcDelay: function (rowIndex, colIndex) { return colIndex * this.options.delayBetweenBlocksX + rowIndex * this.options.delayBetweenBlocksY; },
        }, opts));
    };
    fx.HC.transitions.BlocksBotRight = function (aHC, opts) {
        return new fx.HC.transitions.BlocksRandom(aHC, $.extend({
            calcDelay: function (rowIndex, colIndex) { return (this.options.columns - colIndex) * this.options.delayBetweenBlocksX + (this.options.rows - rowIndex) * this.options.delayBetweenBlocksY; },
        }, opts));
    };
    fx.HC.transitions.BlocksMidMid = function (aHC, opts) {
        return new fx.HC.transitions.BlocksRandom(aHC, $.extend({
            calcDelay: function (colIndex, rowIndex) {
                var midCol = (this.options.columns - 1) / 2;
                var midRow = (this.options.rows - 1) / 2;
                return Math.abs(midCol - colIndex) * this.options.delayBetweenBlocksX + Math.abs(midRow - rowIndex) * this.options.delayBetweenBlocksY;
            },
        }, opts));
    };

})(window.jQuery);
//=======================================================[ Zip Effects ]========================================================//
(function ($) {
    fx.HC.transitions.ZipLeft = function (aHC, opts) {
        return new fx.HC.transition_base(aHC, $.extend({
            forceSquare: false,
            columns: 16,
            rows: 1,
            delayBetweenBarsX: 0.06,
            delayBetweenBarsY: 0.06,
            duration: 0.8,
            axis: 'y',
            ease: Linear.easeIn,
            calcDelay: function (rowIndex, colIndex) { return colIndex * this.options.delayBetweenBarsX + rowIndex * this.options.delayBetweenBarsY; },
            renderTile: function (elem, colIndex, rowIndex, colWidth, rowHeight, leftOffset, topOffset) {
                $(elem).css({
                    'background-image': this.slider.image1.css('background-image'),
                    'background-position': '-' + leftOffset + 'px -' + topOffset + 'px'
                });
            },
            execute: function () {
                var _this = this;
                var bars = this.slider.image1.find('div.tile');
                var count = 0;
                var complete = function () {
                    count++;
                    if (count >= bars.length) {
                        _this.slider.image2.show(0);
                        bars.empty().remove();
                        _this.finished();
                    }
                };
                var height = this.slider.image1.height();
                var width = this.slider.image1.width();
                bars.each(function (index, bar) {
                    var rowIndex = index % _this.options.rows;              // In the base transition, web loop in rows
                    var colIndex = (index - rowIndex) / _this.options.rows; // first => calc from rows
                    var wait = _this.options.calcDelay.call(_this, colIndex, rowIndex);
                    if (_this.options.axis === 'y')
                        TweenMax.to(bar, _this.options.duration, {
                            delay: wait,
                            y: (index % 2 == 0 ? "+=" : "-=") + height,
                            autoAlpha: 0,
                            ease: _this.options.ease,
                            onComplete: complete
                        });
                    else
                        TweenMax.to(bar, _this.options.duration, {
                            delay: wait,
                            x: (index % 2 == 0 ? "+=" : "-=") + width,
                            autoAlpha: 0,
                            ease: _this.options.ease,
                            onComplete: complete
                        });
                });
            }
        }, opts));
    };
    fx.HC.transitions.ZipRight = function (aHC, opts) {
        return new fx.HC.transitions.ZipLeft(aHC, $.extend({
            calcDelay: function (rowIndex, colIndex) { return (this.options.columns - colIndex) * this.options.delayBetweenBarsX + (this.options.rows - rowIndex) * this.options.delayBetweenBarsY; },
        }, opts));
    };
    fx.HC.transitions.ZipTop = function (aHC, opts) {
        return new fx.HC.transitions.ZipLeft(aHC, $.extend({
            columns: 1,
            rows: 14,
            axis: 'x'
        }, opts));
    };
    fx.HC.transitions.ZipBot = function (aHC, opts) {
        return new fx.HC.transitions.ZipRight(aHC, $.extend({
            columns: 1,
            rows: 14,
            axis: 'x'
        }, opts));
    };
    fx.HC.transitions.ZipMidV = function (aHC, opts) {
        return new fx.HC.transitions.ZipLeft(aHC, $.extend({
            delayBetweenBarsX: 0.12,
            delayBetweenBarsY: 0.12,
            calcDelay: function (colIndex, rowIndex) {
                var midCol = (this.options.columns - 1) / 2;
                var midRow = (this.options.rows - 1) / 2;
                return Math.abs(midCol - colIndex) * this.options.delayBetweenBarsX + Math.abs(midRow - rowIndex) * this.options.delayBetweenBarsY;
            },
        }, opts));
    };
    fx.HC.transitions.ZipMidH = function (aHC, opts) {
        return new fx.HC.transitions.ZipMidV(aHC, $.extend({
            columns: 1,
            rows: 14,
            axis: 'x',
        }, opts));
    };
})(window.jQuery);
//======================================================[ Spiral Effects ]======================================================//
(function ($) {
    fx.HC.transitions.SpiralOut = function (aHC, opts) {
        return new fx.HC.transition_base(aHC, $.extend({
            effectMode: 'out',
            forceSquare: false,
            columns: 9,
            rows: 6,
            delay: 0.08,
            duration: 0.8,
            scale: 0.1,
            ease: Linear.easeIn,
            initArray: function () {
                var width = this.options.columns;
                var height = this.options.rows;
                var arr = new Array(width * height + 1);
                var left = 0;
                var right = width - 1;
                var top = 0;
                var bot = height - 1;
                var vector = "right";
                var rowindex = 0;
                var colindex = 0;
                for (var index = 0; index < width * height; index++) {
                    arr[rowindex * width + colindex] = index;
                    if (vector == "right") {
                        if (colindex < right) colindex++; else { vector = "down"; top++; rowindex++; }
                    }
                    else if (vector == "down") {
                        if (rowindex < bot) rowindex++; else { vector = "left"; right--; colindex--; }
                    }
                    else if (vector == "left") {
                        if (colindex > left) colindex--; else { vector = "up"; bot--; rowindex--; }
                    }
                    else if (vector == "up") {
                        if (rowindex > top) rowindex--; else { vector = "right"; left++; colindex++; }
                    }
                }
                this.timeArray = arr;
            },
            calcDelay: function (rowIndex, colIndex) { return this.timeArray[colIndex * this.options.columns + rowIndex] * this.options.delay; },
            renderTile: function (elem, colIndex, rowIndex, colWidth, rowHeight, leftOffset, topOffset) {
                $(elem).css({
                    'background-image': this.options.effectMode === 'in' ? this.slider.image2.css('background-image') : this.slider.image1.css('background-image'),
                    'background-position': '-' + leftOffset + 'px -' + topOffset + 'px'
                });
                if (this.options.effectMode === 'in') {
                    TweenMax.set(elem, {
                        rotationZ: -90,
                        scale: this.options.scale,
                        autoAlpha: 0,
                    });
                }
            },
            execute: function () {
                var _this = this;
                var bars = this.slider.image1.find('div.tile');
                var count = 0;
                var complete = function () {
                    count++;
                    if (count >= bars.length) {
                        _this.slider.image2.show(0);
                        bars.empty().remove();
                        _this.finished();
                    }
                };
                this.options.initArray.call(this);
                var height = this.slider.image1.height();
                var width = this.slider.image1.width();
                bars.each(function (index, bar) {
                    var rowIndex = index % _this.options.rows;              // In the base transition, web loop in rows
                    var colIndex = (index - rowIndex) / _this.options.rows; // first => calc from rows
                    var wait = _this.options.calcDelay.call(_this, colIndex, rowIndex);
                    TweenMax.to(bar, _this.options.duration, {
                        delay: wait,
                        rotationZ: _this.options.effectMode === 'in' ? 0 : 90,
                        scale: _this.options.effectMode === 'in' ? 1 : _this.options.scale,
                        autoAlpha: _this.options.effectMode === 'in' ? 1 : 0,
                        ease: _this.options.ease,
                        onComplete: complete
                    });
                });
            }
        }, opts));
    };
    fx.HC.transitions.SpiralIn = function (aHC, opts) {
        return new fx.HC.transitions.SpiralOut(aHC, $.extend({
            effectMode: 'in',
        }, opts));
    };
})(window.jQuery); 