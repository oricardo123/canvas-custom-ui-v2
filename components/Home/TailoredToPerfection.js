import Image from "next/image";
import img1 from "../../public/images/canvas-image-15.jpg";

const TailoredToPerfection = () => {
  return (
    <>
      <div className="flex justify-center my-[10rem]">
        <div className="items-center  bg-HomeContainer2TextBox backdrop-blur-lg rounded-2xl p-10 ml-[9rem] mr-[-9rem] my-12 max-w-[632px] text-FooterColor">
          <h2 className="text-3xl font-bold mt-6">Tailored to Perfection</h2>
          <p className="mt-3">
            Whether you need a customized project or mass-produced pieces,
            Canvas Contract Furniture has the understanding and expertise
            required to deliver the ideal solution. Browse our collection today
            and discover why we're the go-to choice for custom furniture
            solutions.
          </p>
        </div>
        <Image
          src={img1}
          alt="Picture"
          className="w-auto h-auto rounded-2xl mr-[9rem] max-w-[43.25rem]"
        />
      </div>
    </>
  );
};

export default TailoredToPerfection;
