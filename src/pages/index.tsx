import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useCallback, useEffect, useRef, useState } from 'react';

import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import { api } from '../services/api';

import Input from '../components/Input';
import RepositoryCard from '../components/RepositoryCard';

import {
  DashboardContainer,
  CardListContainer,
  Title,
} from '../styles/Dashboard';

interface FormData {
  repo: string;
}

interface Repository {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}

const Dashboard: NextPage = () => {
  const router = useRouter();
  const formRef = useRef<FormHandles>(null);

  const [repositories, setRepositories] = useState<Repository[]>([]);

  useEffect(() => {
    if (typeof localStorage !== 'undefined') {
      const storageRepositories = localStorage.getItem(
        '@GithubExplorer:repositories',
      );

      if (storageRepositories) {
        setRepositories(JSON.parse(storageRepositories));
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      '@GithubExplorer:repositories',
      JSON.stringify(repositories),
    );
  }, [repositories]);

  const handleSubmit = useCallback(
    async (data: FormData) => {
      try {
        formRef.current.setErrors({});

        const { data: repository } = await api.get(`/repos/${data.repo}`);

        setRepositories([...repositories, repository]);
        formRef.current.reset();
      } catch (err) {
        formRef.current.setFieldError(
          'repo',
          'Erro na busca por este repositório.',
        );
      }
    },
    [repositories],
  );

  const handleRepositoryClick = useCallback((repositoryName: string) => {
    router.push({
      pathname: '/repositoryDetails',
      query: {
        repositoryName,
      },
    });
  }, []);

  return (
    <DashboardContainer>
      <img src="/logo.svg" alt="GitHub Explorer" title="GitHub Explorer" />
      <Title>Explore repositórios no GitHub.</Title>

      <Form ref={formRef} onSubmit={handleSubmit}>
        <Input name="repo" placeholder="Autor/nome do repositório" />
        <button type="submit" title="Pesquisar">
          Pesquisar
        </button>
      </Form>

      {repositories && (
        <CardListContainer>
          {repositories.map(repo => (
            <RepositoryCard
              key={repo.full_name}
              repositoryCardData={{
                avatarURL: repo.owner.avatar_url,
                description: repo.description,
                fullName: repo.full_name,
                login: repo.owner.login,
              }}
              onRepoClick={() => handleRepositoryClick(repo.full_name)}
            />
          ))}
        </CardListContainer>
      )}
    </DashboardContainer>
  );
};

export default Dashboard;
