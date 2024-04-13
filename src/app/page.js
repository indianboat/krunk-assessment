import Image from "next/image";
import { AttachmentIcon, ChevronRightIcon, CloseIcon, FilterIcon, VerifiedIcon } from "./components/SVGIcons";
import Tags from "./components/Tags/Tags";

export default function Home() {

  return (
    <>
      <div className="p-1" style={{ minHeight: "calc(100dvh - 0rem)" }}>
        <div className="p-1.5 lg:w-80 md:w-72 sm:w-64 w-full mx-auto h-full rounded-3xl bg-white shadow-[1px_2px_101px_45px_rgba(156,156,156,0.2)]">

          <div className="rounded-t-[20px] p-3 bg-[#EFF3FD]">
            <div className="flex gap-2">
              <div className="relative">
                <div className="bg-white rounded-full w-12 h-12 aspect-square overflow-hidden">
                  <Image
                    width={200}
                    height={200}
                    className="inline-block -left-1 relative size-[52px] rounded-full object-cover"
                    src="/robot.png"
                    alt="avatar-image"
                  />
                </div>
                <span className="absolute bottom-0 end-0 block size-3 rounded-full ring-2 ring-white bg-green-600" />
              </div>

              <div className="flex flex-col gap-0 w-full">
                <div className="flex items-center gap-3">
                  <h1 className="font-semibold text-blue-600">Timpu</h1>
                  <span>
                    <VerifiedIcon />
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-blue-600 text-sm">
                    Chat assistant
                  </p>
                  <div className="flex items-center gap-1">
                    <span className="block size-2 rounded-full ring-1 ring-white bg-green-600" />
                    <p className="text-blue-600 text-sm">Online</p>
                  </div>
                </div>
              </div>
            </div>
          </div>


          <div className="flex flex-col gap-4 mt-4">

            <div className="flex flex-col items-start">
              <p className="text-sm p-3 rounded-2xl w-[80%] bg-gradient-to-r from-[#E6EEFF] to-[#F8FAFF] text-gray-700">
                Hi Sam! I am your personal shopping assistant , how can i help you today ?
              </p>
              <span className="text-xs ps-4 pt-0.5 text-gray-600">4:45 PM</span>
            </div>

            <div className="flex flex-col items-end">
              <p className="text-sm p-3 rounded-2xl w-[80%] bg-[#DCF7C5] text-gray-700">
                I am looking for a hand bag, with long strap.
              </p>
              <span className="text-xs pe-4 pt-0.5 text-gray-600">4:46 PM</span>
            </div>
          </div>

          <div className="mt-4">
            <h1 className="text-gray-500 text-sm mb-2">Popular tags for handbag</h1>
            <Tags />
          </div>

          <div className="mt-4">
            <div className="flex flex-col items-start">
              <div className="flex flex-col gap-1 p-3 rounded-2xl w-[80%] bg-gradient-to-r from-[#E6EEFF] to-[#F8FAFF]">
                <div className="flex flex-row gap-2 p-2 bg-white rounded-xl">
                  <Image src="/bag.jpeg" width={200} height={200} className="w-16 h-12 object-cover rounded-lg" alt="bag-image" />
                  <div className="flex flex-col gap-1">
                    <h1 className="flex items-center gap-2 text-sm">
                      Bags on Timpu
                      <span><VerifiedIcon /></span>
                    </h1>
                    <span className="flex items-center text-xs text-gray-600">1123 products <ChevronRightIcon /></span>
                  </div>
                </div>
                <p className="text-sm text-gray-700">
                  Or set filter and help us choose the best bag for you.
                </p>
              </div>
              <span className="text-xs ps-4 pt-0.5 text-gray-600">4:46 PM</span>
            </div>
          </div>

          <div className="mt-4">
            <div className="flex items-center justify-between">
              <h1 className="text-sm text-gray-600">Select filters</h1>
              <div className="flex items-center gap-1">
                <span><FilterIcon className="text-gray-600" /></span>
                <span className="text-gray-600 text-sm">Filter</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 mt-2">
              <div className="flex group items-center gap-1 border border-transparent hover:border-blue-600 bg-neutral-100 w-fit px-2 py-1 hover:bg-blue-100 rounded-md">
                <span className="group-hover:text-blue-600 text-sm select-none text-gray-600">Strap - Long</span>
                <span className="cursor-pointer group-hover:text-blue-600 text-sm text-gray-600"><CloseIcon /></span>
              </div>
              <div className="flex group items-center gap-1 border border-transparent hover:border-blue-600 bg-neutral-100 w-fit px-2 py-1 hover:bg-blue-100 rounded-md">
                <span className="group-hover:text-blue-600 text-sm select-none text-gray-600">Colour</span>
                <span className="cursor-pointer group-hover:text-blue-600 text-sm text-gray-600"><CloseIcon /></span>
              </div>
              <div className="flex group items-center gap-1 border border-transparent hover:border-blue-600 bg-neutral-100 w-fit px-2 py-1 hover:bg-blue-100 rounded-md">
                <span className="group-hover:text-blue-600 text-sm select-none text-gray-600">Size</span>
                <span className="cursor-pointer group-hover:text-blue-600 text-sm text-gray-600"><CloseIcon /></span>
              </div>
              <div className="flex group items-center gap-1 border border-transparent hover:border-blue-600 bg-neutral-100 w-fit px-2 py-1 hover:bg-blue-100 rounded-md">
                <span className="group-hover:text-blue-600 text-sm select-none text-gray-600">Brand</span>
                <span className="cursor-pointer group-hover:text-blue-600 text-sm text-gray-600"><CloseIcon /></span>
              </div>
              <div className="flex group items-center gap-1 border border-transparent hover:border-blue-600 bg-neutral-100 w-fit px-2 py-1 hover:bg-blue-100 rounded-md">
                <span className="group-hover:text-blue-600 text-sm select-none text-gray-600">Material</span>
                <span className="cursor-pointer group-hover:text-blue-600 text-sm text-gray-600"><CloseIcon /></span>
              </div>
            </div>
          </div>

          <div className="rounded-b-[20px] bg-gradient-to-r from-[#E6EEFF] p-3 to-[#F8FAFF] mt-6">
            <div className="flex items-center gap-2">
              <div className="relative w-full">
                <input type="text" placeholder="Type your message" className="outline-none px-3 py-1.5 rounded-lg border border-gray-300 placeholder:text-neutral-500 placeholder:text-sm w-full pe-8 text-sm" />
                <span className="absolute top-1.5 right-1.5">
                  <AttachmentIcon className="text-neutral-500" />
                </span>
              </div>
              <div className="flex h-full">
                <button aria-label="submit-button" role="button" type="button" className="outline-none bg-[#4C82EF] w-12 py-1.5 rounded-lg flex items-center justify-center">
                  <ChevronRightIcon className="text-white" />
                </button>
              </div>
            </div>
            <div className="mt-2 flex justify-center items-center">
              <p className="text-xs text-gray-500">Powered by <span className="font-bold">Krunk.ai</span></p>
              <Image src={"/Logo.svg"} width={100} height={100} className="w-3 h-3" alt="logo" />
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
