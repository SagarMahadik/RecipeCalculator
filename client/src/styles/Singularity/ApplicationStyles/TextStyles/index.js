import styled from 'styled-components/macro';

export const PTSansText = styled.text`
  font-family: PT Sans;
  font-style: ${props => props.fontStyle || 'normal'};
  font-weight: normal;
  font-size: ${props => props.fontSize};
  line-height: ${props => props.lineHeight || '12px'};
  align-items: center;
  text-align: center;
  color: ${props => props.color};
`;

export const SacramentoText = styled.text`
  font-family: Sacramento;
  font-style: ${props => props.fontStyle || 'normal'};
  font-weight: normal;
  font-size: ${props => props.fontSize};
  line-height: 53px;
  text-align: center;
  color: ${props => props.color};
`;
