# json-translate

This library helps to translate JSON to other languages.
It uses Google Trasnlate API.

#### how to run app:

* First of all, you need to complete that steps: https://cloud.google.com/translate/docs/quickstart-client-libraries?hl=RU ;

* Then, at cloned repo you need to run:
    ```sh
   $ chmod u+x server.sh
    ```
* Took your private JSON key at the root folder of app and rename it to: `key.json`

    | Structure of project | description  |
    | ------ | ------ |
    | node_modules | |
    | index.js | script |
    | key.json | Google traslate API private key|
    | source.json| JSON with source localization |
    | output.json | ***compiled JSON as a result of a script*** |
    
* Then run command `./server.sh LANG PROJECT_ID`, where:
    * LANG - your target language;
    * PROJECT_ID - your Google project id.

    For example: `./server.sh fr mykey` - translate your JSON to french.

***warning!***

That script works asynchronously, so it may take a few minutes to complete. *Happy hacking*!

License
----

MIT, Alexey Gerasimov, 2019
