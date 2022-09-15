import React from 'react'
import Layout from '../../components/Layout/Layout'
import axios from 'axios'
import { useRouter } from 'next/router'
import { toast } from 'react-toastify';

function ProductView({ product }) {
  const router = useRouter()
  const handleDelete = async (id) => {
    try {
      const res = await axios.delete('/api/products/' + [id]);
      toast.success("Product Deleted succesfully!")
      router.push("/");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  }


  return (
    <Layout>
      <div>ProductView</div>
      <h1>{product.name}</h1>
      <h2>{product.price}</h2>
      <h3>{product.description}</h3>

      <button className="bg-red-700 px-3 py-2 text-white hover:bg-red-400 m-2"
        onClick={() => { handleDelete(product.id) }}>
        Delete
      </button>

      <button className="bg-gray-700 px-3 py-2 text-white hover:bg-gray-400 m-2"
        onClick={() => router.push("/products/edit/" + product.id)}>
        Edit
      </button>

    </Layout>
  )
}

export const getServerSideProps = async (context) => {
  const res = await axios.get('http://0.0.0.0:3000/api/products/' + context.query.id);
  // console.log(res.data);

  return {
    props: {
      product: res.data
    }
  }
}

export default ProductView

