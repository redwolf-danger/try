
import qs from 'https://cdn.jsdelivr.net/npm/qs@6.12.1/+esm';
import axios from 'https://cdn.jsdelivr.net/npm/axios@1.7.2/+esm'

console.log('inside index.js');
console.log(document.getElementById("btn"));
let btn = document.getElementById("btn");

console.log('btn is ',btn);

function handler(){
    console.log('button clicked');
    
    var data = qs.stringify({
        'code': 'val = int(input("Enter your value: ")) + 5\nprint(val)',
        'language': 'py',
        'input': '7'
    });

    var config = {
        method: 'post',
        url: 'https://api.codex.jaagrav.in',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Access-Control-Allow-Origin': "null"
        },
        data : data
    };
    
    
    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
}

btn.addEventListener("click",handler);



// function handler(){
//     console.log('button clicked');
    
// var data = qs.stringify({
//     'code': 'val = int(input("Enter your value: ")) + 5\nprint(val)',
//     'language': 'py',
//     'input': '7'
// });
// console.log('data is ',data);
// };