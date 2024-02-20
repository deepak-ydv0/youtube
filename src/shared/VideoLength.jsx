import React from "react";
import moment from "moment";

const VideoLength = ({ time }) => {
  const videoLengthInSecons = moment()
    .startOf("day")
    .second(time)
    .format("H:mm:ss");

  return (
    <div className=" absolute bottom-2 right-2 bg-black py1 px-2 text-white text-xs rounded-md">
      {videoLengthInSecons}
    </div>
  );
};

export default VideoLength;
