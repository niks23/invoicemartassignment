import './App.css';
import Layout from './components/Layout/Layout';
import CounterComponent from './components/molecules/CounterComponent/CounterComponent';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route path='/' exact>
            <CounterComponent />
          </Route>
          <Route path='/posts'>
            <strong>inprogress...</strong>
          </Route>
        </Switch>
      </Layout>
    </div >

  );
}

export default App;
