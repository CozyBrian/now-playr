import { useGlobalContext } from "@/services/appProvider";

const AlbumView = () => {
  const albumCoverSize = 350;
  const { currentPlaying } = useGlobalContext();

  return (
    <div className="">
      <div
        style={{
          width: albumCoverSize,
          height: albumCoverSize,
        }}
        className="shadow-tesla-sm shadow-zinc-700/20 overflow-clip rounded-md opacity-70 hover:scale-105 hover:opacity-100 active:scale-[102.5%] duration-300"
      >
        <img
          src={currentPlaying?.item?.album?.images[0].url}
          alt="album cover"
          style={{
            width: albumCoverSize,
            height: albumCoverSize,
          }}
          
        />
      </div>
    </div>
  );
};

export default AlbumView;
