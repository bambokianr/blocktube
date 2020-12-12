import styled from  'styled-components';

export const Container = styled.header`
  padding: 12px 32px;
  background: #212121;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  img { 
    cursor: pointer;
    width: 120px; 
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;

  p {
    margin-right: 14px;
    font-size: 14px;

    @media(max-width: 720px) {
      display: none;
    }
  }
`;

export const Avatar = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 16px;
  cursor: pointer;
  background: #689F39;
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    font-size: 18px;
  }
`;