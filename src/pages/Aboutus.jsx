const AboutUs = () => {
  return (
    <div className="max-w-5xl mx-auto mt-14 px-6 text-text-black pb-20">

      {/* TITLE */}
      <h1 className="text-4xl font-semibold text-center mb-6">
        About MindsY 💙
      </h1>

      {/* INTRO */}
      <p className="text-center text-gray-700 leading-relaxed max-w-[650px] mx-auto mb-10">
        MindsY was created with one purpose — to make mental health support simple,
        accessible, and stigma-free.  
        We believe everyone deserves a safe space to understand their emotions, track their
        mental health, and seek professional help when needed.
      </p>

      {/* SECTIONS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* CARD 1 */}
        <div className="bg-white shadow-md p-6 rounded-xl border border-gray-200">
          <h2 className="text-xl font-semibold mb-3">✨ Our Mission</h2>
          <p className="text-gray-600">
            To empower individuals with tools that help them reflect, heal,
            and grow emotionally. MindsY bridges the gap between daily life stress
            and professional support.
          </p>
        </div>

        {/* CARD 2 */}
        <div className="bg-white shadow-md p-6 rounded-xl border border-gray-200">
          <h2 className="text-xl font-semibold mb-3">🤝 What We Offer</h2>
          <ul className="text-gray-600 space-y-2">
            <li>• Smart mental health assessments</li>
            <li>• Mood analysis & emotional tracking</li>
            <li>• Journaling & daily diaries</li>
            <li>• AI-powered supportive chatbot</li>
            <li>• Appointment booking with psychiatrists</li>
          </ul>
        </div>

        {/* CARD 3 */}
        <div className="bg-white shadow-md p-6 rounded-xl border border-gray-200">
          <h2 className="text-xl font-semibold mb-3">💡 Why MindsY?</h2>
          <p className="text-gray-600">
            We use a blend of human-centered design and smart technology to make
            emotional wellbeing approachable.  
            Our pastel UI, calming structure, and simple flows are crafted to reduce
            stress — not add to it.
          </p>
        </div>

        {/* CARD 4 */}
        <div className="bg-white shadow-md p-6 rounded-xl border border-gray-200">
          <h2 className="text-xl font-semibold mb-3">🛡️ Our Values</h2>
          <ul className="text-gray-600 space-y-2">
            <li>• Privacy first — your data stays yours</li>
            <li>• Empathy over perfection</li>
            <li>• Accessibility for everyone</li>
            <li>• Constantly improving through feedback</li>
          </ul>
        </div>
      </div>

      {/* CLOSING */}
      <div className="text-center mt-16">
        <h3 className="text-2xl font-semibold mb-3">You're Not Alone 💛</h3>
        <p className="text-gray-700 max-w-[600px] mx-auto leading-relaxed mb-6">
          MindsY is here to support you — every step, every question, every feeling.
          Whether you're here to explore your emotions or seek professional help,
          we’re honored to be a part of your journey.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
