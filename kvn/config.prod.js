//Please enter how large you want the screen width relative to the full screen width (85 = 85%)
let vnScreenWidth = 100;
//the ratio of the vn Width to the vn Height. If you want your VN to have a 16:9 ratio, then put 16:9
let vnScreenRatio = "16:9";
//hide overflow
let hideOverflow = true;

//The links to all your script in
let scripts = ["demo.js"];

let displaySpriteName = false;

//allow for fullscreen
let hasFullScreenOption = false;
//alert for mobile users to use full screen
let alertForFullScreen = false;

//enforces lanscape mode
let enforceLandscape = true;
//text speedhe higher, the fast, between 0 and 1 would be slower
let textSpeed = 0.75;

//completion marker, please use HTML accepted imputs (hex, ideally)
let completionMarkerRunningColor = "#ff6666";
let completionMarkerCompleteColor = "#6bffa1";

//debug mode
let debugMode = false;
//catches native error
let catchNativeError = false;
//generates a fake error on console, for stack tracing
let generateBrowserConsoleStacktrace = false;
//Only has effect if 'generateBrowserConsoleStacktrace' is true. Generates red error with the full freaking stacktrace
let verboseError = false;
//user my console :>>
let useKirinneeConsole = true;
//hide advance debug by default
let hideAdvanceDebug = true;
//advance debug "go" scene function escape error log. Note: this may be screwy as all hell
let debugGoSceneEvadeError = true;

//background and character logging
let backgroundLogging = false;
let characterLogging = false;

let enableSound = true;

//embbed mode
let embbedMode = false;
//ratios still apply, whether to set to 100% 100% for the most parent div for the KVN application
let cssWidth = false;
let embbedFSWidth = 100; //in view width
let embbedScrollTrigger = false;

let paceIntegration = true;

let useResponsiveImages = false;
let responsiveImageDefKey = "def";
let responsiveImageDefSize = 2000;
//100 = 2000px
let responsiveImage = {"def": 100};

let devEnv = false;
