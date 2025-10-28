export default function Seventh() {
  return (
    <div className="flex  w-full  gap-y-16 gap-x-34  px-16 py-16 bg-primary">
        {/* Left Side */}
       <div className="w-1/2 h-[650px] bg-sky-100 min-h-screen bg-[url('/images/fine-dining.png')] bg-cover bg-center relative p-10 rounded-t-full overflow-clip">
       {/* Gradient overlay */}
       <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
       {/* End of Gradient overlay */}

       {/* Content */}
       <div className="border border-accent w-full h-full p-10 rounded-t-full z-10 relative">
            <div className="flex flex-col  items-center justify-end gap-y-6 border border-accent w-full h-full p-10 rounded-t-full">
              <div className=" text-5xl text-secondary font-beautique font-medium z-10 ">Dining</div>
              <span className="h-1 w-20 bg-accent block"></span>
              <div className="text-secondary font-mona text-base text-justify">Savor a curated culinary experience rooted in tradition and taste. At DRM, every meal is a celebration — from handcrafted local delicacies to international favorites, all served with a view that makes every bite memorable.</div>
            </div>
          </div>
          {/* End of Content */}
        
       </div>
       {/* End of Left Side */}


       {/* Right Side */}
       <div className="w-1/2 h-[650px] bg-sky-100 min-h-screen bg-[url('/images/fine-dining.png')] bg-cover bg-center relative p-10 mt-32 rounded-t-full overflow-clip">
       {/* Gradient overlay */}
       <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
       {/* End of Gradient overlay */}

       {/* Content */}
       <div className="border border-accent w-full h-full p-10 rounded-t-full z-10 relative">
            <div className="flex flex-col  items-center justify-end gap-y-6 border border-accent w-full h-full p-10 rounded-t-full">
              <div className=" text-5xl text-secondary font-beautique font-medium z-10 ">Bar</div>
              <span className="h-1 w-20 bg-accent block"></span>
              <div className="text-secondary font-mona text-base text-justify">Raise a glass to elegance at our intimate bar. Whether you&apos;re sipping on classic cocktails or exploring handcrafted blends, our rooftop lounge offers the perfect setting to unwind under the stars.</div>
            </div>
          </div>
          {/* End of Content */}
        
       </div>
       {/* End of Right Side */}
    </div>
  );
}