import React from 'react';
import SchemaItem from './SchemaItem';

const SchemaPanel = () => {
    <p className="panelTitle">Schemas</p>

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
                {schemaList}
            </div>

        </div>
    )
}

export default SchemaPanel;