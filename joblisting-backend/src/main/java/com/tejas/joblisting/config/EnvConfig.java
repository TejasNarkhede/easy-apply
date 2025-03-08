package com.tejas.joblisting.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Component
public class EnvConfig {

    @Value("${MONGODB_URI}")
    private String mongoUri;

    @Value("${MONGODB_DB_NAME}")
    private String databaseName;

    public void printEnv() {
        System.out.println("MongoDB URI: " + mongoUri);
        System.out.println("Database Name: " + databaseName);
    }

    public String getMongoUri() {
        return mongoUri;
    }

    public String getDatabaseName() {
        return databaseName;
    }
}