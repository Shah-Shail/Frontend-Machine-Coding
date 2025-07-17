import { useState, useEffect } from "react";
import "./inputSeacrh.css";

const users = [
  {
    name: "John",
    age: 26,
    id: 0,
  },
  {
    name: "Sam",
    age: 28,
    id: 1,
  },
  {
    name: "Tom",
    age: 26,
    id: 2,
  },
  {
    name: "Shail",
    age: 26,
    id: 3,
  },
  {
    name: "Manoj",
    age: 24,
    id: 4,
  },
  {
    name: "Ramesh",
    age: 26,
    id: 5,
  },
];

function InputSearch() {
  const [searchVal, setSearchVal] = useState(null);
  const [userList, setUserList] = useState(users);
  const [selectUser, setSelectUser] = useState({});

  useEffect(() => {
    if (searchVal) {
      const filterUser = users.filter((item) => item.name.includes(searchVal));
      setUserList(filterUser);
    } else {
      setUserList(users);
      setSelectUser({});
    }
  }, [searchVal]);

  return (
    <div className="input-search-container">
      <input
        className="search-bar"
        onChange={(e) => setSearchVal(e.target.value)}
        placeholder="Search Here..."
        value={searchVal}
      />
      <div className="search-box">
        {userList.map((item) => (
          <p
            key={item.id}
            onClick={() => {
              setSearchVal(item.name);
              setSelectUser(item);
            }}
          >
            {item.name}
          </p>
        ))}
      </div>
      {Object.keys(selectUser).length > 0 ? (
        <h1>User Detail : {`${selectUser.name}, ${selectUser.age}`}</h1>
      ) : (
        ""
      )}
    </div>
  );
}

export default InputSearch;
