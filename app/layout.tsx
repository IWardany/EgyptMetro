import './globals.css'
import { Inter } from 'next/font/google'
import NavBar from './components/navbar'
import Footer from "./components/footer";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Egypt Metro',
  description: 'This app shows you the best way to get from one Metro station to another in Egypt',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} py-8 lg:px-72 md:px-10`}>
        <NavBar></NavBar>
        {children}
        <Footer></Footer>
      </body>
    </html>
  )
}
