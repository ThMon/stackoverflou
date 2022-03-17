import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../../api/user';


export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate()


    const onSubmitForm = ()=>{
        const data = {
            email,
            password
        }

        loginUser(data)
            .then((res)=>{
                console.log(res)
                if(res.status === 200) {
                    window.localStorage.setItem("stackoverflou-token", res.data.token);
                    return navigate("/");
                }
            })     
    }

    return (
        <>
            <form 
                className="block custom-form"
                onSubmit={(e)=>{
                    e.preventDefault();
                    onSubmitForm()
                }}
            >
                <div>
                    <label>Se connecter</label>
                </div>
                <div>
                    <input
                        type="text"
                        placeholder="Email"
                        value={email}
                        onChange={(e)=>{
                            setEmail(e.target.value);
                        }}
                    />
                </div>
                <div>
                    <input
                        type="password"
                        placeholder="Mot de passe"
                        value={password}
                        onChange={(e)=>{
                            setPassword(e.target.value);
                        }}
                    />
                </div>
                <button type="submit">
                    Envoyer
                </button>
            </form>
        </>
    )
}
