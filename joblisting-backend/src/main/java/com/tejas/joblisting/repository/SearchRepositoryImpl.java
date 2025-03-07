package com.tejas.joblisting.repository;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import org.bson.Document;
import org.springframework.data.mongodb.core.convert.MongoConverter;
import org.springframework.stereotype.Repository;
import com.mongodb.client.AggregateIterable;
import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;
import com.tejas.joblisting.models.Post;

@Repository
public class SearchRepositoryImpl implements SearchRepository {

        private final MongoClient client;
        private final MongoConverter converter;

        public SearchRepositoryImpl(MongoClient client, MongoConverter converter) {
                this.client = client;
                this.converter = converter;
        }

        @Override
        public List<Post> findByKeywords(String keywords) {
                final List<Post> posts = new ArrayList<>();
                // Env Config
                String databaseName = System.getenv("MONGODB_DB_NAME");
                if (databaseName == null || databaseName.isEmpty()) {
                        throw new IllegalStateException("Environment variable MONGODB_DB_NAME is not set or is empty");
                }

                MongoDatabase database = client.getDatabase(databaseName);
                MongoCollection<Document> collection = database.getCollection("JobPost");
                AggregateIterable<Document> result = collection.aggregate(Arrays.asList(new Document("$search",
                                new Document("text",
                                                new Document("query", keywords)
                                                                .append("path", Arrays.asList("profile","techs", "desc",
                                                                                "exp")))),
                                new Document("$limit", 10L)));

                result.forEach(doc -> posts.add(converter.read(Post.class, doc)));

                return posts;
        }

}
