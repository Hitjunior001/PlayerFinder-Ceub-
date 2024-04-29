#
# Build stage
#
FROM maven:3-openjdk-17 AS build
COPY src /app/src
COPY pom.xml /app
WORKDIR /app
RUN mvn clean package

#
# Package/Execution stage
#

FROM openjdk:17
COPY --from=build /app/target/player-finder-0.0.1-SNAPSHOT.jar /app/player-finder-0.0.1-SNAPSHOT.jar
EXPOSE 8080
ENTRYPOINT ["java","-jar","/app/player-finder-0.0.1-SNAPSHOT.jar"]
