let demo =  new Scene("demo",
[new Frame(function(){
	stage.bringCharacter(sophie);
	stage.display(null,null,1000,function() {
		sophie.appear(500);
	});
}, function(){return null})
,new Frame(function(){
	sophie.speak('Hi, this is an example on how to use the KVN engine');
}, function(){return null})
,new Frame(function(){
	sophie.changeSprite('smile',function() {
		sophie.speak('It\'s designed for non-programmers to code!');
	});
}, function(){return null})
,new Frame(function(){
	sophie.changeSprite('shy',function() {
		sophie.speak('Right now its still in a very experimental stage...');
	});
}, function(){return null})
,new Frame(function(){
	sophie.speak('BUT!',function() {
		sophie.wait(500,function() {
			sophie.changeSprite('overjoyed',function() {
				sophie.speak('I can go through some simple stuff with you!');
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	sophie.speak('For starters, lets see where you put your images and scripts');
}, function(){return null})
,new Frame(function(){
	sophie.speak('Backgrounds goes into images/bkgd/ folder');
}, function(){return null})
,new Frame(function(){
	sophie.contSpeaking('and characters goes into image/char folder!');
}, function(){return null})
,new Frame(function(){
	sophie.speak('Scripts, on the other hand, goes into scripts/ folder!');
}, function(){return null})
,new Frame(function(){
	sophie.changeSprite('proud',function() {
		sophie.speak('Ain\'t I good at explaining?');
	});
}, function(){return null})
,new Frame(function(){
	sophie.speak('Well, that\'s it for today!');
}, function(){return null})
]);