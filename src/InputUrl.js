import React, { Component } from 'react';

class InputUrl extends Component {

    state={
        newUrl : '',
    }
    
    render(){
        return (
            <label>
                Input Original URL <br/>
                <input className="App-input" type="text" name="url"/> 
                <button type="button" onClick={this.findUrl}>go!</button>
                <br />
                {this.state.newUrl}
            </label>
        );
    }
    findUrl=() =>{
        fetch('http://localhost:8080/url/registURL',{
            method : 'POST',
            body : JSON.stringify({
                str : "00000001"
            }),
            mode : 'no-cors'
        }).then(({response})=> console.log(response.body));
        console.log(this.state.newUrl);
        // this.setState({
        //     newUrl : "www.naver.com",
        // });
    }
}
InputUrl.defaultProps = {
    url : '',
};

export default InputUrl;