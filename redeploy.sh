#!/bin/sh
yarn install --network-timeout 1000000
mvn clean install -P dev-postgres
java -jar backend/target/blog-demo-app.jar