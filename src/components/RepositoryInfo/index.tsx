import { NextPage } from 'next';

import { RepositoryInfoContainer } from '../../styles/components/RepositoryInfo';

interface RepositoryInfoData {
  avatarURL: string;
  description: string;
  fullName: string;
  login: string;
  createdAt: string;
}

interface RepositoryInfoProps {
  repositoryInfoData: RepositoryInfoData;
}

const RepositoryInfo: NextPage<RepositoryInfoProps> = ({
  repositoryInfoData,
}) => {
  return (
    <RepositoryInfoContainer>
      <header>
        <img
          src={repositoryInfoData.avatarURL}
          alt={repositoryInfoData.login}
          title={repositoryInfoData.login}
        />
        <section>
          <div>
            <strong>{repositoryInfoData.fullName}</strong>
            <span>{repositoryInfoData.createdAt}</span>
          </div>
          <p>{repositoryInfoData.description}</p>
        </section>
      </header>
    </RepositoryInfoContainer>
  );
};

export default RepositoryInfo;
