"use strict";
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
    return typeof obj
} : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj
};
var _createClass = function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor)
        }
    }

    return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor
    }
}();

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function")
    }
}

var Character = function () {//constructor
    function Character(id, name, defaultImage, width, height, xOffSet, yOffSet, valign, halign) {
        _classCallCheck(this, Character);
        if (!contains.call(charIDArray, id)) {
            this.id = id;
            charIDArray.push(id);
            characters[id] = this;//console.log(characters[id].id);
        } else {
            displayError("Illegal Argument: Character ID for " + name + " has been used. ID: " + id)
        }
        id = this.constructorInput("string", id, "id");
        name = this.constructorInput("string", name, "name");
        defaultImage = this.constructorInput("string", defaultImage, "default Sprite");
        width = this.constructorInput("number", width, "width");
        height = this.constructorInput("number", height, "height");
        xOffSet = this.cSInput("number", xOffSet, 0, 0, "xOffSet");
        yOffSet = this.cSInput("number", yOffSet, 0, 0, "yOffSet");
        valign = this.cSInput("number", valign, 0, 0, "vertical alignment and vertical anchoring");
        halign = this.cSInput("number", halign, 0, 0, "horizontal alignment and horizontal anchroing");
        this.name = name;
        this.dName = name;
        this.spriteArray = [];
        this.spriteArray["default"] = defaultImage;
        this.spriteArray["def"] = defaultImage;
        this.dspriteArray = [];
        this.dspriteArray["default"] = defaultImage;
        this.dspriteArray["def"] = defaultImage;
        this.cyspriteArray = [];
        this.cyspriteArray["default"] = defaultImage;
        this.cyspriteArray["def"] = defaultImage;
        if (width <= 0) {
            displayError("Illegal Argument: Attempt to create a character with 0 or negative width. Character ID: " + id)
        }
        if (height <= 0) {
            displayError("Illegal Argument: Attempt to create a character with 0 or negative height. Character ID: " + id)
        }
        this.w = width;
        this.h = height;
        this.dW = width;
        this.dH = height;
        this.x = xOffSet;
        this.dX = xOffSet;
        this.y = yOffSet;
        this.dY = yOffSet;
        this.xAlign = halign;
        this.yAlign = valign;
        this.dxA = halign;
        this.cyxA = halign;
        this.anchorX = halign;
        this.anchorY = valign;
        this.daX = halign;
        this.daY = valign;
        this.overlay = false;
        this.dOverlay = false;
        this.flipped = false;
        this.dflipped = false;
        this.vflipped = false;
        this.dvflipped = false;
        this.opacity = 0;
        this.dopacity = 0;
        this.xscale = function () {
            return window.kvnXScale
        };
        this.yscale = function () {
            return window.kvnYscale
        };
        this.dSkip = true;
        this.ddSkip = true;
        this.dGraph = linear;
        this.ddGraph = linear;//text
        this.textcolor = "black";
        this.dTextcolor = "black";
        this.fontsize = "1.7vw";
        this.dfontsize = "1.7vw";
        this.bold = false;
        this.dBold = false;
        this.italic = false;
        this.dItalic = false;//filter
        this.vblur = 0;
        this.dblur = 0;
        this.vinvert = 0;
        this.dinvert = 0;
        this.vgrayscale = 0;
        this.dgrayscale = 0;
        this.vsepia = 0;
        this.dsepia = 0;//new
        this.vcontrast = 1;
        this.dcontrast = 1;
        this.vsaturation = 1;
        this.dsaturation = 1;
        this.vbrightness = 1;
        this.dbrightness = 1;
        this.vhue = 0;
        this.dhue = 0;
        this.vrotate = 0;
        this.drotate = 0;
        this.vskewx = 0;
        this.dskewx = 0;
        this.vskewy = 0;
        this.dskewy = 0;
        this.gloop = null;
        this.waiting = new Array;//cycle stuff
        this.dName = this.name;
        this.dspriteArray = clone(this.spriteArray);
        this.dW = this.w;
        this.dH = this.h;
        this.dX = this.x;
        this.dY = this.y;
        this.dxA = this.xAlign;
        this.dyA = this.yAlign;
        this.daX = this.anchorX;
        this.daY = this.anchorY;
        this.doverlay = this.overlay;
        this.dflipped = this.flipped;
        this.dvflipped = this.vflipped;
        this.dopacity = this.opacity;
        this.ddSkip = this.dSkip;
        this.ddGraph = this.dGraph;
        this.dTextcolor = this.textcolor;
        this.dfontsize = this.fontsize;
        this.dBold = this.bold;
        this.dItalic = this.italic;
        this.dblur = this.vblur;
        this.dgrayscale = this.vgrayscale;
        this.dinvert = this.vinvert;
        this.dsepia = this.vsepia;
        this.dcontrast = this.vcontrast;
        this.dsaturation = this.vsaturation;
        this.dbrightness = this.vbrightness;
        this.dhue = this.vhue;
        this.drotate = this.vrotate;
        this.dskewx = this.vskewx;
        this.dskewy = this.vskewy;//cycle
        this.isCycle = false;
        this.cycleseq = null;
        this.break = false;
        this.breakProm = null;
        this.canSkip = true;/*pause engine for filter*/
        this.animationDuration = -1;
        this.animationProgress = -1;
        this.currentFilter = "penis5";
        this.finalFilter = "penis5";
        this.currentSprite = "default";
        this.checkingLoop = null;//logging
        this.logging = false;
        this.customDir = null;
        this.stage = null;
        this.completed = false;//frillPresets
        this.preSpeakScale = 1.05;
        this.dpreSpeakScale = 1.05;
        this.preSpeakTime = 200;
        this.dpreSpeakTime = 200
    }//getters
    _createClass(Character, [{
        key: "getName", value: function getName() {
            return this.name
        }
    }, {
        key: "getID", value: function getID() {
            return this.id
        }
    }, {
        key: "getOverlay", value: function getOverlay() {
            return this.overlay
        }
    }, {
        key: "getWidth", value: function getWidth() {
            return this.w
        }
    }, {
        key: "getHeight", value: function getHeight() {
            return this.h
        }
    }, {
        key: "getHFlip", value: function getHFlip() {
            return this.flipped
        }
    }, {
        key: "getVFlip", value: function getVFlip() {
            return this.vflipped
        }
    }, {
        key: "getOpacity", value: function getOpacity() {
            return this.opacity
        }
    }, {
        key: "getCurrentImage", value: function getCurrentImage() {
            return this.getSpritePath(this.currentSprite)
        }
    }, {
        key: "getSpritePath", value: function getSpritePath(sprite) {
            var sp = this.spriteArray[sprite];
            if (typeof sp === "string") {
                if (sp.charAt(0) === "/") {
                    sp = sp.substring(1, sp.length)
                }
                return this.getImageDirectory() + sp
            } else {
                return sp
            }
        }
    }, {
        key: "getGrayScale", value: function getGrayScale() {
            return this.vgrayscale
        }
    }, {
        key: "getBlur", value: function getBlur() {
            return this.vblur
        }
    }, {
        key: "getSepia", value: function getSepia() {
            return this.vsepia
        }
    }, {
        key: "getInvert", value: function getInvert() {
            return this.vinvert
        }
    }, {
        key: "isSkippable", value: function isSkippable() {
            return this.canSkip
        }
    }, {
        key: "isAnimating", value: function isAnimating() {
            if (this.isCycle) {
                return false
            }
            var id = "#" + this.id;
            var ghost0 = "#ghost-" + 0 + "-" + this.id;
            var ghost1 = "#ghost-" + 1 + "-" + this.id;
            var ghost2 = "#ghost-" + 2 + "-" + this.id;
            var ghost3 = "#ghost-" + 3 + "-" + this.id;
            return TweenLite.getTweensOf([id, ghost0, ghost1, ghost2, ghost3]).length > 0
        }
    }, {
        key: "isCycling", value: function isCycling() {
            return this.isCycle
        }//privates
    }, {
        key: "getStage", value: function getStage() {
            return this.stage
        }
    }, {
        key: "setStage", value: function setStage(stage) {
            if (this.completed) {
                this.stage = stage
            } else {
                displayError("Incomplete Object Construction Exception: Character object not completed in construction. Please call chain-able method '.complete()' to complete construction. Character id: " + this.id + "; Character name: " + this.name)
            }
        }
    }, {
        key: "proceed", value: function proceed(force) {
            if (this.isAnimating()) {
                if (this.isSkippable() || force) {
                    if (!this.isCycle) {
                        var id = "#" + this.id;
                        var ghost0 = "#ghost-" + 0 + "-" + this.id;
                        var ghost1 = "#ghost-" + 1 + "-" + this.id;
                        var ghost2 = "#ghost-" + 2 + "-" + this.id;
                        var ghost3 = "#ghost-" + 3 + "-" + this.id;
                        var animations = TweenLite.getTweensOf([id, ghost0, ghost1, ghost2, ghost3]);
                        for (var i = 0; i < animations.length; i++) {
                            animations[i].progress(1)
                        }
                        return this.proceed(force)
                    } else {
                        return true
                    }
                } else {
                    return false
                }
            } else {
                return true
            }
        }
    }, {
        key: "pause", value: function pause() {
            if (this.isAnimating()) {
                var id = "#" + this.id;
                var ghost0 = "#ghost-" + 0 + "-" + this.id;
                var ghost1 = "#ghost-" + 1 + "-" + this.id;
                var ghost2 = "#ghost-" + 2 + "-" + this.id;
                var ghost3 = "#ghost-" + 3 + "-" + this.id;
                var animations = TweenLite.getTweensOf([id, ghost0, ghost1, ghost2, ghost3]);
                for (var i = 0; i < animations.length; i++) {
                    animations[i].pause()
                }
                this.currentFilter = $(id).css("filter");
                this.animationProgress = TweenLite.getTweensOf([id])[0].progress();
                var char = this;
                $(id).css("transition", "").promise().done(function () {
                    $(id).css("filter", char.currentFilter)
                })
            }
        }
    }, {
        key: "resume", value: function resume() {
            var id = "#" + this.id;
            var ghost0 = "#ghost-" + 0 + "-" + this.id;
            var ghost1 = "#ghost-" + 1 + "-" + this.id;
            var ghost2 = "#ghost-" + 2 + "-" + this.id;
            var ghost3 = "#ghost-" + 3 + "-" + this.id;
            var animations = TweenLite.getTweensOf([id, ghost0, ghost1, ghost2, ghost3]);
            for (var i = 0; i < animations.length; i++) {
                if (animations[i].paused()) {
                    animations[i].play()
                }
            }
            var time = (1 - this.animationProgress) * this.animationDuration;
            var state = this.finalFilter;
            if (this.animationDuration !== -1 && this.animationProgress !== -1 && this.currentFilter !== "penis5" && this.finalFilter !== "penis5") {
                $(id).css("transition", "filter " + time / 1000 + "s " + "linear").promise().done(function () {
                    $(id).css("filter", state)
                })
            }
        }
    }, {
        key: "getAlignX", value: function getAlignX(x) {
            return x
        }
    }, {
        key: "getAlignY", value: function getAlignY(y) {
            return y / 100 * heightMultiplier * vnScreenWidth
        }
    }, {
        key: "getAnchorXOff", value: function getAnchorXOff(x, width) {
            return -(x / 100) * width
        }
    }, {
        key: "getAnchorYOff", value: function getAnchorYOff(y, height) {
            return -(y / 100) * height
        }
    }, {
        key: "getRealX", value: function getRealX() {
            return this.getProjectedX(this.xAlign, this.anchorX, this.x, this.w)
        }
    }, {
        key: "getRealY", value: function getRealY() {
            return this.getProjectedY(this.yAlign, this.anchorY, this.y, this.h)
        }
    }, {
        key: "getProjectedX", value: function getProjectedX(xAl, xAn, xOs, xWid) {
            return this.getAlignX(xAl) + xOs + this.getAnchorXOff(xAn, xWid)
        }
    }, {
        key: "getProjectedY", value: function getProjectedY(yAl, yAn, yOs, yWid) {
            return this.getAlignY(yAl) + yOs * this.yscale() + this.getAnchorYOff(yAn, yWid) * this.xscale()
        }
    }, {
        key: "getDiv", value: function getDiv() {
            return $("#" + this.id)
        }
    }, {
        key: "getGhost", value: function getGhost(id) {
            return null
        }
    }, {
        key: "apply", value: function apply() {
            var newX = this.getProjectedX(this.xAlign, this.anchorX, this.x, this.w);
            var newY = this.getProjectedY(this.yAlign, this.anchorY, this.y, this.h);
            if (!embbedMode) {//values calculation
                var x = newX * this.xscale() + "vw";//x pos
                var y = newY + "vw";//y pos
                var w = this.w * this.xscale() + "vw";//width
                var h = this.h * this.xscale() + "vw";//height
            } else {
                var x = newX + "%";//x pos
                var y = newY / this.yscale() + "%";//y pos
                var w = this.w + "%";//width
                var h = this.h * this.xscale() / this.yscale() + "%";//height
            }
            var a = this.opacity;//alpha
//filters
            var blur = "blur(" + this.vblur * 10 + "px)";
            var invert = " invert(" + this.vinvert * 100 + "%)";
            var grayscale = " grayscale(" + this.vgrayscale * 100 + "%)";
            var sepia = " sepia(" + this.vsepia * 100 + "%)";
            var contrast = " contrast(" + this.vcontrast * 100 + "%)";
            var saturate = " saturate(" + this.vsaturation * 100 + "%)";
            var brightness = " brightness(" + this.vbrightness * 100 + "%)";
            var hue = " hue-rotate(" + this.vhue + "deg)";//transform
            var scaleX = this.flipped ? -1 : 1;
            var scaleY = this.vflipped ? -1 : 1;
            var skewX = this.vskewx + "deg";
            var skewY = this.vskewy + "deg";
            var rotate = this.vrotate + "deg";//console.log(blur + invert + grayscale + sepia + contrast + saturate + brightness + hue);
//css application
            this.getDiv().css("left", x);
            this.getDiv().css("top", y);
            this.getDiv().css("width", w);
            this.getDiv().css("height", h);
            this.getDiv().css("opacity", a);
            this.getDiv().css("filter", blur + invert + grayscale + sepia + contrast + saturate + brightness + hue);
            TweenLite.to(this.getDiv(), 0, {
                scaleX: scaleX,
                scaleY: scaleY,
                skewX: skewX,
                skewY: skewY,
                rotation: rotate
            });
            if (displaySpriteName) {
                TweenLite.to("#" + this.genDebugSpriteID(), 0, {scaleX: scaleX})
            }//glitching stuff
            var src = this.getCurrentImage();
            if (typeof src !== "string") {
                src = ""
            }
            this.getDiv().children(".glitch__img").each(function () {
                jom.changeImg($(this).children("img"), src)
            })
        }
    }, {
        key: "getSpriteID", value: function getSpriteID(sprite) {
            return "kvn-api-character-sprite" + this.getID() + "-" + sprite
        }
    }, {
        key: "generateDOM", value: function generateDOM() {
            var parent = jom.div(["character", "gameobj"], this.getID());
            var sprites = this.spriteArray;
            for (var k in sprites) {
                if (jom.string(k)) {
                    k = k.trim();
                    var id = this.getSpriteID(k);
                    var sprite = this.getSpritePath(k);
                    var img;
                    if (typeof sprite === "string") {
                        img = jom.img(sprite, id, "charimg")
                    } else {
                        console.log("non-img");
                        img = sprite.clone()
                    }
                    if (k === "def") {
                        img.css("visibility", "visible")
                    }
                    parent.append(img)
                }
            }
            var glitch = jom.div("glitch__img");
            for (var i = 0; i < 5; i++) {
                var g = glitch.clone();
                var ci = this.getCurrentImage();
                if (typeof ci === "string") {
                    var img = jom.img(this.getCurrentImage());
                    g.append(img)
                }
                parent.append(g)
            }
            var text = jom.div("sprite-name-debug", this.genDebugSpriteID(), this.currentSprite).css("display", displaySpriteName ? "block" : "none");
            parent.append(text);
            return parent
        }
    }, {
        key: "genDebugSpriteID", value: function genDebugSpriteID() {
            return this.getID() + "sprite-debug-display-name"
        }
    }, {
        key: "reapplyFilterCSS", value: function reapplyFilterCSS() {
            var grayscale = this.getGrayScale() * 100 + "%";
            var invert = this.getInvert() * 100 + "%";
            var blur = this.getBlur() * 10 + "px";
            var contrast = this.vcontrast * 100 + "%";
            var saturation = this.vsaturation * 100 + "%";
            var brightness = this.vbrightness * 100 + "%";
            var hue = this.vhue + "deg";
            var sepia = this.getSepia() * 100 + "%)";
            this.getDiv().css("filter", "grayscale(" + grayscale + ") invert(" + invert + ") blur(" + blur + ") contrast(" + contrast + ") saturate(" + saturation + ") brightness(" + brightness + ") hue-rotate(" + hue + ") sepia(" + sepia)
        }
    }, {
        key: "getImageDirectory", value: function getImageDirectory() {
            if (this.customDir === null || typeof this.customDir !== "string") {
                return dir + "images/char/"
            } else {
                var cd = this.customDir;
                if (cd.charAt(cd.length - 1) !== "/") {
                    cd += "/"
                }
                return cd
            }
        }//CCs
    }, {
        key: "complete", value: function complete() {
            if (this.completed) {
                displayError("Cannot call .complete() method on a compelted character")
            }
            this.dName = this.name;
            this.dspriteArray = clone(this.spriteArray);
            this.dW = this.w;
            this.dH = this.h;
            this.dX = this.x;
            this.dY = this.y;
            this.dxA = this.xAlign;
            this.dyA = this.yAlign;
            this.daX = this.anchorX;
            this.daY = this.anchorY;
            this.doverlay = this.overlay;
            this.dflipped = this.flipped;
            this.dvflipped = this.vflipped;
            this.dopacity = this.opacity;
            this.ddSkip = this.dSkip;
            this.ddGraph = this.dGraph;
            this.dTextcolor = this.textcolor;
            this.dfontsize = this.fontsize;
            this.dBold = this.bold;
            this.dItalic = this.italic;
            this.dblur = this.vblur;
            this.dgrayscale = this.vgrayscale;
            this.dinvert = this.vinvert;
            this.dsepia = this.vsepia;
            this.dcontrast = this.vcontrast;
            this.dsaturation = this.vsaturation;
            this.dbrightness = this.vbrightness;
            this.dhue = this.vhue;
            this.drotate = this.vrotate;
            this.dskewx = this.vskewx;
            this.dskewy = this.vskewy;
            this.dpreSpeakScale = this.preSpeakScale;
            this.dpreSpeakTime = this.preSpeakTime;
            this.completed = true;
            return this
        }
    }, {
        key: "setCustomDirectory", value: function setCustomDirectory(text) {
            text = this.sanitizeInput("string", text, null, null, "Custom Directory", "setCustomDirectory");
            this.customDir = text;
            return this
        }
    }, {
        key: "setDefaultSkippable", value: function setDefaultSkippable(dskip) {
            dskip = this.sanitizeInput("boolean", dskip, this.ddSkip, true, "dskip", "setDefaultSkippable");
            this.dSkip = dskip;
            return this
        }
    }, {
        key: "setPreSpeakScale", value: function setPreSpeakScale(scale) {
            this.preSpeakScale = scale;
            return this
        }
    }, {
        key: "setPreSpeakTime", value: function setPreSpeakTime(time) {
            this.preSpeakTime = time;
            return this
        }
    }, {
        key: "setDefaultAnimateInterpolation", value: function setDefaultAnimateInterpolation(g) {
            if (g === null || typeof g === "undefined") {
                g = this.ddGraph
            }
            if (g === def) {
                g = linear
            }
            if (!isEasingValid(g)) {
                this.throwError("Illegal Argument Exception: Unknown default character interpoaltion.")
            }
            this.dGraph = g;
            return this
        }
    }, {
        key: "addSprite", value: function addSprite(name, sprite) {
            if (typeof name !== "string") {
                this.typeError("Sprite name has to be a string: ", name)
            }
            if (typeof sprite !== "string") {
                this.typeError("Sprite has to be a string (location)", sprite)
            }
            if (!this.spriteArray.hasOwnProperty(name)) {
                this.spriteArray[name] = sprite;
                if (this.stage !== null && this.stage.isActive) {
                    var id = "kvn-api-character-sprite-" + this.id + "-" + name.trim();
                    var char = jom.img(this.getSpritePath(sprite), id, "charimg");
                    this.getDiv().append(char)
                }
                return this
            } else {
                this.throwError("Illegal Argument: Sprite with that name already exist. Sprite name: " + name)
            }
        }
    }, {
        key: "addHTMLSprite", value: function addHTMLSprite(name, sprite) {
            if (typeof name !== "string") {
                this.typeError("Sprite name has to be a string: ", name)
            }
            if (typeof sprite === "string") {
                sprite = jom.div("charimg", null, sprite)
            }
            if (!this.spriteArray.hasOwnProperty(name)) {
                this.spriteArray[name] = sprite;
                if (this.stage !== null && this.stage.isActive) {
                    var id = this.getSpriteID(name);
                    sprite.attr("id", id);
                    this.getDiv().append(sprite)
                }
                return this
            } else {
                this.throwError("Illegal Argument: Sprite with that name already exist. Sprite name: " + name)
            }
        }
    }, {
        key: "setFontSize", value: function setFontSize(font) {
            if (font === null || typeof font === "undefined") {
                font = this.dfontsize
            }
            if (font === def) {
                font = "1.5vw"
            }
            this.fontsize = font;
            return this
        }
    }, {
        key: "setBold", value: function setBold() {
            this.bold = true;
            return this
        }
    }, {
        key: "setItalic", value: function setItalic() {
            this.italic = true;
            return this
        }
    }, {
        key: "editBold", value: function editBold(bold) {
            bold = this.sanitizeInput("boolean", bold, this.ddSkip, false, "bold", "editBold");
            this.bold = bold;
            return this
        }
    }, {
        key: "editItalic", value: function editItalic(italic) {
            italic = this.sanitizeInput("boolean", italic, this.ddSkip, true, "italic", "editLtalic");
            this.italic = italic;
            return this
        }
    }, {
        key: "setTextColor", value: function setTextColor(color) {
            color = this.sanitizeInput("string", color, this.dTextcolor, "black", "color", "setTextColor");
            this.textcolor = color;
            return this
        }
    }, {
        key: "setOpacity", value: function setOpacity(opacity) {
            opacity = this.sanitizeInput("number", opacity, this.dopacity, 0, "opacity", "setOpacity");
            this.opacity = Math.min(1, Math.max(opacity, 0));
            return this
        }
    }, {
        key: "setAnchorX", value: function setAnchorX(aX) {
            aX = this.sanitizeInput("number", aX, this.daX, 0, "aX", "setAnchorX");
            this.anchorX = aX;
            return this
        }
    }, {
        key: "setAnchorY", value: function setAnchorY(aY) {
            aY = this.sanitizeInput("number", aY, this.daY, 0, "aY", "setAnchorY");
            this.anchorY = aY;
            return this
        }
    }, {
        key: "setHorizontalAlign", value: function setHorizontalAlign(ha) {
            ha = this.sanitizeInput("number", ha, this.dxA, 0, "ha", "setHorizontalAlign");
            this.xAlign = ha;
            return this
        }
    }, {
        key: "setVerticalAlign", value: function setVerticalAlign(va) {
            va = this.sanitizeInput("number", va, this.dyA, 0, "va", "setVerticalAlign");
            this.yAlign = va;
            return this
        }
    }, {
        key: "setHorizontalFlip", value: function setHorizontalFlip(boolean) {
            boolean = this.sanitizeInput("boolean", boolean, this.dflipped, false, "boolean", "setHorizontalFlip");
            this.flipped = boolean;
            return this
        }
    }, {
        key: "setVerticalFlip", value: function setVerticalFlip(boolean) {
            boolean = this.sanitizeInput("boolean", boolean, this.dvflipped, false, "boolean", "setVerticalFlip");
            this.vflipped = boolean;
            return this
        }
    }, {
        key: "setXOffSet", value: function setXOffSet(x) {
            x = this.sanitizeInput("number", x, this.dx, 0, "x", "setXOffSet");
            this.x = x;
            return this
        }
    }, {
        key: "setYOffSet", value: function setYOffSet(y) {
            y = this.sanitizeInput("number", y, this.dy, 0, "y", "setYOffSet");
            this.y = y;
            return this
        }
    }, {
        key: "setWidth", value: function setWidth(width) {
            width = this.sanitizeInput("number", width, this.dW, this.dW, "width", "setWidth");
            if (width <= 0) {
                this.throwError("Illegal Argument Exception: width has to be a non-zero positive integer! Your width: " + width)
            }
            this.w = width;
            return this
        }
    }, {
        key: "setHeight", value: function setHeight(height) {
            height = this.sanitizeInput("number", height, this.dH, this.dH, "height", "setHeight");
            if (height <= 0) {
                this.throwError("Illegal Argument Exception: height has to be a non-zero positive integer! Your height: " + height)
            }
            this.h = height;
            return this
        }
    }, {
        key: "setInvert", value: function setInvert(invert) {
            invert = this.sanitizeInput("number", invert, this.dinvert, 0, "invert", "setInvert");
            this.vinvert = invert;
            return this
        }
    }, {
        key: "setBlur", value: function setBlur(blur) {
            blur = this.sanitizeInput("number", blur, this.dblur, 0, "blur", "setBlur");
            this.vblur = blur;
            return this
        }
    }, {
        key: "setGrayscale", value: function setGrayscale(gs) {
            gs = this.sanitizeInput("number", gs, this.dgrayscale, 0, "grayscale", "setGrayscale");
            this.vgrayscale = gs;
            return this
        }
    }, {
        key: "setSepia", value: function setSepia(sepia) {
            sepia = this.sanitizeInput("number", sepia, this.dsepia, 0, "sepia", "setSepia");
            this.vsepia = sepia;
            return this
        }
    }, {
        key: "setContrast", value: function setContrast(contrast) {
            contrast = this.sanitizeInput("number", contrast, this.dcontrast, 1, "contrast", "setContrast");
            this.vcontrast = contrast;
            return this
        }
    }, {
        key: "setSaturation", value: function setSaturation(saturation) {
            saturation = this.sanitizeInput("number", saturation, this.dsaturation, 1, "saturation", "setSaturation");
            this.vsaturation = saturation;
            return this
        }
    }, {
        key: "setBrightness", value: function setBrightness(brightness) {
            brightness = this.sanitizeInput("number", brightness, this.dbrightness, 1, "brightness", "setBrightness");
            this.vbrightness = brightness;
            return this
        }
    }, {
        key: "setHueRotation", value: function setHueRotation(hue) {
            hue = this.sanitizeInput("number", hue, this.dhue, 0, "hueAngle", "setHueRotation");
            this.vhue = hue;
            return this
        }
    }, {
        key: "setRotation", value: function setRotation(rotate) {
            rotate = this.sanitizeInput("number", rotate, this.drotate, 0, "rotationAngle", "setRotation");
            this.vrotate = rotate;
            return this
        }
    }, {
        key: "setXSkew", value: function setXSkew(XSkew) {
            XSkew = this.sanitizeInput("number", XSkew, this.dskewx, 0, "XSkewAngle", "setXSkew");
            this.vskewx = XSkew;
            return this
        }
    }, {
        key: "setYSkew", value: function setYSkew(YSkew) {
            YSkew = this.sanitizeInput("number", YSkew, this.dskewy, 0, "YSkewAngle", "setYSkew");
            this.vskewy = YSkew;
            return this
        }//Setters
    }, {
        key: "setNormalText", value: function setNormalText() {
            this.bold = false;
            this.italic = false
        }
    }, {
        key: "changeBold", value: function changeBold(bold) {
            bold = this.sanitizeInput("boolean", bold, this.dBold, false, "bold", "changeBold");
            this.bold = bold
        }
    }, {
        key: "changeItalic", value: function changeItalic(italic) {
            italic = this.sanitizeInput("boolean", italic, this.dItalic, false, "italic", "changeItalic");
            this.italic = italic
        }
    }, {
        key: "changeName", value: function changeName(name) {
            name = this.sanitizeInput("string", name, this.dName, "kirinnee", "name", "changeName");
            this.name = name
        }
    }, {
        key: "resetValues", value: function resetValues() {
            this.name = this.dName;
            this.spriteArray = clone(this.dspriteArray);
            this.w = this.dW;
            this.h = this.dH;
            this.x = this.dX;
            this.y = this.dY;
            this.xAlign = this.dxA;
            this.yAlign = this.dyA;
            this.anchorX = this.daX;
            this.anchorY = this.daY;
            this.overlay = this.dOverlay;
            this.flipped = this.dflipped;
            this.vflipped = this.dvflipped;
            this.opacity = this.dopacity;
            this.dGraph = this.ddGraph;
            this.dSkip = this.ddSkip;
            this.textcolor = this.dTextcolor;
            this.fontsize = this.dfontsize;
            this.bold = this.dBold;
            this.italic = this.dItalic;
            this.vblur = this.dblur;
            this.vgrayscale = this.dgrayscale;
            this.vinvert = this.dinvert;
            this.vsepia = this.dsepia;
            this.vbrightness = this.dbrightness;
            this.vhue = this.dhue;
            this.vrotate = this.drotate;
            this.vsaturation = this.dsaturation;
            this.vcontrast = this.dcontrast;
            this.vskewx = this.dskewx;
            this.vskewy = this.dskewy;
            this.fix();/*pause engine for filter*/
            this.animationDuration = -1;
            this.animationProgress = -1;
            this.currentFilter = "penis5";
            this.finalFilter = "penis5";
            clearInterval(this.checkingLoop);
            this.checkingLoop = null;
            this.preSpeakScale = this.dpreSpeakScale;
            this.preSpeakTime = this.dpreSpeakTime;//logginh
            this.logging = false;
            this.currentSprite = "default";
            this.currentImage = this.spriteArray["default"]
        }//Pre Animations
    }, {
        key: "preScale", value: function preScale(width, height) {
            height = this.sanitizeInput("number", height, this.dH / this.h, 1.2, "height", "preScale");
            width = this.sanitizeInput("number", width, this.dW / this.w, 1.2, "width", "preScale");
            if (width <= 0) {
                this.throwError("Argument Out of Bound Exception: Scaling x has to be a positive float value. Entered value: " + x)
            }
            if (height <= 0) {
                this.throwError("Argument Out of Bound Exception: Scaling y has to be a positive float value. Entered value: " + y)
            }
            this.setWidth(this.w * width);
            this.setHeight(this.h * height)
        }
    }, {
        key: "preMove", value: function preMove(x, y) {
            x = this.sanitizeInput("number", x, this.dX - this.x, this.dX - this.x, "x", "preMove");
            y = this.sanitizeInput("number", y, this.dY - this.y, this.dY - this.y, "y", "preMove");
            this.setXOffSet(this.x + x);
            this.setYOffSet(this.y + y)
        }
    }, {
        key: "preRotate", value: function preRotate(angle) {
            angle = this.sanitizeInput("number", angle, this.drotate - this.vrotate, 45, "angle", "preRotate");
            this.setRotation(this.vrotate + angle)
        }
    }, {
        key: "preSkew", value: function preSkew(x, y) {
            x = this.sanitizeInput("number", x, this.dskewx - this.vskewx, 45, "skewAngleX", "preSkew");
            y = this.sanitizeInput("number", y, this.dskewy - this.vskewy, 45, "skewAngleY", "preSkew");
            this.setXSkew(this.vskewx + x);
            this.setYSkew(this.vskewy + y)
        }//Instants
    }, {
        key: "changeSprite", value: function changeSprite(name, promise) {
            name = this.sanitizeInput("string", name, "def", "default", "name", "changeSprite");
            if (!this.spriteArray.hasOwnProperty(name)) {
                this.throwError("Missing Sprite: The sprite '" + name + "' does not exist!")
            }
            if (!this.completed) {
                this.throwError("Incomplete Object Construction Exception: Character object not completed in construction. Please call chain-able method '.complete()' to complete construction.")
            }
            if (this.stage === null) {
                this.throwError("Null Exception: Character not added to stage.")
            } else if (!this.stage.isActive) {
                this.throwError("Not loaded Exception: Not allowed to animate on stage that re not loaded. ")
            }
            var char = this;
            this.getDiv().children(".charimg").css("visibility", "hidden").promise().done(function () {
                var kID = "#" + char.getSpriteID(name);
                char.getDiv().children(kID).css("visibility", "visible").promise().done(function () {
                    $("#" + char.genDebugSpriteID()).html(name);
                    if (promise !== null & typeof promise !== "undefined") {
                        if (typeof promise === "function") {
                            promise()
                        } else {
                            char.typeError("Promise has to be a function!!", promise)
                        }
                    }
                })
            });
            this.currentSprite = name
        }
    }, {
        key: "bringToFront", value: function bringToFront(promise) {
            if (!this.completed) {
                this.throwError("Incomplete Object Construction Exception: Character object not completed in construction. Please call chain-able method '.complete()' to complete construction.")
            }
            if (this.stage === null) {
                this.throwError("Null Exception: Character not added to stage.")
            } else if (!this.stage.isActive) {
                this.throwError("Not loaded Exception: Not allowed to animate on stage that re not loaded.")
            }
            var newArr = new Array;
            var l = this.stage.getCharArray().length;
            for (var i = 0; i < l; i++) {
                if (this.stage.getCharArray()[i] !== this) {
                    newArr.push(this.stage.getCharArray()[i])
                }
            }
            newArr.push(this);
            this.stage.changeArrayOrder(newArr, promise)
        }
    }, {
        key: "sendToBack", value: function sendToBack(promise) {
            if (!this.completed) {
                this.throwError("Incomplete Object Construction Exception: Character object not completed in construction. Please call chain-able method '.complete()' to complete construction.")
            }
            if (this.stage === null) {
                this.throwError("Null Exception: Character not added to stage.")
            } else if (!this.stage.isActive) {
                this.throwError("Not loaded Exception: Not allowed to animate on stage that re not loaded")
            }
            var newArr = new Array;
            var l = this.stage.getCharArray().length;
            newArr.push(this);
            for (var i = 0; i < l; i++) {
                if (this.stage.getCharArray()[i] !== this) {
                    newArr.push(this.stage.getCharArray()[i])
                }
            }
            this.stage.changeArrayOrder(newArr, promise)
        }
    }, {
        key: "bringBelowOverlay", value: function bringBelowOverlay(promise) {
            if (!this.completed) {
                this.throwError("Incomplete Object Construction Exception: Character object not completed in construction. " + "Please call chain-able method '.complete()' to complete construction.")
            }
            if (this.stage === null) {
                this.throwError("Null Exception: Character not added to stage. ")
            } else if (!this.stage.isActive) {
                this.throwError("Not loaded Exception: Not allowed to animate on stage that re not loaded. ")
            }
            this.overlay = false;
            this.stage.changeArrayOrder(this.stage.getCharArray(), promise)
        }
    }, {
        key: "bringAboveOverlay", value: function bringAboveOverlay(promise) {
            if (!this.completed) {
                this.throwError("Incomplete Object Construction Exception: Character object not completed in construction. " + "Please call chain-able method '.complete()' to complete construction.")
            }
            if (this.stage === null) {
                this.throwError("Null Exception: Character not added to stage. ")
            } else if (!this.stage.isActive) {
                this.throwError("Not loaded Exception: Not allowed to animate on stage that re not loaded. ")
            }
            this.overlay = true;
            this.stage.changeArrayOrder(this.stage.getCharArray(), promise)
        }//Animations
    }, {
        key: "speak", value: function speak(text, promise, time, skip, pw, bool, nl, append) {
            if (!this.completed) {
                this.throwError("Incomplete Object Construction Exception: Character object not completed in construction. " + "Please call chain-able method '.complete()' to complete construction.")
            }
            if (this.stage === null) {
                this.throwError("Null Exception: Character not added to stage. ")
            } else if (!this.stage.isActive) {
                this.throwError("Not loaded Exception: Not allowed to animate on stage that re not loaded. ")
            }
            var tb = this.stage.getTextbox();
            skip = this.sanitizeInput("boolean", skip, this.dSkip, true, "skip", "speak");
            tb.setName(this.name);
            tb.setCenter(false);
            tb.setSize(this.fontsize);
            tb.setColor(this.textcolor);
            tb.setBold(this.bold);
            tb.setItalic(this.italic);
            if (!skip) {
                tb.setUnskippable()
            }
            var sent = tb.displayText(text, promise, time, bool, nl, append);//console.log(backlog);
            if (sent) {
                if (pw !== "hehehe") {
                    backlog += "<br>" + "<b>" + this.name + ": </b>"
                } else {
                    backlog += " "
                }
                backlog += text
            }
            return sent
        }
    }, {
        key: "contSpeaking", value: function contSpeaking(text, promise, time, skip, nl, append) {
            return this.speak(text, promise, time, skip, "hehehe", false, nl, append)
        }
    }, {
        key: "setDefaultFlip", value: function setDefaultFlip(promise, time, graph, skip) {
            time = this.sanitizeInput("number", time, 0, 0, "time", "setDefaultFlip");
            this.flipped = false;
            this.vflipped = false;
            this.animate(time, promise, graph, skip)
        }
    }, {
        key: "flipVertically", value: function flipVertically(promise, time, graph, skip) {
            time = this.sanitizeInput("number", time, 0, 0, "time", "flipVertically");
            this.vflipped = !this.vflipped;
            this.animate(time, promise, graph, skip)
        }
    }, {
        key: "flipHorizontally", value: function flipHorizontally(promise, time, graph, skip) {
            time = this.sanitizeInput("number", time, 0, 0, "time", "flipHorizontally");
            this.flipped = !this.flipped;
            this.animate(time, promise, graph, skip)
        }
    }, {
        key: "scale", value: function scale(x, y, time, promise, swing, skippable) {
            this.preScale(x, y);
            this.animate(time, promise, swing, skippable)
        }
    }, {
        key: "move", value: function move(x, y, time, promise, swing, skippable) {
            this.preMove(x, y);
            this.animate(time, promise, swing, skippable)
        }
    }, {
        key: "jump", value: function jump(x, y, time, promise, swing, skippable) {
            x = this.sanitizeInput("number", x, this.dX, 0, "x", "jump");
            y = this.sanitizeInput("number", y, this.dY, 0, "y", "jump");
            this.setXOffSet(x);
            this.setYOffSet(y);
            this.animate(time, promise, swing, skippable)
        }
    }, {
        key: "appear", value: function appear(time, promise, swing, skippable) {
            this.opacity = 1;
            this.animate(time, promise, swing, skippable)
        }
    }, {
        key: "disappear", value: function disappear(time, promise, swing, skippable) {
            this.opacity = 0;
            this.animate(time, promise, swing, skippable)
        }
    }, {
        key: "moveAnchorX", value: function moveAnchorX(aX, time, promise, swing, skippable, adjust) {
            aX = this.sanitizeInput("number", aX, this.daX, 0, "aX", "moveAnchorX");
            adjust = this.sanitizeInput("boolean", adjust, true, true, "adjust", "moveAnchorX");
            var cX = this.getProjectedX(this.xAlign, this.anchorX, this.x, this.w);
            var nX = this.getProjectedX(this.xAlign, aX, this.x, this.w);
            if (adjust) {
                this.x += cX - nX
            }
            this.setAnchorX(aX);
            this.animate(time, promise, swing, skippable)
        }
    }, {
        key: "moveAnchorY", value: function moveAnchorY(aY, time, promise, swing, skippable, adjust) {
            aY = this.sanitizeInput("number", aY, this.daY, 0, "aY", "moveAnchorY");
            adjust = this.sanitizeInput("boolean", adjust, true, true, "adjust", "moveAnchorY");
            var cY = this.getProjectedY(this.yAlign, this.anchorY, this.y, this.h);
            var nY = this.getProjectedY(this.yAlign, aY, this.y, this.h);
            if (adjust) {
                var yDiff = cY - nY;
                var scopedYDiff = yDiff / this.yscale();
                this.y += scopedYDiff
            }
            this.setAnchorY(aY);
            this.animate(time, promise, swing, skippable)
        }
    }, {
        key: "moveVerticalAlign", value: function moveVerticalAlign(valign, time, promise, swing, skippable, adjust) {
            valign = this.sanitizeInput("number", valign, this.dyA, 0, "valign", "moveVerticalAlign");
            adjust = this.sanitizeInput("boolean", adjust, true, true, "adjust", "moveVerticalAlign");
            var cY = this.getProjectedY(this.yAlign, this.anchorY, this.y, this.h);
            var nY = this.getProjectedY(valign, this.anchorY, this.y, this.h);
            if (adjust) {
                var yDiff = cY - nY;
                var scopedYDiff = yDiff / this.yscale();
                this.y += scopedYDiff
            }
            this.setVerticalAlign(valign);
            this.animate(time, promise, swing, skippable)
        }
    }, {
        key: "moveHorizontalAlign",
        value: function moveHorizontalAlign(halign, time, promise, swing, skippable, adjust) {
            halign = this.sanitizeInput("number", halign, this.dyA, 0, "halign", "moveHorizontalAlign");
            adjust = this.sanitizeInput("boolean", adjust, true, true, "adjust", "moveHorizontalAlign");
            var cX = this.getProjectedX(this.xAlign, this.anchorX, this.x, this.w);
            var nX = this.getProjectedX(halign, this.anchorX, this.x, this.w);
            if (adjust) {
                this.x += cX - nX
            }
            this.setHorizontalAlign(halign);
            this.animate(time, promise, swing, skippable)
        }
    }, {
        key: "blur", value: function blur(_blur, time, promise, swing, skip) {
            this.setBlur(_blur);
            this.animate(time, promise, swing, skip)
        }
    }, {
        key: "invert", value: function invert(_invert, time, promise, swing, skip) {
            this.setInvert(_invert);
            this.animate(time, promise, swing, skip)
        }
    }, {
        key: "grayscale", value: function grayscale(_grayscale, time, promise, swing, skip) {
            this.setGrayscale(_grayscale);
            this.animate(time, promise, swing, skip)
        }
    }, {
        key: "sepia", value: function sepia(_sepia, time, promise, swing, skip) {
            this.setSepia(_sepia);
            this.animate(time, promise, swing, skip)
        }
    }, {
        key: "contrast", value: function contrast(_contrast, time, promise, swing, skip) {
            this.setContrast(_contrast);
            this.animate(time, promise, swing, skip)
        }
    }, {
        key: "saturate", value: function saturate(_saturate, time, promise, swing, skip) {
            this.setSaturation(_saturate);
            this.animate(time, promise, swing, skip)
        }
    }, {
        key: "brightness", value: function brightness(_brightness, time, promise, swing, skip) {
            this.setBrightness(_brightness);
            this.animate(time, promise, swing, skip)
        }
    }, {
        key: "rotateHue", value: function rotateHue(angle, time, promise, swing, skip) {
            this.setHueRotation(angle);
            this.animate(time, promise, swing, skip)
        }
    }, {
        key: "rotateClockwise", value: function rotateClockwise(angle, time, promise, swing, skip) {
            this.preRotate(angle);
            this.animate(time, promise, swing, skip)
        }
    }, {
        key: "rotateAntiClockwise", value: function rotateAntiClockwise(angle, time, promise, swing, skip) {
            this.preRotate(-angle);
            this.animate(time, promise, swing, skip)
        }
    }, {
        key: "skew", value: function skew(x, y, time, promise, swing, skip) {
            this.preSkew(x, y);
            this.animate(time, promise, swing, skip)
        }
    }, {
        key: "wait", value: function wait(time, promise, skippable) {
            if (!this.completed) {
                this.throwError("Incomplete Object Construction Exception: Character object not completed in construction. Please call chain-able method '.complete()' to complete construction.")
            }
            if (this.stage === null) {
                this.throwError("Null Exception: Character not added to stage.")
            } else if (!this.stage.isActive) {
                this.throwError("Not loaded Exception: Not allowed to animate on stage that re not loaded.")
            }
            time = this.sanitizeInput("number", time, 0, 500, "time", "wait");
            skippable = this.sanitizeInput("boolean", skippable, false, this.dSkip, " skippable", "wait");
            if (time < 0) {
                this.throwError("Negative Time Exception: Time for appearing animation has to be positive. Entered value: " + time)
            }
            var e = "#" + this.id;
            var char = this;
            this.canSkip = skippable;
            TweenLite.to(e, time / 1000, {
                immediateRender: true, onComplete: function onComplete() {
                    char.canSkip = true;
                    if (typeof promise !== "undefined" && typeof promise !== null) {
                        if (typeof promise === "function") {
                            promise()
                        } else {
                            char.typeError("Promise has to be a function! ", promise)
                        }
                    }
                }
            })
        }
    }, {
        key: "animate", value: function animate(time, promise, easing, skippable) {
            if (!this.completed) {
                this.throwError("Incomplete Object Construction Exception: Character object not" + "completed in construction. Please call chain-able method '.complete()' to complete construction")
            }
            if (this.stage === null) {
                this.throwError("Null Exception: Character not added to stage. ")
            } else if (!this.stage.isActive) {
                this.throwError("Not loaded Exception: Not allowed to animate on stage that re not loaded. Character id: " + this.id + "Character name: " + this.name)
            }
            time = this.sanitizeInput("number", time, 0, 500, "time", "animate");
            skippable = this.sanitizeInput("boolean", skippable, this.dSkip, true, " skippable", "animate");
            easing = this.sanitizeInput("object", easing, this.dGraph, linear, "graph", "animate");
            if (time < 0) {
                this.throwError("Negative Time Exception: Time for appearing animation has to be positive. Entered value: " + time)
            }
            if (!isEasingValid(easing)) {
                this.throwError("Illegal Argument Exception: Unknown easing type!")
            }
            this.canSkip = skippable;
            var newX = this.getProjectedX(this.xAlign, this.anchorX, this.x, this.w);
            var newY = this.getProjectedY(this.yAlign, this.anchorY, this.y, this.h);//values calculation
            if (!embbedMode) {
                var x = newX * this.xscale() + "vw";//x pos
                var y = newY + "vw";//y pos
                var w = this.w * this.xscale() + "vw";//width
                var h = this.h * this.xscale() + "vw";//height
            } else {
                var x = newX + "%";//x pos
                var y = newY / this.yscale() + "%";//y pos
                var w = this.w + "%";//width
                var h = this.h * this.xscale() / this.yscale() + "%";//height
            }
            var a = this.opacity;//alpha
            var e = "#" + this.id;//element identifier
            var easeCSS = cssEasing(easing);//easing for CSS
//filters
            var blur = "blur(" + this.vblur * 10 + "px)";
            var invert = " invert(" + this.vinvert * 100 + "%)";
            var grayscale = " grayscale(" + this.vgrayscale * 100 + "%)";
            var sepia = " sepia(" + this.vsepia * 100 + "%)";
            var contrast = " contrast(" + this.vcontrast * 100 + "%)";
            var saturate = " saturate(" + this.vsaturation * 100 + "%)";
            var brightness = " brightness(" + this.vbrightness * 100 + "%)";
            var hue = " hue-rotate(" + this.vhue + "deg)";//transform
            var scaleX = this.flipped ? -1 : 1;
            var scaleY = this.vflipped ? -1 : 1;
            var skewX = this.vskewx + "deg";
            var skewY = this.vskewy + "deg";
            var rotate = this.vrotate + "deg";
            if (displaySpriteName) {
                TweenLite.to("#" + this.genDebugSpriteID(), 0, {scaleX: scaleX})
            }
            var char = this;
            var start = function start() {
                char.getDiv().css("transition", "filter " + time / 1000 + "s " + easeCSS).promise().done(function () {
                    char.getDiv().css("filter", blur + invert + grayscale + sepia + contrast + saturate + brightness + hue);
                    char.finalFilter = blur + invert + grayscale + sepia + contrast + saturate + brightness + hue
                });
                if (characterLogging && char.logging && debugMode) {
                    var id = "#kvn-char-logger-for-" + char.id;
                    $(id).children(".table").children("table").children("tbody").children("tr").children(".old").each(function () {
                        if ($(this).children("input").length) {
                            $(this).children("input").css("display", "none");
                            $(this).children(".act").css("display", "block")
                        }
                        $(this).children(".act").css("text-align", "right")
                    });
                    $(id).children(".table").children("table").children("tbody").children("tr").children(".char-animate-log").css("display", "table-cell");
                    $(id).children(".table").children("table").children("tbody").children("tr").children(".log-expected-end-val").css("display", "table-cell");
                    $(id).children(".table").children("table").children("tbody").children("tr").children(".log-expected-end-val").each(function () {
                        var value = char[$(this).parent("tr").attr("stat")];
                        $(this).html(value)
                    });
                    $(id + " .char-run-state").html("animating")
                }
            };
            this.animationDuration = time;
            TweenLite.to(e, time / 1000, {
                left: x,
                top: y,
                width: w,
                height: h,
                opacity: a,
                rotation: rotate,
                scaleX: scaleX,
                scaleY: scaleY,
                skewX: skewX,
                skewY: skewY,
                immediateRender: true,
                ease: gsEasing(easing),
                onStart: start,
                onComplete: function onComplete() {
                    char.getDiv().css("transition", "").promise().done(function () {
                        char.getDiv().css("filter", blur + invert + grayscale + sepia + contrast + saturate + brightness + hue).promise().done(function () {
                            char.canSkip = true;//logging
                            if (characterLogging && char.logging && debugMode) {
                                var id = "#kvn-char-logger-for-" + char.id;
                                $(id).children(".table").children("table").children("tbody").children("tr").children(".old").each(function () {
                                    if ($(this).children("input").length) {
                                        $(this).children("input").css("display", "block");
                                        $(this).children(".act").css("display", "none")
                                    }
                                    $(this).children(".act").css("text-align", "left")
                                });
                                $(id).children(".table").children("table").children("tbody").children("tr").children(".char-animate-log").css("display", "none");
                                $(id).children(".table").children("table").children("tbody").children("tr").children(".log-expected-end-val").css("display", "none");
                                $(id).children(".table").children("table").children("tbody").children("tr").children(".old").each(function () {
                                    var value = char[$(this).parent("tr").attr("stat")];
                                    $(this).children(".act").html(value);
                                    $(this).children("input").val(value)
                                });
                                $(id + " .char-run-state").html("static")
                            }
                            if (char.isCycle && char.break) {
                                console.log("readjusting");
                                char.break = false;
                                promise = char.breakProm;
                                char.breakProm = null;
                                console.log(promise)
                            }
                            if (typeof promise !== "undefined" && promise !== null) {
                                if (typeof promise === "function") {
                                    promise()
                                } else {
                                    char.typeError("Promise has to be a function! ", promise)
                                }
                            }
                        })
                    })
                }
            })
        }
    }, {
        key: "resetAll", value: function resetAll(time, promise, swing, skippable) {
            this.resetValues();
            this.animate(time, promise, swing, skippable)
        }//frill
    }, {
        key: "heartAttack", value: function heartAttack(xOff, yOff, promise, skip) {
            if (typeof promise === "function") {
                promise()
            }
        }
    }, {
        key: "triggered", value: function triggered(time, promise, skip, shake, delay) {
            if (!this.completed) {
                this.throwError("Incomplete Object Construction Exception: Character object not completed in construction. Please call chain-able method '.complete()' to complete construction.")
            }
            if (this.stage === null) {
                displayError("Null Exception: Character not added to stage.")
            } else if (!this.stage.isActive) {
                displayError("Not loaded Exception: Not allowed to animate on stage that re not loaded.")
            }
            skip = this.sanitizeInput("boolean", skip, this.dSkip, true, "skip", "trigger");
            time = this.sanitizeInput("number", time, 500, 500, "time", "trigger");
            shake = this.sanitizeInput("number", shake, 0.5, 0.5, "shake", "trigger");
            delay = this.sanitizeInput("number", delay, 25, 25, "delay", "trigger");
            var count = 0;
            var ele = this;
            var loop = setInterval(function () {
                var arte = count % 4;
                var shak = shake / 100;
                if (arte === 0) {
                    ele.getDiv().css("left", (ele.getRealX() - shak * ele.w) * ele.xscale() + "vw");
                    ele.getDiv().css("top", ele.getRealY() - shak * ele.h * ele.xscale() + "vw")
                } else if (arte === 1) {
                    ele.getDiv().css("left", (ele.getRealX() + shak * ele.w) * ele.xscale() + "vw");
                    ele.getDiv().css("top", ele.getRealY() + shak * ele.h * ele.xscale() + "vw")
                } else if (arte === 2) {
                    ele.getDiv().css("left", (ele.getRealX() + shak * ele.w) * ele.xscale() + "vw");
                    ele.getDiv().css("top", ele.getRealY() - shak * ele.h * ele.xscale() + "vw")
                } else {
                    ele.getDiv().css("left", (ele.getRealX() - shak * ele.w) * ele.xscale() + "vw");
                    ele.getDiv().css("top", ele.getRealY() + shak * ele.h * ele.xscale() + "vw")
                }
                count++
            }, delay);
            this.wait(time, function () {
                clearInterval(loop);
                if (typeof promise === "function") {
                    promise()
                }
            }, skip)
        }
    }, {
        key: "glitch", value: function glitch(image) {
            if (!this.completed) {
                this.throwError("Incomplete Object Construction Exception: Character object not completed in construction. Please call chain-able method '.complete()' to complete construction.")
            }
            if (this.stage === null) {
                this.throwError("Null Exception: Character not added to stage.")
            } else if (!this.stage.isActive) {
                this.throwError("Not loaded Exception: Not allowed to animate on stage that re not loaded.")
            }
            var custom = false;
            if (image !== null && typeof image !== "undefined") {
                image = this.getSpritePath(image);
                custom = true
            }
            var src = this.getCurrentImage();
            if (typeof src !== "string") {
                src = ""
            }
            this.getDiv().children(".glitch__img").each(function (e) {
                jom.changeImg($(this).children("img"), custom ? image : src);
                $(this).css("opacity", "1");
                $(this).css("animation-duration", "4s");
                $(this).css("animation-delay", "0s");
                $(this).css("animation-timing-function", "linear");
                $(this).css("animation-iteration-count", "infinite");
                if (e === 1) {
                    $(this).css("animation-name", "glitch-anim-1-2")
                }
                if (e === 2) {
                    $(this).css("animation-name", "glitch-anim-2-2")
                } else if (e === 3) {
                    $(this).css("animation-name", "glitch-anim-3-2")
                } else if (e === 4) {
                    $(this).css("animation-name", "glitch-anim-flash")
                }
            });
            if (!custom) {
                var ele = this;
                this.gloop = setInterval(function () {//console.log("trying to edit image");
                    var nsrc = ele.getCurrentImage();
                    if (typeof nsrc !== "string") {
                        nsrc = ""
                    }
                    ele.getDiv().children(".glitch__img").each(function () {//console.log("editing image");
                        jom.changeImg($(this).children("img"), nsrc)
                    })
                }, 3000)
            }
        }
    }, {
        key: "interupt", value: function interupt(promise, scale, timing, swing, skip) {
            var prev = this.stage.previousCharacter;
            this.stage.previousCharacter = null;
            if (typeof prev !== "undefined" && prev !== null) {
                prev.scale(null, null, timing, swing, skip)
            }
            this.preSpeak(promise, scale, timing, swing, skip)
        }
    }, {
        key: "endSpeak", value: function endSpeak(promise, timing, swing, skip) {
            var prev = this.stage.previousCharacter;
            var char = this;
            timing = this.sanitizeInput("number", timing, this.preSpeakTime, 200, "time", "endSpeak");
            skip = this.sanitizeInput("boolean", skip, this.dSkip, true, " skippable", "animate");
            swing = this.sanitizeInput("object", swing, this.dGraph, linear, "graph", "animate");
            if (prev !== null && typeof prev !== "undefined") {
                prev.scale(null, null, 200, function () {
                    char.stage.previousCharacter = null;
                    if (typeof promise !== "undefined" && promise !== null) {
                        if (typeof promise === "function") {
                            promise()
                        } else {
                            char.typeError("Promise has to be a function! ", promise)
                        }
                    }
                }, swing, skip)
            }
        }
    }, {
        key: "preSpeak", value: function preSpeak(promise, scale, timing, swing, skip) {
            scale = this.sanitizeInput("number", scale, this.preSpeakScale, 1.05, "scale", "preSpeak");
            timing = this.sanitizeInput("number", timing, this.preSpeakTime, 200, "time", "preSpeak");
            skip = this.sanitizeInput("boolean", skip, this.dSkip, true, " skippable", "animate");
            swing = this.sanitizeInput("object", swing, this.dGraph, linear, "graph", "animate");
            var prev = this.stage.previousCharacter;
            var char = this;
            var p = function p() {
                char.scale(scale, scale, timing, function () {
                    char.bringToFront(function () {
                        char.stage.previousCharacter = char;
                        if (typeof promise !== "undefined" && promise !== null) {
                            if (typeof promise === "function") {
                                promise()
                            } else {
                                char.typeError("Promise has to be a function! ", promise)
                            }
                        }
                    })
                }, swing, skip)
            };
            if (prev !== null && typeof prev !== "undefined") {
                prev.scale(null, null, timing, function () {
                    p()
                }, swing, skip)
            } else {
                p()
            }
        }
    }, {
        key: "fix", value: function fix() {
            clearInterval(this.gloop);
            this.getDiv().children(".glitch__img").each(function (e) {
                $(this).css("opacity", "0");
                $(this).css("animation-duration", "");
                $(this).css("animation-delay", "");
                $(this).css("animation-timing-function", "");
                $(this).css("animation-iteration-count", "");
                $(this).css("background-color", "");
                $(this).css("background-blend-mode", "");
                $(this).css("animation-name", "")
            })
        }
    }, {
        key: "cycle", value: function cycle(sequence) {
            if (!this.completed) {
                this.throwError("Incomplete Object Construction Exception: Character object not completed in construction. Please call chain-able method '.complete()' to complete construction.")
            }
            if (this.stage === null) {
                this.throwError("Null Exception: Character not added to stage.")
            } else if (!this.stage.isActive) {
                this.throwError("Not loaded Exception: Not allowed to animate on stage that re not loaded.")
            }
            if (this.isAnimating()) {
                this.throwError("Character cannot cycle if it is animating!")
            }
            if (this.isCycle) {
                this.throwError("Character cannot cycle if its already in a cycle")
            }
            if (typeof sequence !== "function") {
                this.throwError("Character cycle sequence has to be a function")
            }
            this.cyName = this.name;
            this.cyspriteArray = clone(this.spriteArray);
            this.cyW = this.w;
            this.cyH = this.h;
            this.cyX = this.x;
            this.cyY = this.y;
            this.cyxA = this.xAlign;
            this.cyyA = this.yAlign;
            this.cyaX = this.anchorX;
            this.cyaY = this.anchorY;
            this.cyoverlay = this.overlay;
            this.cyflipped = this.flipped;
            this.cyvflipped = this.vflipped;
            this.cyopacity = this.opacity;
            this.cydSkip = this.dSkip;
            this.cydGraph = this.dGraph;
            this.cyTextcolor = this.textcolor;
            this.cyfontsize = this.fontsize;
            this.cyBold = this.bold;
            this.cyItalic = this.italic;
            this.cyblur = this.vblur;
            this.cygrayscale = this.vgrayscale;
            this.cyinvert = this.vinvert;
            this.cysepia = this.vsepia;
            this.isCycle = true;
            this.cycleseq = sequence;
            this.cycleseq()
        }
    }, {
        key: "endOfCycle", value: function endOfCycle() {
            if (this.isCycle && this.cycleseq !== null) {
                this.cycleseq()
            }
        }
    }, {
        key: "backFromCycle", value: function backFromCycle() {
            this.spriteArray = clone(this.cyspriteArray);
            this.w = this.cyW;
            this.h = this.cyH;
            this.x = this.cyX;
            this.y = this.cyY;
            this.xAlign = this.cyxA;
            this.yAlign = this.cyyA;
            this.anchorX = this.cyaX;
            this.anchorY = this.cyaY;
            this.overlay = this.cyoverlay;
            this.flipped = this.cyflipped;
            this.vflipped = this.cyvflipped;
            this.opacity = this.cyopacity;
            this.dSkip = this.cydSkip;
            this.cydGraph = this.dGraph;
            this.textcolor = this.cyTextcolor;
            this.fontsize = this.cyfontsize;
            this.bold = this.cyBold;
            this.italic = this.cyItalic;
            this.vblur = this.cyblur;
            this.vgrayscale = this.cygrayscale;
            this.vinvert = this.cyinvert;
            this.vsepia = this.cysepia
        }
    }, {
        key: "stopCycle", value: function stopCycle(time, promise, swing, skip) {
            this.name = this.cyName;
            this.cycleseq = null;//cut animations
            var id = "#" + this.id;
            var ghost0 = "#ghost-" + 0 + "-" + this.id;
            var ghost1 = "#ghost-" + 1 + "-" + this.id;
            var ghost2 = "#ghost-" + 2 + "-" + this.id;
            var ghost3 = "#ghost-" + 3 + "-" + this.id;
            var animations = TweenLite.getTweensOf([id, ghost0, ghost1, ghost2, ghost3]);
            this.break = true;
            var char = this;
            var p = function p() {
                if (typeof promise === "function") {
                    promise()
                }
                char.isCycling = false
            };
            this.breakProm = function () {
                char.backFromCycle();
                char.animate(time, p, swing, skip)
            };
            for (var i = 0; i < animations.length; i++) {
                animations[i].progress(1)
            }
        }//debug
    }, {
        key: "typeError", value: function typeError(error, input) {
            displayError("Type Exception: " + error + "<br>Your input type: " + (typeof input === "undefined" ? "undefined" : _typeof(input)) + "<br>Your input: " + input + "<br> Character id: " + this.id + "<br>Charater name: " + this.name + "<br>Scene: " + getCurrentSceneID() + "<br>Frame: " + getCurrentFrame())
        }
    }, {
        key: "throwError", value: function throwError(error) {
            displayError(error + "<br> Character id: " + this.id + "<br>Charater name: " + this.name + "<br>Scene: " + getCurrentSceneID() + "<br>Frame: " + getCurrentFrame())
        }
    }, {
        key: "constructorInput", value: function constructorInput(acceptedType, input, paramName) {
            if ((typeof input === "undefined" ? "undefined" : _typeof(input)) !== acceptedType) {
                displayError("Type Exception: '" + paramName + "' parameter in method 'contructor' must be a " + acceptedType + "! " + "<br>" + paramName + " input type: " + (typeof input === "undefined" ? "undefined" : _typeof(input)) + "<br>" + paramName + " input value: " + input + "<br> Character id: " + this.id + "<br>Charater name: " + this.name)
            } else {
                return input
            }
        }
    }, {
        key: "cSInput", value: function cSInput(acceptedType, input, cdef, edef, paramName) {
            if (input === null || typeof input === "undefined") {
                input = cdef
            }
            if (input === def) {
                input = edef
            }
            if ((typeof input === "undefined" ? "undefined" : _typeof(input)) !== acceptedType) {
                displayError("Type Exception: '" + paramName + "' parameter in constructor must be a " + acceptedType + "! " + "<br>" + paramName + " input type: " + (typeof input === "undefined" ? "undefined" : _typeof(input)) + "<br>" + paramName + " input value: " + input + "<br> Character id: " + this.id + "<br>Charater name: " + this.name)
            }
            return input
        }
    }, {
        key: "sanitizeInput", value: function sanitizeInput(acceptedType, input, cdef, edef, paramName, methodName) {
            if (input === null || typeof input === "undefined") {
                input = cdef
            }
            if (input === def) {
                input = edef
            }
            if ((typeof input === "undefined" ? "undefined" : _typeof(input)) !== acceptedType) {
                displayError("Type Exception: '" + paramName + "' parameter in method '" + methodName + "' must be a " + acceptedType + "! " + "<br>" + paramName + " input type: " + (typeof input === "undefined" ? "undefined" : _typeof(input)) + "<br>" + paramName + " input value: " + input + "<br> Character id: " + this.id + "<br>Charater name: " + this.name + "<br>Scene: " + getCurrentSceneID() + "<br>Frame: " + getCurrentFrame())
            }
            return input
        }
    }, {
        key: "stopLogging", value: function stopLogging() {
            if (debugMode) {
                this.logging = false;
                var id = "#kvn-char-logger-for-" + this.id;
                $(id).remove()
            }
        }
    }, {
        key: "startLogging", value: function startLogging() {
            if (!this.logging && this.stage !== null && this.stage.isActive && debugMode && characterLogging) {
                this.logging = true;
                var log = "<div class='debug-holder char-logger debug-dark' id='kvn-char-logger-for-" + this.id + "'>";
                log += "<div class='display'>ID:</div><div class='display red'>" + this.id + "</div>&nbsp;";
                log += "<div class='display'>State:</div><div class='char-run-state display red'>static</div>";
                log += "<div class='clickable char-log-editting' char='" + this.id + "'>edit</div>";
                log += "<div class='char-log-export clickable' char='" + this.id + "'>export</div>";
                log += "<div class='char-log-close clickable' char='" + this.id + "'>stop logging</div>";//basic info
                log += "<div class='title' tag='basic'>Basic -</div>";
                log += "<div class='table' tag='basic'>";
                log += "<table>";
                log += this.generateRow(false, "Name", "name");
                log += this.generateRow(false, "Sprite", "currentSprite");
                log += this.generateRow(false, "Image Src", "currentImage");
                log += this.generateRow(true, "Alpha", "opacity");
                log += "</table>";
                log += "</div>";//position
                log += "<div class='title' tag='pos'>Position -</div>";
                log += "<div class='table' tag='pos'>";
                log += "<table>";
                log += this.generateRow(true, "Width", "w");
                log += this.generateRow(true, "Height", "h");
                log += this.generateRow(true, "X", "x");
                log += this.generateRow(true, "Y", "y");
                log += "</table>";
                log += "</div>";//anchor
                log += "<div class='title' tag='align'>Align -</div>";
                log += "<div class='table' tag='align'>";
                log += "<table>";
                log += this.generateRow(true, "Horizontal Alignment", "xAlign");
                log += this.generateRow(true, "Vertical Alignment", "yAlign");
                log += this.generateRow(true, "Anchor X", "anchorX");
                log += this.generateRow(true, "Anchor Y", "anchorY");
                log += "</table>";
                log += "</div>";//transform
                log += "<div class='title' tag='transform'>Transform -</div>";
                log += "<div class='table' tag='transform'>";
                log += "<table>";
                log += this.generateRow(true, "Rotation (deg)", "vrotate");
                log += this.generateRow(true, "Skex X (deg)", "vskewx");
                log += this.generateRow(true, "Skew Y (deg)", "vskewy");
                log += this.generateRow(false, "Horizontal Flip", "flipped");
                log += this.generateRow(false, "Vertical Flip", "vflipped");
                log += "</table>";
                log += "</div>";//filters
                log += "<div class='title' tag='filter'>Filters -</div>";
                log += "<div class='table' tag='filter'>";
                log += "<table>";
                log += this.generateRow(true, "Blur", "vblur");
                log += this.generateRow(true, "Grayscale", "vgrayscale");
                log += this.generateRow(true, "Invert", "vinvert");
                log += this.generateRow(true, "Sepia", "vsepia");
                log += this.generateRow(true, "Brightness", "vbrightness");
                log += this.generateRow(true, "Hue Rotate (deg)", "vhue");
                log += this.generateRow(true, "Saturation", "vsaturation");
                log += this.generateRow(true, "Contrast", "vcontrast");
                log += "</table>";
                log += "</div>";//text
                log += "<div class='title' tag='text'>Text -</div>";
                log += "<div class='table' tag='text'>";
                log += "<table>";
                log += this.generateRow(false, "Color", "textcolor");
                log += this.generateRow(false, "Font Size", "fontsize");
                log += this.generateRow(false, "Bold", "bold");
                log += this.generateRow(false, "Italic", "italic");
                log += "</table>";
                log += "</div>";
                log += "</div>";
                $("html").append(log)
            }
        }
    }, {
        key: "generateRow", value: function generateRow(editable, statName, stat) {
            var row = "<tr class='log-attr kvn-char-log-" + stat + "' stat='" + stat + "'>";
            if (!this.isAnimating()) {
                row += "<td class='kvn-log-stat-name'>" + statName + "</td>";
                row += "<td class='old'>";
                row += editable ? "<input class='kvn-edit' char='" + this.id + "' type='number' value='" + this[stat] + "'>" : "";
                var x = editable ? "style='display:none;' " : "";
                row += "<div class='act' " + x + ">" + this[stat] + "</div>";
                row += "</td>";
                row += "<td class='char-animate-log' style='display:none'> --></td>";
                row += "<td class='log-expected-end-val'>";
                row += "</td>"
            } else {
                row += "<td class='kvn-log-stat-name'>" + statName + "</td>";
                row += "<td class='old'>";
                row += editable ? "<input class='kvn-edit' char='" + this.id + "' style='display:none;' type='number' value='" + this[stat] + "'>" : "";
                row += "<div class='act'>" + "?" + "</div>";
                row += "</td>";
                row += "<td class='char-animate-log' style=''> --></td>";
                row += "<td class='log-expected-end-val'>" + this[stat];
                row += "</td>"
            }
            row += "<tr>";
            return row
        }//multithread support
    }, {
        key: "setWaiter", value: function setWaiter(char, promise) {
            if (!this.completed) {
                this.throwError("Incomplete Object Construction Exception: Character object not completed in construction. Please call chain-able method '.complete()' to complete construction. ")
            }
            if (this.stage === null) {
                this.throwError("Null Exception: Character not added to stage.")
            } else if (!this.stage.isActive) {
                this.throwError("Not loaded Exception: Not allowed to animate on stage that re not loaded.")
            }
            if (this.waiting[char] !== preNotify) {
                if (this.waiting[char] === null || typeof this.waiting[char] === "undefined") {
                    this.waiting[char] = promise
                } else {
                }
            } else {
                promise();
                this.waiting[char] = null
            }
        }
    }, {
        key: "notifyWaiter", value: function notifyWaiter(char) {
            if (!this.completed) {
                this.throwError("Incomplete Object Construction Exception: Character object not completed in construction. Please call chain-able method '.complete()' to complete construction. ")
            }
            if (this.stage === null) {
                this.throwError("Null Exception: Character not added to stage.")
            } else if (!this.stage.isActive) {
                this.throwError("Not loaded Exception: Not allowed to animate on stage that re not loaded.")
            }
            if (typeof this.waiting[char] === "function") {
                this.waiting[char]();
                this.waiting[char] = null
            } else {
                this.waiting[char] = preNotify
            }
        }
    }, {
        key: "waitFor", value: function waitFor(char, promise) {
            char.setWaiter(this, promise)
        }
    }]);
    return Character
}();
