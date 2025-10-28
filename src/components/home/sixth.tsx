export default function Sixth() {
  return (
    <div className="relative flex flex-col  w-full  gap-y-16 gap-x-27 items-start pl-16 py-16 bg-[url('/images/fine-dining.png')] bg-cover bg-center overflow-auto">
        {/*  overlay */}
        <div className="absolute inset-0 bg-black opacity-90"></div>
        {/* End of  overlay */}

      {/* Content  */}
      <div className="relative z-10 flex flex-col w-full h-full gap-y-24">
      <div className="text-6xl font-beautique font-medium text-secondary">Your stay at Terrace includes:</div>

      <div className="flex w-full h-full gap-x-16 justify-start items-center uppercase ">
        {/* Fitness Center*/}
        <div className="h-[425px] w-[250px] bg-[url('/images/beyond-limits.png')] bg-cover bg-center relative ">
            <div className="-rotate-90 absolute bottom-5 left-5 origin-bottom-left text-secondary text-4xl whitespace-nowrap  font-mona font-light">Fitness Center</div>
        </div>
        {/* End of Fitness Center */}

        {/* Beyond Limits */}
        <div className="h-[250px] w-[425px] bg-[url('/images/true-perfection.png')] bg-cover bg-center relative ">
            <div className="absolute bottom-0 left-5 origin-bottom-left translate-y-1/2  text-secondary text-4xl text-nowrap  font-mona font-light">Room Service</div>
        </div>
        {/* End of Beyond Limits */}

         {/* Fitness Center*/}
         <div className="h-[425px] w-[250px] bg-[url('/images/beyond-limits.png')] bg-cover bg-center relative ">
            <div className="-rotate-90 absolute bottom-5 left-5 origin-bottom-left text-secondary text-4xl whitespace-nowrap  font-mona font-light">Fitness Center</div>
        </div>
        {/* End of Fitness Center */}

 {/* Beyond Limits */}
 <div className="h-[250px] w-[425px] bg-[url('/images/true-perfection.png')] bg-cover bg-center relative ">
            <div className="absolute bottom-0 left-5 origin-bottom-left translate-y-1/2  text-secondary text-4xl text-nowrap  font-mona font-light">Room Service</div>
        </div>
        {/* End of Beyond Limits */}
        
      </div>
      </div>
      {/* End of Content  */}
    </div>
  );
}