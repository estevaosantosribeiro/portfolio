import Image from "next/image";
import { FaLinkedin, FaInstagram, FaGithub, FaWhatsapp } from "react-icons/fa";

export default function Main() {
    return (
        <main id="about" className="flex items-center justify-center min-h-screen text-white">
            <div className="container mx-auto px-4 flex flex-col-reverse md:flex-row items-center justify-center gap-8">
                <div className="flex-1 flex flex-col items-center md:items-start justify-center text-center md:text-left md:ml-12">
                    <h1 className="text-3xl md:text-4xl font-bold mb-4">
                        Olá, me chamo{" "}
                        <span style={{ color: "#5df5ff" }}>Estevão</span>
                    </h1>
                    <p className="text-lg mb-8">
                        Sou um desenvolvedor web apaixonado por criar experiências digitais
                        modernas e eficientes.
                    </p>
                    <div className="flex gap-4 mb-8 flex-wrap justify-center md:justify-start">
                        <a
                            href="https://www.linkedin.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 rounded-full border border-white text-white hover:bg-white hover:text-gray-900 transition"
                        >
                            <FaLinkedin size={20} />
                            LinkedIn
                        </a>
                        <a
                            href="https://www.instagram.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 rounded-full border border-white text-white hover:bg-white hover:text-gray-900 transition"
                        >
                            <FaInstagram size={20} />
                            Instagram
                        </a>
                        <a
                            href="https://github.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 rounded-full border border-white text-white hover:bg-white hover:text-gray-900 transition"
                        >
                            <FaGithub size={20} />
                            GitHub
                        </a>
                    </div>
                    <a
                        href="https://wa.me/5549999359784"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-green-500 text-white font-bold hover:bg-green-600 transition"
                    >
                        <FaWhatsapp size={20} />
                        Fale comigo
                    </a>
                </div>
                <div className="flex-1 flex items-center justify-center mb-6 md:mb-0">
                    <div
                        className="rounded-full p-2"
                        style={{
                            background: "radial-gradient(circle, #5df5ff 0%, #23272f 70%)",
                            boxShadow: "0 0 40px 10px #5df5ff66",
                        }}
                    >
                        <Image
                            src="/foto.png"
                            alt="Foto de Estevão"
                            width={350}
                            height={350}
                            className="rounded-full object-cover w-56 h-56 md:w-[350px] md:h-[350px]"
                            priority
                        />
                    </div>
                </div>
            </div>
        </main>
    );
}