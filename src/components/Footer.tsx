import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 mt-auto w-full">
      <div className="w-full px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <Link href="/" className="inline-block mb-4">
            <Image
              src="/logo.png"
              alt="Dallas Grand Beach Hotel"
              width={48}
              height={48}
              className="h-12 w-auto object-contain"
            />
          </Link>
          <p className="text-sm text-gray-300">
            Dallas Grand Beach Hotel & Resort Suite<br />
            Oghara, Delta State
          </p>
          <p className="mt-4 text-sm text-gray-400">
            © 2025 Dallas Grand Beach Hotel. All rights reserved.
          </p>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link href="/rooms" className="hover:text-white transition-colors">
                Rooms
              </Link>
            </li>
            <li>
              <Link href="/facilities" className="hover:text-white transition-colors">
                Facilities
              </Link>
            </li>
            <li>
              <Link href="/reviews" className="hover:text-white transition-colors">
                Reviews
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white transition-colors">
                Contact & Support
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-3">Contact</h4>
          <p className="text-sm text-gray-300">
            Phone:{' '}
            <a href="tel:+1234567890" className="hover:text-white transition-colors">
              +1 (234) 567-890
            </a>
          </p>
          <p className="text-sm text-gray-300">
            Email:{' '}
            <a
              href="mailto:info@dallasgrandbeach.com"
              className="hover:text-white transition-colors"
            >
              info@dallasgrandbeach.com
            </a>
          </p>
          <p className="text-sm text-gray-300 mt-2">
            Reception: <span className="text-sm">Open 24/7</span>
          </p>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-3">Follow Us</h4>
          <div className="flex items-center gap-4">
            <a href="#" className="block" aria-label="Facebook">
              <Image
                src="/social/facebook.svg"
                alt="Facebook"
                width={24}
                height={24}
                className="h-6 w-6"
              />
            </a>
            <a href="#" className="block" aria-label="Instagram">
              <Image
                src="/social/instagram.svg"
                alt="Instagram"
                width={24}
                height={24}
                className="h-6 w-6"
              />
            </a>
            <a
              href="#"
              className="block text-gray-300 hover:text-white transition-colors"
              aria-label="Twitter"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M24 4.557a9.83 9.83 0 0 1-2.828.775A4.932 4.932 0 0 0 23.337 3a9.864 9.864 0 0 1-3.127 1.195 4.916 4.916 0 0 0-8.38 4.482A13.944 13.944 0 0 1 1.671 3.149 4.916 4.916 0 0 0 3.195 9.723 4.9 4.9 0 0 1 .964 9v.062a4.916 4.916 0 0 0 3.941 4.817 4.902 4.902 0 0 1-2.212.084 4.918 4.918 0 0 0 4.588 3.417A9.868 9.868 0 0 1 0 19.54a13.94 13.94 0 0 0 7.548 2.212c9.056 0 14.01-7.506 14.01-14.01 0-.213-.005-.425-.014-.636A10.012 10.012 0 0 0 24 4.557z" />
              </svg>
            </a>
          </div>
          <p className="text-sm text-gray-400 mt-4">
            123 Ocean Drive, Oghara, Delta State<br />
            PO Box 12345
          </p>
        </div>
      </div>
      <div className="border-t border-gray-800 w-full">
        <div className="w-full px-6 py-4 text-xs text-gray-500 flex flex-col md:flex-row justify-between items-center">
          <div>Privacy Policy · Terms of Use · Cookies</div>
          <div className="mt-2 md:mt-0">Designed & Built with care</div>
        </div>
      </div>
    </footer>
  );
}
