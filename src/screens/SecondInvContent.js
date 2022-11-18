/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-sequences */
import { useEffect, useRef, useState } from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import IMAGES from "../assets/images/iindex";
import styles from "./Home.module.css";

function SecondInvContent(props) {
  const { onMouseClick } = props;
  const animationRef = useRef(null);

  const mempelaiDatas = [
    {
      namaLengkap: "Ayu Nynda Havitasari",
      namaPanggilan: "Ayu",
      namaOrangTua: "Anak dari Aiptu Hapit Biantoro, S.H & ALM. Tri Iswari",
      instagramUrl: "https://www.instagram.com/furqonramadhani",
      img: IMAGES.Ayu,
    },
    {
      namaLengkap: "Furqon Ramadhani ",
      namaPanggilan: "Furqon",
      namaOrangTua: "Anak dari Abdul Azis & Indriyastuti",
      instagramUrl: "https://www.instagram.com/ayunyndahavit",
      img: IMAGES.Furqon,
    },
  ];
  return (
    <div
      className={styles.SecondInvContent + " relative"}
      style={{
        backgroundImage: `url(${IMAGES.SecondContentBG})`,
        backgroundPositionY: "20%",
      }}
    >
      <img
        src={IMAGES.Flower}
        alt="flower"
        className="relative"
        style={{ top: -30 }}
      />
      <div className="flex flex-col" ref={animationRef}>
        {mempelaiDatas.map((mempelaiData, index) => {
          return (
            <AnimationOnScroll animateIn="animate__slideInLeft" animateOut="animate__zoomOut">
              <div
                className="flex flex-col items-center pt-5 pb-5 "
                key={index + "K"}
              >
                <img
                  src={mempelaiData.img}
                  className="images-mempelai"
                  alt="img-mempelai"
                />
                <span className="color-dark choppin-script text-2xl mt-5">
                  {mempelaiData.namaPanggilan}
                </span>
                <span className="color-dark text-2xl">
                  {mempelaiData.namaLengkap}
                </span>
                <div className="custom-divider" />
                <span className="color-dark text-xs">
                  {mempelaiData.namaOrangTua}
                </span>
                <a href={mempelaiData.instagramUrl} className="mt-5">
                  <img
                    src={IMAGES.Instagram}
                    alt="instagram"
                    className="images-instagram"
                  />
                </a>
              </div>
            </AnimationOnScroll>
          );
        })}
      </div>
      <span className="scroll-btn">
        <a onClick={onMouseClick}>
          <span className="mouse">
            <span></span>
          </span>
        </a>
      </span>
    </div>
  );
}

export default SecondInvContent;
