export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-transparent text-white/90 pt-32 pb-20 antialiased">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <h1 className="text-4xl font-extrabold tracking-tight">Terms of Service</h1>
        <div className="prose prose-sm text-white/50">
          <p>Last updated: {new Date().toLocaleDateString()}</p>
          <p>
            Please read these Terms of Service ("Terms", "Terms of Service") carefully before using the systemiq.in website operated by Systemiq Technologies.
          </p>
          <h2 className="text-lg font-bold text-white mt-8 mb-4">1. Conditions of Use</h2>
          <p>
            By using this website, you certify that you have read and reviewed this Agreement and that you agree to comply with its terms. If you do not want to be bound by the terms of this Agreement, you are advised to leave the website accordingly.
          </p>
          <h2 className="text-lg font-bold text-white mt-8 mb-4">2. Intellectual Property</h2>
          <p>
            You agree that all materials, products, and services provided on this website are the property of Systemiq Technologies, its affiliates, directors, officers, employees, agents, suppliers, or licensors including all copyrights, trade secrets, trademarks, patents, and other intellectual property.
          </p>
        </div>
      </div>
    </div>
  );
}
