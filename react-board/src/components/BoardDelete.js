import { useState, useEffect } from 'react';
import axios from "axios";
import { Link, useNavigate, useParams } from 'react-router-dom'

function BoardDelete(){

    const {id} = useParams();
    const [boards, setBoards] = useState(null);
    const url = `http://localhost:8000/board${id}`;
    const callBoard = ()=>{
        const result  = axios.delete(url);
    }

    return(
        <>
            <h2>delete</h2>
        </>
    )
}

export default BoardDelete;