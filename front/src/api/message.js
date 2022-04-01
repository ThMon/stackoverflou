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

export const getMessageByUser = (user_id)=>{
    const token = window.localStorage.getItem("stackoverflou-token");
    return axios.get(`${process.env.REACT_APP_API_URL}/api/message/by_user/${user_id}`, {headers: {authorization: token}})
            .then((response)=>{
                return response.data
            })
            .catch((err)=>{
                console.log(err)
            })
}

export const deleteMessage = (id)=>{
    const token = window.localStorage.getItem("stackoverflou-token");
    return axios.delete(`${process.env.REACT_APP_API_URL}/api/message/delete/${id}`, {headers: {authorization: token}})
            .then((response)=>{
                return response.data
            })
            .catch((err)=>{
                console.log(err)
            })
}

export const updateMessage = (data, id)=>{
    const token = window.localStorage.getItem('stackoverflou-token');

    if(token) {
        return axios.put(`${process.env.REACT_APP_API_URL}/api/message/update/${id}`, data, {headers: {authorization: token}})
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

export const getMessageById = (message_id)=>{
    return axios.get(`${process.env.REACT_APP_API_URL}/api/message/${message_id}`)
            .then((response)=>{
                return response.data
            })
            .catch((err)=>{
                console.log(err)
            })
}

