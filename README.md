# blog-demo

This is blog project for demonstration. You can add,edit or delete blogs and see table of blogs. Also it's possible to filter by title on list page.

Project based on Angular 7.0.4 , Spring Boot 1.5.9, connects to Oracle DB

To test project visit https://bold-cat.herokuapp.com (it can wake up some time, because of heroku free plan limitation, but app is fast enough)

To setup project you need:

1. install maven
2. install node 11.5.0
3. install yarn 1.12.3
4. change DB address and credentials in main pom.xml file in profiles section
5. go to backend module and run mvn liquibase:update
6. go to main project dir 
7. run yarn install --network-timeout 1000000
8. run mvn clean package -P dev
9. go to backend\target folder and run java -jar blog-demo-app.jar
10. open project in browser: type http://localhost:8080