import React from 'react';
<<<<<<< HEAD
import { HashRouter, NavLink, Route, Switch } from "react-router-dom";
import { IconButton } from '@material-ui/core';
// import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import { HelpOutlineRoundedIcon } from '@material-ui/icons/HelpOutlineRounded';

//imports for opening new browser window from a react element
const remote = electron.remote;
const {BrowserWindow} = remote;
=======
// import { HashRouter, NavLink, Link, Route, Switch } from "react-router-dom";
// import { IconButton } from '@material-ui/core';
// import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
// import { HelpOutlineRoundedIcon } from '@material-ui/icons/HelpOutlineRounded';

//imports for opening new browser window from a react element
// const remote = electron.remote;
// const {BrowserWindow} = remote;
>>>>>>> 77edbffa7c5574e0be3448a96945701d4cd499e7


//create NavBar component
const Navbar = () => {

  //opened browser window width and height defaults to 800 by 600
<<<<<<< HEAD
  handleOpenHelp = () => {
      let win = new BrowserWindow({
          title:"Help",
          //hide menu for pop-up browser window
            //either use the removeMenu() function
              win.removeMenu();
            // or set the Menu to null
              // win.setMenu(null);
      })
      win.loadURL('replacethispath(https://www.electronjs.org/docs/api/remote)')
      //possibly add win.loadfile here?? either serve a 2nd html file just for help panel, or use a react router to display help panel 
  }
=======
//   handleOpenHelp = () => {
//       let win = new BrowserWindow({
//           title:"Help",
//           //hide menu for pop-up browser window
//             //either use the removeMenu() function
//               win.removeMenu();
//             // or set the Menu to null
//               // win.setMenu(null);
//       })
//       win.loadURL('replacethispath(https://www.electronjs.org/docs/api/remote)')
//       //possibly add win.loadfile here??
//   }
>>>>>>> 77edbffa7c5574e0be3448a96945701d4cd499e7


  return (
        <div className="navbar">
<<<<<<< HEAD
            <div className="navbarLinks">
=======
            <h1>Navbar component rendering</h1>
            {/* <div className="navbarLinks">
>>>>>>> 77edbffa7c5574e0be3448a96945701d4cd499e7
                <NavLink to="/landingPage" activeClassName="activeClassName" className="navLink"><h2>CREATE</h2> </NavLink>
                <NavLink to="/queryPage" activeClassName="activeClassName" className="navLink"><h2>TEST</h2></NavLink>
            </div>
            <h1>Mongrove</h1>
            <div className="helpIcon">
              <IconButton onClick={handleOpenHelp} className="helpButton" icon={HelpOutlineRoundedIcon}></IconButton>
<<<<<<< HEAD
            </div>
=======
            </div> */}
>>>>>>> 77edbffa7c5574e0be3448a96945701d4cd499e7
        </div>
  )
};


export default Navbar;