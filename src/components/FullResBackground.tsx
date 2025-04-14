import Image from "next/image";

export default function FullResBackground() {
  return (
    <div style={{ zIndex: -1 }} className="fixed left-0 top-0 w-full h-full">
      <img
        width={0}
        height={0}
        src="/backgrounds/00-full-res-bg.jpg"
        alt="Background"
        className="w-full h-screen object-cover object-center opacity-50"
      />
    </div>
  );
}