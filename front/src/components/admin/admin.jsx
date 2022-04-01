import React, {useEffect, useState} from 'react';
import { useSelector } from 'react-redux';
import { getMessageByUser, deleteMessage } from '../../api/message';
import { Link } from 'react-router-dom';

export default function Admin() {
    const user = useSelector(state => state.user);
    const [messages, setMessages] = useState([])

    useEffect(()=>{
        if(user.infos !== null) {
            getMessageByUser(user.infos._id)
                .then((res)=>{
                    setMessages(res.data.messages)
                })
        }  
    }, [user])

    return (
        <div>
            <h2>Gestion de mes messages</h2>
            <ul className="list-items">
                {messages.map((message)=>{
                    return (<li className="block" key={message._id}>
                        <h3>{message.title}</h3>
                        <p>{message.content}</p>
                        <Link className="link-custom" to={`/admin/updateMessage/${message._id}`}>Modifier</Link>
                        <button
                            className="link-custom"
                            onClick={()=>{
                                deleteMessage(message._id)
                                    .then((res)=>{
                                        getMessageByUser(user.infos._id)
                                        .then((res)=>{
                                            setMessages(res.data.messages)
                                        })
                                    })
                            }}
                        >Supprimer</button>
                    </li>)
                })}
            </ul>
        </div>
    )
}
