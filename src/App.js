import React from 'react';
import Header from './components/HeadComponent';
import Company from './components/CompanyComponent';
import HeaderNav from './components/HeaderNavComponent'
import Headroom from 'react-headroom';
import '../src/components/Loader'
import History from './components/HistoryComponent';


class App extends React.Component {
  render() {
    return(
      <div>
        <Headroom>
        <HeaderNav />
        </Headroom>
        <Header />
        <Company />
        <History />
      </div>
    )
  }
}
export default App