import { useState, useRef, useEffect } from "react";
import "./App.css";
import MUSIC from "./assets/musics";
import FirstInvContent from "./screens/FirstInvContent";
import Home from "./screens/Home";
import SecondInvContent from "./screens/SecondInvContent";
import ThirdInvContent from "./screens/ThirdInvContent";
import IMAGES from "./assets/images/iindex";
import FourthInvContent from "./screens/FourthInvContent";

function App() {
  const [audio] = useState(new Audio(MUSIC.Instrumental));
  const [play, setIsPlay] = useState(false);
  const buttonPlayRef = useRef(null);

  const statePage = {
    Home: "HOME",
    Invitation: "Invitation",
  };

  const [counter, setCounter] = useState(1);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCounter(counter + 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [counter]);

  useEffect(() => {
    audio.loop = true;
  }, []);

  const secondInvContentRef = useRef(null);
  const thirdInvContentRef = useRef(null);

  const [page, setPage] = useState(statePage.Home);

  const handlePlaySound = () => {
    let isPlay = !play;
    setIsPlay(isPlay);

    if (isPlay) {
      var playedPromise = audio.play();
      if (playedPromise) {
        playedPromise
          .catch((e) => {
            setIsPlay(false);
            buttonPlayRef.current?.click();
          })
          .then(() => {
            setIsPlay(true);
          });
      }
    } else {
      audio.pause();
    }
  };
  return (
    <>
      <div className="App">
        <div className="AppContent">
          {page === statePage.Home && (
            <Home
              onOpenInvitation={() => {
                setPage(statePage.Invitation);
                if (!play) handlePlaySound();
              }}
            />
          )}

          {page === statePage.Invitation && (
            <div className="flex flex-col">
              <FirstInvContent
                onMouseClick={() => {
                  window.scrollTo({
                    top: secondInvContentRef.current?.offsetTop,
                    behavior: "smooth",
                  });
                }}
              />
              <div ref={secondInvContentRef}>
                <SecondInvContent
                  onMouseClick={() => {
                    window.scrollTo({
                      top: thirdInvContentRef.current?.offsetTop,
                      behavior: "smooth",
                    });
                  }}
                />
              </div>
              <div ref={thirdInvContentRef}>
                <ThirdInvContent />
                <FourthInvContent />
              </div>
              <button
                ref={buttonPlayRef}
                onClick={handlePlaySound}
                className="button-play"
              >
                <img
                  src={play ? IMAGES.Pause : IMAGES.Play}
                  alt={"button-player"}
                />
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
