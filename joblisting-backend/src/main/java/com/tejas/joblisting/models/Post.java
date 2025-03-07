package com.tejas.joblisting.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "JobPost")
public class Post {

    @Id
    private String id;
    private String profile;
    private String desc; // description
    private int exp; // experience
    private String techs[]; // technologies

}