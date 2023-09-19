import React from 'react'
import Review from './Review.js'

export default class ReviewList extends React.Component{
constructor(props){
    super(props)
    this.Reviews = props.Reviews
    console.log(this.Reviews)
}
render(){
    return(
        <div>
            {this.Reviews.map((review, index) => (
                <Review key = {index} review={review}></Review>
            ))}    
        </div>
    )
}
}

//Reviewarray = []