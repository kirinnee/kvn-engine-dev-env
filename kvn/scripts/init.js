function soundLoadPhase() {
}

function publicStaticVoidMain(id){
if(id===0){
	playScene('demo',0);
}
}
window.sophie = new Character('sophie','Sophie','def.png',30,30*(4960/1756),0,60,50,50);
sophie.addSprite('overjoyed','overjoy.png');
sophie.addSprite('proud','proud.png');
sophie.addSprite('shy','shy.png');
sophie.addSprite('smile','smile.png');
sophie.addSprite('shocked','shocked.png');
sophie.addSprite('unhappy','unhappy.png');
sophie.setDefaultSkippable(true);
sophie.setDefaultAnimateInterpolation(swing);
sophie.complete();
window.kvnfolder = new Character('kvnfolder','n','folder.JPG',40,40*(184/464),15,0,50,50);
kvnfolder.addSprite('script','scripts.JPG');
kvnfolder.addSprite('sound','sound.JPG');
kvnfolder.addSprite('config','config.JPG');
kvnfolder.addSprite('image','images.JPG');
kvnfolder.complete();
window.imagefolder = new Character('imagefolder','n','imagefold.JPG',40,40*127/470,15,0,50,50);
imagefolder.addSprite('char','char.JPG');
imagefolder.addSprite('bkgd','bkgd.JPG');
imagefolder.complete();
window.stage = new Stage('stage','background.jpg');
stage.complete();