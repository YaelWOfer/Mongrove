import React from 'react';


const DatabasePanel = () => {

        //create an array to hold each created test DB component
        const testDBs = [];

        for (let i = 0;)
        //when user clicks Generate Test Database button, add new test db name to testDBs array
    return (
        <div>
        <p className="panelTitle">Test Databases</p>
        {testDBs}
        </div>
    )
}

export default DatabasePanel;