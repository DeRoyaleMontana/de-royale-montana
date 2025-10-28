export default function Fourth()
{
    return(
        <div className="flex gap-16 p-16">
                    <div className="w-[55%] flex flex-col gap-16 ">
                        <div className="flex flex-col gap-6">
                        <div className="font-beautique font-medium tracking-wide  text-6xl">Our Essence</div>
                        <div className="h-0.5 w-[200px] bg-accent"></div>
                        </div>

                        <div className="flex flex-col gap-8 font-mona text-justify text-xl">
                            <div> Every corner of De Royale Montana whispers stories of craftsmanship and care. From handpicked materials in our suites to the flavors served in our kitchen, we believe in curating experiences that are both authentic and indulgent.</div>
                            <div> Here, the line between the indoors and outdoors blurs — as the lush mountainscapes pour into your windows, and the scent of fresh earth mingles with fine linen. It's not just where you stay; it's where your soul unwinds.</div>
                        </div>
                    </div>
                    <div className="w-[45%] bg-[url('/images/fine-dining.png')] bg-cover bg-center "></div>

                </div>
    );
}