import React from 'react'
import Movie from './Movie'
import ReviewList from './ReviewList';

export default class MovieList extends React.Component{
    constructor(props){
        super(props)
    }

    
    

      render() {

        let movieOne = 
            {
              id: 1,
              Title: "Iron Man",
              coverImage: "https://upload.wikimedia.org/wikipedia/en/0/02/Iron_Man_%282008_film%29_poster.jpg",
              Reviews: [{
                rating: 4,
                text: 'it was very good',
              }]
            };
        let movieTwo =
            {
              id: 2,
              Title: "Iron Man 2",
              coverImage: "https://flxt.tmsimg.com/assets/p3546118_p_v8_af.jpg",
              Reviews: [{
                rating: 4,
                text: 'it was pretty good I guess'
              }] 
            };
        let movieThree =
            {
              id: 3,
              Title: "Avengers",
              coverImage: "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
              Reviews: [{
                rating: 5,
                text: 'steller movie!'
              }] 
            };
        let movieFour =
            {
              id: 4,
              Title: "Iron Man 3",
              coverImage: "https://m.media-amazon.com/images/M/MV5BMjE5MzcyNjk1M15BMl5BanBnXkFtZTcwMjQ4MjcxOQ@@._V1_.jpg",
              Reviews: [{
                rating: 4,
                text: 'decent'
              }]
            }


        return(
            <div>
            <Movie {...movieOne} ></Movie>
            <Movie {...movieTwo} ></Movie>
            <Movie {...movieThree} ></Movie>
            <Movie {...movieFour} ></Movie>

            
            </div>


        )
      }
    
}