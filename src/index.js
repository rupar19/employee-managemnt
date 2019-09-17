import React from 'react';
import ReactDOM from 'react-dom';

let displayTemplate = (
<div id = "outer">
    <div>
        <b>
            <div>User Data:1</div>
            <div> User Data:2</div>
        </b>
    </div>
</div>
);

ReactDOM.render(displayTemplate,document.getElementById("root"));

ReactDOM.render(<div>This is other part of application</div>,
    document.getElementById("otherSection"));