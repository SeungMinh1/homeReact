const express = require("express"); //  서버 사이드 프레임워크 
const customerRoute = require("./routes/customer");
const todoRoute = require("./routes/todo");
const boardRouter = require("./routes/boardRouter");
const morgan = require("morgan");
const cors = require("cors");
const app = express();
const port = 8000;

app.use(cors());
app.use(morgan("tiny"));
app.use(express.json());     ////////////////// express 프레임워크 body-parse
app.use(express.urlencoded({extended:false}));  // 클라이언트로부터 전달받은 데이터를 처리하는 함수 제공
app.use("/customer", customerRoute);
app.use("/todo", todoRoute);
app.use("/board", boardRouter);


app.get("/", (req, res)=>{
    res.send("hello world");
});

app.listen(port, ()=>{
    console.log(`server running http://localhost:${port}`);
})