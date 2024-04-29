FROM maven:3.8.4-jdk-17 AS build
COPY src /app/src
COPY pom.xml /app
WORKDIR /app
RUN mvn clean package

FROM openjdk:17-jdk-alpine
COPY --from=build /app/target/player-finder-0.0.1-SNAPSHOT.war /app/player-finder-0.0.1-SNAPSHOT.war
ENTRYPOINT ["java","-jar","/app/player-finder-0.0.1-SNAPSHOT.war"]
