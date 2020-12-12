import React from 'react';

import { MdFileUpload } from 'react-icons/md';
import BeatLoader from 'react-spinners/BeatLoader';

import { Container, Form, FileInput, TextInput } from './styles';

function UploadVideo({ fileVideoName, uploading, onChangeInputFile, onChangeInputText, onSubmitForm }) {
  return (
    <Container>
      <h1>Enviar vídeo</h1>
      <Form onSubmit={onSubmitForm}>
        <FileInput htmlFor='upload-video'>
          <MdFileUpload color='#CC0000' size={24} />
          <span>{fileVideoName || 'Nenhum arquivo selecionado'}</span>
          <input 
            id='upload-video'
            type='file' 
            accept='.mp4, .mkv, .ogg, .wmv, .mov' 
            onChange={onChangeInputFile} 
          />
        </FileInput>
        <TextInput 
          type='text' 
          placeholder='Título do vídeo'
          onChange={event => onChangeInputText(event.target.value)}
        />
        <button type='submit'>{!uploading ? 'upload' :  <div><BeatLoader margin={4} size={8} color='#212121' /></div>}</button>
      </Form>
    </Container>
  );
}
export default UploadVideo;