

function soundLoadPhase() {
    //load/create sounds here

}


function publicStaticVoidMain(id) {

    if (id === 0) {
        //the first scene to be played here
        //playScene(scene,frame);
        playScene("demo");
    }

}


//recommended to load construct reusable characters here
var stage = new Stage("space","background.jpg")
    .complete()
                          //id       name      def sprite  width    height   x    y  anchorX   anchorY
var sophie = new Character("sophie","Sophie","def.png",    30,    30*(4960/1756), 0,  60,   50,      50)
    .addSprite("overjoyed","overjoy.png") //adds sprite
    .addSprite("proud","proud.png")
    .addSprite("shy","shy.png")
    .addSprite("smile","smile.png")
    .setDefaultSkippable(true) //make all animation skippable unless othewise stated. if this is not called, the default skippable's default is false
    .setDefaultAnimateInterpolation(swing) //make all animation swing instead of linearly animate
    .complete(); //comp
