pragma solidity ^0.5.0;

contract BlockVideo {
  uint public countVideoStruct = 0;
  uint public countLikeStruct = 0;

  string public name = "BlockVideo";
  mapping(uint => Video) public videos;
  mapping(uint => Like) public likes;

  mapping(string => uint) getVideoIdFromHash;

	struct Like {
		uint id;
    string hash;
		address user;
  }

  struct Video {
    uint id;
    string hash;
    string title;
    address author;
    uint videoLikesCount;
  }

  event VideoUploaded (
    uint id,
    string hash,
    string title,
    address author
  );

  function uploadVideo(string memory _hash, string memory _title) public {
    require(bytes(_hash).length > 0);
    require(bytes(_title).length > 0);
    require(msg.sender != address(0));

    countVideoStruct++;
    videos[countVideoStruct] = Video(countVideoStruct, _hash, _title, msg.sender, 0);
    getVideoIdFromHash[_hash] = countVideoStruct;

    emit VideoUploaded(countVideoStruct, _hash, _title, msg.sender);
  }

  function addLikeToVideo(string memory _videoHash) public {
    require(bytes(_videoHash).length > 0);
    require(msg.sender != address(0));

    countLikeStruct++;
    likes[countLikeStruct] = Like(countLikeStruct, _videoHash, msg.sender);

		uint videoId = getVideoIdFromHash[_videoHash];
		videos[videoId].videoLikesCount++;
	}
}
