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
              +234 907 455 4875
            </a>
          </p>
          <p className="text-sm text-gray-300">
            Email:{' '}
            <a
              href="mailto:info@dallasgrandbeachhotel.com"
              className="hover:text-white transition-colors"
            >
              info@dallasgrandbeachhotel.com
            </a>
          </p>
          <p className="text-sm text-gray-300 mt-2">
            Reception: <span className="text-sm">Open 24/7</span>
          </p>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-3">Follow Us</h4>
          <div className="flex items-center gap-4">
            <a
              href="https://www.facebook.com/dallasgrandbeachhotel/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-blue-400 transition-colors"
              aria-label="Facebook"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/dallasgrandbeach/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-pink-400 transition-colors"
              aria-label="Instagram"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.117.6c-.588.227-.952.498-1.368.91-.416.42-.683.78-.91 1.368-.266.788-.468 1.662-.527 2.94C.015 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.527 2.913.245.6.493.985.910 1.402.419.419.802.666 1.368.91.766.266 1.636.466 2.913.527 1.28.058 1.687.072 4.947.072s3.667-.015 4.947-.072c1.277-.061 2.148-.261 2.913-.527.566-.244.953-.494 1.370-.91.516-.515.779-.899.910-1.368.266-.766.466-1.636.527-2.913.058-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.061-1.277-.261-2.148-.527-2.913-.245-.566-.494-.953-.910-1.370a3.716 3.716 0 0 0-1.368-.91c-.766-.266-1.636-.466-2.913-.527C15.667.015 15.26 0 12 0zm0 2.16c3.203 0 3.585.009 4.849.070 1.171.054 1.805.244 2.227.408.561.217.96.477 1.382.896.419.42.679.821.896 1.381.164.422.354 1.057.408 2.227.061 1.264.07 1.646.07 4.849s-.009 3.585-.07 4.849c-.054 1.171-.244 1.805-.408 2.227-.217.561-.477.96-.896 1.382-.42.419-.821.679-1.381.896-.422.164-1.057.354-2.227.408-1.264.061-1.646.07-4.849.07s-3.585-.009-4.849-.07c-1.171-.054-1.805-.244-2.227-.408-.561-.217-.96-.477-1.382-.896-.419-.42-.679-.821-.896-1.381-.164-.422-.354-1.057-.408-2.227-.061-1.264-.07-1.646-.07-4.849s.009-3.585.07-4.849c.054-1.171.244-1.805.408-2.227.217-.561.477-.96.896-1.382.42-.419.821-.679 1.381-.896.422-.164 1.057-.354 2.227-.408 1.264-.061 1.646-.07 4.849-.07zM5.838 12a6.162 6.162 0 1 1 12.324 0 6.162 6.162 0 0 1-12.324 0zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm4.965-10.322a1.44 1.44 0 1 1 2.881.001 1.44 1.44 0 0 1-2.881-.001z" />
              </svg>
            </a>
            <a
              href="https://twitter.com/DallasGrand"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-blue-300 transition-colors"
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
            <a
              href="https://www.youtube.com/channel/UCYJiiZQD2ogk8ikYHQDAIrQ"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-red-500 transition-colors"
              aria-label="YouTube"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>
          </div>
          <p className="text-sm text-gray-400 mt-4">
            1 &amp; 5 court road, opposite ewgla secretariat, <br/>oghara, <br/>Delta
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
