export default function Fifth()
{
    return(
        <div className="flex justify-between gap-31 p-16 bg-accent font-mona">
            <img src="/icons/white-left-arrow.svg" alt="Left Arrow" />
            <div className=" flex gap-9">
                {/* Card */}
                <div className="flex flex-col gap-9">
                    {/* First Row */}
                    <div className="flex flex-col gap-9 bg-secondary p-9">
                        {/* Inner First Row */}
                    <div className="flex flex-col gap-6">
                    <img className="max-w-[80px]" src="/icons/quote.svg" alt="Quote Icon" />
                    <div className="text-xl text-text font-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                    </div>
                    {/* End of Inner First Row */}

                    {/* Inner Second Row */}
                    <div className="flex gap-9 items-center">
                        <div className="whitespace-nowrap uppercase text-accent text-2xl">Lorem Ipsum</div>
                        <div className="h-0.5 bg-accent w-full"></div>
                    </div>
                    {/* End of Inner Second Row */}
                    </div>
                    {/* End of First Row */}

                    {/* Second Row */}
                    <div className="flex flex-col items-center gap-y-3">
          <div className="w-[90%] h-px bg-secondary "></div>
          <div className="w-[90%] h-1 bg-secondary "></div>
          </div>
          {/* End of Second Row */}
                </div>
                {/* End of Card */}
                {/* Card */}
                <div className="flex flex-col gap-9">
                    {/* First Row */}
                    <div className="flex flex-col gap-9 bg-secondary p-9">
                        {/* Inner First Row */}
                    <div className="flex flex-col gap-6">
                    <img className="max-w-[80px]" src="/icons/quote.svg" alt="Quote Icon" />
                    <div className="text-xl text-text font-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                    </div>
                    {/* End of Inner First Row */}

                    {/* Inner Second Row */}
                    <div className="flex gap-9 items-center">
                        <div className="whitespace-nowrap uppercase text-accent text-2xl">Lorem Ipsum</div>
                        <div className="h-0.5 bg-accent w-full"></div>
                    </div>
                    {/* End of Inner Second Row */}
                    </div>
                    {/* End of First Row */}

                    {/* Second Row */}
                    <div className="flex flex-col items-center gap-y-3">
          <div className="w-[90%] h-px bg-secondary "></div>
          <div className="w-[90%] h-1 bg-secondary "></div>
          </div>
          {/* End of Second Row */}
                </div>
                {/* End of Card */}
                
                
            </div>
            <img src="/icons/white-right-arrow.svg" alt="Right Arrow" />
        </div>
    );
}