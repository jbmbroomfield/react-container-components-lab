import React from 'react'

const MovieReviews = props => {
    return (
        <div className="review-list">
            {props.reviews.map((review, index) => (
                <div className="review" key={index}>
                    <h5>{review.display_title}</h5>
                    <h6>{review.headline}</h6>
                    <p>{review.mpaa_rating}</p>
                </div>
            ))}
        </div>
    )
}

export default MovieReviews