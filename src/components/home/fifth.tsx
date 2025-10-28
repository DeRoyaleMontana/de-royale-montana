import Button from "../ui/Button";

export default function Fifth() {
  return (
    <div className="flex flex-col  w-full  gap-y-16 gap-x-27 items-center px-16 py-16 bg-primary">
      <div className="flex w-full h-full justify-between items-center">

        <div className="flex flex-col gap-y-6">
            <div className="text-4xl font-mona font-light text-accent">What Makes Your Stay</div>
            <div className="text-6xl font-beautique font-medium text-secondary">Extraordinary</div>
        </div>
        <Button 
          buttonBgColor="bg-none"
           borderColor="border-secondary"
            text="View All"
            bgColor="bg-secondary"
            textColor="text-primary"
            showIcon={true}
            iconColor="text-secondary"
           
          />
      </div>

      <div className="grid grid-cols-3 auto-rows-fr w-full gap-x-10 ">

         {/* First Card */}
                   <div className="relative flex flex-col justify-end items-start h-[668px] p-9 bg-cover bg-center bg-[url('/images/fine-dining.png')] overflow-hidden">
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
          {/* End of Gradient overlay */}

                     {/* Content */}
                     <div className="relative w-full h-full flex items-end justify-start ">
                                                                                                                                                                                               <div className="text-secondary text-4xl leading-relaxed font-mona font-light pl-8 border-l-8 border-accent absolute bottom-0 left-15 origin-bottom-left transform -rotate-90 whitespace-nowrap">
                            Bachanayaka Temple
                          </div>
                     </div>
        </div>
        {/* End of First Card */}
         {/* First Card */}
                   <div className="relative flex flex-col justify-end items-start h-[668px] p-9 bg-cover bg-center bg-[url('/images/fine-dining.png')] overflow-hidden">
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
          {/* End of Gradient overlay */}

                     {/* Content */}
                     <div className="relative w-full h-full flex items-end justify-start ">
                                                                                                                                                                                               <div className="text-secondary text-4xl leading-relaxed font-mona font-light pl-8 border-l-8 border-accent absolute bottom-0 left-15 origin-bottom-left transform -rotate-90 whitespace-nowrap">
                                                                                   Kukke Subramanya Temple 
                          </div>
                     </div>
        </div>
        {/* End of First Card */}
         {/* First Card */}
                   <div className="relative flex flex-col justify-end items-start h-[668px] p-9 bg-cover bg-center bg-[url('/images/fine-dining.png')] overflow-hidden">
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
          {/* End of Gradient overlay */}

                     {/* Content */}
                     <div className="relative w-full h-full flex items-end justify-start ">
                                                                                                                                                                                               <div className="text-secondary text-4xl leading-relaxed font-mona font-light pl-8 border-l-8 border-accent absolute bottom-0 left-15 origin-bottom-left transform -rotate-90 whitespace-nowrap">
                                                                                                                                                                                               Patla Betta
                          </div>
                     </div>
        </div>
        {/* End of First Card */}

        

      </div>
    </div>
  );
}