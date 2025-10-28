import Image from "next/image";

export default function Hero() {
  return (
    <div className="h-screen relative overflow-hidden flex flex-col items-center p-14">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/hotel-background.mp4" type="video/mp4" />
        <source src="/videos/hotel-background.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>
      
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40"></div>
      
      {/* Content */}
      <div className="flex flex-col items-center justify-end relative z-10 text-center text-secondary gap-y-44  w-full h-screen">
        <h1 className="text-7xl font-bold mb-6 font-beautique tracking-wider">Paradise of Serenity</h1>

        <div className="flex flex-col items-center gap-y-8 w-full">
        <button className="flex items-center gap-5 bg-primary/70 backdrop-blur-lg rounded-full pr-7">
            <div className="uppercase bg-secondary text-primary rounded-full px-14 py-6">Book Now</div>
            <Image src="/icons/Arrow.svg" width={16} height={16} alt="Arrow Right" />
        </button>

        <span className="p-4 pt-4 pb-12 rounded-full bg-primary/70 backdrop-blur-lg">
            <span className="w-2 h-2 bg-secondary rounded-full block"></span>
        </span>
        <div className="h-0.5 w-full bg-secondary "></div>
        
        </div>
        
      </div>
    </div>
  );
}