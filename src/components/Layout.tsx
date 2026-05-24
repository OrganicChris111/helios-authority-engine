import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

export default function Layout({ children }: { children?: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-helios-bg text-helios-text font-sans">
      <Header />
      <main>{children || <Outlet />}</main>
      <Footer />
    </div>
  )
}
