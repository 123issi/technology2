'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
  const [selectedCountry, setSelectedCountry] = useState('');

  const countries = [
    { code: 'ZA', name: 'South Africa', flag: 'https://readdy.ai/api/search-image?query=South%20Africa%20flag%20clean%20simple%20design%20white%20background&width=32&height=24&seq=za-flag&orientation=landscape' },
    { code: 'CD', name: 'DR Congo', flag: 'https://readdy.ai/api/search-image?query=Democratic%20Republic%20of%20Congo%20flag%20clean%20simple%20design%20white%20background&width=32&height=24&seq=cd-flag&orientation=landscape' },
    { code: 'TZ', name: 'Tanzania', flag: 'https://readdy.ai/api/search-image?query=Tanzania%20flag%20clean%20simple%20design%20white%20background&width=32&height=24&seq=tz-flag&orientation=landscape' },
    { code: 'RW', name: 'Rwanda', flag: 'https://readdy.ai/api/search-image?query=Rwanda%20flag%20clean%20simple%20design%20white%20background&width=32&height=24&seq=rw-flag&orientation=landscape' },
    { code: 'BI', name: 'Burundi', flag: 'https://readdy.ai/api/search-image?query=Burundi%20flag%20clean%20simple%20design%20white%20background&width=32&height=24&seq=bi-flag&orientation=landscape' },
    { code: 'KE', name: 'Kenya', flag: 'https://readdy.ai/api/search-image?query=Kenya%20flag%20clean%20simple%20design%20white%20background&width=32&height=24&seq=ke-flag&orientation=landscape' },
    { code: 'UG', name: 'Uganda', flag: 'https://readdy.ai/api/search-image?query=Uganda%20flag%20clean%20simple%20design%20white%20background&width=32&height=24&seq=ug-flag&orientation=landscape' },
    { code: 'SS', name: 'South Sudan', flag: 'https://readdy.ai/api/search-image?query=South%20Sudan%20flag%20clean%20simple%20design%20white%20background&width=32&height=24&seq=ss-flag&orientation=landscape' },
    { code: 'SO', name: 'Somalia', flag: 'https://readdy.ai/api/search-image?query=Somalia%20flag%20clean%20simple%20design%20white%20background&width=32&height=24&seq=so-flag&orientation=landscape' }
  ];

  const courses = [
    {
      id: 1,
      title: 'Software Development',
      duration: '12 months',
      description: 'Comprehensive training in modern programming languages including Python, Java, and JavaScript. Learn software architecture, database design, and agile development methodologies.',
      level: 'Beginner to Advanced',
      certType: 'Industry Certificate'
    },
    {
      id: 2,
      title: 'Cybersecurity',
      duration: '8 months',
      description: 'Master cybersecurity fundamentals, threat analysis, network security, and incident response. Prepare for industry-standard security roles.',
      level: 'Intermediate',
      certType: 'CompTIA Security+'
    },
    {
      id: 3,
      title: 'Web Application Development',
      duration: '10 months',
      description: 'Build modern web applications using HTML, CSS, JavaScript, React, and Node.js. Learn responsive design and full-stack development.',
      level: 'Beginner to Advanced',
      certType: 'Industry Certificate'
    },
    {
      id: 4,
      title: 'Ethical Hacking',
      duration: '6 months',
      description: 'Learn penetration testing, vulnerability assessment, and ethical hacking techniques. Hands-on training with real-world scenarios.',
      level: 'Advanced',
      certType: 'CEH, eJPT'
    },
    {
      id: 5,
      title: 'Cloud Computing (Azure)',
      duration: '9 months',
      description: 'Master Microsoft Azure cloud services, deployment, and management. Free exam vouchers included for girls.',
      level: 'Intermediate',
      certType: 'Microsoft Azure Certificates'
    },
    {
      id: 6,
      title: 'CompTIA A+',
      duration: '4 months',
      description: 'Foundation course for IT support and hardware troubleshooting. Perfect entry point into technology careers.',
      level: 'Beginner',
      certType: 'CompTIA A+'
    },
    {
      id: 7,
      title: 'CompTIA Security+',
      duration: '5 months',
      description: 'Essential cybersecurity skills and knowledge. Industry-recognized certification for security professionals.',
      level: 'Intermediate',
      certType: 'CompTIA Security+'
    },
    {
      id: 8,
      title: 'CompTIA Network+',
      duration: '6 months',
      description: 'Comprehensive networking fundamentals, protocols, and infrastructure management. Build strong networking foundation.',
      level: 'Intermediate',
      certType: 'CompTIA Network+'
    },
    {
      id: 9,
      title: 'OSCP Preparation',
      duration: '12 months',
      description: 'Intensive penetration testing training preparing for the prestigious OSCP certification. Hands-on lab experience included.',
      level: 'Advanced',
      certType: 'OSCP'
    },
    {
      id: 10,
      title: 'CCNA Cisco Networking',
      duration: '8 months',
      description: 'Cisco networking fundamentals, routing, switching, and network troubleshooting. Industry-standard networking certification.',
      level: 'Intermediate',
      certType: 'CCNA'
    },
    {
      id: 11,
      title: 'CCNP Advanced Networking',
      duration: '14 months',
      description: 'Advanced Cisco networking technologies, enterprise networking solutions, and complex network implementations.',
      level: 'Advanced',
      certType: 'CCNP'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-red-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 via-blue-700 to-red-600 text-white shadow-lg">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <span className="text-blue-600 font-bold text-xl">EAGT</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold font-pacifico">East African Girls in Tech</h1>
                <p className="text-blue-100 text-sm">Empowering East African Girls in Technology</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-6">
              <a href="#courses" className="hover:text-blue-200 transition-colors cursor-pointer">Courses</a>
              <a href="#about" className="hover:text-blue-200 transition-colors cursor-pointer">About</a>
              <a href="#contact" className="hover:text-blue-200 transition-colors cursor-pointer">Contact</a>
              <Link href="/apply">
                <button className="bg-white text-blue-600 px-6 py-2 rounded-full font-semibold hover:bg-blue-50 transition-colors whitespace-nowrap cursor-pointer">
                  Apply Now
                </button>
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-600 to-red-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Empowering East African Girls in Tech
            </h2>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Free technology education and certifications for girls across East Africa. 
              Join thousands of women building successful tech careers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/apply">
                <button className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-50 transition-colors whitespace-nowrap cursor-pointer">
                  Start Your Journey
                </button>
              </Link>
              <a href="#courses" className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors whitespace-nowrap cursor-pointer">
                View Courses
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Countries Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">Serving East African Countries</h3>
          <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-6 max-w-4xl mx-auto">
            {countries.map((country) => (
              <div key={country.code} className="text-center group cursor-pointer">
                <div className="w-16 h-12 mx-auto mb-2 rounded overflow-hidden shadow-md group-hover:shadow-lg transition-shadow">
                  <img 
                    src={country.flag} 
                    alt={`${country.name} flag`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-sm font-medium text-gray-700 group-hover:text-blue-600 transition-colors">
                  {country.name}
                </p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <p className="text-lg text-gray-600">
              <span className="font-semibold text-blue-600">Headquarters:</span> Johannesburg, South Africa
            </p>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="py-20 bg-gradient-to-br from-blue-50 to-red-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-800 mb-4">Our Technology Courses</h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive training programs designed to build successful tech careers. 
              All courses include free certifications and job placement support.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course) => (
              <Link key={course.id} href={`/course/${course.id}`}>
                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group">
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                        {course.duration}
                      </span>
                      <span className="text-red-500 font-semibold text-sm">FREE</span>
                    </div>
                    
                    <h4 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">
                      {course.title}
                    </h4>
                    
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {course.description}
                    </p>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-sm text-gray-500">
                        <i className="ri-user-line w-4 h-4 flex items-center justify-center mr-2"></i>
                        <span>{course.level}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <i className="ri-award-line w-4 h-4 flex items-center justify-center mr-2"></i>
                        <span>{course.certType}</span>
                      </div>
                    </div>
                    
                    <button className="w-full bg-gradient-to-r from-blue-600 to-red-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-red-700 transition-all whitespace-nowrap cursor-pointer">
                      Learn More
                    </button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-16">Why Choose EAGT?</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-graduation-cap-line text-2xl text-blue-600"></i>
              </div>
              <h4 className="text-xl font-semibold mb-2">Free Education</h4>
              <p className="text-gray-600">Complete technology training at no cost for eligible students</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-award-line text-2xl text-red-600"></i>
              </div>
              <h4 className="text-xl font-semibold mb-2">Industry Certifications</h4>
              <p className="text-gray-600">Earn recognized certificates from Microsoft, CompTIA, and Cisco</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-briefcase-line text-2xl text-blue-600"></i>
              </div>
              <h4 className="text-xl font-semibold mb-2">Job Placement</h4>
              <p className="text-gray-600">Career support and job placement assistance upon completion</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-global-line text-2xl text-red-600"></i>
              </div>
              <h4 className="text-xl font-semibold mb-2">Regional Network</h4>
              <p className="text-gray-600">Connect with tech professionals across East Africa</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-red-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-4xl font-bold mb-6">Ready to Start Your Tech Journey?</h3>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of East African women who have transformed their careers through technology. 
            Apply today and take the first step towards your future.
          </p>
          <Link href="/apply">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-50 transition-colors whitespace-nowrap cursor-pointer">
              Apply Now - It's Free!
            </button>
          </Link>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">Contact Us</h3>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h4 className="text-xl font-semibold mb-6">Get in Touch</h4>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <i className="ri-map-pin-line w-5 h-5 flex items-center justify-center text-blue-600 mr-3"></i>
                    <span>Johannesburg, South Africa (Headquarters)</span>
                  </div>
                  <div className="flex items-center">
                    <i className="ri-phone-line w-5 h-5 flex items-center justify-center text-blue-600 mr-3"></i>
                    <span>+27 780 570 803</span>
                  </div>
                  <div className="flex items-center">
                    <i className="ri-user-line w-5 h-5 flex items-center justify-center text-blue-600 mr-3"></i>
                    <span>CEO: Hakizimana</span>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-6">Live Chat Support</h4>
                <p className="text-gray-600 mb-4">
                  Get instant support for all East African countries. Our team is here to help you start your tech journey.
                </p>
                <button className="bg-gradient-to-r from-blue-600 to-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-red-700 transition-all whitespace-nowrap cursor-pointer">
                  Start Live Chat
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h5 className="text-lg font-semibold mb-4">East African Girls in Tech</h5>
              <p className="text-gray-400">Empowering the next generation of female tech leaders across East Africa.</p>
            </div>
            <div>
              <h5 className="text-lg font-semibold mb-4">Courses</h5>
              <ul className="space-y-2 text-gray-400">
                <li>Software Development</li>
                <li>Cybersecurity</li>
                <li>Cloud Computing</li>
                <li>Networking</li>
              </ul>
            </div>
            <div>
              <h5 className="text-lg font-semibold mb-4">Countries</h5>
              <ul className="space-y-2 text-gray-400">
                <li>South Africa</li>
                <li>Kenya</li>
                <li>Tanzania</li>
                <li>Rwanda</li>
              </ul>
            </div>
            <div>
              <h5 className="text-lg font-semibold mb-4">Support</h5>
              <ul className="space-y-2 text-gray-400">
                <li>Application Help</li>
                <li>Technical Support</li>
                <li>Career Guidance</li>
                <li>Live Chat</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 East African Girls in Tech. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}