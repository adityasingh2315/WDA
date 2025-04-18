import { Brain, Users, LineChart, AlertCircle, Heart, Globe } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50/50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(109.6deg,rgba(223,234,247,1)_11.2%,rgba(244,248,252,1)_91.1%)] opacity-30" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 text-center lg:text-left animate-fade-in">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Making Mental Health Care
                <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent"> Accessible</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0 animate-slide-in-right">
                In India, the shortage of mental health professionals is severe, with only 0.75 psychiatrists per 100,000 patients, well below the WHO recommendation of at least 3 per 100,000.
              </p>
            </div>
            <div className="flex-1 relative animate-scale-in">
              <div className="w-full h-[400px] relative">
                <img
                  src="/placeholder.svg"
                  alt="Mental Health Support"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent mb-4">
              Our Mission
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              MoodMap is a pioneering application designed to bridge the gap in mental health care by leveraging technology and innovation to make support accessible to all.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Brain className="w-8 h-8 text-blue-500" />,
                title: "Daily Tracking",
                description: "Enable daily depression tracking using the PHQ-9 test with personalized feedback through the Gemini model."
              },
              {
                icon: <Users className="w-8 h-8 text-blue-500" />,
                title: "Remote Monitoring",
                description: "Facilitate affordable psychiatric monitoring by allowing psychiatrists to remotely monitor multiple patients efficiently."
              },
              {
                icon: <LineChart className="w-8 h-8 text-blue-500" />,
                title: "Data-Driven Insights",
                description: "Provide comprehensive analytics and insights to help track progress and improve treatment outcomes."
              },
              {
                icon: <AlertCircle className="w-8 h-8 text-blue-500" />,
                title: "Critical Alerts",
                description: "Ensure timely support through critical condition alerts and personalized advice systems."
              },
              {
                icon: <Heart className="w-8 h-8 text-blue-500" />,
                title: "Supportive Community",
                description: "Build a supportive community where users can connect, share experiences, and support each other."
              },
              {
                icon: <Globe className="w-8 h-8 text-blue-500" />,
                title: "Scalable Solution",
                description: "Make mental health care more scalable and effective in India through innovative technology."
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="group bg-white/80 backdrop-blur-lg p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out hover:-translate-y-1 animate-fade-in"
                style={{
                  animationDelay: `${index * 150}ms`
                }}
              >
                <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ee9ca7,#ffdde1)] opacity-5" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent mb-4">
              Our Impact
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              By leveraging technology to bridge the gap between mental health needs and resources, MoodMap is making a significant impact in mental healthcare accessibility.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                number: "100K+",
                label: "Active Users",
                description: "Trusted by thousands for daily mental health tracking"
              },
              {
                number: "80%",
                label: "User Engagement",
                description: "High daily active user engagement rate"
              },
              {
                number: "50%",
                label: "Cost Reduction",
                description: "Average reduction in consultation costs"
              },
              {
                number: "24/7",
                label: "Support Available",
                description: "Round-the-clock monitoring and support"
              }
            ].map((stat, index) => (
              <div
                key={index}
                className="group bg-white/80 backdrop-blur-lg p-6 rounded-2xl shadow-lg text-center hover:shadow-xl transition-all duration-300 ease-in-out hover:-translate-y-1 animate-fade-in"
                style={{
                  animationDelay: `${index * 150}ms`
                }}
              >
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </div>
                <div className="text-xl font-semibold text-gray-900 mb-2">
                  {stat.label}
                </div>
                <p className="text-gray-600">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
