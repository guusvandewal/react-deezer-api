const Track = (preview) => {
  return (
      <audio>
        <source src={preview.song} type="audio/mpeg" />
      </audio>
  );
};

export default Track;
