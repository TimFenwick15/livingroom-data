// CP/Worker

#include <Wire.h>
#include <Adafruit_CircuitPlayground.h>

char wireData[6];

void setup() {
  Serial.begin(9600);
  Wire.begin(8);
  Wire.onRequest(requestEvent);
}

void loop() {
  int tempData = (int) CircuitPlayground.temperature();
  int lightData = (int) CircuitPlayground.lightSensor();
  String data = "";
  data += tempData;
  data += " ";
  data += lightData;
  data += " ";
  data.toCharArray(wireData, 6); 
  delay(10000);
}

void requestEvent() {
  Wire.write(wireData);
}
