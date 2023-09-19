import './Stars.css'
import Box from '@mui/material/Box'
import Rating from '@mui/material/Rating'

import React, { Component, useState } from "react";

export default class stars extends Component{
  constructor(props){
    super(props)

    this.state = {
    ratingnumber: 0
  }
}

  render() {
    return(
      <div>
        <Box
      sx={{
        '& > legend': { mt: 2 },
      }}
    >
      <Rating 
        ratingnumber = {this.state.ratingnumber} 
        onChange={(event, newRateing) => {
        this.setState({ratingnumber: newRateing})
        this.props.handleStars(newRateing)
      }}></Rating>
    </Box>
      </div>
    )
  }
}













//const StarRating = () => {
//  const [rating, setRating] = useState(0);
//  const [hover, setHover] = useState(0);
//  return (
//    <div className="star-rating">
//      {[...Array(5)].map((star, index) => {
//        index += 1;
//        return (
//          <button
//            type="button"
//            key={index}
//            className={index <= (hover || rating) ? "on" : "off"}
//            onClick={() => setRating(index)}
//            onMouseEnter={() => setHover(index)}
//            onMouseLeave={() => setHover(rating)}
//          >
//            <span className="star">&#9733;</span>
//          </button>
//        );
//      })}
//    </div>
//  );
//};

//export default StarRating;