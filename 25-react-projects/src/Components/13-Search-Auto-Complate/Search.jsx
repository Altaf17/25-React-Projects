import React, { useEffect, useState } from "react";
import Suggestions from "./Suggestions";

const Search = () => {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [searchParam, setSearchParam] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const fetchUsersList = async () => {
    try {
      setLoading(true);
      const response = await fetch(`https://dummyjson.com/users`);
      const jsonData = await response.json();
      if (jsonData && jsonData.users && jsonData.users.length) {
        setUsers(jsonData.users.map((userItem) => userItem.firstName));
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUsersList();
  }, []);

  const handleChange = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchParam(query);
    if (query.length > 1) {
      const filterData =
        users && users.length
          ? users.filter((item) => item.toLowerCase().indexOf(query) > -1)
          : [];
      setFilteredUsers(filterData);
      setShowDropdown(true);
    } else {
      setShowDropdown(false);
    }
  };

  const handleClick = (e) => {
    setShowDropdown(false);
    setSearchParam(e.target.innerText);
    setFilteredUsers([]);
  };
  return (
    <div className="search-autocomplete-container">
      {loading ? (
        <div>data is loading please wait!!</div>
      ) : (
        <input
          type="text"
          name="search-users"
          value={searchParam}
          onChange={handleChange}
          placeholder="Search Users"
          id=""
        />
      )}
      {showDropdown && (
        <Suggestions handleClick={handleClick} data={filteredUsers} />
      )}
    </div>
  );
};

export default Search;
