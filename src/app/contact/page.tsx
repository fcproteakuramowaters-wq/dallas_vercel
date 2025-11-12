import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Contact & Support - Dallas Grand Beach Hotel',
  description: "Contact Dallas Grand Beach Hotel — get in touch for reservations, events, or general support. We're available 24/7.",
};

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow pt-20 py-16 bg-[#f8f7ff]">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800">Contact & Support</h1>
          <p className="text-gray-600 mt-2">We're here to help. Reach out to us anytime.</p>
        </div>

        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-0 bg-white rounded-lg shadow-lg overflow-hidden">

            <div className="md:w-2/5 bg-green-700 text-white p-8">
              <h2 className="text-2xl font-semibold mb-6">Get In Touch</h2>

              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Address</h3>
                <p className="text-green-100">1 &amp; 5 court road, opposite ewgla secretariat, <br/>oghara, <br/>Delta</p>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Phone</h3>
                <p className="text-green-100"><a href="tel:+1234567890" className="hover:text-white transition-colors">+1 (234) 567-890</a><br/><span className="text-sm">Available 24/7</span></p>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Email</h3>
                <p className="text-green-100"><a href="mailto:info@dallasgrandbeach.com" className="hover:text-white transition-colors">info@dallasgrandbeach.com</a><br/><a href="mailto:support@dallasgrandbeach.com" className="hover:text-white transition-colors">support@dallasgrandbeach.com</a></p>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Website</h3>
                <p className="text-green-100"><a href="#" className="hover:text-white transition-colors">www.dallasgrandbeach.com</a></p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Office Hours</h3>
                <p className="text-green-100">Monday - Sunday: 24hours  </p>
              </div>
            </div>

            <div className="md:w-3/5 p-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">Send Us a Message</h2>

              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input type="text" id="name" name="name" placeholder="Your full name" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <input type="email" id="email" name="email" placeholder="your.email@example.com" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                  <input type="tel" id="phone" name="phone" placeholder="+234 (803) 567-8904" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                  <select id="subject" name="subject" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required>
                    <option value="">Select a subject</option>
                    <option value="reservation">Reservation Inquiry</option>
                    <option value="feedback">Feedback</option>
                    <option value="complaints">Complaints</option>
                    <option value="events">Events & Groups</option>
                    <option value="partnership">Partnership</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea id="message" name="message" rows={5} placeholder="Please share your message or inquiry..." className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required></textarea>
                </div>

                <button type="submit" className="w-full bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-semibold px-6 py-3 rounded-lg shadow-lg transition-colors">Send Message</button>
              </form>
            </div>

          </div>
        </div>

      </main>

      {/* Google Maps embed */}
      <div className="w-full bg-white">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <h3 className="text-xl font-semibold mb-4 text-center">Find us on the map</h3>
          <div className="w-full h-[450px] rounded-lg overflow-hidden shadow">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d254074.12266149727!2d5.6058656016492865!3d5.72636656618303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1040e1c83cec8375%3A0xa194f091d5346a9b!2sDallas%20Grand%20beach%20resort%20and%20suite%20Hotel!5e0!3m2!1sen!2sng!4v1762904715140!5m2!1sen!2sng"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
