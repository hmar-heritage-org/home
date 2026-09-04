import { Link } from 'react-router-dom';
import { Github, Mail, Heart } from 'lucide-react';
import LogoIcon from './LogoIcon';

const footerLinks = {
  Discover: [
    { label: 'The Hmar', to: '/hmars' },
    { label: 'Projects', to: '/projects' },
  ],
  Foundation: [
    { label: 'Philosophy', to: '/philosophy' },
    { label: 'Standards', to: '/standards' },
    { label: 'Grantmakers', to: '/grantmakers' },
    { label: 'People', to: '/people' },
  ],
  Contribute: [
    { label: 'Join the Foundation', to: '/join' },
    { label: 'Resources & Datasets', to: '/resources' },
    { label: 'GitHub', to: 'https://github.com/hmar-heritage-org' },
    { label: 'Hugging Face Org', to: 'https://huggingface.co/hmar-heritage-org' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-300 mt-20">
      <div className="container-page py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <Link to="/" className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-[#064e3b] flex items-center justify-center text-white">
                <LogoIcon className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="font-semibold text-white text-sm leading-tight">
                  Hmar Heritage
                </div>
                <div className="text-xs text-stone-400 leading-tight">
                  Foundation
                </div>
              </div>
            </Link>
            <p className="text-sm text-stone-400 leading-relaxed max-w-xs">
              An open, community-driven foundation preserving Hmar heritage,
              language, and cultural artifacts across North East India.
            </p>
            <div className="flex gap-3 mt-4">
              <a
                href="https://github.com/hmar-heritage-org"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-stone-800 flex items-center justify-center hover:bg-[#064e3b] transition-colors"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a
                href="https://huggingface.co/hmar-heritage-org"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-stone-800 flex items-center justify-center hover:bg-[#064e3b] transition-colors"
                aria-label="Hugging Face"
              >
                <img src="/huggingface-logo.svg" alt="Hugging Face" className="w-4 h-4 object-contain brightness-0 invert opacity-80" />
              </a>
              <a
                href="mailto:donalmuolhoi@gmail.com"
                className="w-9 h-9 rounded-lg bg-stone-800 flex items-center justify-center hover:bg-[#064e3b] transition-colors"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h3 className="text-xs font-mono uppercase tracking-widest text-stone-500 mb-4">
                {section}
              </h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    {link.to.startsWith('http') ? (
                      <a
                        href={link.to}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-stone-400 hover:text-white transition-colors link-underline"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        to={link.to}
                        className="text-sm text-stone-400 hover:text-white transition-colors link-underline"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-stone-500">
            &copy; {new Date().getFullYear()} Hmar Heritage Foundation. Content
            licensed under CC BY-SA 4.0 unless otherwise noted.
          </p>
          <p className="text-xs text-stone-500 flex items-center gap-1.5">
            Built with <Heart size={12} className="text-amber-500" /> by
            community volunteers
          </p>
        </div>
      </div>
    </footer>
  );
}
