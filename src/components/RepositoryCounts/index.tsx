import { NextPage } from 'next';
import { RepositoryCountsContainer } from '../../styles/components/RepositoryCounts';

interface Counts {
  label: string;
  value: number;
}

interface RepositoryCountsProps {
  repositoryCounts: Counts[];
}

const RepositoryCounts: NextPage<RepositoryCountsProps> = ({
  repositoryCounts,
}) => {
  return (
    <RepositoryCountsContainer>
      <ul>
        {repositoryCounts.map((count, index) => (
          <li key={index}>
            <strong>{count.value}</strong>
            <span>{count.label}</span>
          </li>
        ))}
      </ul>
    </RepositoryCountsContainer>
  );
};

export default RepositoryCounts;
