import { useState } from "react";
import Icon from "@/components/ui/icon";

interface HelpAccordionProps {
  title: string;
  content: string[];
}

const HelpAccordion = ({ title, content }: HelpAccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 transition-colors"
      >
        <span className="font-medium text-gray-700">{title}</span>
        <Icon
          name={isOpen ? "ChevronUp" : "ChevronDown"}
          size={20}
          className="text-gray-500 transition-transform duration-200"
        />
      </button>
      {isOpen && (
        <div className="p-4 bg-white animate-fade-in">
          <ul className="space-y-2">
            {content.map((item, index) => (
              <li
                key={index}
                className="flex items-start gap-2 text-sm text-gray-600"
              >
                <Icon
                  name="Dot"
                  size={12}
                  className="text-purple-500 flex-shrink-0 mt-1"
                />
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default HelpAccordion;
