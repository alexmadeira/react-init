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

export const LefContent = styled.div`
  width: 40vw;
  height: 100vh;
  background: #90bfd3;
  position: absolute;
  left: 0;
  top: 0;
  overflow: hidden;
  transition: width 500ms ease;
  &.active {
    width: 0vw;
  }
`;
export const ProjectContent = styled.div`
  width: 100%;
  background: #999;
  position: absolute;
  left: 40vw;
  top: 0;
  transition: left 500ms ease;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  z-index: 2;
  &.active {
    left: 0;
  }
`;

export const Project = styled.div`
  height: 200vw;
  width: 100%;
  background: #f80;
  position: absolute;
  left: 0;
  top: 100vh;
  transition: top 500ms ease;
  z-index: 1;

  &.active {
    display: none;
  }
  &:nth-child(even) {
    background: #080;
  }
  &.show {
    z-index: 2;
    top: 0;

    &.active {
      display: block;
    }
  }
`;
