package com.reviews.albums;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;


@Repository
public interface AlbumRepository extends MongoRepository<Album, ObjectId> {
    Optional<Album> findAlbumByDiscogId(String discogId);
}
