let demo =  new Scene("demo",
[new Frame(function(){
	stage.bringCharacter(sophie);
	stage.bringCharacter(kvnfolder);
	stage.bringCharacter(imagefolder);
	stage.display(null,null,1000,function() {
		sophie.changeSprite('smile',function() {
			sophie.appear(500);
		});
	});
}, function(){return null})
,new Frame(function(){
	sophie.changeSprite(def,function() {
		sophie.speak('Hi!',function() {
			sophie.wait(300,function() {
				sophie.contSpeaking('I\'m Sophie!',function() {
					sophie.wait(300,function() {
						sophie.contSpeaking('And this is an example for the KVN engine~!!');
					});
				});
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	sophie.changeSprite('overjoyed',function() {
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
	sophie.speak('For starters, lets get familiar with the workspace');
}, function(){return null})
,new Frame(function(){
	sophie.speak('Please open up the kvn folder in the workspace!',function() {
		sophie.wait(500,function() {
			sophie.changeSprite('shocked',function() {
				sophie.speak('Ohh!',function() {
					sophie.wait(800,function() {
						sophie.changeSprite('smile',function() {
							sophie.speak('Workspace refers to the folder you have downloaded!');
						});
					});
				});
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	sophie.changeSprite(def,function() {
		sophie.speak('Anyways,',function() {
			sophie.wait(200,function() {
				sophie.contSpeaking('there are a few folders you need to be familiar with!');
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	sophie.speak('Hmmm..');
	sophie.changeSprite('unhappy',function() {
		sophie.triggered(1000,function() {
			sophie.changeSprite('smile',function() {
				sophie.speak('There!');
				sophie.move(-20,null,500,function() {
					kvnfolder.appear(500,function() {
						sophie.contSpeaking('This is how the kvn folder in your workspace should look like!');
					});
				});
			});
		},null,null,195);
	});
}, function(){return null})
,new Frame(function(){
	sophie.speak('Alright!',function() {
		sophie.wait(200,function() {
			sophie.changeSprite('overjoyed',function() {
				sophie.contSpeaking('Let\'s get started~!!');
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	sophie.changeSprite(def,function() {
		sophie.speak('This is the images folder!',function() {
			sophie.wait(300,function() {
				sophie.contSpeaking('This is where we place all our images');
			});
		});
	});
	kvnfolder.changeSprite('image');
}, function(){return null})
,new Frame(function(){
	sophie.changeSprite('overjoyed',function() {
		sophie.speak('I will explain a little more later!');
	});
}, function(){return null})
,new Frame(function(){
	sophie.changeSprite(def,function() {
		kvnfolder.changeSprite('script');
		sophie.speak('Next,',function() {
			sophie.wait(300,function() {
				sophie.contSpeaking('This is the scripts folder, where we put all our scripts!');
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	sophie.speak('and...');
}, function(){return null})
,new Frame(function(){
	kvnfolder.changeSprite('sound',function() {
		sophie.speak('This is where we place all our music or sound files!');
	});
}, function(){return null})
,new Frame(function(){
	sophie.speak('It\'s quite simple!');
}, function(){return null})
,new Frame(function(){
	sophie.changeSprite('proud',function() {
		sophie.speak('Ain\'t I good at explaining?');
	});
}, function(){return null})
,new Frame(function(){
	sophie.speak('Moving on, lets open the image folder!');
	kvnfolder.changeSprite('image');
}, function(){return null})
,new Frame(function(){
	kvnfolder.disappear(200,function() {
		imagefolder.appear(200,function() {
			sophie.speak('This is how the image folder look like!');
		});
	});
}, function(){return null})
,new Frame(function(){
	sophie.changeSprite('shy',function() {
		sophie.speak('It\'s pretty self-explanatory, but I will explain anyways!');
	});
}, function(){return null})
,new Frame(function(){
	sophie.changeSprite(def,function() {
		imagefolder.changeSprite('char',function() {
			sophie.speak('This is the character folder');
		});
	});
}, function(){return null})
,new Frame(function(){
	sophie.speak('You should place all your character images inside!');
}, function(){return null})
,new Frame(function(){
	sophie.speak('You can create subfolders and directories! For example, my default sprite is def.png!');
}, function(){return null})
,new Frame(function(){
	sophie.speak('Moving on...',function() {
		imagefolder.changeSprite('bkgd');
	});
}, function(){return null})
,new Frame(function(){
	sophie.speak('This is the background folder.',function() {
		sophie.wait(300,function() {
			sophie.contSpeaking('It works pretty much like character folder, except its for the stage\'s background!');
		});
	});
}, function(){return null})
,new Frame(function(){
	sophie.speak('Hmm...',function() {
		sophie.glitch();
		sophie.changeSprite('overjoyed',function() {
			sophie.contSpeaking('I think that\'s it for today!',function() {
				sophie.wait(300,function() {
					sophie.contSpeaking('My time is almost up...');
				});
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	sophie.speak('Well, see you around!',function() {
		sophie.disappear(2000);
		imagefolder.disappear(2000);
	});
}, function(){return null})
,new Frame(function(){
	stage.unDisplay(2000);
}, function(){return null})
]);