import styled from 'styled-components';

export const Container = styled.div`
  background: #222222;
  border-radius: 2px;
  border: 1px solid #a9a9a930;
  margin-bottom: 32px;

  h1 {
    font-size: 17px;
    padding: 16px 20px;
    border-bottom: 1px solid #a9a9a930;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 18px 20px 22px;

  input {
    margin-bottom: 12px;
    border: none;
    outline: none;
  }

  button {
    width: 96px;
    background: #CC0000;
    color: #fff;
    font-weight: 500;
    text-transform: uppercase;
    border-radius: 3px;
    padding: 6px 0;
    margin-top: 8px;

    > div {
      padding-top: 4px;
    }
  }
`;

export const FileInput = styled.label`
  cursor: pointer;
  display: flex;
  align-items: center;
  padding-bottom: 8px;

  > input {
    display: none;
  }

  span {
    padding-left: 4px;
    font-size: 14px;
    color: #808080;
  }
`;

export const TextInput = styled.input`
  width: 240px;
  background: #373737;
  color: #fff;
  border-radius: 2px;
  padding: 6px 10px;
  font-size: 15px;
`;