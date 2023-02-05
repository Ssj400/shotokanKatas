import fetch from 'node-fetch';
const API = 'https://youtube-v31.p.rapidapi.com/captions?part=snippet&videoId=M7FIvfx5J10';


const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'e87cdc6324mshbde1fa98bae6d8ap1bd5a1jsn98f8c0403611',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};

fetch('https://youtube-v31.p.rapidapi.com/captions?part=snippet&videoId=M7FIvfx5J10', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));
