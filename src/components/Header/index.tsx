import * as S from './styles';
import PageContainer from './../PageContainer';
import Image from 'next/image';

const Header = () => {
  return (
    <S.Container>
      <PageContainer>
        <Image
          height={36}
          width={156}
          alt="Zippia"
          src="https://static.zippia.com/ui-router/images/header/logo_white.svg"
        />
      </PageContainer>
    </S.Container>
  );
};

export default Header;
