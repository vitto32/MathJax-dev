Vittorio@Libre
- creare custom.cfg (vedi sotto)
- installare MacTeX e FontForge (command line tools)
- verificare che nel sistema siano installati i comandi usati in custom.cfg (fino a ttx, gli altri non servono)
- verificare siano giuste le cartelle FONTDIR e MATHJAXDIR
- installare npm i uglify-js -g
- lanciare 'make -C fonts ttf'
- lanciare 'make -C fonts small'
- (opzionale) lanciare 'make -C fonts pack'

--------------------------------------------------------------------------------
fredw: This must be updated now that MathJax-dev is configurable so that people
feel more welcome to use it. Quick hints:

cp default.cfg custom.cfg

then install all dependencies indicated in custom.cfg and modify the paths if
necessary. Now run

make config

and you should be ready to use at least the packer and font generator (other
parts do not use the global configuration yet).

Try "make help" for more information.
--------------------------------------------------------------------------------

These are developer tools for those who may need to modify MathJax.
Users and page authors DO NOT NEED these files, so unless you are 
writing extensions to MathJax, you need go no further.

This directory holds the various support scripts that were used 
to create data tables and fonts used byt MathJax.  These include

    fonts -- to create the data, images, and web-based fonts
    MML-entities -- to create the entity translation tables
       for the MathML input jax
    operator-dictionary -- to create the operator dictionary
       tables for the mml element jax
    packer -- to create the minified versions of the js files
    combiner -- to create the combined configuration files

For the packer directory, you will need to obtain a copy of the
yuicompressor from

    http://developer.yahoo.com/yui/compressor/

and unpack it in that directory in order to use the compressor.

These scripts may call on tools you don't have, or that are in 
different locations on your system.  You may have to obtain 
those programs, or edit the paths in order for the scripts to 
work properly.

These are not intended for you to use, in general, and are only 
included for completeness.  They are not for the casual user, 
and require experience with the command line, and other system 
administration skills.

---------------------------------------------------------------------
The contents of this directory and its subdirectories are all

Copyright (c) 2009-2011 Design Science, Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at
 
    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

