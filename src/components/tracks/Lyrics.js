import React, { Component } from 'react';
import axios from 'axios' ;
import Spinner from '../layout/Spinner';
import {Link} from 'react-router-dom' ;
import Moment from 'react-moment'

class Lyrics extends Component {
    state = {
        track: {},
        lyrics: {}
    };

     Genre = () => {
         const track = this.state.track;
        if(track.primary_genres.music_genre_list[0] !== undefined){
            return (
                <li className="list-group-item">
                                <strong>Song Genre</strong>: {track.primary_genres.music_genre_list[0].music_genre.music_genre_name}
                            </li>
            )
        } else return (
            <li className="list-group-item">
                <strong>Song Genre</strong>: Unknown!
            </li>
        )

    }
    
    componentDidMount(){
        axios.get(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${this.props.match.params.id}&apikey=${process.env.REACT_APP_MM_KEY}`)
        .then(res => {
            // console.log(res.data)
            this.setState({lyrics:res.data.message.body.lyrics});

            return  axios.get(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.get?track_id=${this.props.match.params.id}&apikey=${process.env.REACT_APP_MM_KEY}`)
 
        })
        .then(res => {
            // console.log(res.data)
            this.setState({track:res.data.message.body.track});
        })
        .catch(err => console.log(err))
    }

    render() {
        const { track ,lyrics} =this.state;
        console.log(track)
        
        if(lyrics.lyrics_id === undefined || track.track_id === undefined){
              return <Spinner />
        } else {
            return (
                <React.Fragment>
                    <Link to="/lyricfinder" className="btn btn-dark btn-sm mb-4">Go Back</Link>
                    <div className="card">
                        <h5 className="card-header">
                            {track.track_name} by <span className="text-secondary">{track.artist_name}</span>
                        </h5>
                        <div className="card-body">
                            <p className="card-text"> {lyrics.lyrics_body}</p>
                        </div>
                    </div>

                    <ul className="list-group mt-3">
                        <li className="list-group-item">
                            <strong>Album ID</strong>: {track.album_id}
                        </li>
                        <this.Genre />
                        <li className="list-group-item">
                            <strong>Explicit Words</strong>: {track.explicit === 0 ? 'no' : 'yes'}
                        </li>
                        <li className="list-group-item">
                            <strong>Release Date</strong>: <Moment format="DD/MM/YYYY">{track.updated_time}</Moment>
                        </li>
                    </ul>
                </React.Fragment>
            )
        }
    }
}

export default Lyrics;
