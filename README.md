This is a project to display temperature and light data from my living room over the web.

- The data will be collected with an Adafruit Circuit Playground
- The data will be written by I2C to an Adafruit Feather Huzzah ESP8266
- The ESP8266 will then POST this to a NodeJS server, eventually hosted on Heroku
- The NodeJS Heroku server will also host a client web page to display the data

To run the client:
- Run $ npm start
- Go to http://localhost:8080 in a browser
- Run $ node postTest.js to load some test data
- To run the tests, $ npm test

To run the Arduino code:
- Create arduino/worker/credentials.h
- Write to it (replacing the wifi name and password:
  #define WIFI_NAME "<wifi-name>"
  #define WIFI_PASSWORD "<wifi-password>"
- Use the Arduino IDE to compile and upload the code

Learns/Problems

JavaScript
- Trying the structure suggested by http://ozkatz.github.io/structuring-client-side-javascript-code.html

Express
- If you use port 80, you don't need a port in your URL but Ubuntu didn't like Express listening on port 80
- If you give Express static a path to the static directory, you don't need the directory name in the URL

Karma Unit Testing
- Run $ npm i karma karma-mocha karma-chai
- Run $ node node_modules/karma/bin/karma init my.conf.js
- Answer the questions chosing mocha as the test framework
- Edit my.conf.js changing singleRun to true. This causes tests to run without needing a server starting
- Add 'chai' to the list of frameworks
- Run $ node_modules/karma/bin/karma start my.conf.js
- Alternatively, in my.conf.js, set autoWatch to true and singleRun to false to run tests on file changes
- Karma uses its own webserver to run unit tests. If a Karma unit test makes a network request to your web server, the response will be blocked by default. Dev-tools had an error message to cover this. The GET response needs a header setting to allow this. In Expess:
  res.set('Access-Control-Allow-Origin', 'http://localhost:9876');
- There's an example of an async unit test on the karma-test branch in web\models.test.js
- Karma loads and excutes scripts alphabetically. If one script depends on another, it will error. I didn't spot this until late because my app.js was running code from other scripts in a setInterval.
  There are a couple of solutions to this:
  - You could list the files to load into Karma in the order you want ( :( )
  - You could exclude any files from being loaded which would cause problems which is my solution for now since that file doesn't need unit testing
  - Concatenate scripts as a build step which a large project would probably want to do anyway

Arduino
- An ESP8266 cannot be an I2C worker; it must be the master. It you try this, you'll see no messages transmitted.
  Thanks to:
  http://forum.arduino.cc/index.php?topic=419711.0 
  ESP8266 as I2C worker coming soon:
  https://github.com/esp8266/Arduino/issues/1330
- .ino files must live in a directory of the same name

git
- Adding .gitignore to your .gitignore is silly

