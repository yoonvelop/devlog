import React from "react";
import { AiOutlineGithub } from "react-icons/ai";
import { SiNotion } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="p-10 border-t text-gray-700">
      <div className="flex flex-row justify-around items-start max-w-4xl mx-auto max-[480px]:flex-col max-[480px]:gap-8">
        <p className="text-xs text-gray-500">Copyright &copy;yoonvelop</p>
        <div>
          <h1 className="font-semibold">Contact</h1>
          <a
            href="mailto:yoonvelop@gmail.com"
            className="hover:underline text-sm"
          >
            yoonvelop@gmail.com
          </a>
        </div>
        <div>
          <h1 className="font-semibold mb-1">Links</h1>
          <ul className="flex flex-col">
            <li>
              <a
                className="flex items-center"
                href="https://github.com/yoonvelop"
                target="_blank"
                rel="noreferrer"
              >
                <span className="mr-1 text-sm">Github</span>
                <span>
                  <AiOutlineGithub size="1.1rem" />
                </span>
              </a>
            </li>
            <li>
              <a
                className="flex items-center"
                href="https://www.notion.so/yoonvelop/FE-Developer-ca147f59ada646008a217194ed3a86aa"
                target="_blank"
                rel="noreferrer"
              >
                <span className="mr-1 text-sm">Resume</span>
                <span>
                  <SiNotion size="0.8rem" />
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
