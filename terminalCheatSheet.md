## Usage

This document is intended to be a short list of common terminal commands and how to use them. With these commands you can find out where you are, and move to where you need to be with ease.

### pwd

`pwd` is short for `print working directory`. When you run it in the terminal, it will tell you the current directory you are in.

    > pwd
    /Users/Robbert/Bootcamp

### ls

`ls` is short for `list`. It will give you a list of all files and directories in the current directory

    > ls
    UCB-VIRT-FSF-PT-09-2022-U-LOLC/
    class_project_1/
    class_activity/

Running `ls -l` will show you a `long` format of data that tells you information about the files such as size and date last modified.

Running `ls -a` will show you hidden files and folders.

### cd

`cd` is short for `change directory`. You can use `cd` to move between directories

    > pwd
    /Users/Robbert
    > cd Bootcamp
    > pwd
    /Users/Robbert/Bootcamp

Running `cd` with no options will return you to your `home directory`, no matter where you are.

Running `cd ..` will go back down a directory

    > pwd
    /Users/Robbert/Bootcamp
    > cd ..
    > pwd
    /Users/Robbert

You can also chain directories together like this:

    > pwd
    /Users/Robbert
    > cd Bootcamp/class_activity
    > pwd
    /Users/Robbert/Bootcamp/class_activity

### mkdir

`mkdir` is short for `make directory`. It is responsible for creating new directories.

    > ls
    Bootcamp/
    > mkdir test
    > ls
    Bootcamp/
    test/

### cat

`cat` is short for `concatenate`. It can be used to print the contents of a file.

    > ls
    test.txt
    > cat test.txt
    This is the content of test.txt