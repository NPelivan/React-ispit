import React from "react";

export default function SearchForm(props) {
  const { searchTerm, setSearchTerm, searchUsers, searchRepos } = props;

  const clickHandler = async (e) => {
    e.preventDefault();
    if (searchTerm) {
      setSearchTerm(searchTerm);
      await searchUsers();
      await searchRepos();
    }
  };

  const textChangeHandler = (e) => {
    setSearchTerm(e.target.value);
  };
  return (
    <div>
      <h1>GitHub username</h1>
      <form>
        <input
          type="text"
          value={searchTerm}
          onChange={textChangeHandler}
          placeholder="e. g. facebook"
        />

        <button onClick={clickHandler} type="submit">
          Search
        </button>
      </form>
    </div>
  );
}
