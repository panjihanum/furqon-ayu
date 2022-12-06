/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-sequences */
import { AnimationOnScroll } from "react-animation-on-scroll";
import IMAGES from "../assets/images/iindex";
import styles from "./Home.module.css";
import { toast } from "react-toastify";

function FourthInvContent() {
  const Button = ({ title, img, onPress }) => {
    return (
      <button
        className="custom-button flex flex-row items-center justify-center"
        onClick={onPress}
      >
        {img && (
          <img
            src={img}
            alt={"img"}
            width={15}
            height={15}
            className="custom-button-img mr-2"
          />
        )}
        <span className="color-dark">{title}</span>
      </button>
    );
  };

  return (
    <div
      className={styles.SecondInvContent + " relative p-10 py-0"}
      style={{
        backgroundImage: `url(${IMAGES.SecondContentBG})`,
        backgroundPositionY: "20%",
        paddingTop: 50,
      }}
    >
      <AnimationOnScroll
        animateIn="animate__zoomIn"
        animateOut="animate__zoomOut"
      >
        <div
          className="custom-box flex flex-col items-center justify-center py-10 px-10 "
          style={{ borderRadius: 25, background: "#000000ba" }}
        >
          <span className="text-2xl font-bold text-center mb-10">
            UNTUK YANG BERHALANGAN HADIR, KAMI TAMBAHKAN FITUR DIBAWAH INI
          </span>
          <div className="flex flex-col items-center mt-10  w-full">
            <div
              className="custom-divider mb-10"
              style={{ background: "white", width: "100%", marginBottom: 50 }}
            />
            <img src={IMAGES.BCA} width={200} height={200} />
            <span className="text-base font-bold text-center mt-5">
              0070486563
            </span>
            <span className="text-base font-bold text-center mb-5">
              Ayu Nynda Havitasari
            </span>
            <Button
              title="Salin No. Rekening"
              img={IMAGES.CopyIcon}
              onPress={() => {
                toast("Berhasil Di Salin");
                navigator.clipboard.writeText("0070486563");
              }}
            />
          </div>
          <div className="flex flex-col items-center mt-10  w-full">
            <div
              className="custom-divider mb-10"
              style={{ background: "white", width: "100%", marginBottom: 50 }}
            />
            <span className="text-2xl font-bold text-center mb-5">
              Kirim Kado
            </span>{" "}
            <span className="text-base font-bold text-center mt-5">
              Jl. Warakas 4 Gang 1 No. 48 B RT 002/005 Kel. Warakas Kec. Tanjung
              Priok Jakarta Utara
            </span>
            <span className="text-base font-bold text-center mb-5">
              Penerima: Ayu Nynda Havitasari
            </span>
            <Button
              title="Salin Alamat"
              img={IMAGES.CopyIcon}
              onPress={() => {
                toast("Berhasil Di Salin");
                navigator.clipboard.writeText(
                  "Jl. Warakas 4 Gang 1 No. 48 B RT 002/005 Kel. Warakas Kec. Tanjung Priok Jakarta Utara"
                );
              }}
            />
          </div>
        </div>
      </AnimationOnScroll>
    </div>
  );
}

export default FourthInvContent;
