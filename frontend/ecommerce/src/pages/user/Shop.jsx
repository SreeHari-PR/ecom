import Header from '../../components/user/layout/Header'
import CategorySidebar from '../../components/user/sidebar/CategorySideBar'
import ProductGrid from '../../components/user/products/ProductGrid'
export default function ShopPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto flex">
        <CategorySidebar />
        <ProductGrid />
      </main>
    </div>
  )
}