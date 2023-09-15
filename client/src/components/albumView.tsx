const AlbumView = () => {
  const albumCoverSize = 350;

  return (
    <div className="">
      <div
        style={{
          width: albumCoverSize,
          height: albumCoverSize,
        }}
        className="bg-white shadow-tesla-sm shadow-zinc-700/20 rounded-md opacity-70 hover:scale-105 hover:opacity-100 active:scale-[102.5%] duration-300"
      ></div>
    </div>
  );
};

export default AlbumView;
