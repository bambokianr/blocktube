import React, { useEffect, useState } from 'react';
import Web3 from 'web3';

import BlockVideo from './abis/BlockVideo.json';

import Platform from './pages/Platform';
import GlobalStyle from './styles/global';

function App() {
  const [reloadApp, setReloadApp] = useState(false);
  const [loading, setLoading] = useState(true);
  const [account, setAccount] = useState('');
  const [videoContract, setVideoContract] = useState(null);
  const [videos, setVideos] = useState([]);
  const [likes, setLikes] = useState([]);

  useEffect(() => {
    setReloadApp(true);
  }, []);

  useEffect(() => {
    if (!!reloadApp) {
      async function handleBlockchainConnection() {
        await loadBlockchainData();
      }
      handleBlockchainConnection();
      setReloadApp(false);
    }
  }, [reloadApp]);

  async function loadBlockchainData() {
    const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

    const accounts = await web3.eth.getAccounts();
    if (accounts[0]) setAccount(accounts[0]);

    const networkId = await web3.eth.net.getId();
    const networkData = BlockVideo.networks[networkId];
    if (networkData) {
      const blockVideo = new web3.eth.Contract(BlockVideo.abi, networkData.address);
      setVideoContract(blockVideo);

      const likeCount = await blockVideo.methods.countLikeStruct().call();
      const videoCount = await blockVideo.methods.countVideoStruct().call();

      let auxLikes = [];
      for (let i = likeCount; i >= 1; i--) {
        const like = await blockVideo.methods.likes(i).call();
        const { id, hash, user } = like;
        const likeObj = { id, hash, user };
        auxLikes.push(likeObj);
      }

      let auxVideos = [];
      for (let i = videoCount; i >= 1; i--) {
        const video = await blockVideo.methods.videos(i).call();
        const { id, hash, title, author, videoLikesCount } = video;
        const videoObj = { id, hash, title, author, videoLikesCount: parseInt(videoLikesCount) };
        auxVideos.push(videoObj);
      }

      setLikes(auxLikes);
      setVideos(auxVideos);

      setLoading(false);
    } else window.alert('BlockVideo contract was not deployed to the detected network.');
  };

  return (
    <>
      <Platform
        loading={loading}
        account={account}
        videoContract={videoContract}
        allVideos={videos}
        allLikes={likes}
        refresh={reloadApp}
        setRefresh={setReloadApp}
      />
      <GlobalStyle />
    </>
  );
}
export default App;