import { pool } from "../db.js";

// get all
export const getAllTecnologia = async(req, res)=>{

    const {rows} = await pool.query('SELECT * FROM tecnologia')
    res.json(rows)

}


// POST 
export const postTecnologia = async(req, res)=>{

    const {nombre, precio} = req.body

    await pool.query('INSERT INTO tecnologia (nombre, precio) values($1, $2)', [nombre, precio])
    res.json({"message": "Guardado!!"})

}


// get one
export const getOneTecnologia = async(req, res)=>{

    const {id} = req.params
    const {rows} = await pool.query('SELECT * FROM tecnologia WHERE id=$1', [id])
    res.json(rows)
}


// delete
export const deleteTecnologia = async(req,res)=>{

    const {id} = req.params
    await pool.query('DELETE FROM tecnologia WHERE id=$1', [id])
    res.json({"message": "Eliminado!!"})

}

// update
export const updateTecnologia = async(req, res)=>{

    const {id} = req.params
    const {nombre, precio} = req.body

    await pool.query('UPDATE tecnologia SET nombre=$1, precio=$2  where id=$3', [nombre, precio, id])
    res.json({"message": "actualizado!!!"})


}