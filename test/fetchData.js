import axios from 'axios'
export const fetchData = (fn)=>{
    axios.get('https://api.openweathermap.org/data/2.5/forecast?q=Adelaide&units=metric&appid=2ece6441e298124f969938e7eb0d0302').then((res)=>{
        fn(res.data)
    })
}

export const fetchTwoData = ()=>{
    return axios.get('https://api.openweathermap.org/data/2.5/forecast?q=Adelaide&units=metric&appid=2ece6441e298124f969938e7eb0d0302')
}

export const fetchThreeData = ()=>{
    return axios.get('https://api.openweathermap.org/datai/2.5/forecast?q=Adelaide&units=metric&appid=2ece6441e298124f969938e7eb0d0302')
}

export const fetchFourData = ()=>{
    return axios.get('https://api.openweathermap.org/data/2.5/forecast?q=Adelaide&units=metric&appid=2ece6441e298124f969938e7eb0d0302')
}