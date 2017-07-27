// CP/Slave

#include <Wire.h>
#include <Adafruit_CircuitPlayground.h>

byte tempData;
byte lightData;
byte byteArr[2];

void setup() {
  Serial.begin(9600);
  Wire.begin(8);
  Wire.onRequest(requestEvent);
}

void loop() {
  tempData = (int) CircuitPlayground.temperature();
  lightData = (int) CircuitPlayground.lightSensor();
  byteArr[0] = tempData;
  byteArr[1] = lightData;
  
  Serial.print(tempData);
  Serial.print(" ");
  Serial.println(lightData);
  delay(60000);
}

void requestEvent() {
  /*Wire.write(tempData);
  Wire.write(",");
  Wire.write(lightData);
  Wire.write(",");*/
  Wire.write("20");
  Wire.write("21");
}
