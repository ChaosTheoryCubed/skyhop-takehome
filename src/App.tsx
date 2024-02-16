import { Header } from '@/components/header/Header'
import { Footer } from '@/components/footer/Footer'
import { Mainform} from '@/components/mainform/Mainform'

function App() {
  return (
    <>
      <div className="font-display bg-white text-blue-900 p-6 rounded-3xl w-10/12">
        <Header />
        {/*Form*/}
        <Mainform />
        {/*Submit Area*/}
        <Footer />
      </div>
    </>
  )
}

export default App
