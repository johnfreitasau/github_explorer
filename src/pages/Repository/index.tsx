import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import githubLogo from '../../assets/github_logo.svg';

import { Header, RepositoryInfo, Issues } from './styles';

interface RepositoryParams {
  repository: string;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();

  return (
    <>
      <Header>
        <div>
          <img src={githubLogo} alt="github logo" />
          <span>Github_explorer</span>
        </div>
        <Link to="/">
          <FiChevronLeft size={16} />
          back
        </Link>
      </Header>
      <RepositoryInfo>
        <header>
          <img
            src="https://avatars2.githubusercontent.com/u/44829778?s=460&u=d78ee0395a879c432ea3dbde78dfc3f9bb0d50ac&v=4"
            alt="github avatar"
          />
          <div>
            <strong>johnfreitasau/github_explorer</strong>
            <p>Repository decription</p>
          </div>
        </header>
        <ul>
          <li>
            <strong>1808</strong>
            <span>Stars</span>
          </li>
          <li>
            <strong>48</strong>
            <span>Forks</span>
          </li>
          <li>
            <strong>44</strong>
            <span>Open Issues</span>
          </li>
        </ul>
      </RepositoryInfo>

      <Issues>
        <Link key="xx" to="xx">
          <div>
            <strong>TEST</strong>
            <p>TEST - xcxcczxcz</p>
          </div>
          <FiChevronRight size={20} />
        </Link>
      </Issues>
      <h1>{params.repository}</h1>
    </>
  );
};

export default Repository;
