import { NextPage } from 'next';
import { FiChevronRight } from 'react-icons/fi';
import { RepositoryCardContainer } from '../../styles/components/RepositoryCard';

interface RepositoryData {
  avatarURL: string;
  description: string;
  login: string;
  fullName: string;
}

interface RepositoryCardProps {
  repositoryCardData: RepositoryData;
  onRepoClick: () => void;
}

const RepositoryCard: NextPage<RepositoryCardProps> = ({
  repositoryCardData,
  onRepoClick,
}) => {
  return (
    <RepositoryCardContainer
      onClick={onRepoClick}
      title={repositoryCardData.fullName}
    >
      <img src={repositoryCardData.avatarURL} alt={repositoryCardData.login} />
      <div>
        <strong>{repositoryCardData.fullName}</strong>
        <p>{repositoryCardData.description}</p>
      </div>
      <FiChevronRight size={20} color="#cbcbd6" />
    </RepositoryCardContainer>
  );
};
export default RepositoryCard;
