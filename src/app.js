import express from "express";
import cors from "cors"

const tweets = []
const usuario = []

// Criação do app
const app = express();

//Configuração do app
app.use(express.json())
app.use(cors())


app.get("/tweets", (req, res) => {

	const postagens = [...tweets].reverse().slice(0, 10)

		res.send(postagens).status(200)
})

app.post("/sign-up", (req, res) => {

	const {username, avatar} = req.body

	if (!username || !avatar){
		res.send("Todos campos são obrigatórios").status(400)
		return
	}

	const novoUsuario = {username, avatar}

	usuario.push(novoUsuario)
	console.log(req.body)	
    res.send("OK").status(201)
	
  });

app.post("/tweets", (req, res) => {

	const {username, tweet, avatar} = req.body

	const USER = usuario.find(user => user.username === username)

	if (!USER) {
		return res.status(401).send("UNAUTHORIZED")
	}
	
	tweets.push({...USER, tweet})
	res.send('OK')
})

app.listen(5000)

