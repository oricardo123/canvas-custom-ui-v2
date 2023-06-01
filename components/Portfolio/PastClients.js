import Image from "next/image";
import norman from "../../public/images/norman.png";
import stRegis from "../../public/images/st-regis.png";
import orrey from "../../public/images/orrery.png";
import sirAdam from "../../public/images/sir-adam.png";
import theArtsClub from "../../public/images/the-arts-club.png";
import barDePrés from "../../public/images/bar-des-prés.png";
import hotelMiragemCascais from "../../public/images/hotel-cascais-miragem.png";
import radici from "../../public/images/radici.png";
const PastClients = () => {
  return (
    <>
      <div className="flex justify-center">
        <h1 className="font-bold text-3xl mb-28">Past Clients</h1>
      </div>
      <div className="flex flex-col gap-10">
        <div className="flex flex-row justify-center gap-10">
          <Image src={norman}></Image>
          <Image height={39} width={247} src={orrey}></Image>
          <Image height={112} width={203} src={sirAdam}></Image>
          <Image height={98} width={247} src={stRegis}></Image>
          <Image height={98} width={247} src={theArtsClub}></Image>
        </div>
        <div className="flex flex-row justify-center gap-10">
          <Image height={39} width={247} src={barDePrés}></Image>
          <Image height={39} width={247} src={hotelMiragemCascais}></Image>
          <Image height={39} width={247} src={radici}></Image>
        </div>
        <div className="hr h-1 w-auto mt-[13rem] mb-[9rem] mx-[9rem]" />
      </div>
      <div className="flex justify-center">
        <h1 className="font-bold text-3xl mb-28">Past Clients</h1>
      </div>
    </>
  );
};

export default PastClients;
