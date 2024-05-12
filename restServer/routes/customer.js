const express = require("express");
const router = express.Router();
const mysql = require("../mysql");


const sql = {
    customerList : "select * from customer", //전체조회
    customerInsert : "insert into customer set ?", //등록
    customerUpdate : "update customer set ? where id=?", // 수정
    customerDelete : "delete from customer where id=?", //삭제
}

router.get("/", async (req, res)=>{  //전체조회
    let result = await mysql.query(sql.customerList);
    res.send(result);
})

router.post("/", async(req, res)=>{ //등록
    let customer = req.body;
    let result = await mysql.query(sql.customerInsert, customer);
    if(result.affectedRows == 1){
        res.send(true);
    }else{
        res.send(false);
    }
})

router.put("/:id", async(req, res)=>{ // 수정
    let id =req.params.id;
    let customer = req.body;
    let result = await mysql.query(sql.customerUpdate, [customer, id]);
    res.send(result);
})

router.delete("/:id", async(req, res)=>{ //삭제
    let id = req.params.id;
    let result = await mysql.query(sql.customerDelete, id);
    res.send(result);
})


module.exports = router;