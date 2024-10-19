import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

export default function PsCard() {
  return (
    <div className="min-h-screen  text-white p-4 sm:p-6 md:p-8 flex flex-col items-center">
      <div className="w-full max-w-4xl">
        <Card className="bg-[#13132B] my-8 border-gray-700">
          <CardContent className="p-4 sm:p-6">
            <div className="flex flex-col sm:flex-row items-center">
              <img
                src="/ps/dev.svg"
                alt="Software Engineering at Lupleg"
                className="mb-4 sm:mb-0 sm:mr-6 w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32"
                width={120}
                height={120}
              />
              <div>
                <div className="flex flex-col sm:flex-row items-center sm:items-start mb-2">
                  <h2 className="text-xl sm:text-2xl text-white font-bold mb-2 sm:mb-0 sm:mr-3 text-center sm:text-left">
                    Software Engineering Essentials
                  </h2>
                  {/* <span className="bg-green-500 text-black text-xs font-bold px-2 py-1 rounded">
                  </span> */}
                </div>
                <p className="text-green-400 text-sm mb-3 text-center sm:text-left">
                  6 Months Program
                </p>
                <p className="text-sm text-gray-300 mb-4 text-center sm:text-left">
                  A complete practical course to become a software developer.
                  From learning basic programming to building softwares. 
                </p>
                <div className="flex justify-center sm:justify-start">
                  <Link href="/programs/se">
                    <Button variant="secondary" size="sm">
                      Learn More →
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-[#13132B] my-8 border-gray-700">
          <CardContent className="p-4 sm:p-6">
            <div className="flex flex-col sm:flex-row items-center">
              <img
                src="/ts.webp"
                alt="TypeScript logo with glowing effect"
                className="mb-4 sm:mb-0 sm:mr-6 w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32"
                width={120}
                height={120}
              />
              <div>
                <div className="flex flex-col sm:flex-row items-center sm:items-start mb-2">
                  <h2 className="text-xl sm:text-2xl text-white font-bold mb-2 sm:mb-0 sm:mr-3 text-center sm:text-left">
                    TypeScript Pro Essentials
                  </h2>
                  <span className="bg-green-500 text-black text-xs font-bold px-2 py-1 rounded">
                    Coming soon
                  </span>
                </div>
                <p className="text-green-400 text-sm mb-3 text-center sm:text-left">
                  3 Months Program
                </p>
                <p className="text-sm text-gray-300 mb-4 text-center sm:text-left">
                  Total TypeScript Pro Essentials is the ultimate guide to
                  becoming a TypeScript Wizard.
                </p>
                <div className="flex justify-center sm:justify-start">
                  <Link href="/programs/#typescript">
                    <Button variant="secondary" size="sm">
                      Learn More →
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-[#13132B] my-8 border-gray-700">
          <CardContent className="p-4 sm:p-6">
            <div className="flex flex-col sm:flex-row items-center">
              <img
                src="/ps/re.svg"
                alt="TypeScript logo with glowing effect"
                className="mb-4 sm:mb-0 sm:mr-6 w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32"
                width={120}
                height={120}
              />
              <div>
                <div className="flex flex-col sm:flex-row items-center sm:items-start mb-2">
                  <h2 className="text-xl sm:text-2xl text-white font-bold mb-2 sm:mb-0 sm:mr-3 text-center sm:text-left">
                    Python Pro Essentials
                  </h2>
                  <span className="bg-green-500 text-black text-xs font-bold px-2 py-1 rounded">
                    Coming soon
                  </span>
                </div>
                <p className="text-green-400 text-sm mb-3 text-center sm:text-left">
                  3 Months Program
                </p>
                <p className="text-sm text-gray-300 mb-4 text-center sm:text-left">
                  Total Python Pro Essentials is the ultimate guide to becoming
                  a Python black bet .
                </p>
                <div className="flex justify-center sm:justify-start">
                  <Link href="/programs/#python-pro">
                    <Button variant="secondary" size="sm">
                      Learn More →
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-[#13132B] my-8 border-gray-700">
          <CardContent className="p-4 sm:p-6">
            <div className="flex flex-col sm:flex-row items-center">
              <img
                src="/ps/setup.svg"
                alt="TypeScript logo with glowing effect"
                className="mb-4 sm:mb-0 sm:mr-6 w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32"
                width={120}
                height={120}
              />
              <div>
                <div className="flex flex-col sm:flex-row items-center sm:items-start mb-2">
                  <h2 className="text-xl sm:text-2xl text-white font-bold mb-2 sm:mb-0 sm:mr-3 text-center sm:text-left">
                    Applied Digital Skills
                  </h2>
                  <span className="bg-green-500 text-black text-xs font-bold px-2 py-1 rounded">
                    NEW
                  </span>
                </div>
                <p className="text-green-400 text-sm mb-3 text-center sm:text-left">
                  4 Months Program
                </p>
                <p className="text-sm text-gray-300 mb-4 text-center sm:text-left">
                  A practical guide to learning digital skills. Learn how to use
                  productivity tools to improve your work delivery and
                  collaboration.
                </p>
                <div className="flex justify-center sm:justify-start">
                  <Link href="/programs/digital-skills">
                    <Button variant="secondary" size="sm">
                      Learn More →
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
