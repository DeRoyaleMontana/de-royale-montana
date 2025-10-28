import Image from "next/image";

export default function Third(){
    return(
        <div className="flex flex-col gap-12 px-16  ">

            {/* Row 1 */}
            <div className="flex flex-col items-center gap-6">
            <Image src="/images/floral-design.svg"  width={181.26} height={54.72} alt="floral-design" className="w-[181px]" />
            <div className="text-6xl text-accent font-medium font-beautique leading-tight -tracking-1">Top Nearby Attractions</div>
              {/* Divider */}
          <div className="flex flex-col gap-y-3">
          <span className="w-[400px] h-px bg-accent block"></span>
          <span className="w-[400px] h-1 bg-accent block"></span>
          </div>
          {/* End of Divider */}
            </div>
            {/* End of Row 1 */}

            {/* Row 2 left */}
            <div className="flex gap-9">
                <div className="w-[30%]  relative bg-[url('/images/fine-dining.png')] bg-cover bg-center overlay-gradient "></div>
                <div className="w-[70%] flex flex-col gap-20 py-12">
                    {/* Inner Row 1 */}
                    <div className="flex flex-col gap-9 font-mona font-light">
                    <div className=" text-5xl text-text   z-10 border-l-4 border-accent pl-6">Kukke Subrahmanya Temple</div>
                    <div className="text-accent text-xl">A renowned pilgrimage site dedicated to Lord Subrahmanya, this sacred temple is just minutes away. Known for its spiritual ambiance and rituals, it draws thousands of devotees year-round.</div>
                    </div>
                    {/*End of Inner Row 1 */}

                    {/* Inner Row 2 */}
                    <div className="flex flex-col items-center gap-10">
                    <Image src="/icons/floral-design2.svg" width={145} height={36} alt="floral-design" className="w-[145px]" />
                    <div className="w-full grid grid-cols-3 gap-8">
                        <div className="relative bg-[url('/images/fine-dining.png')] bg-cover bg-center overlay-gradient w-full h-[214px]"></div>
                        <div className="relative bg-[url('/images/fine-dining.png')] bg-cover bg-center overlay-gradient w-full h-[214px]"></div>
                        <div className="relative bg-[url('/images/fine-dining.png')] bg-cover bg-center overlay-gradient w-full h-[214px]"></div>
                    </div>
                    </div>
                    {/* End of Inner Row 2 */}

                </div>
            </div>
            {/* End of Row 2 left */}

            {/* Row 3 Right */}
            <div className="flex gap-9">
            <div className="w-[70%] flex flex-col gap-20 py-12">
                    {/* Inner Row 1 */}
                    <div className="flex flex-col items-end gap-9 font-mona font-light">
                    <div className=" text-5xl text-text   z-10 border-r-4 border-accent pr-6">Pushpagiri / Kumara Parvatha</div>
                    <div className="text-accent text-xl text-right">A favorite among trekkers, this trail is as rewarding as it is challenging. Experience dense forests, panoramic ridge walks, and a summit that feels like touching the clouds.</div>
                    </div>
                    {/*End of Inner Row 1 */}

                    {/* Inner Row 2 */}
                    <div className="flex flex-col items-center gap-10">
                    <Image src="/icons/floral-design2.svg" width={145} height={36} alt="floral-design" className="w-[145px]" />
                    <div className="w-full grid grid-cols-3 gap-8">
                        <div className="relative bg-[url('/images/fine-dining.png')] bg-cover bg-center overlay-gradient w-full h-[214px]"></div>
                        <div className="relative bg-[url('/images/fine-dining.png')] bg-cover bg-center overlay-gradient w-full h-[214px]"></div>
                        <div className="relative bg-[url('/images/fine-dining.png')] bg-cover bg-center overlay-gradient w-full h-[214px]"></div>
                    </div>
                    </div>
                    {/* End of Inner Row 2 */}

                </div>
                <div className="w-[30%]  relative bg-[url('/images/fine-dining.png')] bg-cover bg-center overlay-gradient "></div>
               
            </div>
            {/* End of Row 3 Right */}

            {/* Row 4 left */}
            <div className="flex gap-9">
                <div className="w-[30%]  relative bg-[url('/images/fine-dining.png')] bg-cover bg-center overlay-gradient "></div>
                <div className="w-[70%] flex flex-col gap-20 py-12">
                    {/* Inner Row 1 */}
                    <div className="flex flex-col gap-9 font-mona font-light">
                    <div className=" text-5xl text-text   z-10 border-l-4 border-accent pl-6">Patla Betta</div>
                    <div className="text-accent text-xl">A lesser-known gem offering breathtaking views and a quiet escape into nature. Perfect for a short hike or picnic amidst rolling hills.</div>
                    </div>
                    {/*End of Inner Row 1 */}

                    {/* Inner Row 2 */}
                    <div className="flex flex-col items-center gap-10">
                    <Image src="/icons/floral-design2.svg" width={145} height={36} alt="floral-design" className="w-[145px]" />
                    <div className="w-full grid grid-cols-3 gap-8">
                        <div className="relative bg-[url('/images/fine-dining.png')] bg-cover bg-center overlay-gradient w-full h-[214px]"></div>
                        <div className="relative bg-[url('/images/fine-dining.png')] bg-cover bg-center overlay-gradient w-full h-[214px]"></div>
                        <div className="relative bg-[url('/images/fine-dining.png')] bg-cover bg-center overlay-gradient w-full h-[214px]"></div>
                    </div>
                    </div>
                    {/* End of Inner Row 2 */}

                </div>
            </div>
            {/* End of Row 4 left */}

            {/* Row 5 Right */}
            <div className="flex gap-9">
            <div className="w-[70%] flex flex-col gap-20 py-12">
                    {/* Inner Row 1 */}
                    <div className="flex flex-col items-end gap-9 font-mona font-light">
                    <div className=" text-5xl text-text   z-10 border-r-4 border-accent pr-6">Bisle Ghat</div>
                    <div className="text-accent text-xl text-right">Often called the ‘heaven on the Western Ghats’, Bisle Ghat is a biodiversity hotspot. Enjoy dense jungles, waterfalls, and the thrill of nature at its rawest.</div>
                    </div>
                    {/*End of Inner Row 1 */}

                    {/* Inner Row 2 */}
                    <div className="flex flex-col items-center gap-10">
                    <Image src="/icons/floral-design2.svg" width={145} height={36} alt="floral-design" className="w-[145px]" />
                    <div className="w-full grid grid-cols-3 gap-8">
                        <div className="relative bg-[url('/images/fine-dining.png')] bg-cover bg-center overlay-gradient w-full h-[214px]"></div>
                        <div className="relative bg-[url('/images/fine-dining.png')] bg-cover bg-center overlay-gradient w-full h-[214px]"></div>
                        <div className="relative bg-[url('/images/fine-dining.png')] bg-cover bg-center overlay-gradient w-full h-[214px]"></div>
                    </div>
                    </div>
                    {/* End of Inner Row 2 */}

                </div>
                <div className="w-[30%]  relative bg-[url('/images/fine-dining.png')] bg-cover bg-center overlay-gradient "></div>
               
            </div>
            {/* End of Row 5 Right */}

            {/* Row 6 left */}
            <div className="flex gap-9">
                <div className="w-[30%]  relative bg-[url('/images/fine-dining.png')] bg-cover bg-center overlay-gradient "></div>
                <div className="w-[70%] flex flex-col gap-20 py-12">
                    {/* Inner Row 1 */}
                    <div className="flex flex-col gap-9 font-mona font-light">
                    <div className=" text-5xl text-text   z-10 border-l-4 border-accent pl-6">Mankanahalli Ridge Point</div>
                    <div className="text-accent text-xl">This scenic viewpoint offers a sweeping panorama of the surrounding valleys and peaks. A beautiful spot for photography, sunrise, or quiet contemplation.</div>
                    </div>
                    {/*End of Inner Row 1 */}

                    {/* Inner Row 2 */}
                    <div className="flex flex-col items-center gap-10">
                    <Image src="/icons/floral-design2.svg" width={145} height={36} alt="floral-design" className="w-[145px]" />
                    <div className="w-full grid grid-cols-3 gap-8">
                        <div className="relative bg-[url('/images/fine-dining.png')] bg-cover bg-center overlay-gradient w-full h-[214px]"></div>
                        <div className="relative bg-[url('/images/fine-dining.png')] bg-cover bg-center overlay-gradient w-full h-[214px]"></div>
                        <div className="relative bg-[url('/images/fine-dining.png')] bg-cover bg-center overlay-gradient w-full h-[214px]"></div>
                    </div>
                    </div>
                    {/* End of Inner Row 2 */}

                </div>
            </div>
            {/* End of Row 6 left */}

            {/* Row 7 Right */}
            <div className="flex gap-9">
            <div className="w-[70%] flex flex-col gap-20 py-12">
                    {/* Inner Row 1 */}
                    <div className="flex flex-col items-end gap-9 font-mona font-light">
                    <div className=" text-5xl text-text   z-10 border-r-4 border-accent pr-6">Mallalli Falls</div>
                    <div className="text-accent text-xl text-right">One of the most stunning waterfalls in Karnataka, Mallalli Falls gushes down from the Kumaradhara River. Best visited during or post-monsoon for full flow and dramatic views.</div>
                    </div>
                    {/*End of Inner Row 1 */}

                    {/* Inner Row 2 */}
                    <div className="flex flex-col items-center gap-10">
                    <Image src="/icons/floral-design2.svg" width={145} height={36} alt="floral-design" className="w-[145px]" />
                    <div className="w-full grid grid-cols-3 gap-8">
                        <div className="relative bg-[url('/images/fine-dining.png')] bg-cover bg-center overlay-gradient w-full h-[214px]"></div>
                        <div className="relative bg-[url('/images/fine-dining.png')] bg-cover bg-center overlay-gradient w-full h-[214px]"></div>
                        <div className="relative bg-[url('/images/fine-dining.png')] bg-cover bg-center overlay-gradient w-full h-[214px]"></div>
                    </div>
                    </div>
                    {/* End of Inner Row 2 */}

                </div>
                <div className="w-[30%]  relative bg-[url('/images/fine-dining.png')] bg-cover bg-center overlay-gradient "></div>
               
            </div>
            {/* End of Row 7 Right */}

            {/* Row 8 left */}
            <div className="flex gap-9">
                <div className="w-[30%]  relative bg-[url('/images/fine-dining.png')] bg-cover bg-center overlay-gradient "></div>
                <div className="w-[70%] flex flex-col gap-20 py-12">
                    {/* Inner Row 1 */}
                    <div className="flex flex-col gap-9 font-mona font-light">
                    <div className=" text-5xl text-text   z-10 border-l-4 border-accent pl-6">Bildwara Cave</div>
                    <div className="text-accent text-xl">A mysterious cave temple believed to be steeped in history and spiritual energy. Ideal for a quiet visit and a touch of the mystical.</div>
                    </div>
                    {/*End of Inner Row 1 */}

                    {/* Inner Row 2 */}
                    <div className="flex flex-col items-center gap-10">
                    <Image src="/icons/floral-design2.svg" width={145} height={36} alt="floral-design" className="w-[145px]" />
                    <div className="w-full grid grid-cols-3 gap-8">
                        <div className="relative bg-[url('/images/fine-dining.png')] bg-cover bg-center overlay-gradient w-full h-[214px]"></div>
                        <div className="relative bg-[url('/images/fine-dining.png')] bg-cover bg-center overlay-gradient w-full h-[214px]"></div>
                        <div className="relative bg-[url('/images/fine-dining.png')] bg-cover bg-center overlay-gradient w-full h-[214px]"></div>
                    </div>
                    </div>
                    {/* End of Inner Row 2 */}

                </div>
            </div>
            {/* End of Row 8 left */}

            {/* Row 9 Right */}
            <div className="flex gap-9">
            <div className="w-[70%] flex flex-col gap-20 py-12">
                    {/* Inner Row 1 */}
                    <div className="flex flex-col items-end gap-9 font-mona font-light">
                    <div className=" text-5xl text-text   z-10 border-r-4 border-accent pr-6">Sakleshpur</div>
                    <div className="text-accent text-xl text-right">A quaint hill town surrounded by plantations, historic forts, and charming trails. A perfect day-trip destination filled with greenery and old-world charm.</div>
                    </div>
                    {/*End of Inner Row 1 */}

                    {/* Inner Row 2 */}
                    <div className="flex flex-col items-center gap-10">
                    <Image src="/icons/floral-design2.svg" width={145} height={36} alt="floral-design" className="w-[145px]" />
                    <div className="w-full grid grid-cols-3 gap-8">
                        <div className="relative bg-[url('/images/fine-dining.png')] bg-cover bg-center overlay-gradient w-full h-[214px]"></div>
                        <div className="relative bg-[url('/images/fine-dining.png')] bg-cover bg-center overlay-gradient w-full h-[214px]"></div>
                        <div className="relative bg-[url('/images/fine-dining.png')] bg-cover bg-center overlay-gradient w-full h-[214px]"></div>
                    </div>
                    </div>
                    {/* End of Inner Row 2 */}

                </div>
                <div className="w-[30%]  relative bg-[url('/images/fine-dining.png')] bg-cover bg-center overlay-gradient "></div>
               
            </div>
            {/* End of Row 9 Right */}
        </div>
    );
}