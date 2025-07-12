import Header from '@/components/Header'
import Banner from '@/components/Banner'
import IdeasList from '@/components/IdeasList'

export default function IdeasPage() {
  return (
    <main className="bg-gray-50 min-h-screen">
      <Header />
      <Banner />
      <IdeasList />
    </main>
  )
}
