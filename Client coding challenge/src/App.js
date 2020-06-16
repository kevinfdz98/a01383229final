import React from 'react';
import './App.css';
import Movie from './Movie';
import MovieForm from './MovieForm';

class App extends React.Component {

  constructor( props ){
    super( props );
    this.state = {
      movie_title = "No title", 
      movie_year = 0, 
      movie_rating = 0
    }
  }
  
  requestAddMovie = (title, year, rating) =>{
    const url = 'http://localhost:8080/api/add-movie/'; 
    const token = 'success-token';

    const settings = {
      method : 'POST',
      headers : {
        "session-exam-token" : token
      }, 
      body : {
        movie_title : title, 
        movie_year : year, 
        movie_rating : rating
      }
    }

    fetch(url, settings)
    .then(jsonObject => {
      if (jsonObject.ok){
        return jsonObject; 
      }
    })
    .then(movieAdded =>{

    })
    .catch(err =>{
      return err; 
    })

  }
  
  getMovies(){
    const url = 'http://localhost:8080/api/movies/'; 
    const token = 'success-token';

    const settings = {
      method : 'GET',
      headers : {
        "session-exam-token" : token
      }
    }
    fetch(url, settings)
    .then(success =>{
      if(success.ok)
      {
        return succes; 
      }
    })
    .then(jsonObject =>{
      jsonObject.forEach(element => {
        this.displayMovie(element.movie_title,
                    element.movie_year,
                    element.movie_rating)  
      });
    })
    .catch( err=>{
      return err; 
    })
  }
  
  displayMovie(title, year, rate){
    this.setState({
      movie_title = title, 
      movie_year = year, 
      movie_rating = rate
    })
  }
  componentDidMount(){
    /*
      Your code goes here
    */
  }

  render(){
    return (
      <div>
        <MovieForm
        requestMovie = {this.requestMovie}
        />
        <Movie 
          getMovies = {this.getMovies}
          displayMovie = {this.displayMovie}
          state = {this.state}
        />

        <div>

        </div>
      </div>
    );
  }
}

export default App;
