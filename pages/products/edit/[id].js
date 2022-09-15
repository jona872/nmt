import React from 'react'
import { ProductForm } from '../../../components/ProductForm/ProductForm';

export default function EditPage({product}) {
  return (
      <>
      <ProductForm />
      </>

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
