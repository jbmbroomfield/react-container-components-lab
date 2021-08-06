import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'vczUTlnVBC9isQistAyPX5XbYdA2HmFB ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

class SearchableMovieReviewsContainer extends Component {

    state = {
        reviews: [],
        searchTerm: ""
    }

    fetchMovies() {
        let url = URL
        if (this.state.searchTerm) {
            url += `&query=${this.state.searchTerm}`
        }
        fetch(url)
        .then(response => response.json())
        .then(json => {
            this.setState({
                ...this.state,
                reviews: json.results,
            })
        })
    }
    handleSubmit = e => {
        e.preventDefault()
        this.fetchMovies()
    }

    handleChange = e => {
        this.setState({
            ...this.state,
            searchTerm: e.target.value
        })
    }

    render() {
        return (
            <div className="searchable-movie-reviews">
                <form onSubmit={this.handleSubmit}>
                    <input onChange = {e => this.handleChange(e)} type="text" name="search" value={this.state.searchTerm} />
                    <input type="submit" />
                </form>
                <MovieReviews reviews={this.state.reviews} />
            </div>
        )
    }
}

export default SearchableMovieReviewsContainer