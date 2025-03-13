import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
`;

export const Header = styled.div`
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 10px;
  display:flex;
  align-items: center;
  justify-content: space-between;
`;

export const GridRow = styled.div<{ isTitle?: boolean }>`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
  padding: 8px;
  background-color: ${({ isTitle }) => (isTitle ? "#ddd" : "white")};
  font-weight: ${({ isTitle }) => (isTitle ? "bold" : "normal")};
  border-bottom: 1px solid #ccc;
`;

export const ColumnTitle = styled.div`
  text-align: center;
`;
