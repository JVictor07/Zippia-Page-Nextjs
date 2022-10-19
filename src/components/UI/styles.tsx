import styled, { css } from 'styled-components';

import { UIButtonProps } from './Button';

export const Button = styled.button<UIButtonProps>`
  outline: none;
  display: flex;
  cursor: pointer;
  font-size: 14px;
  color: #3174ee;
  font-weight: 600;
  border-radius: 4px;
  text-align: center;
  background: #fff;
  padding: 8px 10px 8px 12px;
  text-transform: capitalize;
  border: 1px solid #bac4da !important;

  ${({ selected }) =>
    selected &&
    css`
      color: #fff;
      background: #205fd0;
      border: 1px solid #205fd0;
    `}

  margin-right: ${({ marginRight }) => (marginRight ? `${marginRight}px` : 0)}
`;
