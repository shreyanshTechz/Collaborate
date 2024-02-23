import Axios from 'axios';
// const ENDPOINT = 'http://localhost:4000/';
const ENDPOINT = 'https://codeserver-ckyr.onrender.com/';
export default function compile(...args){
    console.log(args[3]);
    let data = JSON.stringify({
      code: args[0],
      lang: args[1],
      input: args[2],
      inputRadio:args[2]!==''
    });
    let config = {
      method: 'post',
      url: `${ENDPOINT}compilecode`,
      headers: {
        'Content-Type': 'application/json',
        'mode': 'no-cors',
        'Access-Control-Allow-Origin':'*'
      },
      data: data
    };
    Axios(config)
      .then((response) => {
        console.log(response);
        if(response.data.error){
           args[3](response.data.error)
        }
        else{
            args[3](response.data.output);
        }
      }).catch((error) => {
        args[3](error)
      });
  }