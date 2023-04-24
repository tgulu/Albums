import './Hero.css';
import Carousel from 'react-material-ui-carousel';
import { Paper } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';
import Button from 'react-bootstrap/Button';
import {Link, useNavigate} from "react-router-dom";


const Hero = ({albums}) => {


  const navigate = useNavigate();

  function reviews(albumId)
  {
      navigate(`/Reviews/${albumId}`);
  }


  return (
    <div className ='album-carousel-container'>
        <Carousel>
        {
              albums?.map((album) =>{
              return (
                <Paper key={album.discogId}>
                      <div className ='album-card-container'>
                        <div className ="album-card" style={{"--img": `url(${album.backdrops[0]})`}}>
                            <div className ='album-detail'>
                                <div className="album-poster">
                                    <img src={album.poster} alt="artist poster" />
                                </div>
                                <div className = "album-title">
                                    <h4>{album.title}</h4>
                                </div>
                                <div className="album-buttons-container">
                                <Link to={`/Trailer/${album.videoLink.substring(album.videoLink.length - 11)}`}>
                              
                                <div className="play-button-icon-container">
                                <FontAwesomeIcon className="play-button-icon"
                                                    icon = {faCirclePlay}
                                                />
                                  </div>
                                  </Link>
                                  <div className="album-review-button-container">
                                            <Button variant ="outline-info" style={{"color":'white'}} onClick={() => reviews(album.discogId)}> Reviews</Button>
                                        </div>
                                  </div>

                            </div>
                        </div>
                    </div>
                </Paper>
              )
          })


        }
        </Carousel>
    </div>
  )
}

export default Hero
