<<<<<<< HEAD
import React from 'react';
import SchemaItem from './SchemaItem';

const SchemaPanel = () => {
    <p className="panelTitle">Schemas</p>

=======
import React, { useState } from 'react';

// import SchemaItem from './SchemaItem';

const SchemaPanel = () => {
>>>>>>> 77edbffa7c5574e0be3448a96945701d4cd499e7
    // use state to populate schemas to display here
    const state = {
        schemaNameList: [], 
    }

    const [currentState, setState] = useState(state);


    const schemaList = [];
    for (let i = 0; i < currentState.schemaNameList.length; i++) {
        schemaList.push(
            <SchemaItem 
                schemaName={currentState.schemaNameList[i]}
                key={i}
                id={i}
                currentState={currentState}
            />
        )
    }

    return (
        <div id="schemaPanel">
            <h2> SCHEMAS </h2>

            <div id="schemaList">
<<<<<<< HEAD
                {schemaList}
=======
                {/* {schemaList} */}
                schemaItem1
>>>>>>> 77edbffa7c5574e0be3448a96945701d4cd499e7
            </div>

        </div>
    )
}

export default SchemaPanel;