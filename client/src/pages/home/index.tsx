import { useState } from "react";
import ParticlesView from "../../particles";

export default function Home() {
  const [index, setIndex] = useState(0);
  const [colors, setColors] = useState<string[]>(["#65e6bd"]);
  const colorss = ["#197e5e", "#2b3aac", "#7c2c2c"];
  return (
    <>
      <ParticlesView test={colors} />
      <main className="flex items-center justify-center h-screen backdrop-blur-[96px]">
        <h1 className="text-white text-5xl">Hello</h1>
        <button
          onClick={() => {
            setIndex((index) => index + 1);
            setColors((colors) => [...colors, colorss[index % 3]]);
          }}
          className="bg-sky-500 p-2"
        >
          AddColor
        </button>
      </main>
    </>
  );
}
