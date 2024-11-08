## cd carmng
## mvn clean install
## mvn spring-boot:run

cd gateway
mvn clean install
mvn spring-boot:run

cd carmng-frontend
npx http-server -p 8080
