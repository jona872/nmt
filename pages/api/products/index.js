import { pool } from '../../../config/db';
//Main prod handler, used for the prod. landing page,
//Loads all prod, and handle the creation post (same index url)

export default async function handler(req, res) {
   switch (req.method) {
      case "GET":
         return await getProducts(req, res);
      case "POST":
         return await saveProduct(req, res);
   }
}

const getProducts = async (req, res) => {
   try {
      const result = await pool.query("SELECT * FROM product");
      return res.status(200).json(result);
   } catch (error) {
      return res.status(500).json({ message: error.message });
   }
}

function randomNumber() {
   return Math.floor(Math.random() * (100 - 1 + 1)) + 1;
}

const saveProduct = async (req, res) => {
   try {
      const imgId = randomNumber(); // width=200, height=300;
      const url = "https://picsum.photos/id/"+ imgId +"/200/300";
      const { name, description, price } = req.body;

      const result = await pool.query("INSERT INTO product SET ?", {
         name,
         description,
         price,
         url,
      });
      return res.status(200).json({ name, description, price, url , id: result.insertId });
   } catch (error) {
      return res.status(500).json({ message: error.message });
   }
}