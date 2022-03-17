import React, {useState} from 'react';
import { useParams } from 'react-router-dom';

export default function Topic() {
    const [topic, setTopic] = useState(null)
    const params = useParams()
    const {id} = params;
    console.log(params)

    return (
        <>
            <h2>Detail : {id} </h2>
        </>
    )
}
