import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import ServiceDetail from './components/ServiceDetail/ServiceDetail';
import ContactUs from './components/ContactUs/ContactUs';
import Login from './components/Login/Login';

import AllDoctors from './components/AllDoctors/AllDoctors';
import AboutUs from './components/AboutUs/AboutUs';
import AuthProvider from './components/context/AuthProvider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

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
            <Route exact path='/home'>
              <Home></Home>

            </Route>
            <PrivateRoute exact path='/servicedetail/:id'>
              <ServiceDetail></ServiceDetail>
            </PrivateRoute>
            <Route exact path='/contactus'>
              <ContactUs></ContactUs>
            </Route>
            <Route exact path='/alldoctors'>
              <AllDoctors></AllDoctors>
            </Route>
            <Route exact path='/aboutus'>
              <AboutUs></AboutUs>
            </Route>
            <Route exact path='/login'>
              <Login></Login>
            </Route>
            <Route exact path='/register'>

            </Route>
            <Route path='*'>
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
