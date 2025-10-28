import Button from '../ui/Button';

export default function Fourth() {
  return (
    <div className="flex  w-full gap-y-9 gap-x-27 items-center px-16 py-16 bg-secondary">
      {/* Left Side */}
     <div className="w-1/2 flex flex-col gap-y-18">
        <div className="font-beautique text-primary text-6xl font-light ">Rooms</div>
        <div className="flex flex-col gap-y-15">
        {/* Each Room */}
        <div>
            <div className="w-full h-[550px] bg-[url('/images/fine-dining.png')] bg-cover bg-center relative p-10">
             {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
          {/* Content */}
          <div className="border border-accent w-full h-full p-10">
            <div className="flex flex-col  items-start justify-end gap-y-6 border border-accent w-full h-full p-10">
              <div className=" text-5xl text-secondary font-beautique font-medium z-10 border-l-4 border-accent pl-6">Suite Room</div>
              <div className="flex justify-start gap-x-6 z-10">
                <img src="/icons/people.svg" alt="People" />
                <div className="text-accent font-mona text-base uppercase font-semibold">2 People</div>
              </div>
            </div>
          </div>
            </div>
        </div>
        {/* End of Each Room */}

        {/* Each Room */}
        <div>
            <div className="w-full h-[550px] bg-[url('/images/fine-dining.png')] bg-cover bg-center relative p-10">
             {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
          {/* Content */}
          <div className="border border-accent w-full h-full p-10">
            <div className="flex flex-col  items-start justify-end gap-y-6 border border-accent w-full h-full p-10">
              <div className=" text-5xl text-secondary font-beautique font-medium z-10 border-l-4 border-accent pl-6">Suite Room</div>
              <div className="flex justify-start gap-x-6 z-10">
                <img src="/icons/people.svg" alt="People" />
                <div className="text-accent font-mona text-base uppercase font-semibold">2 People</div>
              </div>
            </div>
          </div>
            </div>
        </div>
        {/* End of Each Room */}
        </div>
     </div>
     {/* End of Left Side */}

     {/* Right Side */}
     <div className="flex flex-col gap-y-15 w-1/2 ">
      {/* Each Room */}
      <div>
            <div className="w-full h-[550px] bg-[url('/images/fine-dining.png')] bg-cover bg-center relative p-10">
             {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
          {/* Content */}
          <div className="border border-accent w-full h-full p-10">
            <div className="flex flex-col  items-start justify-end gap-y-6 border border-accent w-full h-full p-10">
              <div className=" text-5xl text-secondary font-beautique font-medium z-10 border-l-4 border-accent pl-6">Suite Room</div>
              <div className="flex justify-start gap-x-6 z-10">
                <img src="/icons/people.svg" alt="People" />
                <div className="text-accent font-mona text-base uppercase font-semibold">2 People</div>
              </div>
            </div>
          </div>
            </div>
        </div>
        {/* End of Each Room */}

         {/* Each Room */}
         <div>
            <div className="w-full h-[550px] bg-[url('/images/fine-dining.png')] bg-cover bg-center relative p-10">
             {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
          {/* Content */}
          <div className="border border-accent w-full h-full p-10">
            <div className="flex flex-col  items-start justify-end gap-y-6 border border-accent w-full h-full p-10">
              <div className=" text-5xl text-secondary font-beautique font-medium z-10 border-l-4 border-accent pl-6">Suite Room</div>
              <div className="flex justify-start gap-x-6 z-10">
                <img src="/icons/people.svg" alt="People" />
                <div className="text-accent font-mona text-base uppercase font-semibold">2 People</div>
              </div>
            </div>
          </div>
            </div>
        </div>
        {/* End of Each Room */}

        <div className="flex flex-col gap-y-9 ">
          {/* Divider */}
          <div className="flex flex-col gap-y-3">
          <span className="w-[300px] h-px bg-accent block"></span>
          <span className="w-[300px] h-1 bg-accent block"></span>
          </div>
          {/* End of Divider */}

          <div className="font-mona text-3xl text-primary font-light">A radiant blend of classic opulence and modern refinement.</div>
          <Button 
          buttonBgColor="bg-secondary"
           borderColor="border-accent"
            text="All Rooms"
            bgColor="bg-accent"
            textColor="text-secondary"
            showIcon={true}
            iconColor="text-accent"
            className='self-start'
           
          />
        </div>
     </div>
     {/* End of Right Side */}
    </div>
  );
}