import { useGlobalContext } from "@/services/appProvider";
import Img from "./Img";

const AlbumView = () => {
  const albumCoverSize = 350;
  const { global } = useGlobalContext();

  return (
    <div className="">
      <div
        style={{
          width: albumCoverSize,
          height: albumCoverSize,
        }}
        className="shadow-tesla-sm shadow-zinc-700/20 overflow-clip rounded-md opacity-70 hover:scale-105 hover:opacity-100 active:scale-[102.5%] duration-300"
      >
        <Img
          src={global.albumImage}
          alt="album cover"
          style={{
            width: albumCoverSize,
            height: albumCoverSize,
          }}
          external
          show={global.showBackground}
        />
      </div>
    </div>
  );
};

export default AlbumView;
