import Image from "next/image";
import logo from "../../public/next.svg";

import Product from "@/app/components/products";

export default function Home() {
  return (
    <main className=" mb-5   items-center  p-24">
      This website has been built using the Next.js and Tailwind CSS frameworks.
      It connects to the Wordpress Rest API to fetch and display a list of
      pages. Wordpress main site:{" "}
      <a href={process.env.baseSite}>{process.env.baseSite}</a>
      <div className="mt-5 flex gap-5">
        <Image
          src={logo} // Route of the image file
          height={144} // Desired size with correct aspect ratio
          width={144} // Desired size with correct aspect ratio
          alt="Your Name"
        />

      </div>
    </main>
  );
}
