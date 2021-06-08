import { NextPage } from 'next';
import { FiChevronRight } from 'react-icons/fi';
import { IssueCardContainer } from '../../styles/components/IssueCard';

interface IssueCardProps {
  title: string;
  login: string;
  linkTo: string;
  createdAt: string;
}

const IssueCard: NextPage<IssueCardProps> = ({
  linkTo,
  login,
  title,
  createdAt,
}) => {
  return (
    <IssueCardContainer title={title}>
      <a href={linkTo} target="_blank" rel="noopener noreferrer">
        <div>
          <strong>{title}</strong>
          <p>
            {login} - {createdAt}
          </p>
        </div>

        <FiChevronRight size={20} color="#cbcbd6" />
      </a>
    </IssueCardContainer>
  );
};

export default IssueCard;
