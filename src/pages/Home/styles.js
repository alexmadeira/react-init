import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background: #068;
  overflow: hidden;
  position: relative;
  &.active {
    overflow-y: auto;
  }
`;
