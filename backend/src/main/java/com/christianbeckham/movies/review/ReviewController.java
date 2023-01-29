package com.christianbeckham.movies.review;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
@RequestMapping("/api/v1/reviews")
public class ReviewController {
    @Autowired
    private ReviewService reviewService;

    @PostMapping
    public ResponseEntity<Review> createReview(@RequestBody Map<String, String> payload) {
        String imdbId = payload.get("imdbId");
        String reviewBody = payload.get("reviewBody");
        Review newReview = reviewService.createReview(imdbId, reviewBody);
        return new ResponseEntity<Review>(newReview, HttpStatus.CREATED);
    }
}
