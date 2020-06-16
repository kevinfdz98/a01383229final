const mongoose = require( 'mongoose' );
const uuid = require( 'uuid' );

const movidexSchema = mongoose.Schema({
    movie_id : {
        type : uuid.v4, 
        unique : true, 
        require : true
    }, 
    movie_title : {
        type : String, 
        require : true, 
    },
    movie_year : {
        type : Number, 
        require : true 
    }, 
    movie_rating : {
        type : Number, 
        require : true
    }
})

const movidexModel = mongoose.model('movies', movidexSchema); 


const moviedexService = {
    getAllMovies = function(){
        movidexModel.find()
        .then(allMovies =>{
            return allMovies; 
        })
        .catch( err=>{
            throw new Error(err.message)
        })
    }, 

    addNewMovie = function( newMovie ){
        movidexModel.create( newMovie )
        .then(newMovie => {
            return newMovie; 
        })
        .catch( err=>{
            throw new Error(err.message)
        })
    }
    
}

module.exports = {
    movieService
};