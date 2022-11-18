/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-sequences */
import IMAGES from "../assets/images/iindex";
import styles from "./Home.module.css";
import { format } from "date-fns";
import ENV from "../config/env";

function FirstInvContent(props) {
  const { onMouseClick } = props;
  return (
    <div className="relative">
      {" "}
      <div
        className={styles.Home + " pl-5"}
        style={{
          backgroundImage: `url(${IMAGES.FirstContentBG})`,
          backgroundPositionY: "20%",
          alignItems: "start",
        }}
      >
        <div></div>
        <div className="flex flex-col mb-10 animate__animated animate__zoomIn animate__faster">
          <span className="text-2xl choppin-script">Pernikahan</span>
          <span className="text-4xl my-2">AYU & FURQON</span>
          <span className="text-base">
            {format(new Date(ENV.tanggalResepsi), "dd MMMM yyyy")}
          </span>
        </div>
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

export default FirstInvContent;
