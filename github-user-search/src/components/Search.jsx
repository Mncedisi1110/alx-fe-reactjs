 import { useState } from "react";


function Search() {
    const [Username, setUsername] = useState("");
    const [loading, setLoading] = useState(false);

    
    const handleInputChange = (e) => {
        setUsername(e.target.value);
    };
    return (
        <div className="search-container">
            <form className="search-form">
                <input
                 type="text"
                placeholder="Enter GitHub username"
                value={Username}
                onChange={handleInputChange}
                />
                <button type="submit">Search</button>
            </form>
          
        </div>
    )
}

export default Search;