import ParticlesView from "@/particles";

export default function Home() {
  const colorss = ["#912E17", "#3d832cb0", "#1C3ECC", "#6fecfabc"];
  return (
    <>
      <div className="bg-black">
        <ParticlesView colors={colorss} />
      </div>
      <main className="relative flex items-center justify-center h-screen backdrop-blur-[128px]">
        <h1 className="text-white text-5xl">Hello</h1>
      </main>
    </>
  );
}
