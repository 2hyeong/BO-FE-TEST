// css
import "./App.css";
// components
import Layout from "./components/Layout";
import ProductSearch from "./components/products/ProductSearch";
import ProductDataTable from "./components/products/ProductDataTable";

function App() {
  return (
    <Layout>
      <ProductSearch />
      <ProductDataTable />
    </Layout>
  );
}

export default App;
