package com.reviews.albums;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AlbumService {

    @Autowired
    private AlbumRepository albumRepository;

    public List<Album> allAlbums() {
        return albumRepository.findAll();
    }

    public Optional<Album> singleAlbum(String discogId) {
        //return albumRepository.findById(id);
        return albumRepository.findAlbumByDiscogId(discogId);

    }


}
