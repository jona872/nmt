export default function handler(req, res) {
    console.log(req.query);
    //req.method = GET
    res.status(200).json('Accessing dinamic products '+ req.query.id)
  }
  