package com.tejas.joblisting.controller;

import java.util.List;
import com.tejas.joblisting.models.Post;
import com.tejas.joblisting.service.PostService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class PostController {

    public final PostService service;

    PostController(PostService service) {
        this.service = service;
    }

    @PostMapping("/post")
    public ResponseEntity<Post> addPost(@RequestBody Post post) {
        Post newPost = service.addPost(post);
        return ResponseEntity.status(201).body(newPost);
    }

    @GetMapping("/post/{id}")
    public ResponseEntity<Post> getPost(@PathVariable String id) {
        Post post = service.getPostById(id);
        if (post != null) {
            return ResponseEntity.ok(post);
        }
        return ResponseEntity.notFound().build(); // build creates instance of response entity
    }

    @GetMapping("/allPosts")
    public ResponseEntity<List<Post>> getAllPosts() {
        return ResponseEntity.ok(service.getAllPosts());
    }

    @GetMapping("/posts/{keywords}")
    public ResponseEntity<List<Post>> searchPostsByKeywords(@PathVariable String keywords) {
        return ResponseEntity.ok(service.searchPostsByKeywords(keywords));
    }

}