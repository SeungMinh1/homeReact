import { useState, useEffect } from 'react';
import axios from "axios";
import { Link, useNavigate, useParams } from 'react-router-dom'


function BoardUpdate() {

    const { id } = useParams();
    const navigation = useNavigate();
    const url = `http://localhost:8000/board/${id}`;
    const [boards, setBoards] = useState({});

    const callBoard = async () => {
        const result = await axios.get(url);
        setBoards(result.data[0]);
    }
    useEffect(()=>{callBoard()}, [])

    function doupdate(id){
        let change = {title: boards.title, body:boards.body, writer:boards.writer};
        axios.put(`http://localhost:8000/board/${id}`, change);
        alert("수정되었습니다.");
        navigation(`/board/${id}`);
    }

    return (
        <>
            <div>
                <h2>BoardUpdate</h2>
                <input type='text' name='title' class="form-control" value={boards.title} onChange={e => { setBoards({ ...boards, title: e.target.value }) }}></input>
                <input type='text' name='body' class="form-control" value={boards.body} onChange={e => { setBoards({ ...boards, body: e.target.value }) }}></input>
                <input type='text' name='writer' class="form-control" value={boards.writer} onChange={e => { setBoards({ ...boards, writer: e.target.value }) }}></input>
                <button onClick={() => doupdate(boards.id)}> 수정 </button>
            </div>
        </>
    )
    
}

export default BoardUpdate;