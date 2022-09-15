import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { ProductForm } from '../components/ProductForm/ProductForm';
import axios from 'axios'
import Layout from '../components/Layout/Layout';
import Link from 'next/link';

export default function Home({ products }) {
  // const [productsList,setProductsList] = React.useState(products);

  const vProd = products.map((prod) => {
    return (
      <Link key={prod.id} href={`/products/${prod.id}`}  >
        <a>
          <div className="border border-gray-200 shadow-md p-6">
            <h1>{prod.name}</h1>
            <h1>{prod.price}</h1>
            <h1>{prod.description}</h1>
            <hr />
          </div>
        </a>

      </Link>
    );
  });
  return (
    <div>
      <Layout>
        {vProd}
      </Layout>
    </div>

  )
}

export const getServerSideProps = async (context) => {
  const products = await axios.get('http://0.0.0.0:3000/api/products');
  
  return {
    props: {
      products: products.data
    }
  }
}

