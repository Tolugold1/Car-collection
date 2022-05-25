import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Root from './components/RootComponent';

class App extends React.Component {
  render() {
    return(
      <BrowserRouter>
      <div>
        <Root />
      </div>
      </BrowserRouter>
    )
  }
}
export default App