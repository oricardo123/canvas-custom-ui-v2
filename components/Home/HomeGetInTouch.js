import Link from "next/link";

export default function HomeGetInTouch() {
  return (
    <>
      <div className="flex justify-center text-center text-3xl font-bold w-auto mx-[9rem] text-FooterColor">
        Get in touch with us to start the process for your custom furniture project today.
      </div>
      <div className="flex justify-center">
        <Link
          href="/contact"
          className="connect-with-us-btn text-white px-5 py-2 rounded-md mb-[10.5rem] mt-[4rem] text-xs"
        >
          Connect With Us
        </Link>
      </div>
    </>
  );
}
