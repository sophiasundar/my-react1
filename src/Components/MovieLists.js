import { allmovies } from "./Constants";
import Movie from "./Movie";
const MovieList=()=>{
    return(
    <>
    <div className="App">
      {
        allmovies.map((element, index)=>{
            return <Movie element={element} key={index}/>
        })
      }
    </div>
    </>
    )
} 
export default MovieList;