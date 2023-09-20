import { useGlobalContext } from "@/services/appProvider";
import Img from "./Img";
import { useState } from "react";
import classNames from "classnames";
import AlbumCard from "./albumCard";
import { AnimatePresence, motion } from "framer-motion";

const AlbumView = () => {
  const albumCoverSize = 350;
  const { global, currentPlaying } = useGlobalContext();
  const [detailedCoverMode, setdetailedCoverMode] = useState(false);

  const [isHovering, setIsHovering] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      className="relative flex flex-col items-center justify-center gap-16 translate-y-11"
    >
      <button
        onClick={() => setdetailedCoverMode((prev) => !prev)}
        className={classNames(
          "hover:scale-105 hover:opacity-100 active:scale-[102.5%] duration-300",
          detailedCoverMode && "opacity-70",
        )}
      >
        {detailedCoverMode ? (
          <Img
            src={global.albumImage}
            alt="album cover"
            style={{
              width: albumCoverSize,
              height: albumCoverSize,
            }}
            className="shadow-tesla-sm shadow-zinc-800/20 duration-300"
            external
            show={global.showBackground}
          />
        ) : (
          <AlbumCard global={global} currentPlaying={currentPlaying} />
        )}
      </button>
      <div className="h-11 w-full flex flex-col items-center">
        <AnimatePresence>
          {isHovering && (
            <motion.a
              href={currentPlaying?.item?.external_urls.spotify}
              target="_blank"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="absolute top-4/5 bg-white flex items-center justify-center rounded-full active:translate-y-2 h-11 px-6 uppercase font-semibold z-50"
            >
              Open in Spotify
            </motion.a>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default AlbumView;
