# blog-demo

This is blog project for demonstration. You can add,edit or delete blogs and see table of blogs. Also it's possible to filter by title on list page.

Project based on Angular 8.2.5 , Spring Boot 1.5.9, connects to Oracle DB

To test project visit https://bold-cat.herokuapp.com (it can wake up some time, because of heroku free plan limitation, but app is fast enough)

To setup project you need:

1. install maven
2. install node 10.16.3
3. install yarn 1.17.3
4. change DB address and credentials in main pom.xml file in profiles section
5. go to main project dir 
6. run yarn install --network-timeout 1000000
7. run yarn build
8. run mvn clean install -P dev (or other profile)
9. go to backend module and run mvn liquibase:update -P dev (or other profile)
10. go to backend\target folder and run java -jar blog-demo-app.jar
11. open project in browser: type localhost:8080