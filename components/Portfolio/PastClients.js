import Image from "next/image";
import Link from "next/link";
import barDesPrés from "../../public/images/logos/bar-des-prés.png";
import blueBirdLondon from "../../public/images/logos/bluebird-london.jpg";
import coppaClub from "../../public/images/logos/coppa-club.jpg";
import coqDargent from "../../public/images/logos/coq-dargent.jpg";
import DD from "../../public/images/logos/DD-London.jpg";
import dinings from "../../public/images/logos/dinings.png";
import herbertSamuel from "../../public/images/logos/herbert-samuel.jpg";
import hotelBristol from "../../public/images/logos/hotel-bristol.jpg";
import hotelMiragem from "../../public/images/logos/hotel-cascais-miragem.jpg";
import leBilloquet from "../../public/images/logos/le-billoquet.jpg";
import lpm from "../../public/images/logos/lpm.png";
import maisonBerguet from "../../public/images/logos/maison-breguet.png";
import millennium from "../../public/images/logos/millennium.png";
import norman from "../../public/images/logos/norman.jpg";
import novotel from "../../public/images/logos/novotel.png";
import orrery from "../../public/images/logos/orrery.png";
import radici from "../../public/images/logos/radici.png";
import sartoria from "../../public/images/logos/sartoria.png";
import savoyGrill from "../../public/images/logos/savoy-grill.jpg";
import seasons from "../../public/images/logos/seasons-restaurant.jpg";
import sirAdam from "../../public/images/logos/sir-adam.png";
import slh from "../../public/images/logos/small-luxury-hotels-logo.jpg";
import stRegis from "../../public/images/logos/st-regis.jpg";
import tamarind from "../../public/images/logos/tamarind1.jpg";
import artsClub from "../../public/images/logos/the-arts-club-full-logo-square.jpg";
import theDuchess from "../../public/images/logos/the-duchess-logo.png";
import savoyHotel from "../../public/images/logos/The-Savoy-Hotel-London-Logo.jpg";
import vb from "../../public/images/logos/vb.jpg";

