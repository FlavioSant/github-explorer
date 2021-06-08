import { GetServerSideProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import { FiChevronLeft } from 'react-icons/fi';

import { format, parseISO } from 'date-fns';
import { api } from '../../services/api';

import IssueCard from '../../components/IssueCard';
import RepositoryInfo from '../../components/RepositoryInfo';

import {
  Header,
  IssueListContainer,
} from '../../styles/pages/repositoryDetails';
import RepositoryCounts from '../../components/RepositoryCounts';

interface Repository {
  localeCreatedAt: string;
  description: string;
  full_name: string;
  forks_count: number;
  stargazers_count: number;
  open_issues_count: number;
  owner: {
    login: string;
    avatar_url: string;
  };
}

interface Issue {
  id: number;
  localeCreatedAt: string;
  html_url: string;
  title: string;
  user: {
    login: string;
  };
}

interface RepositoryDetailsProps {
  repository: Repository;
  issues: Issue[];
}

const RepositoryDetails: NextPage<RepositoryDetailsProps> = ({
  repository,
  issues,
}) => {
  const router = useRouter();

  console.log({ repository, issues });

  return (
    <>
      <Header>
        <img src="/logo.svg" alt="GitHub Explorer" title="GitHub Explorer" />
        <button type="button" title="Voltar" onClick={() => router.back()}>
          <FiChevronLeft size={16} />
          Voltar
        </button>
      </Header>

      {repository && (
        <>
          <RepositoryInfo
            repositoryInfoData={{
              avatarURL: repository.owner.avatar_url,
              createdAt: repository.localeCreatedAt,
              description: repository.description,
              fullName: repository.full_name,
              login: repository.owner.login,
            }}
          />
          <RepositoryCounts
            repositoryCounts={[
              {
                label: 'Stars',
                value: repository.stargazers_count,
              },
              {
                label: 'Forks',
                value: repository.forks_count,
              },
              {
                label: 'Issues abertas',
                value: repository.open_issues_count,
              },
            ]}
          />
        </>
      )}

      {issues.length > 0 && (
        <IssueListContainer>
          <div>
            <h1>Issues</h1>
            <hr />
          </div>
          {issues.map(issue => (
            <IssueCard
              key={issue.id}
              title={issue.title}
              login={issue.user.login}
              linkTo={issue.html_url}
              createdAt={issue.localeCreatedAt}
            />
          ))}
        </IssueListContainer>
      )}
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ctx => {
  const { repositoryName } = ctx.query;

  try {
    const { data: repository } = await api.get(`repos/${repositoryName}`);
    const { data: issues } = await api.get(`repos/${repositoryName}/issues`);

    const parsedRepository = {
      ...repository,
      localeCreatedAt: format(parseISO(repository.created_at), 'dd/MM/yyyy'),
    };

    const parsedIssues = issues.map(issue => {
      return {
        ...issue,
        localeCreatedAt: format(parseISO(issue.created_at), 'dd/MM/yyyy HH:mm'),
      };
    });

    return {
      props: {
        repository: parsedRepository,
        issues: parsedIssues,
      },
    };
  } catch (err) {
    return {
      props: {},
    };
  }
};

export default RepositoryDetails;
