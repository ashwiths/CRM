# ---------------------------
# Stage 1: Build the project
# ---------------------------
FROM maven:3.9.6-eclipse-temurin-21 AS builder

WORKDIR /app

# Copy project files
COPY pom.xml .
COPY src ./src

# Build JAR (skip tests)
RUN mvn clean package -DskipTests

# ---------------------------
# Stage 2: Run the JAR
# ---------------------------
FROM eclipse-temurin:21-jdk

WORKDIR /app

# Copy JAR from builder
COPY --from=builder /app/target/*.jar app.jar

# Expose app port
EXPOSE 8080

# Run Spring Boot app
ENTRYPOINT ["java", "-jar", "app.jar"]
