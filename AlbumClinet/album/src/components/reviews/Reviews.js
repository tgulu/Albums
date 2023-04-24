import { useEffect, useRef } from 'react';
import api from '../../api/axiosConfig';
import { useParams } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import ReviewForm from '../reviewForm/ReviewForm';
import StarRatings from 'react-star-ratings';
import React, { useState } from 'react';

const Reviews = ({getAlbumData,album,reviews,setReviews}) => {

    const revText = useRef();
    let params = useParams();
    const [rating, setRating] = useState(0);

    //albumId == discogId to uniquely identify specific albums
    const albumId = params.albumId;  

    useEffect(()=>{
        getAlbumData(albumId);
    },[getAlbumData, albumId]);

    const addReview = async (e) =>{
        e.preventDefault();

        const rev = revText.current;

        try
        {
            // const response = await api.post("http://localhost:8080/api/v1/reviews",{
            await api.post("http://localhost:8080/api/v1/reviews",{
                reviewBody: rev.value,
                discogId: albumId,
                rating: rating // add rating value to data sent to server
            });

            const updatedReviews = [...reviews, {body:rev.value, rating: rating}]; // include rating value in new review object

            rev.value = "";
            setRating(0);

            setReviews(updatedReviews);
        }
        catch(err)
        {
            console.error(err);
        }
    }

    return (
        <Container>
            <Row>
                <Col><h3>Reviews</h3></Col>
            </Row>
            <Row className="mt-2">
                <Col>
                    <img src={album?.poster} alt="" />
                </Col>
                <Col>
                    <>
                        <Row>
                            <Col>
                                <ReviewForm handleSubmit={addReview} revText={revText} labelText="Write a Review?" rating={rating} setRating={setRating} />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <hr />
                            </Col>
                        </Row>
                    </>
                    {

                        reviews?.map((r, index) => {

                            return(
                                <>
                                    <Row>
                                        <Col>
                                            <StarRatings
                                                rating={r.rating}
                                                starRatedColor="gold"
                                                numberOfStars={5}
                                                starDimension="20px"
                                                starSpacing="5px"
                                                name="rating"
                                            />
                                            <span>{r.body}</span>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <hr />
                                        </Col>
                                    </Row>                                
                                </>
                            )
                        })
                    }
                </Col>
            </Row>
            <Row>
                <Col>
                    <hr />
                </Col>
            </Row>        
        </Container>
    )
}

export default Reviews
