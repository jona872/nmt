import axios from 'axios';
import React, { useEffect } from 'react';
import { useRouter } from "next/router";
import { toast } from 'react-toastify';

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
    setProduct((prevState) => {
      return {
        ...prevState,
        [name]: value
      };
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (router.query.id) {
        //update (PUT)
        await axios.put('/api/products/' + router.query.id, product);
        toast.success("Product updated succesfully!")
      } else {
        //create (POST)
        await axios.post('/api/products', product);
        toast.success("Product created succesfully!")
      }
      router.push('/');
    } catch (error) {
      toast.error(error.response.data.message);
    }

  };
  // https://www.youtube.com/watch?v=7vBSeFjJCww

  return (
    <div className="w-full max-w-xs">

      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-6">

        <div className="mb-6">
          <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Name: </label>

          <input type="text" name="name" value={product.name || ''}
            onChange={handleChange} id="name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Product name here..." required />
        </div>


        <div className="mb-6">
          <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Price: </label>

          <input type="text" name="price" value={product.price || ''}
            onChange={handleChange} id="price" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Product price here..." required />
        </div>

        <div className="mb-6">
          <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Description:</label>

          <textarea name="description" id="description" value={product.description || ''}
            onChange={handleChange} rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Product description..."></textarea>
        </div>

        <button type="submit" className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
          {
            router.query.id ? "Update Product" : "Save Product"
          }
        </button>


      </form>
    </div>
  );
}