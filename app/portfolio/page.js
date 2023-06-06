import PastClients from "@/components/Portfolio/PastClients";
import PortfolioTopGallery from "@/components/Portfolio/PortfolioTopGallery";
import StandardToCustom from "@/components/Portfolio/StandardToCustom";
import Head from "next/head";
const Portfolio = () => {
  return (
    <>
      <Head>
        <title>Portfolio</title>
      </Head>
      <PortfolioTopGallery />
      <StandardToCustom />
      <PastClients />
    </>
  );
};

export default Portfolio;
