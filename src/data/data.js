import axios from "axios";

const MOVIE_URL='https://dummyapi.online/api/movies';

export const fetch_movie=async()=>{
    try{
        const response=await axios.get(MOVIE_URL);
        return response.data;



    }
    catch(error){
     console.error(error.message);
     return []
     
    }
}

export const fetch_movie_data=async(id)=>{
    try{
        const response=await axios.get(`${MOVIE_URL}/${id}`);
        return response.data;

    }
    catch(error){
    console.log(error.message);
    return null;
    
    }
}