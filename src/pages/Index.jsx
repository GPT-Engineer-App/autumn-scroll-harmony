import { useState, useEffect } from 'react';
import { Linkedin, Github, Mail, Leaf } from 'lucide-react';

const Index = () => {
  const [showEasterEgg, setShowEasterEgg] = useState(false);

  useEffect(() => {
    const konami = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
    let konamiIndex = 0;

    const handleKeyDown = (e) => {
      if (e.key === konami[konamiIndex]) {
        konamiIndex++;
        if (konamiIndex === konami.length) {
          setShowEasterEgg(true);
          konamiIndex = 0;
        }
      } else {
        konamiIndex = 0;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen bg-[#F2E8CF]">
      <header className="bg-[#D68C45] text-white py-4 sticky top-0 z-10">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold">Magnus Hambleton</h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-4 text-[#8C3D20]">About Me</h2>
          <p className="text-lg text-[#594A3C]">
            Experienced Product Manager with a passion for building innovative products that solve real-world problems. 
            Currently leading product development at Anthropic, focusing on cutting-edge AI technologies.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-4 text-[#8C3D20]">Experience</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold text-[#D68C45]">Product Manager</h3>
              <p className="text-[#594A3C]">Anthropic • Full-time</p>
              <p className="text-sm text-[#594A3C]">Apr 2022 - Present • 2 yrs 1 mo</p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-[#D68C45]">Product Manager</h3>
              <p className="text-[#594A3C]">Google • Full-time</p>
              <p className="text-sm text-[#594A3C]">Sep 2018 - Apr 2022 • 3 yrs 8 mos</p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-[#D68C45]">Product Manager</h3>
              <p className="text-[#594A3C]">Facebook • Full-time</p>
              <p className="text-sm text-[#594A3C]">Jul 2016 - Sep 2018 • 2 yrs 3 mos</p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-4 text-[#8C3D20]">Education</h2>
          <div>
            <h3 className="text-2xl font-semibold text-[#D68C45]">Stanford University</h3>
            <p className="text-[#594A3C]">Master of Science - MS, Computer Science</p>
            <p className="text-sm text-[#594A3C]">2014 - 2016</p>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-4 text-[#8C3D20]">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {['Product Management', 'Artificial Intelligence', 'Machine Learning', 'Data Analysis', 'User Experience (UX)', 'Agile Methodologies', 'Strategic Planning', 'Team Leadership'].map((skill) => (
              <span key={skill} className="bg-[#D68C45] text-white px-3 py-1 rounded-full text-sm">
                {skill}
              </span>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-4xl font-bold mb-4 text-[#8C3D20]">Contact</h2>
          <div className="flex space-x-4">
            <a href="https://www.linkedin.com/in/magnushambleton" target="_blank" rel="noopener noreferrer" className="text-[#8C3D20] hover:text-[#D68C45]">
              <Linkedin size={24} />
            </a>
            <a href="https://github.com/magnushambleton" target="_blank" rel="noopener noreferrer" className="text-[#8C3D20] hover:text-[#D68C45]">
              <Github size={24} />
            </a>
            <a href="mailto:magnus.hambleton@example.com" className="text-[#8C3D20] hover:text-[#D68C45]">
              <Mail size={24} />
            </a>
          </div>
        </section>
      </main>

      <footer className="bg-[#8C3D20] text-white py-4 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Magnus Hambleton. All rights reserved.</p>
        </div>
      </footer>

      {showEasterEgg && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-[#F2E8CF] p-8 rounded-lg text-center">
            <Leaf className="text-[#8C3D20] mx-auto mb-4" size={48} />
            <h3 className="text-2xl font-bold text-[#8C3D20] mb-2">Autumn Easter Egg!</h3>
            <p className="text-[#594A3C] mb-4">You've discovered the hidden autumn leaf. Embrace the beauty of change!</p>
            <button 
              onClick={() => setShowEasterEgg(false)}
              className="bg-[#D68C45] text-white px-4 py-2 rounded hover:bg-[#8C3D20] transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;
