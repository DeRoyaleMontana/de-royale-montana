import Image from "next/image";

export default function Second() {
  return (
    <div className="flex flex-col gap-y-9 items-center px-16 py-16 bg-primary">

      <div className="flex flex-col items-center gap-y-4">
        <Image src="/icons/resort.svg" width={72} height={72} alt="Resort" />
        <div className="text-secondary text-xl uppercase font-mona font-light">Our Resort</div>
      </div>
      <div className="flex flex-col items-center gap-y-4 text-center">
        <div className="text-secondary  text-5xl  font-beautique font-light leading-relaxed">Escape to a mountain retreat where sacred tranquility meets luxurious indulgence.</div>
        <p className="w-4/5 text-accent text-xl  font-mona font-light leading-normal ">Tucked away in the heart of the Western Ghats, De Royale Montana offers a harmonious blend of divine serenity, scenic beauty, and boutique elegance — all crowned with warm, heartfelt hospitality.</p>
      </div>
      <div className="grid grid-cols-3 auto-rows-fr w-full gap-x-16 gap-y-16">  
        {/* First Card */}
        <div className="relative flex flex-col justify-end items-center h-[350px] p-6 bg-cover bg-center border-l-4 border-b-4 border-accent bg-[url('/images/fine-dining.png')]">
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
          {/* Content */}
          <div className="relative z-10 flex flex-col items-center gap-y-6 text-secondary text-xl font-mona font-light ">
            <div className="h-0.5 w-[150px] bg-accent"></div>
            <div>Fine dining</div>
            
          </div>
        </div>
        {/* End of First Card */}
     
        {/* Second Card */}
        <div className="relative flex flex-col justify-end items-center h-[350px] p-6 bg-cover bg-center border-l-4 border-b-4 border-accent bg-[url('/images/fine-dining.png')]">
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
          {/* Content */}
          <div className="relative z-10 flex flex-col items-center gap-y-6 text-secondary text-xl font-mona font-light ">
            <div className="h-0.5 w-[150px] bg-accent"></div>
            <div>Private Cottages</div>
            
          </div>
        </div>
        {/* End of Second Card */}
     
        {/* Third Card */}
        <div className="relative flex flex-col justify-end items-center h-[350px] p-6 bg-cover bg-center border-l-4 border-b-4 border-accent bg-[url('/images/fine-dining.png')]">
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
          {/* Content */}
          <div className="relative z-10 flex flex-col items-center gap-y-6 text-secondary text-xl font-mona font-light ">
            <div className="h-0.5 w-[150px] bg-accent"></div>
            <div>Scenic Adventures</div>
            
          </div>
        </div>
        {/* End of Third Card */}
     
        
      
      </div>
    </div>
  );
}