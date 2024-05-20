import { useState, useEffect } from 'react';
import axios from "axios";
import { Link, useNavigate, useParams } from 'react-router-dom'

function BoardInfo(){

   
    const navigation = useNavigate();
    let [boards, setBoards] = useState({});
    let {id} = useParams();
    let url = `http://localhost:8000/board/${id}`;

    const callBoard = async()=>{
        const result = await axios.get(url);
        setBoards(result.data[0]);
    }

    useEffect(()=>{callBoard()}, [])

    function toback(){
        navigation(-1);
    }
    function tohome(){
        navigation("/");
    }
    function bdelete(){
        const result  = axios.delete(`http://localhost:8000/board/${boards.id}`);
        alert("삭제되었습니다.")
        navigation("/board");
    }
    return(
        <>
             <h1>게시글</h1>
            <div className="card" style={{"width":"35rem"}}>
                <div className='card-head'><h2>제목 : {boards.title}({boards.id})</h2></div>
                <div className="card-body">
                    <p className="card-text">작성자 : {boards.writer}</p>
                    <hr></hr>
                    <p className="card-title">내용 : {boards.body}</p>
                    <hr></hr>
                    <p className="card-text">작성일자 : {boards.dt}</p>
                    <hr></hr>
                    
                    <button  className="btn btn-success" onClick={toback}>뒤로</button>
                    <button  className="btn btn-primary" onClick={tohome}>홈으로</button>
                    <button  className="btn btn-primary" onClick={bdelete}>삭제</button>
                    <button  className="btn btn-light" onClick={()=>navigation("/board")}>목록으로</button>
                    <button  className="btn btn-dark" onClick={()=>navigation(`/board/update/${boards.id}`)}>수정</button>
                </div>
            </div>
        </>
    )
}

export default BoardInfo;