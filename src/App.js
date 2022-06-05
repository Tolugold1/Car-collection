import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Root from './components/RootComponent';
import { Provider } from 'react-redux';
import { configStore } from './Redux/ConfigureStore';

const store = configStore();
class App extends React.Component {
  render() {
    return(
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <Root />
          </div>
        </BrowserRouter>
      </Provider>
    )
  }
}
export default App