import  AppHeader  from '../AppHeader/AppHeader';
import { Switch, Route, Routes, BrowserRouter } from 'react-router-dom';
import ListView from '../ListView/ListView';
import NewItemView from '../NewItemView/NewItemView';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
      <AppHeader />
    </header>
    <main>
      <Switch>
          <Route path="/" exact>
            <ListView/>
          </Route>
          <Route path='/add'>
            <AppHeader />
            <NewItemView/>
          </Route>
          </Switch>
    </main>
  </div>
  );
}

export default App;
