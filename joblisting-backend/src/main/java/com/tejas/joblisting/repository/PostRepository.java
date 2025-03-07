package com.tejas.joblisting.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import com.tejas.joblisting.models.Post;

@Repository
public interface PostRepository extends MongoRepository<Post, String>, SearchRepository {


}