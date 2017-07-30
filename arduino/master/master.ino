// ESP/Master

#include <Wire.h>
#include <ESP8266WiFi.h>
#include "credentials.h"

void setup() {
  Serial.begin(9600);
  while (!Serial)
    delay(50);

  WiFi.begin(WIFI_NAME, WIFI_PASSWORD);
  
  while (WiFi.status() != WL_CONNECTED) {
    Serial.println(WiFi.status());
    delay(500);
  }

  Serial.println("connected");
  
  Wire.begin();
}

void loop() {
  Wire.requestFrom(8, 5);
  while (Wire.available()) {
    char c = Wire.read();
    Serial.print(c);
  }
  
  // Connect to the client server
  WiFiClient client;
  if (!client.connect(SERVER, PORT)) {
    Serial.println("connection failed");
    delay(20000);
    return;
  }

  client.print(String("POST ") + "/data HTTP/1.1\r\n" +
    "Host: http://192.168.1.146:8080\r\n" +
    "Content-Type: application/x-www-form-urlencoded\r\n" +
    "Content-Length: 23\r\n" +
    "\r\n" +
    "temperature=20&light=15\n");

  delay(25000);
}

 
