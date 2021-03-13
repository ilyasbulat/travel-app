import logo from './logo.svg';
import Header from './components/Header/Header'
import MainPage from './components/MainPage/MainPage'
import CountryPage from './components/CountryPage/CountryPage'
import { Route, Switch } from 'react-router-dom';
import './App.css';

function App() {
  return (
   <>
    <Header />
    <Switch>
    
      {/* <MainPage /> */}
      <Route exact path="/" component={MainPage}/>
      <Route path="/country/:id" component={CountryPage} />
    </Switch>

    </>
  );
}

export default App;
