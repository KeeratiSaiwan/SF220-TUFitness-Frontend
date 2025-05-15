'use client';

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-8 flex items-center justify-center min-h-screen">
      {/* Container Box */}
      <div className="bg-[#F1F1F3] rounded-md shadow-md flex flex-col md:flex-row overflow-hidden max-w-4xl w-full">
        {/* Left Side: Form */}
        <div className="w-full md:w-1/2 p-8">
          <h2 className="text-3xl text-primary font-bold mb-6">ติดต่อเรา</h2>
          <form>
            <div className="mb-4">
              <label htmlFor="contact-person" className="block text-sm font-medium text-gray-700">
                ชื่อผู้ติดต่อ
              </label>
              <input
                type="text"
                id="contact-person"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="contact-email" className="block text-sm font-medium text-gray-700">
                อีเมลผู้ติดต่อ
              </label>
              <input
                type="email"
                id="contact-email"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="contact-tel" className="block text-sm font-medium text-gray-700">
                เบอร์โทรศัพท์ผู้ติดต่อ
              </label>
              <input
                type="tel"
                id="contact-tel"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="contact-topic" className="block text-sm font-medium text-gray-700">
                เรื่องที่ติดต่อ
              </label>
              <input
                type="text"
                id="contact-topic"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="contact-detail" className="block text-sm font-medium text-gray-700">
                รายละเอียด
              </label>
              <textarea
                id="contact-detail"
                rows={4} // Adjust rows as needed
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="px-6 py-3 bg-[#C30E2F] text-white text-lg font-semibold rounded-md"
              >
                ส่ง
              </button>
            </div>
          </form>
        </div>

        {/* Right Side: Image */}
        <div className="w-full md:w-1/2">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsrHk_Rp6PRKwqmSjscHyA8UiPSlXSr8UaMw&s" // Placeholder image
            alt="Contact Us"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </div>
  );
}
