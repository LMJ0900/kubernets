FROM openjdk:17-alpine
LABEL description="Bitcamp"
VOLUME /tmp
ARG JAR_FILE=./bulid/*.jar
ADD ${JAR_FILE} app.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar","app.jar"]