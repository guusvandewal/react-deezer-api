
const Track = (preview) => {
  return (
      <audio controls style={{ display: "inline-block" }}>
        <source src={preview.song} type="audio/mpeg" />
      </audio>
  );
};

export default Track;
