import React from 'react'
import { Link } from 'react-router-dom'

export default function About() {
    return (
        <div>
             <div className="card card-body mb-4 p-4">
                            <h4 className="display-4 text-center">
                                 This is Lyric Finder App V 1.0.0
                            </h4>
                            <p className="lead text-center">Get the lyrics for any song</p>
                            <br/>
                            <form>
                                <div className="form-group text-center">
                                built with react js <br/> mahmoud.abdo59986@gmail.com                         
                                 </div>
                                 <br/><br/><br/><br/><br/><br/><br/>
                                <Link to="/lyricfinder" className="btn btn-dark btn-lg btn-block mb-5"
                                >Back to home page</Link>
                            </form>
                        </div>

        </div>

    )
}
