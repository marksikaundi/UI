"use client";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();
  const handleRedirect = () => {
    router.push("/programs");
  };

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center px-4 text-center">
      <div className="space-y-8">
        <div className="w-full items-center flex flex-col mb-4">
          <Image src="/assets/404.svg" width={300} height={300} alt="404" />
        </div>
        <div className="items-center ">
          <p className="text-4xl mt-4 text-white">
            Oops! The page you are looking for does not exist.
          </p>
          <p className="text-2xl mt-2 text-white">
            You may have mistyped the address or the page may have moved.
          </p>
        </div>
        <div className="mt-10 sm:flex sm:justify-center lg:justify-center">
          <div className="rounded-md shadow">
            <Button
              onClick={handleRedirect}
              variant="default"
              size="lg"
              className="rounded-full bg-white hover:bg-white text-black"
            >
              Programs <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
          <div className="mt-3 sm:mt-0 sm:ml-3">
            <Button
              onClick={handleRedirect}
              size="lg"
              className="rounded-full hover:rounded-full text-white bg-black hover:bg-[#1F2225]"
            >
              Contact us <ChevronRight className="ml-2 h-5 w-5 " />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
