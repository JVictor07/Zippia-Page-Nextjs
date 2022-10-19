import * as S from './styles';
import Image from 'next/image';
import { Job } from '../../types/jobs';

export interface Props {
  job: Job;
}

const Card = ({ job }: Props) => {
  const { companyLogo, companyName, jobTitle, OBJdesc, postedDate } = job;

  return (
    <S.Container>
      {companyLogo && (
        <S.Image>
          <Image height={40} width={40} src={companyLogo} alt={companyName} />
        </S.Image>
      )}
      <S.Infos>
        <S.Title>{jobTitle}</S.Title>
        <S.CompanyName>{companyName}</S.CompanyName>
        <S.Description>{OBJdesc}</S.Description>
        <S.PostedDate>{postedDate}</S.PostedDate>
      </S.Infos>
    </S.Container>
  );
};

export default Card;
