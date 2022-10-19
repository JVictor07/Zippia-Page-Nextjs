import * as S from './styles';
import UIButton from './../UI/Button';

export interface FiltersProps {
  showOnly7DaysJobs: boolean;
  orderByCompanyName: boolean;
  setShowOnly7DaysJobs: (
    value: boolean | ((prevVar: boolean) => boolean),
  ) => void;
  setOrderByCompanyName: (
    value: boolean | ((prevVar: boolean) => boolean),
  ) => void;
}

const Filters: React.FC<FiltersProps> = ({
  showOnly7DaysJobs,
  orderByCompanyName,
  setShowOnly7DaysJobs,
  setOrderByCompanyName,
}) => {
  return (
    <S.Container>
      <UIButton
        marginRight={8}
        text="Jobs by company name"
        selected={orderByCompanyName}
        onClick={() => setOrderByCompanyName((prevState) => !prevState)}
      />
      <UIButton
        text="7 days jobs"
        selected={showOnly7DaysJobs}
        onClick={() => setShowOnly7DaysJobs((prevState) => !prevState)}
      />
    </S.Container>
  );
};

export default Filters;
