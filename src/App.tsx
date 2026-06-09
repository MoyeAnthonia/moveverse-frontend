import './styles/global.css'
import { Navbar } from './components/Navbar/Navbar'
import { Home, Features } from './pages/Home'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
       <Navbar />
      <Home />
      <Features />
      {/* <Footer /> */}
    </>
  )
}

export default App
