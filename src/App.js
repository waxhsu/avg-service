import './App.css';
import Navbar from './components/Navbar/Navbar.js'
import Landing from './components/Landing/Landing.js'
import Service from './components/Service/Service.js'
import Testimonies from './components/Testimonies/Testimonies.js'
import Footer from './components/Footer/Footer.js'
// import About from './components/About/About.js'
// import Contact from './components/Contact/Contact.js'

function App() {
  return (
    <div className="App">

      <Navbar />
      <Landing />
      <Service />
      {/* <About /> */}
      <Testimonies />
      {/* <Contact /> */}
      <Footer />
      


    </div>
  );
}

export default App;
