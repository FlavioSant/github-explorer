import { NextPage } from 'next';
import { IconBaseProps } from 'react-icons';

import { RepositoryCountsContainer } from '../../styles/components/RepositoryCounts';

interface Counts {
  label: string;
  value: number;
  icon: React.ComponentType<IconBaseProps>;
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
        {repositoryCounts.map(({ label, value, icon: Icon }, index) => (
          <li key={index}>
            <strong>
              <Icon size={24} />
              {value}
            </strong>
            <span>{label}</span>
          </li>
        ))}
      </ul>
    </RepositoryCountsContainer>
  );
};

export default RepositoryCounts;
