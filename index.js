const express = require("express") // se importa la libreria tipo express,  este sirve par realizar apps webs o apis con node.js 
const cors = require("cors") // esta libreria nos sirve para poder recibir los datos de los usurios desde le forntend y asegurara la comunicacion con el backend


const app = express();

app.use(cors())
app.use(express.json())  

const jugadores = []

class Jugador {
  constructor(id) {
    this.id = id
  }
}

app.get("/unirse", (req, res) => {
  const id = `${Math.random()}`

  const jugador = new Jugador(id)

  jugadores.push(jugador)

  res.setHeader("Access-Control-Allow-Origin" , "*")
  
  res.send(id)
})

app.post("/Monster/:jugadorId", (req, res) => {
  const jugadorId = req.params.jugadorId ||  ""
  console.log(jugadores)
  console.log(jugadorId)
  res.end()

})

app.listen(8080, () => {
  console.log("Servidor en  linea ")
})