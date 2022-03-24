import{BrowserRouter, Route, Switch} from 'react-router-dom';
import Contact from './pages/Contato/index,';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Header from './components/Header';

const Routes = () => {
    return(
        <BrowserRouter>
        <Header/>
        <Switch>
            <Route exact={true} path="/" component={Home}/>
            <Route path="/Sobre" component={Sobre}/>
            <Route path="/Contato" component={Contact}/>
        </Switch>
        </BrowserRouter>
    )
}

export default Routes;