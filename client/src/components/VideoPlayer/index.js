import React, { useEffect, useState } from 'react';

import { AiOutlineLike, AiFillLike } from 'react-icons/ai';

import { Container, Player, Content, Description, ButtonLike, LikeText } from './styles';

function VideoPlayer({ item, videoContract, account, setRefresh }) {
  const [isLiked, setIsLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(0);

  useEffect(() => {
    console.log('item', item);
    setLikesCount(item?.videoLikesCount);
    setIsLiked(item?.isLiked);
  }, [item]);

  function handleLike() {
    videoContract.methods.addLikeToVideo(item.hash).send({ from: account }).then(() => setRefresh(true));
  }

  return (
    <Container>
      {item &&
        <>
          <Player>
            <video src={`https://ipfs.infura.io/ipfs/${item.hash}`} controls />
          </Player>
          <Content>
            <Description>
              <h1>{item.title}</h1>
              <p>{item.author}</p>
            </Description>
            <ButtonLike disabled={!!isLiked} onClick={!isLiked ? handleLike : undefined}>
              {!!isLiked ? <AiFillLike size={24} /> : <AiOutlineLike size={24} />}
              <LikeText>{likesCount === 1 ? '1 LIKE' : `${likesCount} LIKES`}</LikeText>
            </ButtonLike>
          </Content>
        </>
      }
    </Container>
  );
}
export default VideoPlayer;
