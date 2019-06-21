# json-translate

This library helps to translate json on another languages.
Library is using Google Trasnlate API.

#### how to run app:

* At first, you need to complete that steps: https://cloud.google.com/translate/docs/quickstart-client-libraries?hl=RU ;

* Then you need to run at cloned repo:
    ```sh
   $ chmod u+x server.sh
    ```
* Took your private key JSON at root folder of app and rename it as: `key.json`

    | Structure of project | description  |
    | ------ | ------ |
    | node_modules | |
    | index.js | script |
    | key.json | Google traslate API private key|
    | source.json| json with source localization |
    | output.json | ***this json creates after compilation*** |
    
* After that run command `./server.sh LANG PROJECT_ID`, where LANG - your target language, PROJECT_ID - your Google project id.
    For example: `./server.sh fr mykey` - translate your JSON to french.

***warning!***
Script works asynchronously, so it's maybe take a few minutes. Happy hacking!

License
----

MIT, Alexey Gerasimov, 2019
