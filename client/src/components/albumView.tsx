import { useGlobalContext } from "@/services/appProvider";
import Img from "./Img";

const AlbumView = () => {
  const albumCoverSize = 350;
  const { global } = useGlobalContext();

  return (
    <div className="">
      <div className="opacity-70 hover:scale-105 hover:opacity-100 active:scale-[102.5%] duration-300">
        <Img
          src={global.albumImage}
          alt="album cover"
          style={{
            width: albumCoverSize,
            height: albumCoverSize,
          }}
          className="shadow-tesla-sm shadow-zinc-800/20 rounded-md duration-300"
          external
          show={global.showBackground}
        />
      </div>
    </div>
  );
};

export default AlbumView;
