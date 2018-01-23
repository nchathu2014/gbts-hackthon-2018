import React from 'react'
import ReactDOM,{render} from 'react-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import HelloWorld from './components/HelloWorld'

const App = () => (
    <MuiThemeProvider>
        <HelloWorld />
    </MuiThemeProvider>
);


render(
    <App />,
    document.getElementById('app')
);