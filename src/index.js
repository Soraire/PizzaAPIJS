import express from "express";
import pizza from "../src/models/pizza.js";
import BD from "pizzaService.js";
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
BD.GetAll
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.put("/{id}", (req, res) =>
{
    let respuesta = null;
    let intRowsAffected;
    let id = parseInt(req.params.id);
    let pizza = req.body;
    if (pizza.Id != id)
    {
        respuesta = BadRequest();
    }
    else
    {
        intRowsAffected = BD.ActualizarPizza(id, pizza);
        if (intRowsAffected > 0)
        {
            respuesta = Ok(pizza);
        }
        else
        {
            respuesta = NotFound();
        }
    }
    return respuesta;
});

app.delete("/{id}", (req, res) =>
{
    let intRowsAffected;
    let respuesta = null;
    let id = parseInt(req.params.id);
    if (id <= 0)
    {
        respuesta = BadRequest();
    }
    else
    {
        intRowsAffected = BD.BorrarPizzas(id);
        if (intRowsAffected > 0)
        {
            respuesta = Ok();
        }
        else
        {
            respuesta = NotFound();
        }
    }
    return respuesta;
});

app.post("/", (req, res) =>
{
    let pizza = req.body;
    BD.CrearPizzas(pizza);
    return Ok(pizza);
});

app.get("/{id}", (req, res) =>
{
    const p = new pizza();
    let respuesta = null;
    let id = parseInt(req.params.id);
    if (id <= 0)
    {
        respuesta = BadRequest();
    }
    else
    {
        p = BD.BuscarPizzaPorId(id);
        if (p == null)
        {
            respuesta = NotFound();
        }
        else
        {
            respuesta = Ok(p);
        }
    }
    return respuesta;
});