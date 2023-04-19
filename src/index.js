import express from "express"
import pizza from "models/"
const app = express()
const port = 3000
app.use(express.json());

app.put('/api/:id', (req, res)=>{
  const id = req.params.id;
  console.log(id);
  const pizza = new Pizza();

  pizza.nombre = req.body.Nombre;
  pizza.precio = req.body.Precio;

  console.log(pizza);
  res.send('Hola Mundo!')
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})