import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { HashRouter, Route, Switch } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Navbar from './components/Navbar';
import QueryPage from './pages/QueryPage';

// renderer process
// const { ipcRenderer } = require('electron');

// ipcRenderer.send('anything-asynchronous', 'ping');




//render landing page when app is first opened

const App = () => {
    return (
        <div>
            test text
            {/* react router should first show landing page, then switch when viewchange button is clicked */}
            <HashRouter>             
                <Switch>
                    <Route exact path="/landingPage" component={LandingPage}/>
                    <Route exact path="/queryPage"  component={QueryPage}/>
                </Switch>
            </HashRouter>
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('app'));

