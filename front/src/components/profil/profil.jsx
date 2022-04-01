import React, {useState, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { updateUser } from '../../api/user';
import { loadUserInfosReducer } from '../../lib/redux/user/userReducer';
import {Link} from 'react-router-dom'

export default function Profil() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [nickName, setNickName] = useState("");
 
    const user = useSelector(state => state.user);
    const dispatch = useDispatch();
    
    useEffect(()=>{
        if(user.infos !== null) {
            setFirstName(user.infos.firstName);
            setLastName(user.infos.lastName);
            setNickName(user.infos.nickName);
        } 
    }, [user])    

    const onSubmitForm = ()=>{
        const data = {
            firstName,
            lastName,
            nickName
        }
        console.log(user.infos._id)
        updateUser(data, user.infos._id)
            .then((res)=>{

                if(res.status === 200) {
                    dispatch(loadUserInfosReducer(res.user))
                }
            })
    }

    return (
        <div>
            <h3>Mon profil</h3>
            <form 
                    className="block custom-form"
                    onSubmit={(e)=>{
                        e.preventDefault();
                        onSubmitForm()
                    }}
                >
                    <div>
                        <label>Ajouter un message</label>
                    </div>
                    <div>
                        <input
                            type="text"
                            placeholder="Prénom"
                            value={firstName}
                            onChange={(e)=>{
                                setFirstName(e.target.value);
                            }}
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            placeholder="Nom"
                            value={lastName}
                            onChange={(e)=>{
                                setLastName(e.target.value)
                            }}
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            placeholder="Pseudo"
                            value={nickName}
                            onChange={(e)=>{
                                setNickName(e.target.value)
                            }}
                        />
                    </div>
                    <button type="submit">
                        Envoyer
                    </button>
                </form>

                <Link to="/admin" className="link-custom">Gérer mes messages</Link>
        </div>
    )
}
