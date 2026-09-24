export default function Footer() {
  return (
    <footer className="bg-[#080d1a] text-gray-400 text-sm">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-6 gap-8">
        
        {/* Brand */}
        <div className="md:col-span-2 space-y-4">
          <div className="flex items-center gap-2 text-white font-bold text-xl">
            <span>K TECH</span>
          </div>
          <p className="text-gray-400 text-sm">
            We build what matters, innovate what’s next, and integrate technology that moves ideas forward.
          </p>
        </div>

        {/* Company */}
        <div className="space-y-3">
          <h3 className="text-white font-semibold">Company</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white">About Us</a></li>
            <li><a href="#" className="hover:text-white">Careers</a></li>
            <li><a href="#" className="hover:text-white">Blog</a></li>
            <li><a href="#" className="hover:text-white">Press</a></li>
            <li><a href="#" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div className="space-y-3">
          <h3 className="text-white font-semibold">Resources</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white">Guides & Tutorials</a></li>
            <li><a href="#" className="hover:text-white">Case Studies</a></li>
            <li><a href="#" className="hover:text-white">Community Forum</a></li>
            <li><a href="#" className="hover:text-white">API Docs</a></li>
            <li><a href="#" className="hover:text-white">Webinars</a></li>
          </ul>
        </div>

        {/* Support */}
        <div className="space-y-3">
          <h3 className="text-white font-semibold">Support</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white">Help Center</a></li>
            <li><a href="#" className="hover:text-white">Terms of Service</a></li>
            <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white">FAQs</a></li>
            <li><a href="#" className="hover:text-white">Status Page</a></li>
          </ul>
        </div>

        {/* Connect */}
        <div className="space-y-3">
          <h3 className="text-white font-semibold">Connect</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white">X(Twitter)</a></li>
            <li><a href="#" className="hover:text-white">LinkedIn</a></li>
            <li><a href="#" className="hover:text-white">Instagram</a></li>
            <li><a href="#" className="hover:text-white">Facebook</a></li>
            <li><a href="#" className="hover:text-white">YouTube</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800/80 py-6 px-6 max-w-7xl mx-auto flex justify-between text-xs text-gray-500">
        <p>© Copyright 2025 - K TECH.</p>
        <div className="space-x-3">
          <a href="#" className="hover:text-gray-300">Terms & Conditions</a>
          <span>|</span>
          <a href="#" className="hover:text-gray-300">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
}