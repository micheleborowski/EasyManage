import styled from "styled-components";

export const Container = styled.div`
display:flex;
flex-direction: column;
justify-content: flex-start
width: 100%;
  height: 100%;
`;

export const Grid = styled.div`
    display: grid;
    justify-items: center;
    grid-template-columns: repeat(3, minmax(0, 1fr));
`;

export const Row = styled.div`
    display: flex;
    flex-direction: column;
`;