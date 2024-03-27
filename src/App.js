import './App.css';
import {ThemeProvider} from 'styled-components';
import styled from "styled-components";
import {darkTheme} from './utils/Themes';

const Body = styled.div `
  background-color : ${({theme})=> theme.bg};
  width : 100%;
  height : 100%;
  overflow-x : hidden;
`

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Body>
        portfolio
      </Body>
    </ThemeProvider>
  );
}

export default App;