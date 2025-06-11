import Banner from "@/components/Banner";
import SurveySection from "@/components/SurveySection";
import MessageSection from "@/components/MessageSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-purple-50">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2 font-montserrat">
            Система управления документами
          </h1>
          <p className="text-gray-600 text-lg">
            Создавайте анкеты и сообщения с легкостью
          </p>
        </div>

        <Banner />

        <div className="grid md:grid-cols-2 gap-8">
          <SurveySection />
          <MessageSection />
        </div>
      </div>
    </div>
  );
};

export default Index;
