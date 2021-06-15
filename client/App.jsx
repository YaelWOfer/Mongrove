import * as React from 'react';
import * as ReactDOM from 'react-dom';
<<<<<<< HEAD
import { HashRouter, Route, Switch } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Navbar from './components/Navbar';
import QueryPage from './pages/QueryPage';
=======
import { HashRouter, Link, Route, Switch } from 'react-router-dom';
import LandingPage from './pages/LandingPage.jsx';
>>>>>>> 77edbffa7c5574e0be3448a96945701d4cd499e7

// renderer process
// const { ipcRenderer } = require('electron');

// ipcRenderer.send('anything-asynchronous', 'ping');




//render landing page when app is first opened

const App = () => {
    return (
        <div>
<<<<<<< HEAD
            test text
            {/* react router should first show landing page, then switch when viewchange button is clicked */}
            <HashRouter>             
                <Switch>
                    <Route exact path="/landingPage" component={LandingPage}/>
                    <Route exact path="/queryPage"  component={QueryPage}/>
                </Switch>
            </HashRouter>
=======
            App component rendering!!
            <LandingPage />
>>>>>>> 77edbffa7c5574e0be3448a96945701d4cd499e7
        </div>
    );
};

<<<<<<< HEAD
ReactDOM.render(<App />, document.getElementById('app'));

=======
ReactDOM.render(<App />, document.getElementById('app'));
>>>>>>> 77edbffa7c5574e0be3448a96945701d4cd499e7
