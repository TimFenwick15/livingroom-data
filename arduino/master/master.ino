// ESP/Master

#include <Wire.h>
#include "credentials.h"

void setup() {
  Wire.begin();
  Serial.begin(9600);
}

void loop() {
  Wire.requestFrom(8, 5);
  while (Wire.available()) {
    char c = Wire.read();
    Serial.print(c);
  }

  delay(25000);
  Serial.println(WIFI_PASSWORD);
}

/*
#include <ESP8266WiFi.h>
const char* ssid     = "<wifi name>";
const char* password = "<wifi password>";
const char* host     = "<server>";
const int httpPort   = 8080;

void setup() {


  while (WiFi.status() != WL_CONNECTED) {
  delay(500);
  Serial.print(".");
}

void loop() {

  WiFiClient client;
  if (!client.connect(host, httpPort)) {
    Serial.println("connection failed");
    error();
    delay(20000);
    return;
  }

  client.print(String("GET ") + url + " HTTP/1.1\r\n" +
               "Host: " + host + "\r\n" + 
               "Connection: close\r\n\r\n");
  
  
  HTTPClient http;
  http.begin("https://domain/post.php");
  http.addHeader("Content-Type", "application/x-www-form-urlencoded");
  http.POST("from=user%40mail.com&to=user%40mail.com&text=Test+message+post&subject=Alarm%21%21%21");
  http.writeToStream(&Serial);
  http.end();
}
 */

 
