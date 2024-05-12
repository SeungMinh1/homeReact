const express = require("express");
const router = express.Router();
const mysql = require("../mysql");

const sql = {
    todoList : "select * from todo", //전체조회
    todoInsert : "insert into todo set ?", //등록
    todoUpdate : "update todo set complete=? where no=?", //수정
    todoDelete : "delete from todo where no= ?", //삭제
}


router.get("/", async (req, res)=>{  //전체조회
    let result =  await mysql.query(sql.todoList);
    res.send(result);
})

router.post("/", async (req, res) =>{ //등록
    let todo = req.body;
    let result = await mysql.query(sql.todoInsert, todo);
    res.send(result);
})

router.put("/:no/:complete", async (req, res) =>{  //수정
    let no = req.params.no;
    let comp = req.params.complete;
    let result = await mysql.query(sql.todoUpdate, [comp, no]);
    res.send(result);

})

router.delete("/:no", async (req, res) =>{ //삭제
    let no = req.params.no;
    let result = await mysql.query(sql.todoDelete, no);
    res.send(result);
})

module.exports = router;