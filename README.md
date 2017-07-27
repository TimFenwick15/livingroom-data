This is a project to display temperature and light data from my living room over the web.

- The data will be collected with a Adafruit Circuit Playground
- The data will be written by I2C to an Adafruit Feather Huzzah ESP8266
- The ESP8266 will then POST this to a NodeJS server, eventually posted on Heroku
- The NodeJS Heroku server will also host a client web page to display the data

