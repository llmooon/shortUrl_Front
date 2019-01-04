import React, { Component } from 'react';
import Axios from 'axios';



//import newUrl from './newUrl'
class InputUrl extends Component {

    state={
        newUrl : '',
        oldUrl : '',
    }
    
    render(){
        return (
            <label>
                Input Original URL <br/>
                
                    <input className="App-input" value={this.state.oldUrl} onChange={this.inputChangeHandler} type="text" name="url"/> 
                    <button type="button" onClick={this.getUrl}>go!</button>
                    <br/>==========================================
                    <br />
                    {this.state.newUrl}
                
            </label>
        );
    }
    getUrl=() => {
        console.log(this.state.oldUrl);
        const body = {"url":this.state.oldUrl};
        Axios.post('http://localhost:8080/url/registURL',body)
        .then((result)=>{
            this.setState({
                newUrl:"http://localhost:8080/url/short/"+result.data
            })
        })
    }
    inputChangeHandler=(e)=>{
        console.log(e.target.value)
        this.setState({
            oldUrl : e.target.value
        })
    }
}
InputUrl.defaultProps = {
    url : '',
};

export default InputUrl;