cd %cd%
@echo off
call git clone https://github.com/kirinnee/kvn-interpreter.git
cd kvn-interpreter/
call npm i gulp-cli -g
call npm i
pause