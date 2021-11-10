import * as React from "react";

import Countries from "./Countries";
import Alerts from "./alerts";

import "../styles/Main.css"
import {Alert} from "react-bootstrap";

function Main() {
    let alertText = <b>This is some text for alert 1</b>;
    return(
        <main>
            <Alerts>
                <Alert variant={"danger"}>
                    { alertText }
                </Alert>
                <Alert variant={"success"}>
                    { alertText }
                </Alert>
                <Alert variant={"warning"}>
                    { alertText }
                </Alert>
            </Alerts>
            <Countries />
        </main>
    )
}

export default Main;