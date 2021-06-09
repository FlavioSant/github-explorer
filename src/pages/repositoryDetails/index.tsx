import { GetServerSideProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import { FiChevronLeft, FiExternalLink, FiStar } from 'react-icons/fi';
import { GoRepoForked, GoIssueOpened } from 'react-icons/go';

import { format, parseISO } from 'date-fns';
import { api } from '../../services/api';

import IssueCard from '../../components/IssueCard';
import RepositoryInfo from '../../components/RepositoryInfo';

import {
  Header,
  IssueListContainer,
  LinksContainer,
} from '../../styles/pages/repositoryDetails';

import RepositoryCounts from '../../components/RepositoryCounts';

interface Repository {
  localeCreatedAt: string;
  description: string;
  full_name: string;
  forks_count: number;
  homepage: string;
  html_url: string;
  stargazers_count: number;
  open_issues_count: number;
  license: {
    spdx_id: string;
  };
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

  console.log(repository);

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
              license: repository.license.spdx_id,
            }}
          />
          <RepositoryCounts
            repositoryCounts={[
              {
                label: 'Stars',
                value: repository.stargazers_count,
                icon: FiStar,
              },
              {
                label: 'Forks',
                value: repository.forks_count,
                icon: GoRepoForked,
              },
              {
                label: 'Issues abertas',
                value: repository.open_issues_count,
                icon: GoIssueOpened,
              },
            ]}
          />
          <LinksContainer>
            <a
              href={repository.homepage}
              title="Home page"
              target="_blank"
              rel="noopener noreferrer"
            >
              Home page
            </a>
            <a
              href={repository.html_url}
              title="Ver repositório"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver repositório <FiExternalLink size={20} />
            </a>
          </LinksContainer>
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
