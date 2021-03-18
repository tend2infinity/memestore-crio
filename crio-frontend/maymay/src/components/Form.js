import React,{useState} from 'react'
import {Link,useHistory} from 'react-router-dom'
import "./Form.css"
import M from 'materialize-css'


function Form() {
    const history = useHistory()
    const [name,setName] = useState("")
    const [caption, setCaption] = useState("")
    const [url, setUrl] = useState("")
    const PostData = () => {
        fetch("/memes",{
            method:"post",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                name,
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
                <h3> Contribute to our community! </h3>
                <input
                type="text"
                placeholder="Name"
                value= {name}
                onChange={(e) => setName(e.target.value)}
                />
                <input
                type="text"
                placeholder="Caption"
                value= {caption}
                onChange={(e) => setCaption(e.target.value)}
                />
                <input
                type="text"
                placeholder="Meme url"
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

export default Form
