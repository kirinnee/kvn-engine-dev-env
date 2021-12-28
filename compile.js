const copy = require("copy");
const rimraf = require("rimraf");
const copydir = require('copy-dir');

function cp(src, target) {
    return new Promise((r) => copy(src, target, () => r()))
}

async function main() {
    // clean
    rimraf.sync("kvn-compiler/workspace/");
    await cp(["*.svg", "*.gif", "*.png", "*.html"], "kvn-compiler/workspace")
    copydir.sync('css', 'kvn-compiler/workspace/css', {
        utimes: true,  // keep add time and modify time
        mode: true,    // keep file mode
        cover: true    // cover file when exists, default is true
    });
    copydir.sync('js', 'kvn-compiler/workspace/js', {
        utimes: true,  // keep add time and modify time
        mode: true,    // keep file mode
        cover: true    // cover file when exists, default is true
    });
    copydir.sync('kvn', 'kvn-compiler/workspace/kvn', {
        utimes: true,  // keep add time and modify time
        mode: true,    // keep file mode
        cover: true    // cover file when exists, default is true
    });
    copydir.sync('debug', 'kvn-compiler/workspace/debug', {
        utimes: true,  // keep add time and modify time
        mode: true,    // keep file mode
        cover: true    // cover file when exists, default is true
    });
}

main().then(() => console.log("done!"))
