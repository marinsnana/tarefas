const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('./ws.db')

db.serialize(function() {

    //criar tabela

    db.run(`
        CREATE TABLE IF NOT EXISTS ideas(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            image TEXT,
            title TEXT,
            category TEXT,
            description TEXT,
            link TEXT
        );
    `)
    
    // inserir dado na tabela

/*     const query = `
    INSERT INTO ideas(
        image,
        title,
        category,
        description,
        link
    ) VALUES (?,?,?,?,?);
    `

    const values = [
        "https://cdn-icons-png.flaticon.com/512/2729/2729068.png",
        "Cursos de programação",
        "Estudo" ,
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        "http://rocketseat.com.br"
    ]


    db.run(query, values, function(err){
        if (err) return console.log(err)

        console.log(this)
    }) */

/*     // deletar dado na tabela
    db.run (`DELETE FROM ideas WHERE id = ?`, function(err){
        if (err) return console.log(err)

        console.log("DELETADO", this)
    }) */


/*     // consultar dados na tabela

     db.all(`SELECT * FROM ideas`, function(err, rows){
        if (err) return console.log(err)

        console.log(rows)
    })
 */
})

module.exports = db