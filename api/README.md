## Test Post

//Post query
app.post("/books",(res,req)=>{
    const q = "INSERT INTO books (`title`,`desc`,`cover`) VALUES (?);"
    const values = ["title from backend","desc from backend","cover from backend"]

    db.query(q,[values],(err,data) => {
        if(err) return json(err)
        return res.json("Livro adicionado com sucesso!")
    })
})
