import{Route, Routes, NavLink} from 'react-router-dom'
import BoardDelete from './components/BoardDelete';
import BoardInfo from './components/BoardInfo';
import BoardInsert from './components/BoardInsert';
import BoardList from './components/BoardList';
import BoardUpdate from './components/BoardUpdate';
import Home from './components/Home';

import {Card, CardBody} from 'reactstrap';
import styled from 'styled-components';

function App() {
  return (
    <div className="App">
      <div className='navbar bg-body-tertiary'>
        <div className='container-fluid'>
          <h1>게시판 만들어보기</h1>
        </div>
      </div>

      <div className='row'>

        <div className='col-4'>
          <ul className='nav flex-column'>
            <li className='nav-item'><NavLink to='/'>Home</NavLink></li>
            <li className='nav-item'><NavLink to='/board'>BoardList</NavLink></li>

            <li className='nav-item'><NavLink to='/board/insert'>BoardInsert</NavLink></li>
          </ul>
        </div>

        <div class="p-3 text-primary-emphasis bg-primary-subtle border border-primary-subtle rounded-3" style={{ "width": "44rem" }} >
          <Card>
            <CardBody>
              <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/board' element={<BoardList />}></Route>
                <Route path='/board/:id' element={<BoardInfo />}></Route>
                <Route path='/board/insert' element={<BoardInsert />}></Route>
                <Route path='/board/update/:id' element={<BoardUpdate />}></Route>
              </Routes>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default App;
