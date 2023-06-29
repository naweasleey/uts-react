import { Outlet } from 'react-router-dom'
import Header from './../../uts-react/src/components/Header'
import Footer from './../../uts-react/src/components/Footer'

const App = () => {
  return (
    <div>
      <Header/>
      <main>
        <Outlet/>
      </main>
      <Footer/>
    </div>
  )
}

export default App