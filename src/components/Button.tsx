import React from 'react';
import styled from 'styled-components';

function Button({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick: () => void;
}) {
  return <ButtonStyles onClick={onClick}>{children}</ButtonStyles>;
}

export default Button;

const ButtonStyles = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  font-weight: 900;
  font-size: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #0000006a;
  color: antiquewhite;
  padding-bottom: 8px;
  outline: none;
  border: none;
  &:hover {
    background-color: antiquewhite;
    color: deepskyblue;
    transition: 0.5s ease-in-out;
  }
`;
