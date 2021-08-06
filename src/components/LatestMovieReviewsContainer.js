import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'vczUTlnVBC9isQistAyPX5XbYdA2HmFB ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

class LatestMovieReviewsContainer extends Component {

    state = {
        reviews: []
    }

    fetchMovies() {
        fetch(URL)
        .then(response => response.json())
        .then(json => {
            this.setState({
                ...this.state,
                reviews: json.results
            })
        })
    }

    componentDidMount() {
        this.fetchMovies()
    }

    render() {
        return (
            <div className="latest-movie-reviews">
                <MovieReviews reviews={this.state.reviews} />
            </div>
        )
    }
}

export default LatestMovieReviewsContainer
