export default function handler(req, res) {

    // if (req.method === 'POST'){
    //     res.status(200).json('Creating products')
    // } else {
    //     res.status(200).json('Getting products')
    // }

    (req.method === 'POST') ?
        res.status(200).json('Creating products')
        :
        res.status(200).json('Getting products');

}
