import React from 'react';

import { Container, VideoContainer, Description } from './styles';

function VideoCard({ item, onHandleSelectVideo }) {
  return (
    <Container onClick={() => onHandleSelectVideo(item)}>
      {item && 
        <>
          <VideoContainer>
            <video src={`https://ipfs.infura.io/ipfs/${item.hash}`} />
          </VideoContainer>
          <Description>
            <h1>{item.title}</h1>
            <p>{item.author}</p>
          </Description>
        </>
      }
    </Container>
  );
}
export default VideoCard;
