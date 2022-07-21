import React, { useEffect, useRef, useState } from "react";
import Track from "./Track";
const l = console.log;
const Albums = ({ ...props }) => {
  const effectCalled = useRef(false);

  const [audioStatus, changeAudioStatus] = useState(false);
  const myRef = useRef();
  const [url, setUrl] = useState(
    "https://api.deezer.com/playlist/2896937/tracks"
  );
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [val, setVal] = useState(0);
  const startAudio = (e) => {
    //  myRef.current.play();
    l(myRef);
    e.target.nextSibling.play();
    changeAudioStatus(true);
  };

  useEffect(() => {
    // only execute the effect first time around
    if (!effectCalled.current) {
      effectCalled.current = true;
      fetch(url)
        .then((res) => res.json())
        .then(
          (result) => {
            setIsLoaded(true);
            setItems(result);
            l(result.data);
            document.title = url;
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        );
    }
  }, [url]);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <>
        <div className="grid">
          {items.data.map(({ album, preview, title, artist }, index) => (
            <div className="grid__flex" key={index}>
              <div>
                {title} | {artist.name}
                <div>
                  <button onClick={startAudio}>
                    <img
                      className="grid__img"
                      src={album.cover_big}
                      alt={album.title}
                    />
                    {preview && <Track data-js-preview song={preview}></Track>}
                    {!preview && (
                      <span className="grid__no--preview">No preview</span>
                    )}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </>
    );
  }
};

export default Albums;
