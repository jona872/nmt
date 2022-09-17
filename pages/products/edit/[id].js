import React from 'react'
import Layout from '../../../components/Layout/Layout';
import { ProductForm } from '../../../components/ProductForm/ProductForm';



export default function EditPage({ product }) {
  return (
    <Layout>
      <div className="grid place-items-center h-5/6" >
        <ProductForm />
      </div>
    </Layout>

  )
}


export const getServerSideProps = async (context) => {
  // const res = await axios.put('http://0.0.0.0:3000/api/products/edit' + context.query.id);
  // console.log(context);

  return {
    props: {

    }
  }
}
