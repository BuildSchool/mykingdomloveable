import { Navigation } from "@/components/layout/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Main Content */}
      <div className="md:ml-64 p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-kingdom-text mb-6">Welcome to MyKingdom</h1>
          <p className="text-kingdom-muted text-lg">
            Manage your properties with ease using our AI-powered platform.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;