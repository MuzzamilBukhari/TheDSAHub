"use client";

import { useRouter } from "next/navigation";
import { ReactNode, useEffect, useState } from "react";
import Image from "next/image";

const Popup = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  const [showPopup, setShowPopup] = useState(true);

  useEffect(() => {
    // Ensure the popup is shown only once when the component mounts
    setShowPopup(true);
  }, []);

  const handleContinue = () => {
    setShowPopup(false);
    router.push("/"); // Navigate to the home page or any other route
  };

  const handleExit = () => {
    if (typeof window !== "undefined") {
      window.close(); // Close the window or tab
    }
  };

  if (!showPopup) return <div>{children}</div>;

  return (
    <div className="flex items-center justify-center h-screen p-6 bg-black">
      <div className="flex flex-col items-center justify-center space-y-8 mt-4 px-4 md:px-0 sm:mt-7 bg-black shadow-[0_0_20px_rgba(255,255,255,0.5)] rounded-lg max-w-4xl w-full min-h-[600px]">
        <div>
          <Image src="/logo.jpg" alt="Logo" width={200} height={200} />
        </div>
        <h2 className="text-2xl font-bold text-center text-white sm:text-3xl lg:text-4xl">
          Your Ultimate DSA Guide!
        </h2>
        <p className="text-sm text-center text-gray-300 px-0 sm:px-4 sm:text-base lg:text-lg max-w-4xl">
          Enhance your problem-solving skills with in-depth blogs on Data
          Structures and Algorithms. From beginner-friendly explanations to
          advanced coding techniques, we’ve got you covered. Join a community of
          passionate learners and take your DSA journey to the next level.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button
            onClick={handleContinue}
            className=" px-12 py-4 font-bold text-black bg-[#ff9000] rounded-lg hover:bg-[#ff7f00]"
          >
            Start Exploring - Enter{" "}
          </button>
          <button
            onClick={handleExit}
            className=" px-12 py-4 font-bold text-white bg-bg1 rounded-lg hover:bg-bg2"
          >
            Not Interested - Exit
          </button>
        </div>
        <p className="text-sm text-center text-gray-300 sm:text-base lg:text-lg max-w-lg">
          ⚠️ Caution: Entering <span className="text-[#ff9000]">DSAHub</span>{" "}
          may lead to an obsession with solving LeetCode problems at 3 AM!
        </p>
        <p className="text-sm text-gray-500 mt-4">
          © 2024 the DSA Hub —
          <a
            href="https://www.linkedin.com/in/muzzamilbukhari/"
            className="text-gray-600 ml-1"
            target="_blank"
          >
            @muzzamilbukhari
          </a>
        </p>
      </div>
    </div>
  );
};

export default Popup;
