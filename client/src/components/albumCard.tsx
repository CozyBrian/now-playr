/* eslint-disable @next/next/no-img-element */
import Img from "./Img";
import Tooltip from "./tooltip";
import { useGlobalContext } from "@/services/appProvider";
import { SpotifyLogoBlack } from "@/assets";

const AlbumCard = ({
  global,
  currentPlaying,
}: Omit<ReturnType<typeof useGlobalContext>, "setGlobal">) => {
  return (
    <div className="flex flex-col gap-3 bg-white p-4 rounded-lg">
      <Img
        src={global.albumImage}
        alt="album cover"
        style={{
          width: 250,
          height: 250,
        }}
        className="shadow-tesla-sm3 shadow-zinc-800/30 duration-300"
        external
        show={global.showBackground}
      />
      <div className="flex flex-col items-start w-[250px]">
        <Tooltip text={currentPlaying?.item?.name}>
          <p className="font-bold text-start truncate w-[250px]">
            {currentPlaying?.item?.name}
          </p>
        </Tooltip>
        <div className="flex flex-row items-center gap-1 w-[250px]">
          <Tooltip
            text={currentPlaying?.item?.artists
              .map((artist) => artist.name)
              .join(", ")}
          >
            <h2 className="font-medium text-sm w-max text-start ">
              {currentPlaying?.item?.artists[0].name}
            </h2>
          </Tooltip>
          {"·"}
          <Tooltip text={currentPlaying?.item?.album?.name}>
            <h2 className="font-medium text-sm text-start truncate w-1/3 max-w-full">
              {currentPlaying?.item?.album?.name}
            </h2>
          </Tooltip>
        </div>
        <div className="w-[70px] pt-2">
          <img src={SpotifyLogoBlack} className="w-full" alt="spotify" />
        </div>
      </div>
    </div>
  );
};

export default AlbumCard;
