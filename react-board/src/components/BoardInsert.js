import { useState, useEffect } from 'react';
import axios from "axios";
import { Link, useNavigate, useParams } from 'react-router-dom'

function BoardInsert() {

    const navigation = useNavigate();
    const [boards, setBoards] = useState({});
    let url = `http://localhost:8000/board`;

    const callBoard = () => {
            axios.post(url, boards);
            alert('등록되었습니다.');
            navigation(`/board`)


    }

    return (
        <>
            <div>
                <h2>BoardInsert</h2>
                <input type='text' placeholder='title...' class="form-control" onChange={e =>{setBoards({...boards, title : e.target.value})}}></input>
                <input type='text' placeholder='body...'  class="form-control" onChange={e =>{setBoards({...boards, body : e.target.value})}}></input>
                <input type='text' placeholder='writer...' class="form-control" onChange={e =>{setBoards({...boards, writer : e.target.value})}}></input>
                <button onClick={callBoard}> 등록 </button>
            </div>


        </>
    )
}

export default BoardInsert;