import React, { useState, useEffect } from 'react';

import BarLoader from 'react-spinners/BarLoader';
import { RiAddLine } from 'react-icons/ri';

import Header from '../../components/Header';
import UploadVideo from '../../components/UploadVideo';
import VideoPlayer from '../../components/VideoPlayer';
import VideoCard from '../../components/VideoCard';

import { Content, VideoList, NoDataMessage, AddButton } from './styles';

const ipfsClient = require('ipfs-http-client');
const ipfs = ipfsClient({ host: 'ipfs.infura.io', port: 5001, protocol: 'https' });

function Platform({ loading, refresh, account, videoContract, allVideos, allLikes, setRefresh }) {
  const [showUploadVideo, setShowUploadVideo] = useState(false);
  const [videoBuffer, setVideoBuffer] = useState(null);
  const [fileVideoName, setFileVideoName] = useState(null);
  const [videoTitle, setVideoTitle] = useState(null);
  const [uploadingVideo, setUploadingVideo] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    if (allVideos.length > 0) handleSelectVideo(allVideos[0]);
  }, [allVideos, refresh]);

  function prepareVideoToIPFS(event) {
    //? converte o arquivo, assim que seu upload é feito no input, para um buffer/formato ok para o ipfs e deixa ele pronto para ser processado e colocado no ipfs
    event.preventDefault();
    const uploadedFile = event.target.files[0];
    setFileVideoName(uploadedFile?.name);
    const reader = new window.FileReader();
    reader.readAsArrayBuffer(uploadedFile);
    reader.onloadend = () => setVideoBuffer(Buffer(reader.result));
  }

  function uploadVideoToIPFS() {
    console.log('Uploading video do IPFS...');
    ipfs.add(videoBuffer, (err, res) => {
      if (err) {
        console.log('[ERROR]', err);
        return;
      }
      videoContract.methods.uploadVideo(res[0].hash, videoTitle).send({ from: account }).then(() => setRefresh(true));
      setUploadingVideo(false);
      setShowUploadVideo(false);
    });
  }

  function onSubmitForm(event) {
    event.preventDefault();
    if (fileVideoName && videoTitle) setUploadingVideo(true);
    uploadVideoToIPFS();
  }

  function handleSelectVideo(item) {
    //? verifica se o usuário que está logado curtiu o video
    const auxItem = item;
    auxItem.isLiked = allLikes.filter(likeObj => likeObj.hash === item.hash && likeObj.user === account).length !== 0;
    setSelectedVideo(auxItem);
  }

  return (
    <>
      {account !== '' && <Header account={account} />}
      {!!loading ?
        <BarLoader width='100%' color='#c3c3c390' />
        :
        <Content>
          {allVideos.length === 0 && <NoDataMessage>Ainda sem vídeos na plataforma.</NoDataMessage>}

          <VideoPlayer item={selectedVideo} videoContract={videoContract} account={account} setRefresh={setRefresh} />
          <VideoList>
            <AddButton onClick={() => setShowUploadVideo(!showUploadVideo)}>
              <RiAddLine size={22} color='#fff' />
            </AddButton>
            {!!showUploadVideo &&
              <UploadVideo
                fileVideoName={fileVideoName}
                onChangeInputFile={prepareVideoToIPFS}
                onChangeInputText={val => setVideoTitle(val)}
                onSubmitForm={onSubmitForm}
                uploading={uploadingVideo}
              />
            }
            {allVideos.map((item, idx) =>
              <VideoCard
                key={idx}
                item={item}
                onHandleSelectVideo={handleSelectVideo}
              />
            )}
          </VideoList>
        </Content>
      }
    </>
  );
}
export default Platform;
