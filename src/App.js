import './App.css';
import {ThemeProvider} from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import styled from "styled-components";
import {darkTheme} from './utils/Themes';

import Navbar from './components/Navbar';
import Hero from './components/HeroSection';
import Skills from './components/Skills'
import Education from './components/Education';
import Projects from './components/Projects';
import Footer from './components/Footer';


const Body = styled.div `
  background-color : ${({theme})=> theme.bg};
  width : 100%;
  height : 100%;
  overflow-x : hidden;
`
const Wrapper = styled.div`
  background: linear-gradient(38.73deg, rgba(204, 0, 187, 0.15) 0%, rgba(201, 32, 184, 0) 50%), linear-gradient(141.27deg, rgba(0, 70, 209, 0) 50%, rgba(0, 70, 209, 0.15) 100%);
  width: 100%;
`

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <BrowserRouter>
        <Navbar/>
        <Body>
          <Hero/>

          <Wrapper>
            <Skills/>
            <Projects/>
            <Education/>
          </Wrapper>

          <Footer/>
        </Body>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;