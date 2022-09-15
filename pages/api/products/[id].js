import { pool } from "../../../config/db";

export default async function handler(req, res) {
  //req.method = GET, req.body ( data ), req.query
  
  switch (req.method) {
    case "GET":
      return await getProduct(req, res);  
    case "DELETE":
      return await deleteProduct(req, res);
  }

}

const getProduct = async (req, res) => {
  try {
    const { id } = req.query;
    const result = await pool.query("select * from product where id = ?", [id]);
    return res.status(200).json(result[0]);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

const deleteProduct = async (req, res) => {
  try {
    const { id } = req.query;
    const result = await pool.query("delete from product where id = ?", [id]);
    return res.status(200).json("Se elimino correctamente el prod id: "+id);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}
