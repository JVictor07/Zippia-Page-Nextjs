import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  & > div {
    width: 100%;
    max-width: 1200px;

    @media screen and (max-width: 1260px) {
      padding: 0 20px;
    }
  }
`;
