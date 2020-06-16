const express = require( 'express' );
const bodyParser = require( 'body-parser' );
const mongoose = require( 'mongoose' );
const uuid = require('uuid')
const jsonParser = bodyParser.json();
const { DATABASE_URL, PORT } = require( './config' );
const cors = require( './middleware/cors' );
const validateToken = require('./middleware/token-validation'); 
const app = express();

app.use( cors );
app.use(validateToken);  //Aqui se declara para que se ejecute el validation token antes de cualquier endpoint


app.post('/api/add-movie/', jsonParser, (req, res)=>{
    let movie_title = req.body.movie_title; 
    let movie_year = req.body.movie_year; 
    let movie_rating = req.body.movie_rating; 
    let movie_id = uuid.v4(); 

    if(!movie_rating || !movie_title || movie_year)
    {
        res.statusMessage = "You need to send all movie fields to add the movie to the movie list"; 
        return res.status(403).end(); 
    }

    let newMovie = {
        movie_id : movie_id, 
        movie_year: movie_year, 
        movie_title: movie_title, 
        movie_rating : movie_rating
    }

    Moviedex 
            .addNewMovie(newMovie)
            .then(added =>{
             return res.status(201).json(added); 
            })
            .catch(err=>{
                res.statusMessage = err.message; 
                return res.status(500).end()
            })
})


app.get('/api/movies/', (req, res)=>{

    Moviedex    
            .getAllMovies()
            .then( movies=>{
                if(movies.length == 0)
                {
                    res.statusMessage = "No movies found in the moviedex"; 
                    return res.status(404).end(); 
                }
                else{
                    return res.status(200).json(movies); 
                }
            })
            .catch(err=>{
                res.statusMessage = err.message; 
                return res.status(500).end(); 
            })
})

/* 
    Your code goes here 
*/

app.listen( PORT, () => {
    console.log( "This server is running on port 8080" );
    new Promise( ( resolve, reject ) => {
        const settings = {
            useNewUrlParser: true, 
            useUnifiedTopology: true, 
            useCreateIndex: true
        };
        mongoose.connect( DATABASE_URL, settings, ( err ) => {
            if( err ){
                return reject( err );
            }
            else{
                console.log( "Database connected successfully." );
                return resolve();
            }
        })
    })
    .catch( err => {
        console.log( err );
    });
});