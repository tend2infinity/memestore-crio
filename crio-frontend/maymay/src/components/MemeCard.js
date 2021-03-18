import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import  MemeEdit from './MemeEdit'
import './MemeCard.css'



function MemeCard() {
    const [data, setData] = useState([])
    useEffect(() => {
        console.log(data)
        fetch('/memes').then(res => res.json())
            .then(result => {
                setData(result)
            })
    },[])

    const history = useHistory()
    const PostData = (id) => {
        console.log(id)
    }
    return (
        <div class="row">
            {
                data.map(item => {
                    return (
                        <div class="card" key={item.id}>
                            <div class="card-content-name">
                                <h5>{item.name}</h5>

                            </div>
                            <div class="card-content right">
                            <button class="waves-effect waves-light btn  light-green lighten-1 " onClick={() => PostData(item.id)} >Edit </button>

                            </div>
                            
                            <div class="card-content">
                                <h6>{item.caption}</h6>
                            </div>
                            <div class="card-image">
                                <img src={item.url} alt="Image not available" />

                            </div>
                        </div>

                    )
                })
            }


        </div>

    )
}

export default MemeCard

