import styled from "styled-components";

export const MainContainer = styled.div`
  height: 340px;
  padding: 0;
  margin: 0;
  background-color: #171a2a;
`;
export const Image = styled.img`
  height: 260px;
  width: 260px;
  margin-top: 40px;
  cursor: pointer;
  transition: 0.5s;
  &:hover {
    transform: scale(1.05);
  }
`;
