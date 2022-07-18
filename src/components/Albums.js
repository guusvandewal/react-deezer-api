import React, { useEffect, useState } from "react";
const l = console.log;
const Albums = ({ ...props }) => {
  const [url, setUrl] = useState("https://api.deezer.com/album/302127");
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
          l(result.artist);
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
  }, [url]);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <>
        {
          <div>
            <p>{items.artist.name}</p>
            <img src={items.artist.picture_big} alt=""/>
              <p>{items.artist.tracklist}</p>
          </div>
        }
        {items.length > 0 && (
          <div className="grid">
            {items.map((item, index) => console.log(item))}
          </div>
        )}
      </>
    );
  }
};

export default Albums;
