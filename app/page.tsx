import Image from 'next/image';

export default function Home() {
  return (
    <div className="h-screen p-6 ">
      <h1 className="mt-6 font-bold text-white">Home Page</h1>

      <div className="bg-white">
        <Image src={'/directorio.svg'} fill alt="Directorio" />
      </div>

    </div>
  );
}