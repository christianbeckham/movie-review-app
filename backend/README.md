# Backend

The backend application consists of an API created with Spring Boot and using MongoDB Atlas as the database.

## Getting Started

These instructions will get the project up and running on your local machine for development and testing purposes.

### Prerequisites

The things you need for this project.

- [Java/JDK](https://www.oracle.com/java/technologies/downloads/)
- [MongoDB Atlas Database](https://www.mongodb.com/atlas/database)
- [IntelliJ IDEA](https://www.jetbrains.com/idea/download/) (or your preferred IDE)

### Installation

The steps on how to get the development environment up and running. You can also create your own Spring Boot project from scratch using your own settings and configurations with the [spring initializr](https://start.spring.io) tool.

Setup a MongoDB Atlas database/cluster

1.  [Create a MongoDB Atlas cluster](https://www.mongodb.com/docs/guides/atlas/cluster/)
2.  [Add a database user](https://www.mongodb.com/docs/guides/atlas/db-user/)
3.  [Configure a network connection](https://www.mongodb.com/docs/guides/atlas/network-connections/)

Setup the application

1. Create your own .env file (see .env.example file as reference in /resources)
2. Add the MongoDB connection info to the .env file

Start the application

1. Open and run the application in an IDE
2. After successfully running, you can access the server on port 8080

## Other Documentation

- [Spring Boot](https://spring.io/projects/spring-boot)
- [Create MongoDB Atlas cluster](https://www.mongodb.com/docs/guides/atlas/cluster/)
