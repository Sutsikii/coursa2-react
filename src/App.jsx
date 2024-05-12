import { useState } from 'react';
import { ProductTable } from './components/ProductTable';
import { SearchBar } from './components/SearchBar';
import './index.css';
import { PRODUCTS } from './libs/products';

function App() {

  const [showStocked, setShowStocked] = useState(false);
  const [search, setSearch] = useState('');

  const visibleProducts = PRODUCTS.filter(product => {
    if(showStocked && !product.stocked) return false;

    if(search && !product.name.includes(search)) return false;

    return true;
  });

  return (
    <div className='container mx-auto px-4 py-4'>
        <SearchBar showStockedOnly={showStocked} onStockedOnlyChange={setShowStocked} search={search} onSearchChange={setSearch} />
        <ProductTable products={visibleProducts} />
    </div>
  );
}

export default App;
