'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Logo from './Logo';

const APP_STORE_URL = 'https://apps.shopify.com/arka-smart-analyzer';

type NavigationItem =
  | { label: string; type: 'section'; target: string }
  | { label: string; type: 'internal'; href: string }
  | { label: string; type: 'external'; href: string };

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const goToSection = (sectionId: string) => {
    setIsMobileMenuOpen(false);

    if (pathname === '/') {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }

    router.push(`/#${sectionId}`);
  };

  const navigationItems: NavigationItem[] = [
    { label: 'Features', type: 'section', target: 'features' },
    { label: 'Overview', type: 'section', target: 'how-it-works' },
    { label: 'Pricing', type: 'section', target: 'pricing' },
    { label: 'About', type: 'internal', href: '/about' },
    { label: 'Contact', type: 'internal', href: '/contact' },
    { label: 'Blog', type: 'internal', href: '/blog' },
  ];

  const renderNavItem = (item: NavigationItem, mobile = false) => {
    const baseClass = mobile
      ? 'text-left text-text-primary font-medium hover:text-primary transition-colors duration-200 py-2'
      : 'text-text-primary font-medium hover:text-primary transition-colors duration-200';

    if (item.type === 'section') {
      return (
        <button
          key={item.label}
          onClick={() => goToSection(item.target)}
          className={baseClass}
        >
          {item.label}
        </button>
      );
    }

    if (item.type === 'internal') {
      return (
        <Link
          key={item.label}
          href={item.href}
          onClick={() => setIsMobileMenuOpen(false)}
          className={baseClass}
        >
          {item.label}
        </Link>
      );
    }

    return (
      <a
        key={item.label}
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => setIsMobileMenuOpen(false)}
        className={baseClass}
      >
        {item.label}
      </a>
    );
  };

  return (
    <nav
      className={`
        fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${isScrolled ? 'bg-white/85 backdrop-blur-lg shadow-md' : 'bg-white'}
      `}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          <button
            type="button"
            className="flex items-center gap-2 cursor-pointer group"
            onClick={() => goToSection('hero')}
          >
            <Logo />
            {/* <span className="text-2xl font-bold gradient-text">Arka</span> */}
          </button>

          <div className="hidden md:flex items-center gap-8">
            {navigationItems.map((item) => renderNavItem(item))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 text-primary font-semibold hover:bg-accent/20 rounded-lg transition-all duration-200"
            >
              View on Shopify
            </a>
          </div>

          <button
            type="button"
            className="md:hidden text-2xl text-primary"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden py-6 border-t border-accent/30">
            <div className="flex flex-col gap-4">
              {navigationItems.map((item) => renderNavItem(item, true))}

              <div className="flex flex-col gap-3 mt-4">
                <a
                  href={APP_STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 text-center text-primary font-semibold border-2 border-primary rounded-lg hover:bg-accent/20 transition-all duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  View on Shopify
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}