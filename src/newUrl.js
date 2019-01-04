import Axios from 'axios';

export function getShortUrl(url){
    Axios({
        method : 'post',
        url : 'http://localhost:8080/url/registURL',
        data : {
            str : 'url'
        }
    }).then(function(response){
        console.log(response);
        return response.data;
    });
}