import React, { useState } from 'react';
import { Header, Menu } from 'semantic-ui-react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';
import ReposResults from '../ReposResults/ReposResults';
import Message from '../Message/Message';
import FAQPage from '../FAQPage/FAQPage';
import ErrorPage from '../ErrorPage/ErrorPage';

import './App.scss';
import GitHubLogo from '../../assets/images/logo-github.png';

function App() {
  const [repos, setRepos] = useState([]);
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const searchGitHubRepos = async (searchText) => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.github.com/search/repositories?q=${searchText}`
      );
      if (response.ok) {
        const data = await response.json();
        setRepos(data.items);
        setMessage(`La recherche a donnée ${data.total_count} résultats`);
      } else {
        setMessage('Aucun résultat trouvé.');
        setRepos([]);
      }
    } catch (error) {
      setMessage("Une erreur s'est produite. Veuillez réessayer.");
      setRepos([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Router>
      <div className="App">
        <img src={GitHubLogo} alt="Logo GitHub" className="logo-github" />
        <Menu>
          <Menu.Item name="search">
            <Link to="/">Recherche</Link>
          </Menu.Item>
          <Menu.Item name="faq">
            <Link to="/faq">FAQ</Link>
          </Menu.Item>
        </Menu>

        <Routes>
          <Route path="/faq" element={<FAQPage />} />
          <Route
            path="/"
            element={
              <>
                <SearchBar onSearch={searchGitHubRepos} />
                {message === '' ? (
                  <Header as="h1" className="welcome-title">
                    Bienvenue dans le GitHub Repo Finder !
                    <p className="welcome-subtitle">
                      Commencez votre recherche dès maintenant !
                    </p>
                  </Header>
                ) : (
                  <Message message={message} />
                )}

                {loading ? (
                  <h1>Chargement en cours...</h1>
                ) : (
                  <ReposResults repos={repos} />
                )}
              </>
            }
          />
          <Route path="*" element={<ErrorPage />} />{' '}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
