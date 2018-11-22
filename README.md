# blog-demo

This is blog project for demonstration. You can add,edit or delete blogs and see table of blogs. Also it's possible to filter by title on list page.

Project based on Angular 7.0.4 , Spring Boot 1.5.9, connects to Oracle DB

To test project visit https://bold-cat.herokuapp.com (it can wake up some time, because of heroku free plan limitation, but app is fast enough)

To setup project you need:

1. install maven
2. change DB address and credentials in main pom.xml file in profiles section
3. go to backend module and run mvn liquibase:update
4. go to main project dir and run mvn clean package -P dev
5. go to backend\target folder and run java -jar blog-demo-app.jar
6. open project in browser: type http://localhost:8080