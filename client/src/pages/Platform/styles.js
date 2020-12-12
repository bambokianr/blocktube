import styled from 'styled-components';

export const Content = styled.div`
  display: flex;
  margin: 24px;

  @media(max-width: 1240px) {
    flex-direction: column;
  }
`;

export const NoDataMessage = styled.div`
  width: 100%;
  display: flex;
  margin: 6px 8px 20px;
  font-weight: 300;
  font-size: 15px;
  color: #808080;
`;

export const VideoList = styled.div``;

export const AddButton = styled.div`
  cursor: pointer;
  width: 38px;
  height: 38px;
  background: #CC0000;
  border-radius: 3px;
  padding: 6px;
  margin-bottom: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
`;