export default function Third() {
  return (
    <div className="flex flex-col w-full gap-y-9 items-center px-16 py-16 bg-primary">
        {/* Beyond Limits */}
        <div className="h-[304px] w-[246px] bg-[url('/images/beyond-limits.png')] bg-cover bg-center relative self-end">
            <div className="-rotate-90 absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 text-secondary text-4xl text-nowrap uppercase font-mona font-light">Beyond Limits</div>
        </div>
        {/* End of Beyond Limits */}

        <div className="flex flex-col gap-y-4 w-3/5 -mt-20">
            <div className="text-accent text-5xl font-beautique font-light leading-relaxed text-center ">A Sanctuary of Luxury <br></br>and Peace</div>
            <div className="text-secondary text-xl font-mona font-light leading-normal text-center">  a boutique retreat nestled in the heart of the Western Ghats, where luxury meets tranquility. Surrounded by lush greenery and sacred hills, our resort offers more than just a stay — it&apos;s an escape into serene landscapes, thoughtful comforts, and warm hospitality. Whether you&apos;re here for spiritual solace or mountain air, every moment is designed to relax, rejuvenate, and reconnect. </div>
        </div>

         {/* Beyond Limits */}
         <div className="h-[184px] w-[246px] bg-[url('/images/true-perfection.png')] bg-cover bg-center relative self-start">
            <div className="absolute bottom-0 left-0 translate-x-1/4 translate-y-1/2 text-secondary text-4xl text-nowrap  font-mona font-light">True Perfection</div>
        </div>
        {/* End of Beyond Limits */}

        <img src="/images/sanctuary.png" alt="Sanctuary" className="mt-15" />
    </div>
  );
}