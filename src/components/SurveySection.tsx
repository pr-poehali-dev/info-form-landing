import Icon from "@/components/ui/icon";
import ActionButtons from "@/components/ActionButtons";
import HelpAccordion from "@/components/HelpAccordion";

const SurveySection = () => {
  const helpContent = [
    "Анкета может содержать различные типы вопросов: одиночный выбор, множественный выбор, текстовые поля",
    "Рекомендуется группировать связанные вопросы в отдельные секции",
    "Используйте понятные формулировки и избегайте двусмысленности",
    "Добавляйте обязательные поля только там, где это действительно необходимо",
  ];

  const handleUpload = () => {
    console.log("Загрузка анкеты");
  };

  const handleCreate = () => {
    console.log("Создание анкеты");
  };

  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 bg-purple-100 rounded-lg">
          <Icon name="FileText" size={24} className="text-purple-600" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-gray-800">Анкета</h2>
          <p className="text-gray-600 text-sm">
            Создание и управление опросами
          </p>
        </div>
      </div>

      <div className="mb-6">
        <ActionButtons onUpload={handleUpload} onCreate={handleCreate} />
      </div>

      <HelpAccordion
        title="Справочная информация по анкетам"
        content={helpContent}
      />
    </div>
  );
};

export default SurveySection;
