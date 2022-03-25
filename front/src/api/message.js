import axios from "axios";

export const saveMessage = (data)=>{
    const token = window.localStorage.getItem('stackoverflou-token');

    if(token) {
        return axios.post(`${process.env.REACT_APP_API_URL}/api/message/save`, data, {headers: {authorization: token}})
                    .then((response)=>{
                        return response.data
                    })
                    .catch((err)=>{
                        console.log(err)
                    })
    } else {
        return {status: 404, data: {msg: "token not found"}}
    }
}

export const getMessageByTopic = (topic_id)=>{
    return axios.get(`${process.env.REACT_APP_API_URL}/api/message/by_topic/${topic_id}`)
            .then((response)=>{
                return response.data
            })
            .catch((err)=>{
                console.log(err)
            })
}