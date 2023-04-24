package com.reviews.albums;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.DocumentReference;

import java.util.List;

//@Document(collection = "albums")
@Document(collection = "albums")
@Data // takes care of getters and setters
@AllArgsConstructor
@NoArgsConstructor
public class Album {

    //unique id for movies in the database
    @Id
    private ObjectId id;

    private String discogId;

    private String title;

    private String releaseDate;

    private String videoLink;

    private String poster;

    private List<String> genres;

    private List<String> backdrops;


    @DocumentReference
    private List<Review> reviewIds;



}

