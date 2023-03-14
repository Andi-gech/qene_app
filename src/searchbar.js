import { useState } from "react";
import { Link } from "react-router-dom";

const Searchbar = () => {
  const [search, setsearch] = useState("");

  return (
    <div className="Searchbox">
      <input
        placeholder="Find here ..."
        value={search}
        name="search"
        onChange={(e) => setsearch(e.target.value)}
      />
      <Link to={`/search/${search}`}>
        <button>search</button>
      </Link>
    </div>
  );
};

export default Searchbar;
