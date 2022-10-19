import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  padding: 20px;
  border-radius: 4px;
  margin-bottom: 20px;
  width: calc(33.33% - 10px);
  border: 1px solid #d8dee2;

  @media screen and (min-width: 1001px) {
    margin-right: 15px;
    &:nth-child(3n) {
      margin-right: 0;
    }
  }

  @media screen and (max-width: 1000px) and (min-width: 751px) {
    margin-right: 20px;
    width: calc(50% - 10px);
    &:nth-child(2n) {
      margin-right: 0;
    }
  }

  @media screen and (max-width: 750px) {
    width: 100%;
  }
`;

export const Image = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  min-width: 40px;
  min-height: 40px;
  margin-right: 1.5rem;

  img {
    width: 100%;
    display: flex;
    object-fit: contain;
  }
`;

export const Infos = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h3`
  color: #333;
  font-size: 18px;
  font-weight: 600;
  line-height: 22px;
  margin: 0 0 0.5rem 0;
`;

export const CompanyName = styled.span`
  color: #333;
  font-family: Open Sans;
  font-size: 13px;
  font-style: normal;
  font-weight: 600;
  line-height: 18px;
  opacity: 0.8;
`;

export const Description = styled.span`
  font-size: 14px;
  max-height: 65px;
  overflow: hidden;
  font-weight: 400;
  line-height: 22px;
  white-space: normal;
  margin: 12px 0 16px;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  text-overflow: ellipsis;
  overflow-wrap: break-word;
  -webkit-box-orient: vertical;
  color: rgba(51, 51, 51, 0.8);
`;

export const PostedDate = styled.span`
  opacity: 0.8;
  color: #333;
  font-size: 13px;
  font-weight: 600;
  font-weight: 400;
  line-height: 18px;
  margin-left: auto;
`;
