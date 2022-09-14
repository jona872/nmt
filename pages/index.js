import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { ProductForm } from '../components/ProductForm/ProductForm';

export default function Home() {
  return (
    <div>
      <ProductForm />
    </div>

  )
}
