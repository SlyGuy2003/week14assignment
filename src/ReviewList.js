import React from 'react'
import Review from './Review.js'
import ReviewForm from './ReviewForm.js'
export default class ReviewList extends React.Component{
constructor(props){
    super(props)
    this.props = props
    this.Reviews = props.Reviews
}
render(){
    return(
        <div>
            {this.Reviews.map((review, index) => ( // creates a review section for each and every review, review form is also rendered
                <Review key = {index} review={review}></Review> 
            ))} 
            <ReviewForm {...this.props}></ReviewForm>
        </div>
    )
}
}

//Reviewarray = []