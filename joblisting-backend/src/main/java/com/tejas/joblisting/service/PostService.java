package com.tejas.joblisting.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.tejas.joblisting.models.Post;
import com.tejas.joblisting.repository.PostRepository;

@Service
public class PostService {

    public final PostRepository repo;

    // Constructor Injection
    PostService(PostRepository repo) {
        this.repo = repo;
    }

    // Retrieves all posts from the repository
    public List<Post> getAllPosts() {
        return repo.findAll();
    }

    // Saves a new post to the repository
    public Post addPost(Post post) {
        return repo.save(post);
    }

    // Retrieves a post by its ID from the repository
    public Post getPostById(String id) {
        return repo.findById(id).orElse(null);
    }

    // Retrives posts by its keywords present in fields
    public List<Post> searchPostsByKeywords(String keywords) {
        return repo.findByKeywords(keywords);
    }

}
