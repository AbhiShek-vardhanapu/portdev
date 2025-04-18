import React, { useEffect, useState } from "react";
import img1 from "../assets/icons/github.png";
import img2 from "../assets/icons/linkedin.png";
import img4 from "../assets/icons/leetcode.png";
import phone from "../assets/icons/phone-call.png";
import gmail from "../assets/icons/gmail.png";

export default function Contact() {
  const [innerWidth, setInnerWidth] = useState(window.innerWidth - 10);
  const [gap, setGap] = useState(75);

  const handleResize = () => {
    if (window.innerWidth < 500) setGap(50);
    else setGap(75);
    setInnerWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      id="contacts"
      className="py-10 bg-[#04090F] h-[65vh] max-[1040px]:h-[50vh] max-[800px]:h-[40vh] max-[455px]:h-[30vh] text-white w-[100%] overflow-hidden"
    >
      <div
        style={{ "--ht": innerWidth + "px" }}
        className="mx-auto w-[var(--ht)] flex justify-center items-center h-[var(--ht)] rounded-full border-[10px] max-[940px]:border-[5px] border-[#62B46E]"
      >
        <div
          style={{ "--ht": innerWidth - gap + "px" }}
          className="w-[var(--ht)] h-[var(--ht)] flex justify-center rounded-full border-[10px] max-[940px]:border-[5px] border-[white]"
        >
          <div className="mt-14 max-[455px]:mt-6 text-lg">
            <div className="w-[50%] max-[1040px]:hidden mx-auto">
              <div className="font-bold">
                Available for freelance opportunities
              </div>
              <div className="text-sm">
                Have an exciting project you need help with? Send me an email or
                contact me via instant message!
              </div>
            </div>
            <div className="flex flex-row gap-4 mt-4 justify-center">
              <a href="https://www.linkedin.com/in/abhishek-vardhanapu-a9b484241/">
                <img
                  alt="LinkedIn"
                  className="w-10 max-[992px]:w-7 max-[455px]:w-5"
                  src={img2}
                ></img>
              </a>
              <a href="https://github.com/AbhiShek-vardhanapu">
                <img
                  alt="GitHub"
                  className="w-10 max-[992px]:w-7 max-[455px]:w-5"
                  src={img1}
                ></img>
              </a>
              <a href="https://leetcode.com/u/abhishek_vardhanapu/">
                <img
                  alt="LeetCode"
                  className="w-10 rounded max-[992px]:w-7 max-[455px]:w-5"
                  src={img4}
                ></img>
              </a>
            </div>
            <div className="mt-4 flex flex-col items-center text-sm">
              <div className="flex items-center gap-2 max-[455px]:text-xs">
                <img
                  alt="Gmail"
                  className="h-5 max-[992px]:h-3"
                  src={gmail}
                ></img>
                abhishekvardhanapu789@gmail.com
              </div>
              <div className="flex items-center gap-2 max-[455px]:text-xs mt-1">
                <img
                  alt="Phone"
                  className="h-5 max-[992px]:h-3"
                  src={phone}
                ></img>
                +91 8688301130
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}