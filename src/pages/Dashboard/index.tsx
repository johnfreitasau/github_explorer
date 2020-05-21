import React, { useState, FormEvent } from 'react';

import { FiChevronRight } from 'react-icons/fi';
import api from '../../services/api';
import { Form, Title, Repositories, Error } from './styles';

interface Repository {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}

const Dashboard: React.FC = () => {
  const [newRepo, setNewRepo] = useState('');
  const [inputError, setInputError] = useState('');
  const [repositories, setRepositories] = useState<Repository[]>([]);

  async function handleAddReporitory(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();

    if (!newRepo) {
      setInputError('The field is empty. Please add the owner/repository.');
      return;
    }

    try {
      const response = await api.get<Repository>(`repos/${newRepo}`);

      const repository = response.data;

      setRepositories([...repositories, repository]);

      setNewRepo('');
      setInputError('');
    } catch (Err) {
      setInputError('Owner/repository not found. Please try again.');
    }
  }

  return (
    <>
      <Title>Explorer repositories on Github.</Title>
      <Form hasError={!!inputError} onSubmit={handleAddReporitory}>
        <input
          onChange={(e) => setNewRepo(e.target.value)}
          placeholder="Repository name"
        />

        <button type="submit">Search</button>
      </Form>
      {inputError && <Error>{inputError}</Error>}
      <Repositories>
        {repositories.map((repository) => (
          <a key={repository.full_name} href="test">
            <img src={repository.owner.avatar_url} alt="John Freitas Github" />
            <div>
              <strong>{repository.full_name}</strong>
              <p>{repository.description}</p>
            </div>
            <FiChevronRight size={20} />
          </a>
        ))}
      </Repositories>
    </>
  );
};

export default Dashboard;
