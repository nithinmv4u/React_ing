import React, { useEffect, useState } from 'react'
import './RowPost.css'
import axios from '../../axios'
import { imageUrl } from '../../constants/constants'
import Youtube from 'react-youtube'
import { API_KEY } from '../../constants/constants'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function RowPost(props) {
  const [movies, setMovies] = useState([])
  const [urlId, setUrlId] = useState('')
  useEffect(() => {
    axios.get(props.url).then(response=>{
      console.log(response.data);
      setMovies(response.data.results)
    }).catch(err=>{
      // alert("Network Error")
    })
  
    // return () => {
    //   second
    // }
  }, [])

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const handleMovie = (id) =>{
    console.log(id)
    axios.get(`/movie/${id}/videos?language=en-US&api_key=${API_KEY}`).then(response=>{
      console.log(response.data);
      if(response.data.results.length!=0){
        setUrlId(response.data.results[0])
      }
      else{
        console.log('Trailer not available');
      }
    }).catch(err=>{
      // alert('Trailer not available');
      toast.error('Trailer not available');
    });
  }
  
  return (
    <div className='row'>
        <h2>{props.title}</h2>
        <div className='posters'>
          {movies.map((obj)=>
            <img onClick={()=>handleMovie(obj.id)} className={props.isSmall ? 'smallPoster' : 'poster'} src={`${imageUrl+obj.backdrop_path}`} alt="poster" />
          )}
            <ToastContainer />
        </div>
        { urlId && <Youtube  videoId={urlId.key} opts={opts}/> }
    </div>
  )
}

export default RowPost