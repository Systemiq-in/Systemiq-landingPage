export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[#F5F5F7] text-[#1D1D1F] pt-32 pb-20 antialiased">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <h1 className="text-4xl font-extrabold tracking-tight">Privacy Policy</h1>
        <div className="prose prose-sm text-[#86868B]">
          <p>Last updated: {new Date().toLocaleDateString()}</p>
          <p>
            Systemiq Technologies ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how your personal information is collected, used, and disclosed by Systemiq Technologies.
          </p>
          <h2 className="text-lg font-bold text-[#1D1D1F] mt-8 mb-4">1. Information We Collect</h2>
          <p>
            We collect information from you when you visit our website, register on our site, place an order, subscribe to our newsletter, respond to a survey, fill out a form, or use our custom software solutions.
          </p>
          <h2 className="text-lg font-bold text-[#1D1D1F] mt-8 mb-4">2. How We Use Your Information</h2>
          <p>
            Any of the information we collect from you may be used in one of the following ways:
          </p>
          <ul>
            <li>To personalize your experience.</li>
            <li>To improve our website and software services.</li>
            <li>To improve customer service.</li>
            <li>To process transactions.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
