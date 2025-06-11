import { useState } from "react";
import Icon from "@/components/ui/icon";

const Banner = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-gradient-to-r from-blue-100 to-blue-50 border border-blue-200 rounded-lg p-4 mb-6 relative">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <Icon
            name="Info"
            size={20}
            className="text-blue-600 flex-shrink-0 mt-0.5"
          />
          <div>
            <p className="text-blue-800 font-medium">
              Добро пожаловать в систему управления документами!
            </p>
            <p className="text-blue-700 text-sm mt-1">
              Здесь вы можете создавать анкеты и сообщения, а также загружать
              готовые файлы.
            </p>
          </div>
        </div>
        <button
          onClick={() => setIsVisible(false)}
          className="text-blue-600 hover:text-blue-800 transition-colors p-1"
          aria-label="Закрыть баннер"
        >
          <Icon name="X" size={18} />
        </button>
      </div>
    </div>
  );
};

export default Banner;
