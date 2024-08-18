import express  from "express";
import mysql from 'mysql2'
import cors from 'cors'


const app = express()
//midleware to prevent post body errors to client
app.use(express.json())
app.use(cors())

const db = mysql.createConnection({
    host:"localhost",
    user:"admin",
    password:"admin",
    database:'test'
})

app.listen(4000, () => {
    console.log("Server Online")
})

//Select query
app.get("/books",(req,res) => {
    const q = "SELECT * FROM books;"
    db.query(q,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
})

//Post query
app.post("/books", (req, res) => {
    const q = "INSERT INTO books(`title`, `desc`, `rating`, `cover`) VALUES (?)";
  
    const values = [
      req.body.title,
      req.body.desc,
      req.body.rating,
      req.body.cover,
    ];
  
    db.query(q, [values], (err, data) => {
      if (err) return res.send(err);
      return res.json(data);
    });
  });

//Delete query
app.delete("/books/:id", (req,res) => {
  const bookId = req.params.id;
  const q = "DELETE FROM books WHERE id = ?"

  db.query(q, [bookId],(err,data) => {
    if(err) return res.json(err);
    return res.json("Livro deletado com sucesso!")
  })
})

//Edit/Put Query
app.put("/books/:id", (req, res) => {
  const bookId = req.params.id;
  const q = "UPDATE books SET `title`= ?, `desc`= ?, `rating`= ?, `cover`= ? WHERE id = ?";

  const values = [
    req.body.title,
    req.body.desc,
    req.body.rating,
    req.body.cover,
  ];

  db.query(q, [...values,bookId], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
});



//Mensagem teste
app.get("/",(req,res) => {
    res.json("backend online blz")
})
//================