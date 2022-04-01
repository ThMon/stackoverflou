import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getMessageById, updateMessage } from '../../api/message';
import { useNavigate } from 'react-router-dom';

export default function UpdateMessage() {
    const [content, setContent] = useState("");
    const params = useParams();
    const {message_id} = params
    const user = useSelector(state => state.user)
    const navigate = useNavigate()

    useEffect(()=>{ 
        console.log(message_id)
        getMessageById(message_id)
            .then((res)=>{
                console.log(res)
                setContent(res.message.content)
            })
    }, [])

    const onSubmitForm = ()=>{
        const data = {
            content: content
        }

    const {message_id} = params
        updateMessage(data, message_id)
            .then((res)=>{
                console.log(res);
                if(res.status === 200) {
                    return navigate("/admin")
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
                    <label>Editez un message</label>
                </div>
                <div>
                    <input
                        type="text"
                        placeholder="Tapez votre message"
                        value={content}
                        onChange={(e)=>{
                            setContent(e.target.value);
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
