import { Facebook, Twitter, Instagram, Linkedin, Youtube, Rss } from 'lucide-react';
import { Music } from 'lucide-react';
const navigation = [
    { name: 'Overview', href: '/components/overview' },
    { name: 'Partners', href: '/components/sponsers' },
    { name: 'Guidelines', href: '/components/guidelines' },
    { name: 'News', href: '/components/news' },
    { name: 'FAQ', href: '/components/faq' }
];

const legalLinks = [
    { name: 'Terms & Conditions', href: '#' },
    { name: 'Privacy Policy', href: '#' },

];

const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: '#' },
    { name: 'Twitter', icon: Twitter, href: '#' },
    { name: 'Instagram', icon: Instagram, href: '#' },
    { name: 'LinkedIn', icon: Linkedin, href: '#' },

];
export default function Footer() {
    return (
        <footer className="bg-black text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Main Navigation */}
                <nav className="flex flex-wrap gap-x-8 mb-12">
                    {navigation.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className="text-white hover:text-gray-300 transition-colors"
                        >
                            {item.name}
                        </a>
                    ))}
                </nav>

                {/* Divider */}
                <div className="border-t border-gray-800 mb-12"></div>

                {/* Social Links */}
                <div className="flex flex-wrap gap-8 mb-12">
                    {socialLinks.map((item) => {
                        const Icon = item.icon;
                        return (
                            <a
                                key={item.name}
                                href={item.href}
                                className="text-white hover:text-gray-300 transition-colors"
                                aria-label={item.name}
                            >
                                <Icon className="w-6 h-6" />
                            </a>
                        );
                    })}
                </div>

                {/* Legal Links */}
                <div className="flex flex-wrap gap-8 mb-8">
                    {legalLinks.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className="text-white hover:text-gray-300 transition-colors"
                        >
                            {item.name}
                        </a>
                    ))}
                </div>

                {/* Copyright and Build Info */}
                <div className="flex flex-wrap justify-center text-sm text-gray-400">
                    <p>© Vayudoot Foundation . All Rights Reserved.</p>

                </div>
            </div>
        </footer>

    )
}