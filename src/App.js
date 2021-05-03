import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import Navbar from './Component/Navbar'
import Header from './Component/Header'
import About from './Component/About'
import Particles from 'react-particles-js'
import Projects from './Component/Projects'

function App() {
    return (
        <>
        <Particles
            params={{
                particles: {
                  number: {
                    value: 30,
                    density: {
                      enable: true,
                      value_area: 1000
                    }
                  },
                  color :{
                      value : "#fff"
                  },
                  shape : {
                      type: "circle",
                      stroke:{
                          width: 3,
                          color: "#ff4300"
                      }
                  }                
                },
                interactivity: {
                  events: {
                    onHover: {
                      enable : false,
                      mode : "repulse"
                    }
                  }
                }

              }}
        />
        <Navbar/>
        <Header/>
        <About/>
        {/* <Projects/> */}
        </>
    );
}
export default App;