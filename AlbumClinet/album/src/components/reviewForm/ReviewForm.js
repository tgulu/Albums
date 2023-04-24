import {Form,Button} from 'react-bootstrap';
import StarRatings from 'react-star-ratings';
import React, { useState } from 'react';

const ReviewForm = ({handleSubmit,revText,labelText,defaultValue}) => {
  const [rating, setRating] = useState(0);

  return (
    <Form>
        <Form.Group className="mb-4" controlId="exampleForm.ControlTextarea">
            <Form.Label>{labelText}</Form.Label>
            <Form.Control ref={revText} as="textarea" rows={3} defaultValue={defaultValue} />
        </Form.Group>
        <StarRatings
            rating={rating} 
            starRatedColor="gold"
            changeRating={setRating}
            numberOfStars={5}
            starDimension="20px"
            starSpacing="5px"
            name="rating"
        />
        <Button className="" variant="outline-info" onClick={handleSubmit} style={{ marginLeft: "40px" }}>Submit</Button>
    </Form>   
  )
}

export default ReviewForm;
