/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-sequences */
import { useRef } from "react";
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
      namaOrangTua:
        "Putri dari Aiptu Hapit Biantoro, S.H & Melly Giyanny G. S.Pd",
      instagramUrl: "https://www.instagram.com/ayunyndahavit",
      img: IMAGES.Ayu,
    },
    {
      namaLengkap: "Furqon Ramadhani ",
      namaPanggilan: "Furqon",
      namaOrangTua: "Putra dari Abdul Azis & Indriyastuti",
      instagramUrl: "https://www.instagram.com/furqonramadhani",
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
      <AnimationOnScroll
        animateIn="animate__zoomIn"
        animateOut="animate__zoomOut"
      >
        <div className="flex flex-col p-10">
          <img
            src={IMAGES.Floral}
            alt="flower"
            className="relative"
            style={{ top: -30 }}
          />
          <span className="text-base color-dark">
            "Dan di antara tanda-tanda kekuasaan-Nya diciptakan-Nya untukmu
            pasangan hidup dari jenismu sendiri supaya kamu dapat ketenangan
            hati dan dijadikannya kasih sayang di antara kamu. Sesungguhnya yang
            demikian menjadi tanda-tanda kebesaran-Nya bagi orang-orang yang
            berpikir."
            <br />
            <br />
            <span className="font-bold">Q.S Ar-Rum Ayat 21</span>
          </span>
          <img
            src={IMAGES.FurqonAyu}
            alt="flower"
            className="relative self-center mt-10 mb-5 w-full"
            style={{ borderRadius: 20, boxShadow: "2px 4px #bbbbbb" }}
          />
        </div>
      </AnimationOnScroll>
      <AnimationOnScroll
        animateIn="animate__slideInLeft"
        animateOut="animate__zoomOut"
      >
        <img src={IMAGES.Flower} alt="flower" className="relative" />
      </AnimationOnScroll>
      <div className="flex flex-col" ref={animationRef}>
        {mempelaiDatas.map((mempelaiData, index) => {
          return (
            <AnimationOnScroll
              animateIn="animate__slideInLeft"
              animateOut="animate__zoomOut"
            >
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
