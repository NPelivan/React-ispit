import React from "react";
import axios from "axios";
import SearchForm from "./components/searchForm";
import Spinner from "./components/spinner";
import UserDetails from "./components/UserDetails";

class App extends React.Component {
  state = {
    searchResults: null,
    repos: null,
    searchTerm: "",
    isError: false,
    isLoading: false,
  };

  fetchUsers = async () => {
    try {
      this.setState({ isLoading: true });
      const url = "https://api.github.com/users/" + this.state.searchTerm;
      const results = await axios.get(url);
      this.setState({
        isError: false,
        isLoading: false,
        searchResults: results.data,
      });
    } catch (err) {
      console.error("An error occurred!", err);
      this.setState({ isError: true, isLoading: false });
    }
  };

  setSearchTerm = (newSearchTerm) => {
    this.setState({ searchTerm: newSearchTerm });
  };

  fetchRepos = async () => {
    try {
      this.setState({ isLoading: true });
      const url =
        "https://api.github.com/users/" + this.state.searchTerm + "/repos";
      const results = await axios.get(url);
      this.setState({
        isError: false,
        isLoading: false,
        repos: results.data,
      });
    } catch (err) {
      console.error("An error occurred!", err);
      this.setState({ isError: true, isLoading: false });
    }
  };

  render() {
    return (
      <div>
        <SearchForm
          searchTerm={this.state.searchTerm}
          setSearchTerm={this.setSearchTerm}
          searchUsers={this.fetchUsers}
          searchRepos={this.fetchRepos}
        />
        {this.state.isLoading && <Spinner />}
        {this.state.isError && <h1>AN ERROR OCCURRED :/</h1>}
        <UserDetails
          userInfos={this.state.searchResults}
          userRepos={this.state.repos}
        />
      </div>
    );
  }
}

export default App;
