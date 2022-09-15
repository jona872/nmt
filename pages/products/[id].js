import React from 'react'
import Layout from '../../components/Layout/Layout'
import axios from 'axios'
import { useRouter } from 'next/router'

function ProductView({ product }) {
  const router = useRouter()
  const handleDelete = async (id) => {
    console.log("Clicked: " + id);
    const res = await axios.delete('/api/products/' + [id]);

    console.log(res);
    router.push("/");
  }

  
  return (
    <Layout>
      <div>ProductView</div>
      <h1>{product.name}</h1>
      <h2>{product.price}</h2>
      <h3>{product.description}</h3>
      <button className="bg-red-700 px-3 py-2 text-white hover:bg-red-400"
        onClick={() => { handleDelete(product.id) }}>
        Delete
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

