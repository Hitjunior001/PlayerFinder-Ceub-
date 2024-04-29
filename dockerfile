#
# Build stage
#
FROM openjdk:17-jdk-slim AS build
COPY src /app/src
COPY pom.xml /app
RUN mvn -f /app/pom.xml clean package

#
# Package stage
#
FROM openjdk:11

COPY --from=build target/player-finder-0.0.1-SNAPSHOT.jar /app/player-finder.jar
EXPOSE 8080
ENTRYPOINT ["java","-jar","/app/player-finder.jar"]
