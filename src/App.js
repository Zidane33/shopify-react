import Product from './components/Product/Product';
import './App.css';

function App() {
  const products = [{title: 'shampoo', price: 15, description: "this is a shampoo"}]
  return (
    <div className="App">
      <h1>Hello Shopify</h1>
      <div>
        {products.map(product => (
          <Product product={product} />
        ))}
      </div>
    </div>
  );
}

export default App;
