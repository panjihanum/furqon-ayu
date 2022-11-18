/* eslint-disable no-sequences */
import IMAGES from "../assets/images/iindex";
import styles from "./Home.module.css";

function Home(props) {
  const { onOpenInvitation } = props;
  return (
    <div
      className={`${styles.Home}`}
      style={{ backgroundImage: `url(${IMAGES.HomeBG})` }}
    >
      <div
        className="flex flex-col items-center animate__animated animate__zoomInDown animate__slow"
        style={{ animationDuration: "4s !important" }}
      >
        <span className="text-2xl mt-2">Kamu Diundang!</span>
        <span className="text-base my-4">Undangan Pernikahan</span>
        <span className="text-5xl choppin-script">Ayu & Furqon</span>
      </div>
      <div className="flex items-center animate__animated animate__zoomInUp animate__slow">
        <button className="btn-one" onClick={onOpenInvitation}>
          <span className="text-sm">Buka Undangan</span>
        </button>
      </div>
    </div>
  );
}

export default Home;
