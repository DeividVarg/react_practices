import './App.css'
import { ProductsComponent } from './components/products'
import { products } from './mocks/products.json'
import { useFilter } from './hooks/filter'
import { Header } from './components/header'
import { Footer } from './components/footer'
import { Cart } from './components/cart'
import { CartProvider } from './context/cart'

function App() {
  const { filterProducts } = useFilter()

  return (
    <CartProvider>
      <Cart />
      <Header />
      <ProductsComponent products={filterProducts({ products })} />
      <Footer />
    </CartProvider>
  )
}

export default App
