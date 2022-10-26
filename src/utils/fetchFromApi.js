import axios from 'axios';

const BASE_URL = 'https://youtube-v31.p.rapidapi.com';
const options = {
    url: BASE_URL,
    params: {
        // relatedToVideoId: '7ghhRHRP6t4',
        // part: 'id,snippet',
        // type: 'video',
        maxResults: '50'
    },
    headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
};

axios.request(options).then(function (response) {
    console.log(response.data);
}).catch(function (error) {
    console.error(error);
});

export const fetchFromApi = async(url)=>{
    const res = await axios.get(`${BASE_URL}/${url}`,options)
    return res.data;
}