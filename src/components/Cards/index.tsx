import * as S from './styles';
import Card from '../Card';
import { Jobs } from '../../types/jobs';

export interface CardsProps {
  jobs: Jobs;
}

const Cards: React.FC<CardsProps> = ({ jobs }) => {
  return (
    <S.Container>
      {jobs?.length > 0 &&
        jobs.map((job) => <Card key={job.jobId} job={job} />)}
    </S.Container>
  );
};

export default Cards;
