import React, {Fragment, Component} from 'react'
import axios from 'axios'
const config = require("./../config/config")

export default class Main extends Component{

    constructor(){
        super();
        this.state = {
            text: "",
            audioSrc: ""
        }

        this.handleText = this.handleText.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)

    }
    
    handleText(e){
        console.log(e.target.value)
        this.setState({
            text: e.target.value
        }, ()=>{
            console.log("\n>>>the text state: ", this.state.text)
        })
    }

    handleSubmit(){

        console.log(">>>Started handling submit")

        //let formData = new FormData()
       // formData.set("text", this.state.text)
        //console.log(formData)
        //send data to server
        let textData = {}
        textData.text =  this.state.text
        
       
        //console.log(">>>\ndata:",textData)
        let url = config.serverUrl + "synthesize"

        axios.post(url, textData)
        .then(response => {
            console.log(response)

            axios.get(config.serverUrl + "stream")
            .then(response => {
                if(response){
                    
                    let audioUrl = config.serverUrl + "stream"

                    this.setState({
                        audioSrc: audioUrl
                    }, ()=> {
                        if(this.state.audioSrc){
                            console.log(this.state.audioSrc)
                            const audio = new Audio(this.state.audioSrc);
                            audio.load();
                            audio.play();
                        }
                    })
                    
                }
            })
            .catch(err => {
                console.log(err)
            })
            
            
            
        })
        .catch(err => {
            console.log(err)
        })

        
    }


    render(){
        return(
            <Fragment>
               <main role="main">
                <div className="jumbotron">
                    <div className="container">
                    <h1 className="display-3">Hi, there!</h1>
                    <p>This is a basic text to speech app using react for frontend, node js and ibm-watson SDK for backend</p>
                    <p>Converted audio is streamed from the server</p>
                    <p>Enter text in the text box and click button to convert to speech</p>

                    </div>
                </div>

                <div className="container">
                    <div className="row">
                    <div className="col-md-12">
                        <div className="form-group">
                            <textarea maxLength="500" name="text" value={this.state.text} onChange={this.handleText} className="form-control" id="exampleFormControlTextarea1" rows="6"></textarea>
                            </div>
                            <div className="form-group">
                                <button className="btn btn-secondary" onClick={(e)=>{this.handleSubmit(e)}}>To Speech</button>
                            </div>
                            
                    </div>
                    </div>

                    <hr />

                </div> 

                </main>
            </Fragment>
        )
    }
}