import React from 'react';
import PropTypes from 'prop-types';
import './ReposResults.scss';

function ReposResults({ repos }) {
  return (
    <div className="ui cards">
      {repos.map((repo) => (
        <div className="card" key={repo.id}>
          <div className="content">
            <div className="header">{repo.name}</div>
            <div className="image">
              <img
                src={repo.owner.avatar_url}
                alt={`${repo.owner.login}'s avatar`}
              />
            </div>
            <div className="meta">
              <span>{repo.owner.login}</span>
            </div>
            <div className="description">{repo.description}</div>
          </div>
          <div className="extra content">
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
              Voir sur GitHub
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

ReposResults.propTypes = {
  repos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      html_url: PropTypes.string.isRequired,
    })
  ).isRequired,
};
export default ReposResults;
