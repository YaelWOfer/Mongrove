import React from 'react';
import Navbar from '../components/Navbar';
import SchemaPanel from '../components/SchemaPanel';
import MainArea from './MainArea';
import DatabasePanel from '../components/DatabasePanel';

//Navbar component


const LandingPage = () => {

   
    return (
        <div id="landingPage">
            <Navbar />
            <SchemaPanel />
            <MainArea />
            <DatabasePanel />
        </div>
    );
}

//Main Area component

//DatabasePanel component


export default LandingPage;