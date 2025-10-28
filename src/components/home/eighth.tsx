import Image from "next/image";
import Button from "../ui/Button";

export default function Eighth() {
  return (
    <div className="flex flex-col w-full gap-y-12 gap-x-27 items-center px-16 py-16 bg-secondary">
      <div className="flex w-full">
        {/* Column 1 */}
        <div className="w-1/3 flex flex-col justify-center">
        <div className="text-6xl font-medium font-beautique leading-tight -tracking-1">Book your stay with us</div>
        <div className="text-xl text-accent font-light font-mona">and enjoy</div>
        </div>
        {/* End of Column 1 */}

        {/* Column 2 */}
        <div className="w-1/3 flex flex-col items-center gap-y-6">
        <Image src="/images/floral-design.svg" width={181} height={54.72} alt="floral-design" className="w-[181px]" />
        <div className="w-full h-[650px] bg-[url('/images/fine-dining.png')] bg-cover bg-center"></div>
        </div>
        {/* End of Column 2 */}

        {/* Column 3 */}
        <div className="w-1/3 flex flex-col justify-center ">
        <Button 
          buttonBgColor="bg-secondary"
           borderColor="border-accent"
            text="Book your stay"
            bgColor="bg-accent"
            textColor="text-secondary"
            showIcon={true}
            iconColor="text-accent"
            className='self-end'
           
          />
        </div>
        {/* End of Column 3 */}
      </div>

      <div className="bg-accent w-full h-[3px] "></div>
    </div>
  );
}