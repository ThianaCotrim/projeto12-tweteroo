import express from "express";
import cors from "cors"


const tweets = [
	{
		username: "bobesponja",
		avatar: "https://cdn.shopify.com/s/files/1/0150/0643/3380/files/Screen_Shot_2019-07-01_at_11.35.42_AM_370x230@2x.png",
		tweet: "Eu amo hambúrguer de siri!"
	}
]



const app = express();

app.use(cors())

app.get("/tweets", (req, res) => {
    res.send(tweets)
})

app.post("/sign-up", (req, res) => {

	const usuario = []

	const novoUsuario = {
		    username: "bobesponja",
			avatar: "https://cdn.shopify.com/s/files/1/0150/0643/3380/files/Screen_Shot_2019-07-01_at_11.35.42_AM_370x230@2x.png"
	}

	// const usuarios = [];

	// const { username, avatar } = req.body

	// const novoUsuario = { username, avatar };

    // usuarios.push(novoUsuario)
	usuario.push(novoUsuario)
    res.send("OK")
	console.log(usuario)
})

app.listen(5000)

