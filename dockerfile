FROM openjdk:21

COPY out/artifacts/player_finder_jar/player-finder.jar /app/player-finder.jar

WORKDIR /app
