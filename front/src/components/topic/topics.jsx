import React, {useEffect, useState} from 'react'
import { getTopics } from '../../api/topic'
import { Link } from 'react-router-dom'

export default function Topics() {
    const [topics, setTopics] = useState([])
    useEffect(()=>{
        console.log("useEffect")
        getTopics()
            .then((res)=>{
                console.log(res);
                setTopics(res.topics)
            })
    }, [])

    return (
        <>
            <h2>Tous les topics</h2>
            <Link to="/addTopic" className="link-custom">Ajouter un topic</Link>
            <ul className="list-items">
                {topics.map(topic => (
                    <li key={topic._id} className="block">
                        <Link to={`/topic/${topic._id}`}>{topic.title}</Link>
                        <p>{topic.description}</p>
                    </li>
                ))}
            </ul>
        </>
    )
}
