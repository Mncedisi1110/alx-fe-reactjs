 import { useState } from "react";
 import {fetchUserData} from "./services/githubService";


function Search() {
    const [Username, setUsername] = useState("");
    const [loading, setLoading] = useState(false);

    
    const handleInputChange = (e) => {
        setUsername(e.target.value);
    };
    
    if (loading) {
       <fetchUserData Username={Username} />
            return alert("Loading...");
    }else{
         console.log("Looks like we cant find the user");
    }
        
    return (
        <div className="search-container">
            <form onSubmit={

                (e) => {
                    e.preventDefault();
                    setLoading(true);
                }
            }>
                <input
                    type="text"
                    placeholder="Enter GitHub username"
                    value={Username}
                    onChange={handleInputChange}
                />
                <button type="submit">Search</button>
            </form>
        </div>
    );
}
["avatar_url", "login", "Looks like we cant find the user", "img"]
export default Search;