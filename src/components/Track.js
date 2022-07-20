
const Track = (preview) => {
  return (
    <div>
      <audio controls style={{ display: "block" }}>
        <source src={preview.song} type="audio/mpeg" />
      </audio>
    </div>
  );
};

export default Track;
