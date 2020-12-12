import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin-right: 24px;
`;

export const Player = styled.div`
  video {
    width: 100%;
  }
`;

export const Content = styled.div`
  border-bottom: 1px solid #a9a9a930;
  padding: 18px 0;
  margin-bottom: 22px;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;

  svg {
    color: #d3d3d3;
  }
`;

export const Description = styled.div`
  h1 {
    font-size: 20px;
    margin-bottom: 10px;
  }
  
  p {
    font-size: 14px;
    color: #d3d3d3;
  }
`;

export const ButtonLike = styled.div`
  width: 120px;
  cursor: ${({ disabled }) => !!disabled ? 'default' : 'pointer'};
  padding: 0 12px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const LikeText = styled.span`
  color: #d3d3d3;
  padding-left: 8px;
  font-weight: 500;
  font-size: 17px;
`;