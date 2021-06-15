import React from 'react';
<<<<<<< HEAD
import SchemaArea from './schemaArea';
import TestDBGenArea from './TestDBGenArea';
=======
import SchemaArea from './SchemaArea.jsx';
import TestDBGenArea from './TestDBGenArea.jsx';
>>>>>>> 77edbffa7c5574e0be3448a96945701d4cd499e7


const MainArea = () => {
// use useState for handling schema data from SchemaArea component to passdown to dropdown selection in TestDBGenArea    
    return (
        <div id="mainArea" className="mainAreaComponents">
            <SchemaArea />
            <TestDBGenArea />
        </div>
    );
};

export default MainArea;