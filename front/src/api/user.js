import axios from 'axios';

export const saveUser = (data)=>{
    return axios.post(`${process.env.REACT_APP_API_URL}/api/user/save`, data)
            .then((response)=>{
                return response.data;
            })
            .catch((err)=>{
                console.log(err);
            })
}

export const loginUser = (data)=>{
    return axios.post(`${process.env.REACT_APP_API_URL}/api/user/login`, data)
            .then((response)=>{
                return response.data;
            })
            .catch((err)=>{
                console.log(err);
            })
}

export const checkToken = (token)=>{
    return axios.get(`${process.env.REACT_APP_API_URL}/api/auth/checkToken`, {headers: {authorization: token}})
            .then((response)=>{
                return response.data;
            })
            .catch((err)=>{
                console.log(err);
            })
}