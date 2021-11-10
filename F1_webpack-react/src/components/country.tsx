import * as React from "react";
import Button from "react-bootstrap/Button";
//import PropTypes from "prop-types";

import "../styles/Country.css"

function Country({author, url}) {
    const [selected, changeSelected] = React.useState(false)

    return (
        <tr className={selected ? "selected-country": ""}>
            <td>{author}</td>
            <td>{url}</td>
            <td>
                {selected ?
                    <Button variant="danger" onClick={() => changeSelected(false)}>Remove</Button>:
                    <Button variant="success" onClick={() => changeSelected(true)}>Add</Button>
                }

            </td>
        </tr>
    );
}

//заглушка
Country.defaultProps = {
    author: "Not Available"
}

//Country.propTypes = {
//    country: PropTypes.object
//};

export default Country;
