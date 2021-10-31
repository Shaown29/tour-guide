import { Route, Switch } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom/cjs/react-router-dom.min';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import ManageAllOrder from './components/ManageAllOrder/ManageAllOrder';
import MyOrder from './components/MyOrder/MyOrder';
import PlaceOrder from './components/PlaceOrder/PlaceOrder';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import AuthProvider from './Contexts/AuthProvider';



function App() {
  return (
    <div className="App">
     <AuthProvider>
      <Router>
      <Header></Header>
      <Switch>
      <Route exact path='/'>
        <Home></Home>
        </Route>
        <Route path='/home'>
        <Home></Home>
        </Route>
        <Route path='/login'>
        <Login></Login>
        </Route>
        <PrivateRoute path='/placeOrder/:Id'>
          <PlaceOrder></PlaceOrder>
        </PrivateRoute>
        {/* <Route exact path='/myorder'>
         <MyOrder></MyOrder>
        </Route> */}
        <PrivateRoute path='/myorder'>
         <MyOrder></MyOrder>
        </PrivateRoute>
        <PrivateRoute path='/manageallorders'>
         <ManageAllOrder> </ManageAllOrder>
        </PrivateRoute>
      </Switch>
      </Router>
     </AuthProvider>
      
      
    </div>
  );
}

export default App;
