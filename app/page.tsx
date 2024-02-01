import Image from 'next/image'
import NavBar from './components/navbar'
import Footer from './components/footer'
import SelectStations from './components/selectstation'

export default function Home() {
  return (
    <main>
      <SelectStations></SelectStations>
    </main>

  )
}