const PastClients = () => {
  return (
    <>
      <div className="flex justify-center">
        <h1 className="font-bold text-3xl mb-28">Clients</h1>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 place-items-center gap-10 p-5">
        <Link
          href="https://www.bardespres.com/london-restaurant/"
          target="_blank"
        >
          <Image src={barDesPrés} height={35} width={150} />
        </Link>
        <Link href="https://www.bluebird-restaurant.co.uk/" target="_blank">
          <Image src={blueBirdLondon} height={35} width={150} />
        </Link>
        <Link href="https://www.coppaclub.co.uk/by-the-tower/" target="_blank">
          <Image src={coppaClub} height={35} width={150} />
        </Link>
        <Link href="https://www.coqdargent.co.uk/" target="_blank">
          <Image src={coqDargent} height={35} width={150} />
        </Link>
        <Link href="https://www.danddlondon.com/" target="_blank">
          <Image src={DD} height={35} width={150} />
        </Link>
        <Link href="https://diningssw3.co.uk/" target="_blank">
          <Image src={dinings} height={35} width={150} />
        </Link>
        <Link href="https://herbertsamuel.com/en/" target="_blank">
          <Image src={herbertSamuel} height={35} width={150} />
        </Link>
        <Link
          href="https://www.marriott.com/en-us/hotels/wawlc-hotel-bristol-a-luxury-collection-hotel-warsaw/overview/?scid=bb406319-b400-4594-956b-58f7a5a8ab55&gclid=Cj0KCQjw7PCjBhDwARIsANo7CgkLJxaa-ah7zwSTrOECKpBhIikyc_eBEMALFALfMxCoEGMhqRJhjrMaAnTBEALw_wcB&gclsrc=aw.ds"
          target="_blank"
        >
          <Image src={hotelBristol} height={35} width={150} />
        </Link>
        <Link
          href="https://www.cascaismirage.com/?gad=1&gclid=Cj0KCQjw7PCjBhDwARIsANo7Cgn5CJmXsGGtzlKqvCFtKQbFY-0mS0Nq8fgdD0kNwSCsjxVacajfeBwaAhK1EALw_wcB&gclsrc=aw.ds"
          target="_blank"
        >
          <Image src={hotelMiragem} height={35} width={200} />
        </Link>
        <Link href="https://lebilboquetdallas.com/" target="_blank">
          <Image src={leBilloquet} height={35} width={150} />
        </Link>
        <Link href="https://lpmrestaurants.com/london/" target="_blank">
          <Image src={lpm} height={35} width={120} />
        </Link>
        <Link
          href="https://www.maisonbreguet.com/fr/?r=4619010&gclid=Cj0KCQjw7PCjBhDwARIsANo7Cgk853CQGjmzhRP-oaT7vUv9sxR0rE3lK96IbSuYOrML1nSl6ZiiPugaArbgEALw_wcB"
          target="_blank"
        >
          <Image src={maisonBerguet} height={35} width={150} />
        </Link>
        <Link
          href="https://www.millenniumhotels.com/?utm_source=google&utm_medium=cpc&utm_campaign=Global&utm_content=millennium%20%26%20copthorne%20hotels&utm_term=external&gad=1&gclid=Cj0KCQjw7PCjBhDwARIsANo7Cgnw8aaVwbi4I3uqaIAMxyzPGhiFfVHyWQ5oNxtqr_iiT95bnYKD578aArH9EALw_wcB&gclsrc=aw.ds"
          target="_blank"
        >
          <Image src={millennium} height={35} width={180} />
        </Link>
        <Link href="https://www.thenorman.com/" target="_blank">
          <Image src={norman} height={35} width={150} />
        </Link>
        <Link
          href="https://novotel.accor.com/a/en/novotel-experience.html"
          target="_blank"
        >
          <Image src={novotel} height={35} width={150} />
        </Link>
        <Link href="https://www.orrery-restaurant.co.uk/" target="_blank">
          <Image src={orrery} height={35} width={150} />
        </Link>
        <Link href="https://www.radici.uk/" target="_blank">
          <Image src={radici} height={35} width={150} />
        </Link>
        <Link href="https://www.sartoria-restaurant.co.uk/" target="_blank">
          <Image src={sartoria} height={35} width={150} />
        </Link>
        <Link
          href="https://www.gordonramsayrestaurants.com/savoy-grill/"
          target="_blank"
        >
          <Image src={savoyGrill} height={35} width={150} />
        </Link>
        <Link href="http://seasons.com.tr/" target="_blank">
          <Image src={seasons} height={35} width={150} />
        </Link>
        <Link href="https://www.sirhotels.com/en/adam/" target="_blank">
          <Image src={sirAdam} height={35} width={120} />
        </Link>
        <Link href="https://slh.com/" target="_blank">
          <Image src={slh} height={35} width={120} />
        </Link>
        <Link href="https://st-regis.marriott.com/" target="_blank">
          <Image src={stRegis} height={35} width={190} />
        </Link>
        <Link href="http://www.tamarindrestaurant.com/" target="_blank">
          <Image src={tamarind} height={35} width={150} />
        </Link>
        <Link href="https://www.theartsclub.co.uk/" target="_blank">
          <Image src={artsClub} height={35} width={150} />
        </Link>

        <Link href="http://the-duchess.com/" target="_blank">
          <Image src={theDuchess} height={35} width={150} />
        </Link>
        <Link href="https://www.thesavoylondon.com/" target="_blank">
          <Image src={savoyHotel} height={35} width={200} />
        </Link>
        <Link
          href="https://www.althoffcollection.com/en/althoff-villa-belrose"
          target="_blank"
        >
          <Image src={vb} height={35} width={150} />
        </Link>
      </div>
      <div className="hr h-1 w-auto mt-[13rem] mb-[9rem] mx-[9rem]" />
      <div className="flex justify-center">
        <h1 className="font-bold text-3xl mb-28">Clients</h1>
      </div>
    </>
  );
};

export default PastClients;
