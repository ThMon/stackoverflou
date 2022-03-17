import React, {useState} from 'react';
import { useSelector } from 'react-redux';
import { saveTopic } from '../../api/topic';
import { useNavigate } from 'react-router-dom';

export default function AddTopic() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const user = useSelector(state => state.user)
    const navigate = useNavigate()

    const onSubmitForm = ()=>{
        const data = {
            title: title,
            description: description,
            user_id: user.infos._id
        }

        saveTopic(data)
            .then((res)=>{
                if(res.status === 200) {
                    return navigate("/topics");
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
                        <label>Ajouter un topic</label>
                    </div>
                    <div>
                        <input
                            type="text"
                            placeholder="Titre"
                            value={title}
                            onChange={(e)=>{
                                setTitle(e.target.value);
                            }}
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            placeholder="Description"
                            value={description}
                            onChange={(e)=>{
                                setDescription(e.target.value);
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
