package com.tejas.joblisting.repository;

import com.tejas.joblisting.models.Post;
import java.util.List;

public interface SearchRepository {
    List<Post> findByKeywords(String keywords);
}
