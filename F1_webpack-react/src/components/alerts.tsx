import * as React from "react";
import {Alert} from "react-bootstrap";


function Alerts(props){
    let children = props.children;
    return(
        <>
            {
                React.Children.count(children)
            }
        </>
    );
}

export default Alerts