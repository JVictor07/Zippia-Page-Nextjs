import * as S from './styles';

export interface PageContainerProps {
  children: React.ReactNode;
}

const PageContainer: React.FC<PageContainerProps> = ({ children }) => {
  return (
    <S.Container>
      <div>{children}</div>
    </S.Container>
  );
};

export default PageContainer;
