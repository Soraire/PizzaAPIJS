import sql from 'mssql';
import configDB from '../models/db.js';

export const get2Pizzas = async () => {
    const conn = await sql.connect(configDB);
    const pizza = new Pizza();
    pizza.nombre = 'Test';
    pizza.descripcion = 'Test';
    pizza.precio = 1000;
    pizza.libreDeGluten = false;
    const results = await conn.request()
        .input("pNombre", pizza.nombre)
        .input("pDescripcion", pizza.descripcion)
        .input("pLibreDeGluten", pizza.libreDeGluten)
        .input("pPrecio", pizza.precio)
        .query('INSERT INTO Pizzas (Nombre, Descripcion, LibreGluten, Importe) VALUES (@pNombre, @pDescripcion, @pLibreDeGluten, @pPrecio)');

    console.log(results);
}