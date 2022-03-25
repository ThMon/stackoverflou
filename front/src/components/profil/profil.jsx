import React from 'react'
import { useSelector } from 'react-redux';


export default function Profil() {

    const user = useSelector(state => state.user)

    const onSubmitForm = ()=>{

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
                            value={user.infos.firstName}
                            onChange={(e)=>{
                                
                            }}
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            placeholder="Nom"
                            value={user.infos.lastName}
                            onChange={(e)=>{
                                
                            }}
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            placeholder="Pseudo"
                            value={user.infos.nickName}
                            onChange={(e)=>{
                                
                            }}
                        />
                    </div>
                    <button type="submit">
                        Envoyer
                    </button>
                </form>
        </div>
    )
}
