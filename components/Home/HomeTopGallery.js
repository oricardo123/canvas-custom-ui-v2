import Link from "next/link";
import Image from "next/image";
import img1 from "../../public/images/canvas-image-3.png";
import img2 from "../../public/images/canvas-image-2.png";

export default function HomeTopGallery() {
  return (
    <>
      <div className="grid md:grid-cols-2 mt-20 text-white left-vector">
        <div>
          <h1 className="max-w-[41rem]  mt-40 left-[10%] font-extrabold text-[45px] mr-3 z-50">
            Transform your space with our custom furniture solutions at Canvas
            Custom Furniture.
          </h1>
          <Link
            href="/catalog"
            className=" text-black bg-white mt-[32rem] md:mt-[25rem] left-[10%] p-2 mix-blend-screen rounded-md text-lg font-bold z-50"
          >
            View Catalog
          </Link>
          <Link
            href="/about"
            className=" mt-[32rem] md:mt-[25rem] left-[10%] ml-[10rem] p-[0.4rem] outline rounded-md text-lg font-bold z-50"
          >
            Learn More
          </Link>
        </div>
        <div>
          <Image
            src={img2}
            height={385}
            width={379}
            alt="Picture"
            className=" rounded-2xl hidden lg:block"
          />
          <Image
            src={img1}
            height={228}
            width={337}
            alt="Picture"
            className="rounded-2xl hidden lg:block"
          />
        </div>
      </div>
    </>
  );
}
