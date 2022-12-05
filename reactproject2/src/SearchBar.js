import { useState } from "react";
import "./SearchBar.css"

var data = require("./data.json");

function Search() {
    const [value, setValue] = useState("");

    const onChange = (event) => {
        setValue(event.target.value);
    };

    const onSearch = (searchTerm) => {
        setValue(searchTerm);
        // our api to fetch the search result
        console.log("search ", searchTerm);
    };

    return (
        <div className="Search">
            

            <div className="search-container">
                <div className="search-inner">
                    <input type="text" value={value} onChange={onChange} />
                    
                </div>
                <div className="dropdown">
                    {data
                        .filter((item) => {
                            const searchTerm = value.toLowerCase();
                            const fullName = item.full_name.toLowerCase();

                            return (
                                searchTerm &&
                                fullName.startsWith(searchTerm) &&
                                fullName !== searchTerm
                            );
                        })
                        .slice(0, 3)
                        .map((item) => (
                            <div
                                onClick={() => onSearch(item.full_name)}
                                className="dropdown-row"
                                key={item.full_name}
                            >
                                {item.full_name}
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
}
export default Search
