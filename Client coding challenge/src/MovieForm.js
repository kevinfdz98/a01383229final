import React from 'react';

function MovieForm( props ){
    return(
        <div>
            <form onSubmit={()=> props.requestMovie(movieTitle.value, movieYear.value, movieRating.value)}> 
                <label htmlFor="movieTitle"> Title of movie </label> 
                <input id="movieTitle" type="text"/>
                <label htmlFor="movieYear"> Year of movie </label> 
                <input id="movieYear" type='number' />
                <label htmlFor="movieRating"> Rating of movie </label> 
                <input id="movieRating" type="number"/>
                <button type="submit">submit </button>
            </form>
        </div>
    );
}

export default MovieForm;