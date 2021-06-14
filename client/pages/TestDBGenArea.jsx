import React from 'react';
import { useState } from 'react';

const TestDBGenArea = () => {
    const [dbName, setDBName] = useState('');
    const [testSchemaName, setTestSchemaName] = useState('');
    const [numberOfRows, setNumberOfRows] = useState(0)
    
    //when GenerateTestDatabase button is clicked, add all 3 inputs to state
    const handleGenerateTestDB = () => {
        setDBName('');
        setTestSchemaName('');
        setNumberOfRows();
    }

    return (
        <div id="testdbGenArea">
            <h6>Test Database Generation</h6>

            <label for="testdbName">Test Database Name</label>
            <input type="text" id="testdbName" name="testdbName" onChange={}/>

            <label for="selectSchema">Select Schema Name</label>
            <select id="selectSchema" name="selectSchema">
            {/* placeholder values for schema selection */}
                <option value="sampleSchema1">sampleSchema1</option>
                <option value="sampleSchema2">sampleSchema2</option>
                <option value="sampleSchema3">sampleSchema3</option>
            </select>

            <label for="rowsNum">Enter number of rows</label>
            <input type="text" id="rowsNum" name="rowsNum"/>

            <button type="submit" id="genTestdbBn" className="mainAreaBn" onClick={handleGenerateTestDB}>
                Generate Test Database
            </button>
        </div>
    )
};

export default TestDBGenArea;