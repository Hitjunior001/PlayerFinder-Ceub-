#
# Build stage
#
FROM maven:3.8.4-openjdk-11-slim AS build
COPY src /app/src
COPY pom.xml /app
RUN mvn -f /app/pom.xml clean package

#
# Package stage
#
FROM openjdk:11
COPY --from=build target/player-finder-0.0.1-SNAPSHOT.jar /app/player-finder.jar
ENTRYPOINT ["java","-jar","/app/player-finder.jar"]
