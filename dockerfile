FROM openjdk:21
#docker
COPY out/artifacts/player_finder_jar/player-finder.jar

WORKDIR /app
CMD ["java", "-jar", "player-finder.jar"]
