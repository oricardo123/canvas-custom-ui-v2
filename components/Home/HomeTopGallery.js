import Link from "next/link";
import Image from "next/image";
import img1 from "../../public/images/canvas-image-3.png";
import img2 from "../../public/images/canvas-image-2.png";

export default function HomeTopGallery() {
  return (
    <>
      <div className="grid grid-cols-5 mt-24 text-FooterColor updateddiv h-auto lg:h-[40rem] relative">
        <div className="col-span-5 lg:col-span-3 m-10 lg:m-32">
          <h1 className="max-w-[53rem] text-[40px] w-auto ">
            Transform your project space with Canvas Custom solutions.
          </h1>
          <div className="mt-14">
            <Link
              href="/catalog"
              className="p-1 text-xs bg-white justify-self-start  mix-blend-screen rounded-md "
            >
              View Catalog
            </Link>
            <Link
              href="/about"
              className="text-xs p-1 outline outline-1 justify-self-start rounded-md mt-4 ml-5 lg:ml-14"
            >
              Learn More
            </Link>
          </div>
        </div>
        <div className="hidden lg:block">
          <Image
            src={img2}
            alt="Picture"
            className="absolute top-10 right-10 rounded-2xl hidden lg:block"
          />
          <Image
            src={img1}
            alt="Picture"
            className="absolute top-80 rounded-2xl hidden lg:block z-10"
          />
        </div>
      </div>
    </>
  );
}
