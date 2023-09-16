import { useGlobalContext } from "@/services/appProvider";
import Img from "./Img";
import { motion } from "framer-motion";

const AlbumView = () => {
  const albumCoverSize = 350;
  const { global } = useGlobalContext();

  return (
    <div className="">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: global.showBackground ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        style={{
          width: albumCoverSize,
          height: albumCoverSize,
        }}
        className="shadow-tesla-sm shadow-zinc-800/20 overflow-clip rounded-md opacity-70 hover:scale-105 hover:opacity-100 active:scale-[102.5%] duration-300"
      >
        <Img
          src={global.albumImage}
          alt="album cover"
          style={{
            width: albumCoverSize,
            height: albumCoverSize,
          }}
        />
      </motion.div>
    </div>
  );
};

export default AlbumView;
