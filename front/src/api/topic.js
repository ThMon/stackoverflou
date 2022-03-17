import axios from 'axios';

export const getTopics = ()=>{
    return axios.get(`${process.env.REACT_APP_API_URL}/api/topic/all`)
            .then((response)=>{
                return response.data
            })
            .catch((err)=>{
                console.log(err)
            })
}

export const saveTopic = (data)=>{
    const token = window.localStorage.getItem("stackoverflou-token");

    if(token !== null) {
        return axios.post(`${process.env.REACT_APP_API_URL}/api/topic/save`, data, {headers: {authorization: token}})
                        .then((response)=>{
                            return response.data
                        })
                        .catch((err)=>{
                            console.log(err)
                        })
    } else {
        return {status: 401, data: {msg: "not token found"}}
    }
}