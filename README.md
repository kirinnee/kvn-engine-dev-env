# KVN Dev Env
Setup KVN workspace for developing visual novels

# Pre-requisite
1. NPM
2. Git

# Getting Started
You can update the engine by running the update.bat. Remember to change your configuration back afterwards

To start the VN run VN.html

Creation of character, stages and sound is done in kvn/scripts/init.js

Scenes can be written in .kvn or .js, recommended for non-programmers is .kvn with atom edittor

We have a package with syntax highlight and autocomplete in atom. Search kvn-lang and install (by Kirinnee)

For documentation, visit kvn.bigbulb.studio

To use .kvn, you need to run the compiler in kvn-interpreter/compiler.bat, this will automatically compile .kvn files into .js
To update the interpreter, run update.bat in kvn-interpreter folder
