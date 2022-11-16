import { useState, useRef, useEffect } from "react";
import "./App.css";
import IMAGES from "./assets/images/iindex";
import MUSIC from "./assets/musics";
import FirstInvContent from "./screens/FirstInvContent";
import Home from "./screens/Home";
import SecondInvContent from "./screens/SecondInvContent";
import ThirdInvContent from "./screens/ThirdInvContent";

function App() {
  const audio = new Audio(MUSIC.Instrumental);

  useEffect(() => {
    document.title = "Pernikahan Ayu & Furqon";
  }, []);

  useEffect(() => {
    setTimeout(() => {
      return (audio.oncanplaythrough = (event) => {
        var playedPromise = audio.play();
        if (playedPromise) {
          playedPromise
            .catch((e) => {
              console.log(e);
              if (
                e.name === "NotAllowedError" ||
                e.name === "NotSupportedError"
              ) {
                console.log(e.name);
              }
            })
            .then(() => {
              console.log("playing sound !!!");
            });
        }
      });
    });

    return () => audio.pause();
  }, []);

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

  const secondInvContentRef = useRef(null);
  const thirdInvContentRef = useRef(null);

  const [page, setPage] = useState(statePage.Home);
  return (
    <>
      <div className="App">
        <div className="AppContent">
          {page === statePage.Home && (
            <Home onOpenInvitation={() => setPage(statePage.Invitation)} />
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
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
