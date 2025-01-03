import { useState, useEffect } from 'react';
import './landing.css'
// Define the interface for the expected data
interface LandingPageData {
  logo: string;
  navigation: { label: string; link: string }[];
  hero: {
    title: string;
    subtitle: string;
    ctaText: string;
    ctaLink: string;
  };
  features: { icon: string; title: string; description: string }[];
  faq: { title: string; questions: { question: string; answer: string }[] };
  footer: { text: string; links: { label: string; url: string }[] };
}


function LangdingPage() {
  const [data, setData] = useState<LandingPageData | null>(null);
  // Fetch data from a file
  useEffect(() => {
    fetch('/data/landingPageData.json') // Assuming data is stored in a JSON file
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.log('Error fetching data:', error));
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className="landing-page">
      {/* Header Section */}
      {/* <header className="header">
        <nav className="navigation">
          {data.navigation.map((item, index) => (
            <a key={index} href={item.link}>{item.label}</a>
          ))}
        </nav>
      </header> */}

      {/* Main Section */}
      <main className="main-content">
        <section className="hero">
          <div>
            <h1>{data.hero.title}</h1>
            <p>{data.hero.subtitle}</p>
            <button onClick={() => window.location.href = data.hero.ctaLink}>
              {data.hero.ctaText}
            </button>
          </div>
          <div className="logo">
            <img src={data.logo} alt="Logo" />
          </div>
        </section>

        {/* Features Section */}
        <section className="features">
          {data.features.map((feature, index) => (
            <div key={index} className="feature-item">
              <img src={feature.icon} alt={feature.title} />
              <h2>{feature.title}</h2>
              <p>{feature.description}</p>
            </div>
          ))}
        </section>

        {/* FAQ Section */}
        <section className="faq">
          <h2>{data.faq.title}</h2>
          {data.faq.questions.map((faq, index) => (
            <div key={index} className="faq-item">
              <h3>{faq.question}</h3>
              <p>{faq.answer}</p>
            </div>
          ))}
        </section>
      </main>

      {/* Footer Section */}
      <footer className="footer">
        <p>{data.footer.text}</p>
        <nav>
          {data.footer.links.map((link, index) => (
            <a key={index} href={link.url}>{link.label}</a>
          ))}
        </nav>
      </footer>
    </div>
  );
}

export default LangdingPage