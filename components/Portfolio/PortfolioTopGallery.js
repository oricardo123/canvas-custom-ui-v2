import Image from "next/image";
import img1 from "../../public/images/Portfolio-Top-Gallery2.png";
import img2 from "../../public/images/Portfolio-Top-Gallery1.png";

const PortfolioTopGallery = () => {
  return (
    <>
      <div className="mt-20  text-white updateddiv">
        <h1 className="max-w-[41rem] top-60 left-[10%] font-extrabold text-[45px] mr-3">
          Discovering The Craftmanship
        </h1>
        <p className=" max-w-[41rem] top-96 md:top-80 left-[10%] font-extrabold text- mr-3 ">
          At Canvas Custom, we take great pride in our skilled furniture
          production team, who possess extensive experience in their craft. By
          relying on these experts, we are able to craft a diverse range of
          furniture pieces, from our standard in-house collection to intricate,
          customized projects.
        </p>
        <Image src={img2} height={385} width={379} alt="Picture" className="" />
        <Image src={img1} height={228} width={337} alt="Picture" className="" />
      </div>
    </>
  );
};
export default PortfolioTopGallery;
