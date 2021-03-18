import React,{useState} from 'react'
import {Link,useHistory} from 'react-router-dom'
import "./Form.css"
import M from 'materialize-css'


function MemeEdit() {
    const history = useHistory()
    const [caption, setCaption] = useState("")
    const [url, setUrl] = useState("")
    const PostData = () => {
        fetch("/memes",{
            method:"patch",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                caption,
                url
            })
        }).then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.error){
                M.toast({html: data.error,classes: "c62828 red darken-2"})
            }
            else{
                M.toast({html: "Saved Successfully", classes:"#43a047 green darken-1"})
                history.push('./memes')
            }
        })
    }
    return (
        <div className="mycard"> 
            <div className="card input-field">
                <h2> Meme-Store! </h2>
                <h3> Edit this meme! </h3>
                <input
                type="text"
                placeholder="New caption"
                value= {caption}
                onChange={(e) => setCaption(e.target.value)}
                />
                <input
                type="text"
                placeholder="New meme url"
                value= {url}
                onChange={(e) => setUrl(e.target.value)}
                />
                <button class="btn waves-effect waves-light light-green lighten-1" onClick={()=> PostData()}>
                    Submit
                </button>

            </div>
        </div>
    )
}

export default MemeEdit
