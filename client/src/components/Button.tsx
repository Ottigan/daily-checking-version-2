import styled from 'styled-components';

const Button = styled.button`
  padding: 8px 12px;
  text-align: center;
  line-height: 1;
  color: hsl(0, 0%, 100%);
  background-color: hsl(210, 13%, 50%);
  border: 1px solid hsl(210, 13%, 50%);
  border-radius: 3px;
  font-size: 1rem;
  font-weight: 600;

  &:hover {
    cursor: pointer;
    background-color: hsl(210 13% 30%);
  }
`;
export default Button;
