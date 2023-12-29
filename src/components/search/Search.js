import { AsyncPaginate } from "react-select-async-paginate"
import React from "react"
import { geoApiOptions, geoApiUrl } from "../../api"

const Search = ({ onSearchChange }) => {

    const [search, setSearch] = React.useState(null)
    const handleOnChange = (searchData) => {
        setSearch(searchData)
        onSearchChange(searchData)
    }

    const loadOptions = (inputValue) => {
        return fetch(
            `${geoApiUrl}?minPopulation=100000&namePrefix=${inputValue}`, geoApiOptions
        )
        .then((response) => response.json())
        .then((response) => {
            return {
                options: response.data.map((city) => {
                    return {
                        value: `${city.latitude} ${city.longitude}`,
                        label: `${city.name} ${city.countryCode}`,
                    };
                }),
            };
        })
        .catch((err) => console.error(err))
    };

    return (
        <AsyncPaginate
            placeholder="Search your city"
            debounceTimeout={600}
            value={search}
            onChange={handleOnChange}
            loadOptions={loadOptions}
        />
    )
}

export default Search