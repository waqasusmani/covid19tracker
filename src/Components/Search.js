import React, { useState, useEffect } from "react";
import axios from 'axios'
// import "./styles.css";

export default function CountryList() {
    const [countries, setCountries] = useState([]);
    const [loading, setLoading] = useState(false);
    const [search, setSearch] = useState("");
    const [filteredCountries, setFilteredCountries] = useState([]);

    useEffect(() => {
        axios
            .get("https://restcountries.eu/rest/v2/all")
            .then(res => {
                setCountries(res.data);
                setLoading(false);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);

    useEffect(() => {
        setFilteredCountries(
            countries.filter(country =>
                country.name.toLowerCase().includes(search.toLowerCase())
            )
        );
    }, [search, countries]);

    if (loading) {
        return <p>Loading countries...</p>;
    }

    return (
        <div className="App">
            {/* <h1>Countries Lists</h1> */}
            <input
                type="text"
                placeholder="Search Countries"
                onChange={e => setSearch(e.target.value)}
            />
            {filteredCountries.map((country, idx) => (
                <CountryDetail key={idx} {...country} />
            ))}
        </div>
    );
}

const CountryDetail = props => {
    const { name, flag } = props;
    return (
        <>
            <p>
                <img src={flag} alt={name} style={{ width: "20px", height: "20px" }} />
            </p>
            <p>{name}</p>
        </>
    );
};
