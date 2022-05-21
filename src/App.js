import React from 'react';
import Header from './components/HeadComponent';
import Company from './components/CompanyComponent';
import HeaderNav from './components/HeaderNavComponent'
import Headroom from 'react-headroom';


class App extends React.Component {
  render() {
    return(
      <div>
        <Headroom>
        <HeaderNav />
        </Headroom>
        <Header />
        <Company />
      </div>
    )
  }
}
export default App