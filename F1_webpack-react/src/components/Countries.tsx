import * as React from "react";
import axios from "axios";
import Table from "react-bootstrap/Table"

import "../styles/Countries.css"
import Country from "./country"

function Countries(){
    const [countries, setCountries] = React.useState([]);
    let a : number | string = 3;
    let flag : 0 | 1 = 1;
    let flag2 : "male" | "female" = "male";
    type CountryType = {
        author: string,
        id: string,
        url: string,
    }

    if (!countries.length){
        axios.get("https://picsum.photos/v2/list?limit=5").then( res => {
            console.log(res);
            setCountries(res.data);
        });
    }
    return (
        <Table striped bordered hover className={"countries"}>
            <thead><tr><th>Author</th><th>URL</th></tr></thead>
            <tbody>
            {countries.map((country : CountryType) => country.author ?  <Country key={country.id}
                                                                 author={country.author}
                                                                 url={country.url}
                /> : <Country key={country.id} url={country.url}/>
            )}
            </tbody>
        </Table>
    )
}

export default Countries;