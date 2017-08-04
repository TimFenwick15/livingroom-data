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
  String data = "";
  Wire.requestFrom(8, 5);
  while (Wire.available()) {
    char c = Wire.read();
    data += c;
  }
  int temperature = atoi (data.substring(0, data.indexOf(" ")).c_str());
  int light = atoi (data.substring(data.indexOf(" ") + 1).c_str());
  
  // Connect to the client server
  WiFiClient client;
  if (!client.connect(SERVER, PORT)) {
    Serial.println("connection failed");
    delay(20000);
    return;
  }

  String postBody = String("temperature=") + temperature +
    String("&light=") + light;
  Serial.println(postBody);
  client.print(String("POST /data HTTP/1.1\r\n") +
    "host: " + SERVER + ":" + PORT + "\r\n" +
    "Content-Type: application/x-www-form-urlencoded\r\n" +
    "Content-Length: " + postBody.length() +
    "\r\n\r\n" +
    postBody +
    "\n");

  delay(30000);
}

 
