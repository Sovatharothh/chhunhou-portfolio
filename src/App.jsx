import styles from './App.module.css'
import { Navbar } from './components/Navbar/Navbar'
import { Chhunhou } from './components/chhunhou/chhunhou'
import { Educations } from './components/Educations/Educations'
import { Experience } from './components/Experience/Experience'
import {Competitions} from './components/Competitions/Competitions'
import { ExchangeProgram} from './components/ExchangeProgram/ExchangeProgram'
import {Contact} from './components/Contact/Contact'


function App() {

  return (
    <div className={styles.App}>
      <Navbar/>
      <Chhunhou/>
      <Educations/>
      <Experience/>
      <Competitions/>
      <ExchangeProgram/>
      <Contact/>
    </div>
  )
}

export default App
