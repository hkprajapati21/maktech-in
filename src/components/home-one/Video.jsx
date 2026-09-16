/* eslint-disable react/prop-types */
import { siteImages } from "@/assets/data/siteImages";
import { useState } from "react";
import ModalVideo from "react-modal-video";
import "../../../node_modules/react-modal-video/scss/modal-video.scss";

const Video = ({ classes }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className={`srex-video position-relative ${classes}`}>
        <div className="container-fluid">
          <div className="srex-video__box ">
            <button onClick={() => setOpen(true)} className="srex-video__play__btn popup-video">
              <i className="fa-solid fa-play"></i>
            </button>
            <img src={siteImages.video.cover} alt="Solar power project in India" />
          </div>
        </div>
      </div>
      <ModalVideo channel="youtube" youtube={{ mute: 0, autoplay: 0 }} isOpen={open} videoId="bYsgGkKksvs" onClose={() => setOpen(false)} />
    </>
  );
};

export default Video;
