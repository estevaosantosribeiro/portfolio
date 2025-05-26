import { FaEnvelope, FaWhatsapp, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="text-white py-8 border-t border-white/20">
      <div className="container mx-auto flex flex-col items-center gap-8 px-4">
        {/* Contato */}
        <div className="flex flex-col items-center gap-2">
          <div className="flex items-center gap-2">
            <FaEnvelope className="text-xl" />
            <span className="text-lg">estevaosantosribeiro@gmail.com</span>
          </div>
          <a
            href="https://wa.me/5549999359784"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500 text-white font-bold hover:bg-green-600 transition"
          >
            <FaWhatsapp />
            Fale comigo no WhatsApp
          </a>
        </div>
        {/* Links importantes */}
        <div className="flex flex-col items-center gap-2">
          <span className="font-semibold mb-1">Links importantes</span>
          <div className="flex flex-col gap-2 text-lg">
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-[#5df5ff] transition"
              aria-label="Instagram"
            >
              <FaInstagram /> Instagram
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-[#5df5ff] transition"
              aria-label="LinkedIn"
            >
              <FaLinkedin /> LinkedIn
            </a>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-[#5df5ff] transition"
              aria-label="GitHub"
            >
              <FaGithub /> GitHub
            </a>
          </div>
        </div>
        {/* Copyright */}
        <div className="text-center text-sm text-gray-400 mt-4">
          &copy; {new Date().getFullYear()} Estevão Santos Ribeiro. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
