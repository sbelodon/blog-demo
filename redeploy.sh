#!/bin/sh
yarn install --network-timeout 1000000
mvn clean install -P dev-postgres
java -jar backend/target/dependency/liquibase.jar --defaultsFile=backend/target/classes/liquibase.properties update
java -agentlib:jdwp=transport=dt_socket,server=y,suspend=n,address=5005 -jar backend/target/blog-demo-app.jar