#
# Build stage
#
FROM maven:3-openjdk-17 AS build
COPY src /app/src
COPY pom.xml /app
RUN mvn -f /app/pom.xml clean package

#
# Package stage
#
FROM openjdk:17

COPY --from=build target/player-finder-0.0.1-SNAPSHOT.jar /app
EXPOSE 8080
ENTRYPOINT ["java","-jar","/app/player-finder-0.0.1-SNAPSHOT.jar"]
