#
# Build stage
#
FROM maven:3.6.0-jdk-21 AS build
COPY src /app/src
COPY pom.xml /app
RUN mvn -f /app/pom.xml clean package

#
# Package stage
#
FROM openjdk:21
COPY --from=build out/artifacts/player_finder_jar/player-finder.jar /app/player-finder.jar
EXPOSE 8080
ENTRYPOINT ["java","-jar","/app/player-finder.jar"]
