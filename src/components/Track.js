
const Track = (preview) => {
  return (
      <audio controls style={{ display: "block" }}>
        <source src={preview.song} type="audio/mpeg" />
      </audio>
  );
};

export default Track;
