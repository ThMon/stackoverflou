import React, {useState} from 'react'
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { saveMessage } from '../../api/message';
import { useNavigate } from 'react-router-dom';

export default function AddMessage() {
    const [content, setContent] = useState("");
    const params = useParams();
    const {topic_id} = params
    const user = useSelector(state => state.user)
    const navigate = useNavigate()


    const onSubmitForm = ()=>{
        const data = {
            content: content,
            user_id: user.infos._id,
            topic_id: topic_id
        }

        saveMessage(data)
            .then((res)=>{
                if(res.status === 200) {
                    return navigate(`/topic/${topic_id}`)
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
                    <label>Ajouter un message</label>
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
