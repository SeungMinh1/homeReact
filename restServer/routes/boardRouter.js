const express = require("express");
const router = express.Router();
const mysql = require("../mysql");

const sql = {
    boardList : "select * from board",
    boardInfo : "select * from board where id=?",
    boardInsert: "insert into board set ?",
    boardUpdate: "update board set ? where id=?",
    BoardDelete: "delete from board where id=?"

}

router.get("/", async (req, res)=>{
    let result = await mysql.query(sql.boardList);
    res.send(result);
})

router.get("/:id", async (req, res)=>{
    let id = req.params.id;
    let result = await mysql.query(sql.boardInfo, id);
    res.send(result);
})

router.post("/", async (req, res)=>{
    let getboard = req.body;
    let result = await mysql.query(sql.boardInsert, getboard);
    res.send(result);
})

router.put("/:id", async (req, res)=>{
    let id = req.params.id
    let getboard = req.body;
    let result = mysql.query(sql.boardUpdate, [getboard, id])
    res.send(result);
})

router.delete("/:id", async (req, res)=>{
    let id= req.params.id;
    let result = mysql.query(sql.BoardDelete, id);
    res.send(result);
})



module.exports = router;