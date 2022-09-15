import axios from 'axios';
import React, { useEffect } from 'react';
import { useRouter } from "next/router";

export function ProductForm() {
  const [product, setProduct] = React.useState({
    name: "",
    price: 0,
    description: "",
  });
  const router = useRouter();

  useEffect(() => {
    const getProduct = async () => {
      const { data } = await axios.get('/api/products/' + router.query.id);
      setProduct(data);
    }
    getProduct();
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log(name, value);
    setProduct((prevState) => {
      return {
        ...prevState,
        [name]: value
      };
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (router.query.id) {
      //update (PUT)
      console.log("Entro en ProductForm PUT");
      const response = await axios.put('/api/products/' + router.query.id, product);
      console.log(response);

    } else {
      //create (POST)
      console.log("Entro en ProductForm POST");
      const response = await axios.post('/api/products', product);
    }

    router.push('/');
  };
  // https://www.youtube.com/watch?v=7vBSeFjJCww

  return (
    <div className="w-full max-w-xs">
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 py-6 pb-8 mb-4">
        <label htmlFor="name">Name: </label>
        <input type="text" name="name" value={product.name || ''}
          onChange={handleChange} className="shadow border rounded py-3 px-3 text-gray-700" />

        <label htmlFor="price">Price: </label>
        <input type="number" name="price" value={product.price || ''}
          onChange={handleChange} className="shadow border rounded py-3 px-3 text-gray-700" />

        <label htmlFor="description">Description: </label>
        <textarea name="description" id="description" rows="2" value={product.description || ''}
          onChange={handleChange} className="shadow border rounded py-3 px-3 text-gray-700"></textarea>

        <button className="bg-blue-500 hover:bg-blue-700 py-2 px-4 rounded foucus:outline-none focus:shadow-outline font-bold text-white ">
          {
            router.query.id ? "Update Product" : "Save Product"
          }
        </button>
      </form>
    </div>
  );
}