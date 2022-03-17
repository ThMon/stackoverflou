import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { checkToken } from '../api/user';
import { loginUserReducer } from '../lib/redux/user/userReducer';

export default function RequireAuth({children, withAuth}) {
    const user = useSelector(state => state.user)
    const navigate = useNavigate();
    const dispatch = useDispatch();
    
    useEffect(()=>{
        if(!user.isLogged && withAuth){
            const token = window.localStorage.getItem("stackoverflou-token")
            if(token === null) {
                return navigate("/login");
            } else {
                checkToken(token)
                    .then((res)=>{
                        if(res.status !== 200) {
                            return navigate("/login");
                        } else {
                            dispatch(loginUserReducer(res.data.user))
                        }
                    })
            } 
        }
    })

    return (<>{children}</>)

}
