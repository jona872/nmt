import { ProductForm } from "../../components/ProductForm/ProductForm";
import Layout from "../../components/Layout/Layout";

export default function Create() {
  return (
    <Layout>
      <div className="grid place-items-center h-5/6" >
        <ProductForm />
      </div>
    </Layout>
  )
}
