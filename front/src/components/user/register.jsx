import React, {useState} from 'react';
import { saveUser } from '../../api/user';
import { useNavigate } from 'react-router-dom';

export default function Register() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [nickName, setNickName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate()

    const onSubmitForm = ()=>{
        const data = {
            firstName, // firstName: firstName
            lastName,
            nickName,
            email,
            password
        }

        saveUser(data)
            .then((res)=>{
                if(res.status === 200) {
                    return navigate('/login');
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
                    <label>S'enregistrer</label>
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
                            setLastName(e.target.value);
                        }}
                    />
                </div>
                <div>
                    <input
                        type="text"
                        placeholder="Pseudo"
                        value={nickName}
                        onChange={(e)=>{
                            setNickName(e.target.value);
                        }}
                    />
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
