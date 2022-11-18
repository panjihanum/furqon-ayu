/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-sequences */
import { format } from "date-fns";
import IMAGES from "../assets/images/iindex";
import ENV from "../config/env";
import styles from "./Home.module.css";
import Countdown from "react-countdown";
import { AnimationOnScroll } from "react-animation-on-scroll";

function ThirdInvContent(props) {
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return (
        <AnimationOnScroll animateIn="animate__zoomIn">
          <div className="flex flex-row my-7">
            <div className="flex flex-col items-center justify-center">
              <span className="montserrat text-5xl">00</span>
              <span className="montserrat text-lg">Days</span>
            </div>
            <div className="flex flex-col items-center justify-center ml-7">
              <span className="montserrat text-5xl">00</span>
              <span className="montserrat text-lg">Hours</span>
            </div>
            <div className="flex flex-col items-center justify-center ml-7">
              <span className="montserrat text-5xl">00</span>
              <span className="montserrat text-lg">Minutes</span>
            </div>
            <div className="flex flex-col items-center justify-center ml-7">
              <span className="montserrat text-5xl">00</span>
              <span className="montserrat text-lg">Seconds</span>
            </div>
          </div>
        </AnimationOnScroll>
      );
    } else {
      // Render a countdown
      return (
        <AnimationOnScroll animateIn="animate__zoomIn">
          <div className="flex flex-row my-7">
            <div className="flex flex-col items-center justify-center">
              <span className="montserrat text-5xl font-bold">
                {days < 10 ? "0" + days : days}
              </span>
              <span className="montserrat text-lg">Days</span>
            </div>
            <div className="flex flex-col items-center justify-center ml-7">
              <span className="montserrat text-5xl font-bold">
                {hours < 10 ? "0" + hours : hours}
              </span>
              <span className="montserrat text-lg">Hours</span>
            </div>
            <div className="flex flex-col items-center justify-center  ml-7">
              <span className="montserrat text-5xl font-bold">
                {minutes < 10 ? "0" + minutes : minutes}
              </span>
              <span className="montserrat text-lg">Minutes</span>
            </div>
            <div className="flex flex-col items-center justify-center ml-7">
              <span className="montserrat text-5xl font-bold">
                {seconds < 10 ? "0" + seconds : seconds}
              </span>
              <span className="montserrat text-lg">Seconds</span>
            </div>
          </div>
        </AnimationOnScroll>
      );
    }
  };

  const Button = ({ title, img, onPress }) => {
    return (
      <button
        className="custom-button flex flex-row items-center justify-center"
        onClick={onPress}
      >
        {img && (
          <img src={img} alt={"img"} className="custom-button-img mr-2" />
        )}
        <span className="color-dark">{title}</span>
      </button>
    );
  };

  const openInNewTab = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  const Box = ({ data }) => {
    const { title, tanggal, waktu, alamat, alamatDetail, alamatUrl } = data;
    return (
      <div
        className="custom-box flex flex-col items-center justify-center py-10 px-10 "
        style={{ borderRadius: 25 }}
      >
        <span className="text-2xl font-bold">{title}</span>
        <span className="text-xs mt-5">{tanggal}</span>
        <span className="text-xs mt-4">{waktu}</span>
        <span className="text-sm font-bold mt-4">{alamat}</span>
        <span className="text-xs mt-3 mb-5 text-center	" style={{ width: 250 }}>
          {alamatDetail}
        </span>
        <Button
          title="Lihat Lokasi"
          img={IMAGES.Location}
          onPress={() => openInNewTab(alamatUrl)}
        />
      </div>
    );
  };

  const dataBox = [
    {
      title: "Akad Nikah",
      tanggal: "Minggu, 18 Desember 2022",
      waktu: "09.00 s/d selesai",
      alamat: "Di Aula Rangkok Arhanud",
      alamatDetail:
        "Jl. Kb. Bawang XIV No.8, Kb. Bawang, Tanjung. Priok, Jakarta Utara, 14320",
      alamatUrl: "https://www.google.com/maps/place/Aula+Rangkok/@-6.1126882,106.8868475,21z/data=!4m19!1m13!4m12!1m4!2m2!1d107.0170112!2d-6.2291968!4e1!1m6!1m2!1s0x2e6a1fbf8c5d0ddf:0x79b40a7d8e288e9b!2sAula+Rangkok+Arhanud!2m2!1d106.8869472!2d-6.1127851!3m4!1s0x2e6a1fbf8c5d0ddf:0x79b40a7d8e288e9b!8m2!3d-6.1127851!4d106.8869472",
    },
    {
      title: "RESEPSI",
      tanggal: "Minggu, 18 Desember 2022",
      waktu: "11.00 s/d 13.00",
      alamat: "Di Aula Rangkok Arhanud",
      alamatDetail:
        "Jl. Kb. Bawang XIV No.8, Kb. Bawang, Tanjung. Priok, Jakarta Utara, 14320",
      alamatUrl: "https://www.google.com/maps/place/Aula+Rangkok/@-6.1126882,106.8868475,21z/data=!4m19!1m13!4m12!1m4!2m2!1d107.0170112!2d-6.2291968!4e1!1m6!1m2!1s0x2e6a1fbf8c5d0ddf:0x79b40a7d8e288e9b!2sAula+Rangkok+Arhanud!2m2!1d106.8869472!2d-6.1127851!3m4!1s0x2e6a1fbf8c5d0ddf:0x79b40a7d8e288e9b!8m2!3d-6.1127851!4d106.8869472",
    },
  ];
  return (
    <div
      className={styles.SecondInvContent + " relative px-5"}
      style={{
        backgroundImage: `url(${IMAGES.ThirdContentBG})`,
      }}
    >
      <AnimationOnScroll animateIn="animate__zoomIn">
        <span className="text-lg choppin-script">
          Menghitung Mundur Menuju Hari Besar{" "}
        </span>
      </AnimationOnScroll>
      <AnimationOnScroll animateIn="animate__zoomIn">
        <span className="text-lg mt-5">
          {format(new Date(ENV.tanggalResepsi), "dd MMMM yyyy")}
        </span>
      </AnimationOnScroll>
      <Countdown
        zeroPadTime={2}
        date={new Date(ENV.tanggalResepsi)}
        renderer={renderer}
      />
      <AnimationOnScroll animateIn="animate__zoomIn">
        <Button
          title="Tambahkan Ke Kalendar"
          onPress={() =>
            openInNewTab(
              "https://calendar.google.com/calendar/render?action=TEMPLATE&dates=20221118%2F20221119&location=https%3A%2F%2Fgoo.gl%2Fmaps%2FA9GDMu388TQxssAc8&text=%5BPERNIKAHAN%5D%20Furqon%20%26%20Ayu"
            )
          }
          img={IMAGES.Calendar}
        />
      </AnimationOnScroll>
      <AnimationOnScroll animateIn="animate__zoomIn">
        <div className="mt-5" />
        {dataBox.map((data, i) => (
          <div key={"K " + i} className="mt-5">
            <Box data={data} />
          </div>
        ))}
      </AnimationOnScroll>
    </div>
  );
}

export default ThirdInvContent;
