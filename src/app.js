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

	
	
		res.send(tweets).status(200)
	
})

app.post("/sign-up", (req, res) => {

	const {username, avatar} = req.body

	const novoUsuario = {username, avatar}

	usuario.push(novoUsuario)
	console.log(req.body)	
    res.send("OK")
	
  });

app.post("/tweets", (req, res) => {


	const {username, tweet} = req.body

	if(!usuario.find((user) => user.username === username)){
		return res.status(401).send("UNAUTHORIZED")
	}

	const novoTweet = {username, tweet}

	tweets.push(novoTweet)
	res.send("OK")
})

app.listen(5000)

