# Etapa 1: Build da aplicação
FROM maven:3.8.5-openjdk-17 as build-stage
WORKDIR /app
COPY pom.xml .
COPY src ./src
RUN mvn clean package -DskipTests

# Etapa 2: Rodar a aplicação
FROM openjdk:17-jdk-alpine
WORKDIR /app
COPY --from=build-stage /app/target/bird-pantanal-photo-gallery-0.0.1-SNAPSHOT.jar .
EXPOSE 8080
CMD ["java", "-jar", "bird-pantanal-photo-gallery-0.0.1-SNAPSHOT.jar"]

