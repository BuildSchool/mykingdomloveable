import { WaitlistForm } from "./WaitlistForm";

export const HeroContent = () => {
  return (
    <div className="w-full px-4 mb-16 lg:w-1/2 lg:mb-0">
      <span className="text-lg font-semibold text-kingdom-gold">
        Welcome to MyKingdom
      </span>
      <h1 className="mt-8 mb-6 text-5xl font-bold leading-tight text-white">
        AI-Powered Property Management for the Modern Era
      </h1>
      <p className="mb-8 text-xl text-kingdom-cyan/90">
        Transform your property management experience with cutting-edge AI
        technology. Streamline operations, maximize ROI, and deliver exceptional
        service to your tenants.
      </p>
      <div className="flex flex-wrap">
        <WaitlistForm />
      </div>
    </div>
  );
};