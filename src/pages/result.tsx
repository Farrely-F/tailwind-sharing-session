import { FaChevronRight, FaImage, FaSearch } from "react-icons/fa";
import { SlPaperPlane } from "react-icons/sl";

export default function ResultPage() {
  return (
    <>
      <main className="grid grid-cols-1 gap-8 px-4 py-8 mx-auto bg-[url('https://e0.pxfuel.com/wallpapers/780/664/desktop-wallpaper-ios-16-iphone.jpg')] lg:grid-cols-2 min-h-dvh auto-container lg:px-16 relative">
        <div className="absolute top-0 left-0 w-full h-full bg-black/10 backdrop-blur-md" />
        <section className="relative flex flex-col gap-4">
          <search className="flex items-center px-4 bg-gray-200/10 backdrop-blur-sm gap rounded-2xl">
            <FaSearch className="inline-block fill-white/40" />
            <input
              type="text"
              className="w-full px-4 py-2 bg-transparent focus:outline-none"
              placeholder="Search for any word"
            />
          </search>
          <section
            id="result"
            className="flex flex-col gap-4 p-4 overflow-y-scroll bg-gray-200/10 min-h-40 max-h-[140px] rounded-2xl no-scrollbar"
          >
            {Array.from({ length: 10 }, (_, i) => (
              <div key={i} className="flex items-center gap-4">
                <FaImage className="inline-block fill-white/40" />
                <p className="flex-1 pb-2 text-sm border-b border-white/10">
                  Photos of the day
                </p>
              </div>
            ))}
          </section>
          <section className="flex flex-col gap-2">
            <div className="flex justify-between text-sm">
              <h2 className="font-bold">Photos From Apps</h2>
              <button className="flex items-center gap-4 text-xs">
                Show More
                <FaChevronRight className="w-2 h-2" />
              </button>
            </div>
            <div className="grid grid-cols-4 gap-1">
              {Array.from({ length: 8 }, (_, i) => (
                <img
                  key={i}
                  src="https://images.unsplash.com/photo-1707343844152-6d33a0bb32c3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                  className="w-full h-20 rounded-2xl"
                />
              ))}
            </div>
          </section>
          <section className="flex flex-col gap-2">
            <div className="flex justify-between">
              <h2 className="font-bold">Messages</h2>
              <button className="flex items-center gap-2 text-xs">
                <p>Search in App</p>
                <SlPaperPlane className="size-3" />
              </button>
            </div>
            <div className="flex gap-2 p-4 bg-gray-200/10 backdrop-blur-sm rounded-2xl min-h-20">
              <img
                src="https://media.licdn.com/dms/image/D5603AQEzCMtAkki-uA/profile-displayphoto-shrink_100_100/0/1711103356803?e=1717027200&v=beta&t=hqlZRx_8BRPcgJfwkIpIRJNI8zW3IU1tDeNAO3i4gkk"
                alt="Nathan"
                className="rounded-full size-16"
              />
              <div>
                <div className="flex items-center justify-between text-sm">
                  <h2>Koh Nathan</h2>
                  <p className="text-xs">{new Date().toDateString()}</p>
                </div>
                <p className="mt-2 text-xs">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Possimus, corrupti!
                </p>
              </div>
            </div>
            <button className="block w-full p-2 mt-2 bg-gray-200/20 backdrop-blur-sm rounded-xl">
              Show More Result
            </button>
          </section>
          <section id="result" className="flex flex-col gap-2">
            <h2>Related Search</h2>
            <div className="p-4 overflow-y-scroll bg-gray-200/10 min-h-40 max-h-[140px] rounded-2xl no-scrollbar flex flex-col gap-4">
              {Array.from({ length: 10 }, (_, i) => (
                <div key={i} className="flex items-center gap-4">
                  <FaImage className="inline-block fill-white/40" />
                  <p className="flex-1 pb-2 text-sm border-b border-white/10">
                    Photos of the day
                  </p>
                </div>
              ))}
            </div>
          </section>
        </section>
        <aside className="relative flex-col hidden gap-4 lg:flex">
          <section className="flex flex-col gap-2">
            <h2>Destination to Go:</h2>
            <div className="p-4 bg-gray-200/10 backdrop-blur-sm rounded-2xl h-60">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.682657631733!2d106.6771281743769!3d-6.305359593683863!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69e5aa2fc00717%3A0x1d1ca50fdff942b7!2sUnity%20Space%20by%20Kopi%20MKP!5e0!3m2!1sen!2sid!4v1711589614279!5m2!1sen!2sid"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full rounded-2xl"
              />
            </div>
          </section>
          <section className="flex flex-col gap-2">
            <h2>List Anime:</h2>
            <div className="grid grid-cols-4 gap-4">
              {Array.from({ length: 10 }, (_, i) => (
                <div key={i} className="relative rounded-md bg-gray-200/20">
                  <img
                    src="https://source.unsplash.com/1600x900/?anime"
                    alt=""
                    className="w-full h-20 rounded-md"
                  />
                  <div className="absolute bottom-0 left-0 w-full px-2 bg-gray-500/30 backdrop-blur-sm">
                    <p>Naruto</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </aside>
      </main>
    </>
  );
}
