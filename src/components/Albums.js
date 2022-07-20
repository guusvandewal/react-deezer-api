import React, { useEffect, useRef, useState } from "react";
import Track from "./Track";
const l = console.log;
const Albums = ({ ...props }) => {
  const destroyFunc = useRef();
  const effectCalled = useRef(false);
  const [url, setUrl] = useState(
    "https://api.deezer.com/playlist/2896937/tracks"
  );
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [val, setVal] = useState(0);

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
          {items.data.map((item, index) => (
            <div className="grid__flex" key={index}>
              <div>
                {item.title}
                <div>
                  <img className="grid__img" src={item.album.cover_big} />
                  <Track song={item.preview}></Track>
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
