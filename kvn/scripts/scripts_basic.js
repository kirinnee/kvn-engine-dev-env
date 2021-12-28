let script_basic =  new Scene("script_basic",
[new Frame(function(){
	stage.bringCharacter(sophie);
	stage.display(null,null,500,function() {
		sophie.changeSprite(def,function() {
			sophie.appear(500);
		});
	});
}, function(){return null})
,new Frame(function(){
	sophie.changeSprite('shocked');
	sophie.speak('Ohh!!');
}, function(){return null})
,new Frame(function(){
	sophie.changeSprite('smile',function() {
		sophie.speak('Hello again!',function() {
			sophie.contSpeaking('Welcome back to our tutorial!');
		});
	});
}, function(){return null})
,new Frame(function(){
	sophie.speak('This time I will go through how to...');
}, function(){return null})
]);
