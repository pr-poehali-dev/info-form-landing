import Icon from "@/components/ui/icon";
import ActionButtons from "@/components/ActionButtons";
import HelpAccordion from "@/components/HelpAccordion";

const MessageSection = () => {
  const helpContent = [
    "Сообщения поддерживают форматирование текста: жирный, курсив, списки",
    "Можно добавлять вложения: изображения, документы, архивы",
    "Используйте шаблоны для часто отправляемых сообщений",
    "Настройте автоматическую отправку для регулярных уведомлений",
  ];

  const handleUpload = () => {
    console.log("Загрузка сообщения");
  };

  const handleCreate = () => {
    console.log("Создание сообщения");
  };

  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 bg-blue-100 rounded-lg">
          <Icon name="MessageSquare" size={24} className="text-blue-600" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-gray-800">Сообщение</h2>
          <p className="text-gray-600 text-sm">Создание и отправка сообщений</p>
        </div>
      </div>

      <div className="mb-6">
        <ActionButtons onUpload={handleUpload} onCreate={handleCreate} />
      </div>

      <HelpAccordion
        title="Справочная информация по сообщениям"
        content={helpContent}
      />
    </div>
  );
};

export default MessageSection;
