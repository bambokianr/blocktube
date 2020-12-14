import styled from 'styled-components';

export const Container = styled.div`
  cursor: pointer;
  display: flex;
  margin-bottom: 14px;
`;

export const VideoContainer = styled.div`
  width: 168px;
  height: 100px;
  margin-right: 10px;
  overflow: hidden;

  video {
    width: 100%;
  }
`;

export const Description = styled.div`
  width: 232px;
  word-wrap: break-word;

  @media(max-width: 1240px) {
    word-wrap: normal;
  }

  @media(max-width: 640px) {
    word-wrap: break-word;
  }

  h1 {
    font-size: 16px;
    margin-bottom: 8px;
  }
  
  p {
    font-size: 14px;
    color: #d3d3d3;
  }
`;