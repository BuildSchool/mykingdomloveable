const footerLinks = [
  {
    title: "Company",
    links: ["About Us", "Careers", "Contact", "Blog"]
  },
  {
    title: "Resources",
    links: ["Documentation", "Help Center", "API", "Status"]
  },
  {
    title: "Legal",
    links: ["Privacy Policy", "Terms of Service", "Cookie Policy"]
  }
];

export const Footer = () => {
  return (
    <footer className="py-12 px-8 bg-kingdom-text text-white">
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold mb-4">MyKingdom.ai</h3>
            <p className="text-sm text-white/70">
              Empowering Property Owners with Smart AI Solutions
            </p>
          </div>
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h3 className="font-bold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href="#" className="text-sm text-white/70 hover:text-white">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};