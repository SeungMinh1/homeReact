import { useState, useEffect } from 'react';
import axios from "axios";
import { Link, useNavigate} from 'react-router-dom'


function BoardList() {

    let url = "http://localhost:8000/board/";
    const navigation = useNavigate();
    let [boards, setBoards] = useState([]);
    

    const callBoard = async () => {
        const result = await axios.get(url);
        setBoards(result.data);

    }

    useEffect(() => { callBoard() }, [])

    return (
        <>
            <div>
                <h2>BoardList table</h2>
                <table className='table'>
                    <thead>
                        <tr>
                            <td>id</td>
                            <td>title</td>
                            <td>body</td>
                            <td>dt</td>
                            <td>writer</td>
                        </tr>
                    </thead>
                    <tbody>
                        {boards.map(board => 
                            <tr key={board.id} >
                                <td>{board.id}</td>
                                <td>{board.title}</td>
                                <td><Link to={`/board/${board.id}`}>{board.body}</Link></td>
                                <td>{board.dt}</td>
                                <td>{board.writer}</td>
                            </tr>
                        )}

                    </tbody>
                </table>
                <button  className="btn btn-dark" onClick={()=>navigation(`/board/insert`)}>등록</button>
            </div>
        </>
    )
}

export default BoardList;