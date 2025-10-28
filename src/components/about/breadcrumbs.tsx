export default function BreadCrumbs(){
    return(
        <div className="relative px-16 pt-64 pb-32 bg-[url('/images/fine-dining.png')] bg-cover bg-center ">
            {/*  overlay */}
        <div className="absolute inset-0 bg-black opacity-60"></div>
        {/* End of  overlay */}

        {/* Content */}
        <div className="relative flex flex-col items-center justify-center gap-6 text-6xl text-center">
        <div className=" font-beautique font-medium text-secondary">In the heart of the Western Ghats,</div>
            <div className="w-full flex items-center justify-center gap-6">
                {/* Divider */}
        <div className="w-full flex flex-col  gap-3">
            <div className=" h-0.5 bg-accent"></div>
            <div className=" h-1 bg-accent"></div>
        </div>
        {/* End of Divider */}
            <div className=" font-beautique font-medium text-secondary whitespace-nowrap">We didn’t just build a retreat</div>
             {/* Divider */}
        <div className="w-full flex flex-col  gap-3">
            <div className=" h-0.5 bg-accent"></div>
            <div className=" h-1 bg-accent"></div>
        </div>
        {/* End of Divider */}
            </div>
            <div className=" font-beautique font-medium text-secondary">We carved out a sanctuary of timeless elegance.</div>
        </div>
        {/* End of Content */}
            
        </div>
    );
}