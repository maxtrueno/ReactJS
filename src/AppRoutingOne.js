import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/home/HomePage';
import Notfoundpage from './pages/404/NotFoundPage';


function AppRoutingOne() {
  return (
    
 <Router>
{/*   <Switch> */}
    <Route exact path='/' Component={HomePage}></Route>
{/*   </Switch> */}
</Router> 

  );
}

export default AppRoutingOne;
