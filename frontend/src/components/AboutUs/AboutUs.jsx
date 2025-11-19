import { useEffect, useRef, useState } from "react";
import Footer from "../Footer/Footer";
import "./AboutUs.css";

const AboutUs = () => {
  const [visibleBoxes, setVisibleBoxes] = useState([]);
  const [visibleTeamMembers, setVisibleTeamMembers] = useState([]);
  const boxRefs = useRef([]);
  const teamRefs = useRef([]);

  useEffect(() => {
    const observers = [];
    
    boxRefs.current.forEach((box, index) => {
      if (box) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                setVisibleBoxes((prev) => [...new Set([...prev, index])]);
              } else {
                setVisibleBoxes((prev) => prev.filter(i => i !== index));
              }
            });
          },
          { threshold: 0.2 }
        );
        
        observer.observe(box);
        observers.push(observer);
      }
    });

    teamRefs.current.forEach((member, index) => {
      if (member) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                setVisibleTeamMembers((prev) => [...new Set([...prev, index])]);
              } else {
                setVisibleTeamMembers((prev) => prev.filter(i => i !== index));
              }
            });
          },
          { threshold: 0.3 }
        );
        
        observer.observe(member);
        observers.push(observer);
      }
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  return (
    <div className="about-container">
      <div className="blob-pink"></div>
      <div className="blob-purple"></div>

      <div className="relative pt-24 pb-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto relative">
          <div className="hero-card">
            <h1 className="text-xl md:text-3xl lg:text-4xl font-extrabold text-left mb-3 md:mb-4 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent drop-shadow-lg animate-pulse">
              Career + AI = CarioAI
            </h1>
            <h2 className="text-lg md:text-2xl lg:text-3xl font-bold text-left mb-4 md:mb-6 text-black">
              AI That Makes Your Job Search Effortless
            </h2>
            <p className="text-left text-gray-700 text-xs md:text-base leading-relaxed">
              CarioAI blends the essence of your career journey with intelligent technology.<br className="hidden md:block"/>
              Our name reflects what we stand for — helping you grow, explore, and make smarter steps toward the opportunities that match your ambitions.
            </p>
          </div>

          <div className="absolute right-0 top-[40%] w-[800px] h-[800px] bg-gradient-to-br from-pink-400 via-pink-500 to-red-500 opacity-90 -mr-[200px] z-0"
               style={{ borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%" }}></div>
          
          <div className="absolute left-0 bottom-0 w-[600px] h-[600px] bg-gradient-to-br from-purple-300 to-purple-400 opacity-70 -ml-[200px] -mb-[200px] z-0"
               style={{ borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%" }}></div>

          <div className="relative z-10 mt-6 md:mt-[-40px] ml-0 md:ml-auto max-w-2xl lg:ml-[40%]">
            <div className="mission-card">
              <div className="flex justify-center mb-3 md:mb-4">
                <div className="w-12 md:w-14 h-12 md:h-14 bg-white/30 rounded-full flex items-center justify-center backdrop-blur-sm hover:rotate-180 transition-transform duration-700">
                  <svg className="w-7 md:w-9 h-7 md:h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" strokeWidth="2"/>
                    <circle cx="12" cy="12" r="6" strokeWidth="2"/>
                    <circle cx="12" cy="12" r="2" fill="currentColor"/>
                    <line x1="12" y1="2" x2="12" y2="6" strokeWidth="2"/>
                    <line x1="12" y1="18" x2="12" y2="22" strokeWidth="2"/>
                    <line x1="2" y1="12" x2="6" y2="12" strokeWidth="2"/>
                    <line x1="18" y1="12" x2="22" y2="12" strokeWidth="2"/>
                  </svg>
                </div>
              </div>
              <h2 className="text-lg md:text-2xl lg:text-3xl font-bold mb-3 md:mb-4 text-center">Our Mission</h2>
              <p className="text-xs md:text-base leading-relaxed text-center">
                Job searching shouldn't feel overwhelming. Our mission is to simplify the entire process by offering AI-powered tools that bring clarity, accuracy, and confidence to every candidate — no matter where they are in their career.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative py-16 px-4 md:px-8 lg:px-16 bg-gray-50">
        <div className="absolute bottom-0 right-0 w-[400px] h-[300px] bg-purple-300 opacity-60 -mr-32 -mb-32"
             style={{ clipPath: "ellipse(60% 70% at 80% 80%)" }}></div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-black">
            What We Do
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div 
              ref={(el) => (boxRefs.current[0] = el)}
              className="feature-box bg-orange-50 hover:bg-orange-100"
              style={{ opacity: visibleBoxes.includes(0) ? 1 : 0 }}>
              <h3 className="text-base md:text-lg font-bold mb-3 text-center text-black">
                Job Matching
              </h3>
              <p className="text-xs md:text-sm text-gray-800 text-center leading-relaxed">
                Upload your resume once — our AI analyzes your experience, skills, and goals to instantly recommend relevant job roles. No more endless searching.
              </p>
            </div>

            <div 
              ref={(el) => (boxRefs.current[1] = el)}
              className="feature-box bg-blue-50 hover:bg-blue-100"
              style={{ opacity: visibleBoxes.includes(1) ? 1 : 0 }}>
              <h3 className="text-base md:text-lg font-bold mb-3 text-center text-black">
                ATS Resume Review
              </h3>
              <p className="text-xs md:text-sm text-gray-800 text-center leading-relaxed">
                Get a detailed ATS compatibility check for your resume. Our AI highlights missing keywords, formatting issues, and areas to improve so your resume can pass applicant tracking systems and reach real recruiters.
              </p>
            </div>

            <div 
              ref={(el) => (boxRefs.current[2] = el)}
              className="feature-box bg-purple-50 hover:bg-purple-100"
              style={{ opacity: visibleBoxes.includes(2) ? 1 : 0 }}>
              <h3 className="text-base md:text-lg font-bold mb-3 text-center text-black">
                AI Mock Quiz & Skill Assessment
              </h3>
              <p className="text-xs md:text-sm text-gray-800 text-center leading-relaxed">
                Sharpen your knowledge with quizzes auto-generated for your target job role or skill set. Track your improvement and build confidence with every attempt.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div 
              ref={(el) => (boxRefs.current[3] = el)}
              className="feature-box bg-pink-50 hover:bg-pink-100"
              style={{ opacity: visibleBoxes.includes(3) ? 1 : 0 }}>
              <h3 className="text-base md:text-lg font-bold mb-3 text-center text-black">
                AI Interview Practice
              </h3>
              <p className="text-xs md:text-sm text-gray-800 text-center leading-relaxed">
                Practice confidently with AI-driven interview simulations tailored to your role. Receive real-time insights, answer suggestions, and personalized improvement tips.
              </p>
            </div>

            <div 
              ref={(el) => (boxRefs.current[4] = el)}
              className="feature-box bg-orange-50 hover:bg-orange-100"
              style={{ opacity: visibleBoxes.includes(4) ? 1 : 0 }}>
              <h3 className="text-base md:text-lg font-bold mb-3 text-center text-black">
                AI News & Career Insights
              </h3>
              <p className="text-xs md:text-sm text-gray-800 text-center leading-relaxed">
                Stay updated with AI-powered job market insights, industry trends, and career news tailored to your interests — helping you stay ahead and informed.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative py-16 px-4 md:px-8 lg:px-16 pb-0">
        <div className="absolute bottom-0 left-0 right-0 h-[600px] bg-purple-300 -z-10"></div>
        <div className="absolute bottom-0 left-0 right-0 h-[200px] bg-gradient-to-b from-transparent to-purple-300 -z-10"></div>
        
        <div className="absolute top-0 left-0 right-0 h-32 bg-white -z-5"
             style={{ clipPath: "ellipse(100% 100% at 50% 0%)" }}></div>
        
        <div className="max-w-5xl mx-auto relative z-10 pb-24">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-black">
            Meet Our Team
          </h2>
          <div className="team-card">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-16 gap-y-10">
              <div 
                ref={(el) => (teamRefs.current[0] = el)}
                className="team-member"
                style={{ opacity: visibleTeamMembers.includes(0) ? 1 : 0 }}>
                <div className="team-avatar bg-blue-400">
                  👨
                </div>
                <div className="flex-1">
                  <h3 className="text-lg md:text-xl font-bold text-black">Sajal Sangal</h3>
                  <p className="text-sm text-gray-600 mb-2">Data Scientist</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-red-400 text-white rounded-full text-xs font-semibold">UI/UX</span>
                    <span className="px-3 py-1 bg-blue-400 text-white rounded-full text-xs font-semibold">Frontend</span>
                    <span className="px-3 py-1 bg-yellow-400 text-white rounded-full text-xs font-semibold">backend</span>
                  </div>
                </div>
              </div>

              <div 
                ref={(el) => (teamRefs.current[1] = el)}
                className="team-member"
                style={{ opacity: visibleTeamMembers.includes(1) ? 1 : 0 }}>
                <div className="team-avatar bg-yellow-400">
                  👩
                </div>
                <div className="flex-1">
                  <h3 className="text-lg md:text-xl font-bold text-black">Deepika Tyagi</h3>
                  <p className="text-sm text-gray-600 mb-2">Data Scientist</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-blue-400 text-white rounded-full text-xs font-semibold">Frontend</span>
                    <span className="px-3 py-1 bg-yellow-400 text-white rounded-full text-xs font-semibold">backend</span>
                  </div>
                </div>
              </div>

              <div 
                ref={(el) => (teamRefs.current[2] = el)}
                className="team-member"
                style={{ opacity: visibleTeamMembers.includes(2) ? 1 : 0 }}>
                <div className="team-avatar bg-yellow-300">
                  👨
                </div>
                <div className="flex-1">
                  <h3 className="text-lg md:text-xl font-bold text-black">Madan Dahiphale</h3>
                  <p className="text-sm text-gray-600 mb-2">Data Scientist</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-red-400 text-white rounded-full text-xs font-semibold hover:scale-110 transition-transform duration-200">UI/UX</span>
                    <span className="px-3 py-1 bg-yellow-400 text-white rounded-full text-xs font-semibold hover:scale-110 transition-transform duration-200">backend</span>
                  </div>
                </div>
              </div>

              <div 
                ref={(el) => (teamRefs.current[3] = el)}
                className="team-member"
                style={{ opacity: visibleTeamMembers.includes(3) ? 1 : 0 }}>
                <div className="team-avatar bg-green-400">
                  👨
                </div>
                <div className="flex-1">
                  <h3 className="text-lg md:text-xl font-bold text-black">Rathin Kar</h3>
                  <p className="text-sm text-gray-600 mb-2">Data Scientist</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-red-400 text-white rounded-full text-xs font-semibold hover:scale-110 transition-transform duration-200">UI/UX</span>
                  </div>
                </div>
              </div>

              <div 
                ref={(el) => (teamRefs.current[4] = el)}
                className="team-member"
                style={{ opacity: visibleTeamMembers.includes(4) ? 1 : 0 }}>
                <div className="team-avatar bg-purple-400">
                  👩
                </div>
                <div className="flex-1">
                  <h3 className="text-lg md:text-xl font-bold text-black">Ankita Babhulkar</h3>
                  <p className="text-sm text-gray-600 mb-2">Software Engineer</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-blue-400 text-white rounded-full text-xs font-semibold hover:scale-110 transition-transform duration-200">Frontend</span>
                    <span className="px-3 py-1 bg-red-400 text-white rounded-full text-xs font-semibold hover:scale-110 transition-transform duration-200">UI/UX</span>
                  </div>
                </div>
              </div>

              <div 
                ref={(el) => (teamRefs.current[5] = el)}
                className="team-member"
                style={{ opacity: visibleTeamMembers.includes(5) ? 1 : 0 }}>
                <div className="team-avatar bg-red-400">
                  👨
                </div>
                <div className="flex-1">
                  <h3 className="text-lg md:text-xl font-bold text-black">Onkar Singh</h3>
                  <p className="text-sm text-gray-600 mb-2">Data Scientist</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-red-400 text-white rounded-full text-xs font-semibold">UI/UX</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
