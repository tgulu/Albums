package com.reviews.albums;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Service;

@Service
public class ReviewService {

    @Autowired
    private ReviewRepository reviewRepository;

    @Autowired
    private MongoTemplate mongoTemplate;

    public Review createReview(String reviewBody, String discogId){
        Review review =  reviewRepository.insert(new Review(reviewBody));



        mongoTemplate.update(Album.class)
                .matching(Criteria.where("discogId").is(discogId))
                .apply(new Update().push("reviewIds").value(review))
                .first();

        return review;

    }
}
