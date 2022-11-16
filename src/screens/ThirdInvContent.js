/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-sequences */
import { format } from "date-fns";
import IMAGES from "../assets/images/iindex";
import ENV from "../config/env";
import styles from "./Home.module.css";
import Countdown from "react-countdown";

function ThirdInvContent(props) {
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return (
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
      );
    } else {
      // Render a countdown
      return (
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
      alamat: "Di YON ARHANUD 6",
      alamatDetail:
        "Jl. Lagoa Kanal No.41, RT.04/RW.02, Bawang, Kec. Tj. Priok, Kota Jakarta Utara",
      alamatUrl: "https://goo.gl/maps/A9GDMu388TQxssAc8",
    },
    {
      title: "RESEPSI",
      tanggal: "Minggu, 18 Desember 2022",
      waktu: "10.00 s/d selesai",
      alamat: "Di YON ARHANUD 6",
      alamatDetail:
        "Jl. Lagoa Kanal No.41, RT.04/RW.02, Bawang, Kec. Tj. Priok, Kota Jakarta Utara",
      alamatUrl: "https://goo.gl/maps/A9GDMu388TQxssAc8",
    },
  ];
  return (
    <div
      className={styles.SecondInvContent + " relative px-5"}
      style={{
        backgroundImage: `url(${IMAGES.ThirdContentBG})`,
      }}
    >
      <span className="text-lg choppin-script">
        Menghitung Mundur Menuju Hari Besar{" "}
      </span>
      <span className="text-lg mt-5">
        {format(new Date(ENV.tanggalResepsi), "dd MMMM yyyy")}
      </span>
      <Countdown
        zeroPadTime={2}
        date={new Date(ENV.tanggalResepsi)}
        renderer={renderer}
      />
      <Button
        title="Tambahkan Ke Kalendar"
        onPress={() =>
          openInNewTab(
            "https://calendar.google.com/calendar/render?action=TEMPLATE&dates=20221118%2F20221119&location=https%3A%2F%2Fgoo.gl%2Fmaps%2FA9GDMu388TQxssAc8&text=%5BPERNIKAHAN%5D%20Furqon%20%26%20Ayu"
          )
        }
        img={IMAGES.Calendar}
      />
      <div className="mt-5" />
      {dataBox.map((data, i) => (
        <div key={"K " + i} className="mt-5">
          <Box data={data} />
        </div>
      ))}
    </div>
  );
}

export default ThirdInvContent;
