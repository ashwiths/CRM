# Use Maven to build the project
FROM maven:3.9.6-eclipse-temurin-21 AS builder

WORKDIR /app

# Copy the project files
COPY pom.xml .
COPY src ./src

# Build the project (makes a JAR file)
RUN mvn clean package -DskipTests

# ---------------------------
# Run the JAR in a small image
# ---------------------------
FROM eclipse-temurin:21-jdk

WORKDIR /app

# Copy the JAR file from builder
COPY --from=builder /app/target/*.jar app.jar

# Open port 8080 for the app
EXPOSE 8080

# Run the JAR file
ENTRYPOINT ["java", "-jar", "app.jar"]
