import { useState } from 'react';
import { Globe, Lightbulb, Rocket, Shield, Clock, Mail, Phone, MapPin, Send } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description }) => (
  <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-lg transition-transform transform hover:scale-105">
    <div className="p-4 bg-blue-100 text-blue-600 rounded-full mb-4">
      <Icon size={32} />
    </div>
    <h3 className="text-xl font-bold mb-2 text-gray-800">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const App = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState(null); // 'success', 'error'

  const heroContent = {
    title: "Der Digitale Produktpass (DPP) ist die Zukunft. Transpareo AG bietet die Lösung, die heute funktioniert.",
    subtitle: "Wir helfen Unternehmen dabei, den DPP nicht als Last, sondern als Chance für Transparenz, Vertrauen und nachhaltiges Wachstum zu nutzen.",
  };

  const features = [
    {
      icon: Globe,
      title: "Universalität",
      description: "Unsere Lösung ist nicht auf eine Branche beschränkt. Sie ist universell einsetzbar für den gesamten DACH-Raum und darüber hinaus.",
    },
    {
      icon: Lightbulb,
      title: "Fundierte Erfahrung",
      description: "Seit 12 Jahren entwickeln wir erfolgreich QR-basierte Produktinformationslösungen. Mit über 100 zufriedenen Kunden haben wir die nötige Erfahrung.",
    },
    {
      icon: Rocket,
      title: "Technologische Vorreiterrolle",
      description: "Wir nutzen innovative Technologien wie NFTs und KI-gestützte Online-Umfragen, um tiefe Einblicke in Kundenbedürfnisse zu gewinnen.",
    },
    {
      icon: Clock,
      title: "Zeit- und Investitionssicherheit",
      description: "Während andere noch entwickeln, bieten wir eine Lösung, die heute bereits funktioniert. Das gibt unseren Kunden die nötige Investitionssicherheit.",
    },
    {
      icon: Shield,
      title: "Schweizer Qualitätsbewusstsein",
      description: "Als Schweizer Unternehmen stehen wir für höchste Qualität, Präzision und Zuverlässigkeit.",
    },
  ];

  const contactInfo = {
    address: "Transpareo AG, Grabenstrasse 15a, CH 6340 Baar/ZG, Switzerland",
    phone: "+41 79 299 66 31",
    email: "office@transpareo.com",
    website: "www.transpareo.com",
  };
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;
    if (!name || !email || !message) {
      setFormStatus('error');
      return;
    }
    
    const mailtoLink = `mailto:guenter.reichelt@transpareo.com?subject=Anfrage von der Website&body=Name: ${encodeURIComponent(name)}%0D%0AEmail: ${encodeURIComponent(email)}%0D%0ANachricht: ${encodeURIComponent(message)}`;
    window.location.href = mailtoLink;
    setFormStatus('success');
    setFormData({ name: '', email: '', message: '' });
  };


  return (
    <div className="font-sans bg-gray-50 min-h-screen text-gray-800" style={{ fontFamily: 'Aptos, sans-serif' }}>
      {/* Header section */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          {/* Logo with colored syllables */}
          <a href="#" className="text-2xl font-bold">
            <span className="text-blue-600">Trans</span>
            <span className="text-green-500">pa</span>
            <span className="text-purple-600">reo</span> ag
          </a>
          <button className="md:hidden text-gray-600">
            {/* Hamburger menu icon */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </nav>
      </header>

      {/* Hero section */}
      <main>
        <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-4">{heroContent.title}</h1>
            <p className="text-lg sm:text-xl mb-8 max-w-2xl mx-auto">{heroContent.subtitle}</p>
          </div>
        </section>

        {/* Unique selling points section */}
        <section id="features" className="py-20 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Unser Alleinstellungsmerkmal</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <FeatureCard key={index} {...feature} />
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form section */}
        <section id="contact" className="py-20 px-4 bg-white">
            <div className="container mx-auto max-w-2xl">
                <h2 className="text-3xl font-bold text-center mb-12">Kontakt aufnehmen</h2>
                {formStatus === 'success' && (
                    <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg mb-6 text-center">
                        Ihre Anfrage wurde erfolgreich gesendet!
                    </div>
                )}
                {formStatus === 'error' && (
                    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg mb-6 text-center">
                        Bitte füllen Sie alle Felder aus.
                    </div>
                )}
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">E-Mail</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700">Nachricht</label>
                        <textarea
                            id="message"
                            name="message"
                            rows="4"
                            value={formData.message}
                            onChange={handleInputChange}
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                            required
                        ></textarea>
                    </div>
                    <div className="text-center">
                        <button
                            type="submit"
                            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-300"
                        >
                            <Send size={20} className="mr-2" />
                            Nachricht senden
                        </button>
                    </div>
                </form>
            </div>
        </section>

        {/* QR code section */}
        <section className="bg-gray-100 py-12 px-4 text-center">
          <div className="container mx-auto">
            <h2 className="text-2xl font-bold mb-4">Unverbindliches Erstgespräch vereinbaren</h2>
            <p className="text-lg text-gray-600 mb-8">Scannen Sie den QR-Code, um uns zu kontaktieren.</p>
            <div className="flex justify-center">
              {/* Actual QR code that links to the Transpareo AG website */}
              <img
                src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://${contactInfo.website}`}
                alt="QR Code für Erstgespräch"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>
      </main>

      {/* Footer section */}
      <footer className="bg-gray-900 text-gray-300 py-10 px-4">
        <div className="container mx-auto text-center md:text-left">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-start mb-6">
            <div className="mb-6 md:mb-0">
              <h4 className="text-xl font-bold text-white mb-2">Transpareo ag</h4>
              <p className="text-sm">Digitaler Produktpass und mehr.</p>
            </div>
            <div className="flex flex-col space-y-2">
              <div className="flex items-center justify-center md:justify-start">
                <MapPin size={18} className="mr-2" />
                <p>{contactInfo.address}</p>
              </div>
              <div className="flex items-center justify-center md:justify-start">
                <Phone size={18} className="mr-2" />
                <p>{contactInfo.phone}</p>
              </div>
              <div className="flex items-center justify-center md:justify-start">
                <Mail size={18} className="mr-2" />
                <a href={`mailto:${contactInfo.email}`} className="hover:underline">{contactInfo.email}</a>
              </div>
              <div className="flex items-center justify-center md:justify-start">
                <Globe size={18} className="mr-2" />
                <a href={`https://${contactInfo.website}`} target="_blank" rel="noopener noreferrer" className="hover:underline">{contactInfo.website}</a>
              </div>
            </div>
          </div>
          <div class="text-center pt-6 border-t border-gray-700">
            <p class="text-sm">© {new Date().getFullYear()} Transpareo ag. Alle Rechte vorbehalten.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
