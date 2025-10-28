export default function Third()
{
    return(
        <section className="flex flex-col gap-16 p-16 bg-primary text-secondary font-light">
            {/* Row 1 */}
            <div className="flex flex-col gap-9">
                {/* Inner Row 1 */}
                <div className="flex gap-29">
                    <div className="w-[60%] flex flex-col gap-16 ">
                        <div className="flex flex-col gap-6">
                        <div className="font-beautique font-medium tracking-wide  text-6xl">Our Vision</div>
                        <div className="h-0.5 w-[200px] bg-accent"></div>
                        </div>

                        <div className="font-mona text-justify text-xl">
                        To be South India's most cherished luxury escape, seamlessly blending regal comfort with the untamed beauty of the Ghats — where guests rediscover what it means to truly relax, reconnect, and rejuvenate.
                        </div>
                    </div>
                    <div className="w-[40%] bg-[url('/images/fine-dining.png')] bg-cover bg-center "></div>

                </div>
                {/* End of Inner Row 1 */}

                <div className="h-0.5 w-full bg-accent"></div>

                {/* Inner Row 1 */}
                <div className="flex gap-29">
                <div className="w-[40%] bg-[url('/images/fine-dining.png')] bg-cover bg-center "></div>
                    <div className="w-[60%] flex flex-col items-end gap-16 ">
                        <div className="flex flex-col items-end gap-6">
                        <div className="font-beautique font-medium tracking-wide  text-6xl">Our Mission</div>
                        <div className="h-0.5 w-[200px] bg-accent"></div>
                        </div>

                        <div className="font-mona text-justify text-xl">
                        We strive to go beyond service — we create memories, relationships, and experiences that leave a mark. With personalized attention, bespoke offerings, and an ethos of excellence.
                        </div>
                    </div>
                    

                </div>
                {/* End of Inner Row 1 */}
            </div>
            {/* End of Row 1 */}

            {/* Row 2 */}
            <div className="flex flex-col gap-9 items-center">
                {/* Divider */}
          <div className="flex flex-col gap-y-3">
          <span className="w-[400px] h-px bg-accent block"></span>
          <span className="w-[400px] h-1 bg-accent block"></span>
          </div>
          {/* End of Divider */}

          <div className="flex flex-col items-center gap-4">
          <div className="text-accent uppercase text-base font-semibold">our mission is simple</div>
          <div className=" text-center text-4xl italic font-light">"To make every guest feel like royalty — naturally."</div>
          
          </div>
          <img className="w-[910px] h-[558px] object-cover object-center" src="/images/fine-dining.png" alt="" />
            </div>
            {/* End of Row 2 */}
        </section>
    );
}