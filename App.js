import logo from './logo.svg';
import './App.css';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';


import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faGoogle
} from '@fortawesome/free-brands-svg-icons'

import { ThemeProvider } from 'styled-components'

import theme from './theme'
import './styles.css'
import LoginForm from './components/loginForm/'

library.add(faGoogle)

function App() {
  return (
      <ThemeProvider theme={theme}>
      <div className="App">
        <LoginForm />
      </div>
    </ThemeProvider>
  );
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)

export default App;


