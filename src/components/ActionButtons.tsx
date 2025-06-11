import Icon from "@/components/ui/icon";

interface ActionButtonsProps {
  onUpload: () => void;
  onCreate: () => void;
}

const ActionButtons = ({ onUpload, onCreate }: ActionButtonsProps) => {
  return (
    <div className="flex gap-4">
      <button
        onClick={onUpload}
        className="flex items-center gap-2 px-6 py-3 bg-white border-2 border-purple-200 text-purple-700 rounded-lg hover:border-purple-300 hover:bg-purple-50 transition-all duration-200 font-medium"
      >
        <Icon name="Upload" size={18} />
        Загрузить
      </button>
      <button
        onClick={onCreate}
        className="flex items-center gap-2 px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors duration-200 font-medium shadow-lg hover:shadow-xl"
      >
        <Icon name="Plus" size={18} />
        Создать
      </button>
    </div>
  );
};

export default ActionButtons;
