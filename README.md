This is a project to display temperature and light data from my living room over the web.

- The data will be collected with an Adafruit Circuit Playground
- The data will be written by I2C to an Adafruit Feather Huzzah ESP8266
- The ESP8266 will then POST this to a NodeJS server, eventually hosted on Heroku
- The NodeJS Heroku server will also host a client web page to display the data

To run the client:
- Run $ npm start
- Go to http://localhost in a browser
- Run $ node postTest.js to load some test data

To run the Arduino code:
- Create arduino/worker/credentials.h
- Write to it (replacing the wifi name and password:
  #define WIFI_NAME "<wifi-name>"
  #define WIFI_PASSWORD "<wifi-password>"
- Use the Arduino IDE to compile and upload the code

Learns/Problems

JavaScript
- Trying the structure suggested by http://ozkatz.github.io/structuring-client-side-javascript-code.html

Karma Unit Testing
- Run $ npm i karma karma-mocha karma-chai
- Run $ node node_modules/karma/bin/karma init my.conf.js
- Answer the questions chosing mocha as the test framework
- Edit my.conf.js changing singleRun to true. This causes tests to run without needing a server starting
- Add 'chai' to the list of frameworks
- Run $ node_modules/karma/bin/karma start my.conf.js
- Alternatively, in my.conf.js, set autoWatch to true and singleRun to false to run tests on file changes

Arduino
- An ESP8266 cannot be an I2C worker; it must be the master. It you try this, you'll see no messages transmitted.
  Thanks to:
  http://forum.arduino.cc/index.php?topic=419711.0 
  ESP8266 as I2C worker coming soon:
  https://github.com/esp8266/Arduino/issues/1330
- .ino files must live in a directory of the same name

Express
- If you use port 80, you don't need a port in your URL
- If you give Express static a path to the static directory, you don't need the directory name in the URL

git
- Adding .gitignore to your .gitignore is silly

