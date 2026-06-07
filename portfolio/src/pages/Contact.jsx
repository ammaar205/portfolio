import { FiMail, FiMapPin, FiGithub, FiLinkedin } from "react-icons/fi";

export default function Contact() {
  return (
    <div className="max-w-6xl mx-auto p-6 md:p-10">
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-3">Get in Touch</h1>
        <p className="text-slate-400 text-lg max-w-2xl">
          Have a project in mind, an opportunity to discuss, or just want to say
          hi? I'd love to hear from you.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-[#161B33] rounded-2xl p-8 space-y-6">
          <h2 className="text-xl font-semibold text-white mb-2">
            Contact Information
          </h2>

          <a
            className="flex items-center gap-4 group"
          >
            <div className="w-12 h-12 bg-[#484973] rounded-xl flex items-center justify-center group-hover:bg-cyan-500 transition-colors shrink-0">
              <FiMail className="text-xl" />
            </div>
            <div>
              <p className="text-slate-400 text-sm">Email</p>
              <p className="text-white font-medium group-hover:text-cyan-400 transition-colors">
                ammaar20351@gmail.com
              </p>
            </div>
          </a>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-[#484973] rounded-xl flex items-center justify-center shrink-0">
              <FiMapPin className="text-xl" />
            </div>
            <div>
              <p className="text-slate-400 text-sm">Location</p>
              <p className="text-white font-medium">Leicester, UK</p>
            </div>
          </div>

          <a
            href="https://github.com/ammaar205"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 group"
          >
            <div className="w-12 h-12 bg-[#484973] rounded-xl flex items-center justify-center group-hover:bg-cyan-500 transition-colors shrink-0">
              <FiGithub className="text-xl" />
            </div>
            <div>
              <p className="text-slate-400 text-sm">GitHub</p>
              <p className="text-white font-medium group-hover:text-cyan-400 transition-colors">
                @ammaar205
              </p>
            </div>
          </a>

          <a
            href="https://linkedin.com/in/ammaar-musthafa/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 group"
          >
            <div className="w-12 h-12 bg-[#484973] rounded-xl flex items-center justify-center group-hover:bg-cyan-500 transition-colors shrink-0">
              <FiLinkedin className="text-xl" />
            </div>
            <div>
              <p className="text-slate-400 text-sm">LinkedIn</p>
              <p className="text-white font-medium group-hover:text-cyan-400 transition-colors">
                /in/ammaar-musthafa
              </p>
            </div>
          </a>
        </div>

        <div className="bg-[#161B33] rounded-2xl p-8">
          <h2 className="text-xl font-semibold text-white mb-6">
            Send a Message
          </h2>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="space-y-5"
          >
            <div>
              <label className="block text-slate-400 text-sm mb-1.5">
                Name
              </label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full bg-[#0D0C1D] border border-[#484973] rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors"
              />
            </div>
            <div>
              <label className="block text-slate-400 text-sm mb-1.5">
                Email
              </label>
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full bg-[#0D0C1D] border border-[#484973] rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors"
              />
            </div>
            <div>
              <label className="block text-slate-400 text-sm mb-1.5">
                Message
              </label>
              <textarea
                rows={4}
                placeholder="Tell me about your project or idea..."
                className="w-full bg-[#0D0C1D] border border-[#484973] rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-cyan-500 hover:bg-cyan-400 text-[#0D0C1D] font-semibold py-3.5 rounded-xl transition-colors text-lg"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
