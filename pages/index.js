import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { ProductForm } from '../components/ProductForm/ProductForm';
import axios from 'axios'
import Layout from '../components/Layout/Layout';
import Link from 'next/link';
import ProductCard from '../components/ProductCard/ProductCard';

export default function Home({ products }) {
  // const [productsList,setProductsList] = React.useState(products);

  const vProd = products.map((prod) => {
    return (
      <ProductCard key={prod.id} product={prod} />
    );
  });

  return (
    <div>
      <Layout>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {(products.length === 0) && (
            <h1 className="text-center text-bold text-2xl"> Empty Product List!</h1>
          )}
          {vProd}
        </div>
        
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

