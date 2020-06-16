import React from 'react';

function Movie( props ){
    return(
        <div>
            {props.getMovies}
            {props.state} =
        </div>
    );
}

export default Movie;