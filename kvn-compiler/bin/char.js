var cc = require('../config');
module.exports = function(godarr) {
	var swing, linear, easeIn, easeOut, easeBack, elastic, bounce, slowMotion, stepped, rough;
	class Stage {
		constructor(id, background, width, height, x, y, oriX, oriY) {
			this.cbkgd = background;
			this.dcbkgd = background;
			this.bkgdArr = [];
			this.bkgdArr["default"] = background;
			this.bkgdArr["def"] = background;
			this.dbkgdArr = [];
			this.dbkgdArr["default"] = background;
			this.dbkgdArr["def"] = background;
			this.customDir = null;
			this.completed = false;
			godarr[1].push(this);
		}
		//x y calculations
		getProjectedX(x, w, ori) {}
		getProjectedY(y, h, ori) {}
		getRealX() {}
		getRealY() {}
		//private mtheods
		isSkippable() {}
		isAnimating() {}
		pause() {}
		resume() {}
		proceed(force) {}
		applyCharacterCSS(char) {}
		selfReapplyFilterCSS() {}
		setCharArray(array, promise) {}
		changeArrayOrder(array, promise) {}
		hdisplay(backgroundOpacity, backdropOpacity, time, promise, swing, skippable) {}
		getImageDirectory() {
			if (this.customDir === null || typeof this.customDir !== "string") {
				return cc.bkgdPath;
			} else {
				var cd = this.customDir;
				if (cd.charAt(cd.length - 1) !== "/") {
					cd += "/";
				}
				return cd;
			}
		}
		//globals
		display(bkgdAlpha, bkdpAlpha, time, promise, swing, skippable) {}
		unDisplay(time, promise, swing, skippable, offBackDrop, nStage, bkgdA, bkdpA) {}
		bringCharacter(char, promise) {}
		removeCharacter(char, promise) {}
		//getters
		getCharArray() {}
		getTextbox() {}
		getID() {}
		//Setters
		resetValues() {}
		//CCs
		setCustomDirectory(text) {
			text = this.sanitizeInput("string", text, null, null, "Custom Directory", "setCustomDirectory");
			this.customDir = text;
			return this;
		}
		setDefaultSkippable(dskip) {
			return this;
		}
		setDefaultAnimateInterpolation(g) {
			return this;
		}
		addBackground(name, background) {
			this.bkgdArr[name] = background;
			return this;
		}
		setOpacity(opacity) {
			return this;
		}
		setCoverOpacity(opacity) {
			this.coverOpacity = opacity;
			return this;
		}
		setBackdropOpacity(opacity) {
			return this;
		}
		setOverlayOpacity(opacity) {
			return this;
		}
		setCoverColor(color) {
			return this;
		}
		setBackdropColor(color) {
			return this;
		}
		setOverlayColor(color) {
			return this;
		}
		setInvert(invert) {
			return this;
		}
		setBlur(blur) {
			return this;
		}
		setGrayscale(gs) {
			return this;
		}
		setSepia(sepia) {
			return this;
		}
		setContrast(contrast) {
			return this;
		}
		setSaturation(saturation) {
			return this;
		}
		setBrightness(brightness) {
			return this;
		}
		setHueRotation(angle) {
			return this;
		}
		setRotation(angle) {
			return this;
		}
		setXSkew(skewX) {
			return this;
		}
		setYSkew(skewY) {
			return this;
		}
		setVerticalFlip(boolean) {
			return this;
		}
		setHorizontalFlip(boolean) {
			return this;
		}
		setXOffSet(x) {
			return this;
		}
		setYOffSet(y) {
			return this;
		}
		setAnchorX(aX) {
			return this;
		}
		setAnchorY(aY) {
			return this;
		}
		setWidth(width) {
			return this;
		}
		setHeight(height) {
			return this;
		}
		complete() {
			return this;
		}
		//preAnims
		preMove(x, y) {}
		preScale(x, y) {}
		preRotate(angle) {}
		preSkew(x, y) {}
		//animations
		displayText(text, time, promise, name, centered, size, color, bold, italic, skippable, clear) {}
		fadeInText(text, time, promise, name, centered, size, color, bold, italic, skippable, clear) {}
		wait(time, promise, skippable) {}
		changeCover(opacity, color, time, promise, swing, skippable) {}
		changeBackdrop(opacity, color, time, promise, swing, skippable) {}
		changeOverlay(opacity, color, time, promise, swing, skippable) {}
		fadeOutBackground(time,promise,swing,skippable){}
   		fadeInBackground(time,promise,swing,skippable){}
		instantChangeBG(src) {}
		changeBackground(background, opacity, time, promise, swing, skippable) {}
		backgroundBlur(blur, time, promise, swing, skip) {}
		backgroundInvert(invert, time, promise, swing, skip) {}
		backgroundGrayscale(grayscale, time, promise, swing, skip) {}
		backgroundSepia(sepia, time, promise, swing, skip) {}
		backgroundContrast(contrast, time, promise, swing, skip) {}
		backgroundSaturate(saturation, time, promise, swing, skip) {}
		backgroundBrightness(brightness, time, promise, swing, skip) {}
		backgroundRotateHue(hue, time, promise, swing, skip) {}
		rotateBackgroundClockwise(angle, time, promise, swing, skip) {}
		rotateBackgroundAnticlockwise(angle, time, promise, swing, skip) {}
		pan(x, y, time, promise, swing, skip) {}
		shiftBackground(x, y, time, promise, swing, skip) {}
		scaleBackground(x, y, time, promise, swing, skip) {}
		skewBackground(x, y, time, promise, swing, skip) {}
		flipBackgroundHorizontally(promise, time, swing, skip) {}
		flipBackgroundVertically(promise, time, swing, skip) {}
		animate(time, promise, swing, skippable) {}
		resetStage(time, promise, swing, skippable) {}
		//instants
		closeTextBox(promise) {}
		displayOptionPrecise(optionArray, fontsize, width, padding, margin, columns, promise) {}
		displayOption(optionArray, promise) {}
		setOption(option, x, y, width, fontSize, padding) {}
		displayMarker(promise) {}
		removeMarker(promise) {}
		//frills
		glitch() {}
		fix() {}
		trigger(time, promise, skip, shake, delay) {}
		earthquake(time, promise, skip, shake, delay) {}
		//multi-threading methods
		setWaiter(char, promise) {}
		notifyWaiter(char) {}
		waitFor(char, promise) {}
		//debug
		typeError(error, input) {}
		checkNumberError(type, method, input, def) {}
		throwError(errorMessage) {}
		sanitizeInput(acceptedType, input, cdef, edef, paramName, methodName) {}
	}
	class Character {
		//constructor
		constructor(id, name, defaultImage, width, height, xOffSet, yOffSet, valign, halign) {
			this.spriteArray = [];
			this.spriteArray["default"] = defaultImage;
			this.spriteArray["def"] = defaultImage;
			this.dspriteArray = [];
			this.dspriteArray["default"] = defaultImage;
			this.dspriteArray["def"] = defaultImage;
			this.cyspriteArray = [];
			this.cyspriteArray["default"] = defaultImage;
			this.cyspriteArray["def"] = defaultImage;
			this.currentImage = defaultImage;
			this.customDir = null;
			godarr[0].push(this);
		}
		//getters
		getName() {}
		getID() {}
		getImage() {}
		getOverlay() {}
		getWidth() {}
		getHeight() {}
		getHFlip() {}
		getVFlip() {}
		getOpacity() {}
		getCurrentI() {}
		getGrayScale() {}
		getBlur() {}
		getSepia() {}
		getInvert() {}
		isSkippable() {}
		isAnimating() {}
		isCycling() {}
		//privates
		getStage() {}
		setStage(stage) {}
		proceed(force) {}
		pause() {}
		resume() {}
		getAlignX(x) {}
		getAlignY(y) {}
		getAnchorXOff(x, width) {}
		getAnchorYOff(y, height) {}
		getRealX() {}
		getRealY() {}
		getProjectedX(xAl, xAn, xOs, xWid) {}
		getProjectedY(yAl, yAn, yOs, yWid) {}
		getDiv() {}
		getGhost(id) {}
		reapplyFilterCSS() {}
		getImageDirectory() {
			if (this.customDir === null || typeof this.customDir !== "string") {
				return cc.charImgDir;
			} else {
				var cd = this.customDir;
				if (cd.charAt(cd.length - 1) !== "/") {
					cd += "/";
				}
				return cd;
			}
		}
		//CCs
		complete() {
			return this;
		}
		setCustomDirectory(text) {
			return this;
		}
		setDefaultSkippable(dskip) {
			return this;
		}
    setPreSpeakScale(scale){
        return this;
    }

    setPreSpeakTime(time){
        return this;
    }
		setDefaultAnimateInterpolation(g) {
			return this;
		}
		addSprite(name, sprite) {
			if (sprite.charAt(0) === "/") {
				sprite = sprite.substring(1, sprite.length);
			}
			var path = this.getImageDirectory() + sprite;
			if (!this.spriteArray.hasOwnProperty(name)) {
				this.spriteArray[name] = sprite;
				return this;
			} else {
				this.throwError("Illegal Argument: Sprite with that name already exist. Sprite name: " + name);
			}
		}
		setFontSize(font) {
			return this;
		}
		setBold() {
			return this;
		}
		setItalic() {
			return this;
		}
		editBold(bold) {
			return this;
		}
		editItalic(italic) {
			return this;
		}
		setTextColor(color) {
			return this;
		}
		setOpacity(opacity) {
			return this;
		}
		setAnchorX(aX) {
			return this;
		}
		setAnchorY(aY) {
			return this;
		}
		setHorizontalAlign(ha) {
			return this;
		}
		setVerticalAlign(va) {
			return this;
		}
		setHorizontalFlip(boolean) {
			return this;
		}
		setVerticalFlip(boolean) {
			return this;
		}
		setXOffSet(x) {
			return this;
		}
		setYOffSet(y) {
			return this;
		}
		setWidth(width) {
			return this;
		}
		setHeight(height) {
			return this;
		}
		setInvert(invert) {
			return this;
		}
		setBlur(blur) {
			return this;
		}
		setGrayscale(gs) {
			return this;
		}
		setSepia(sepia) {
			return this;
		}
		setContrast(contrast) {
			return this;
		}
		setSaturation(saturation) {
			return this;
		}
		setBrightness(brightness) {
			return this;
		}
		setHueRotation(hue) {
			return this;
		}
		setRotation(rotate) {
			return this;
		}
		setXSkew(XSkew) {
			return this;
		}
		setYSkew(YSkew) {
			return this;
		}
		//Setters
		setNormalText() {}
		changeBold(bold) {}
		changeItalic(italic) {}
		changeName(name) {}
		resetValues() {}
		//Pre Animations
		preScale(width, height) {}
		preMove(x, y) {}
		preRotate(angle) {}
		preSkew(x, y) {}
		//Instants
		changeSprite(name, promise) {}
		bringToFront(promise) {}
		sendToBack(promise) {}
		bringBelowOverlay(promise) {}
		bringAboveOverlay(promise) {}
		//Animations
		speak(text, promise, time, skip, pw, bool) {}
		contSpeaking(text, promise, time, skip) {}
		setDefaultFlip(promise, time, graph, skip) {}
		flipVertically(promise, time, graph, skip) {}
		flipHorizontally(promise, time, graph, skip) {}
		scale(x, y, time, promise, swing, skippable) {}
		move(x, y, time, promise, swing, skippable) {}
		jump(x, y, time, promise, swing, skippable) {}
		appear(time, promise, swing, skippable) {}
		disappear(time, promise, swing, skippable) {}
		moveAnchorX(aX, time, promise, swing, skippable, adjust) {}
		moveAnchorY(aY, time, promise, swing, skippable, adjust) {}
		moveVerticalAlign(valign, time, promise, swing, adjust, skippable) {}
		moveHorizontalAlign(halign, time, promise, swing, adjust, skippable) {}
		blur(blur, time, promise, swing, skip) {}
		invert(invert, time, promise, swing, skip) {}
		grayscale(grayscale, time, promise, swing, skip) {}
		sepia(sepia, time, promise, swing, skip) {}
		contrast(contrast, time, promise, swing, skip) {}
		saturate(saturate, time, promise, swing, skip) {}
		brightness(brightness, time, promise, swing, skip) {}
		rotateHue(angle, time, promise, swing, skip) {}
		rotateClockwise(angle, time, promise, swing, skip) {}
		rotateAntiClockwise(angle, time, promise, swing, skip) {}
		skew(x, y, time, promise, swing, skip) {}
		wait(time, promise, skippable) {}
		animate(time, promise, easing, skippable) {}
		resetAll(time, promise, swing, skippable) {}
		//frill
		heartAttack(xOff, yOff, promise, skip) {}
		triggered(time, promise, skip, shake, delay) {}
		glitch(image) {}
	    endSpeak(promise, timing) {}
	    preSpeak(promise, scale, timing) {}
		interupt(){}
		fix() {}
		cycle(sequence) {}
		backFromCycle() {}
		endOfCycle() {}
		stopCycle(time, promise, swing, skip) {}
		//debug
		typeError(error, input) {}
		throwError(error) {}
		constructorInput(acceptedType, input, paramName) {}
		cSInput(acceptedType, input, cdef, edef, paramName) {}
		sanitizeInput(acceptedType, input, cdef, edef, paramName, methodName) {}
		stopLogging() {}
		startLogging() {}
		generateRow(editable, statName, stat) {}
		//multithread support
		setWaiter(char, promise) {}
		notifyWaiter(char) {}
		waitFor(char, promise) {}
	}
	@@HERE@@
	function gulpcal() {
		var images = [];
		var characters = godarr[0];
		var backgrounds = godarr[1];
		for (var c in characters) {
			var char = characters[c];
			var dir = char.getImageDirectory();
			for (var spriteName in char.spriteArray) {
				var sprite = char.spriteArray[spriteName];
				if (typeof sprite !== "string" || sprite === "default") {
					continue;
				}
				if (sprite.charAt(0) === "/") {
					sprite = sprite.substring(1, sprite.length);
				}
				var path = dir + sprite;
				var sections = path.split('.');
				var ext = "." + sections.pop();
				var base = sections.join('.');
				images.push([base, ext]);
			}
		}
		for (var b in backgrounds) {
			var bg = backgrounds[b];
			var dir = char.getImageDirectory();
			for (var bgname in bg.bkgdArr) {
				var bkgd = bg.bkgdArr[bgname];
				if (typeof bkgd !== "string" || bgname === "default") {
					continue;
				}
				if (bkgd.charAt(0) === "/") {
					bkgd = bkgd.substring(1, bkgd.length);
				}
				var path = dir + bkgd;
				var sections = path.split('.');
				var ext = "." + sections.pop();
				var base = sections.join('.');
				images.push([base, ext]);
			}
		}
		return images;
	}
	return gulpcal();
}
