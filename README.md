# KVN Dev Env

Setup KVN workspace for developing visual novels

# Pre-requisite

1. [NodeJS](https://nodejs.org/en/)
2. NPM (Should come with NodeJS)
3. [Atom](https://atom.io/)

# Setting up Workspace

1. Clone this repository
2. Within Atom Editor, go to `files` > `settings` > `Editor` > `Tab Length` and change it to 4
3. Within Atom Editor, go to `files` > `settings` > `Install`
4. Search for `kvn-lang` package and install it
5. Open this repository within Atom Editor

# Getting Started

1. Run `./setup.sh`
2. Run `npm run dev`
3. Under `kvn` folder, you can edit files in `images/` and `scripts/` (`.kvn` files only)
4. Open `vn.html` in the root folder
5. There will be a basic tutorial in the form of a Visual Novel

# Configurations

You can configure your VN Engine in `kvn/config.js` for development configurations and `kvn/config.prod.js` for
production configurations.

# Compile to production

1. Check compilation options in `kvn-compiler/config.js`
2. Run `npm run build` in the root folder
3. Find the compiled artifact as `kvn-compiler/export` folder
