package com.reviews.albums;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;


@RestController


@RequestMapping("/api/v1/albums")

public class AlbumController {

    @Autowired
    private AlbumService albumService;


    @GetMapping
    @CrossOrigin
    public ResponseEntity<List<Album>> getAllAlbums(){

        return new ResponseEntity<List<Album>>(albumService.allAlbums(), HttpStatus.OK);
    }

    @GetMapping("/{discogId}")
    public ResponseEntity<Optional<Album>> getSingleAlbum(@PathVariable String discogId){
        return new ResponseEntity<Optional<Album>>(albumService.singleAlbum(discogId), HttpStatus.OK);


    }


}


