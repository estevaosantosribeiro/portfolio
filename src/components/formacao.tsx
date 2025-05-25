import Image from "next/image";

export default function Formacao() {
    return (
        <section id="education" className="py-16 text-white">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 text-center">Formação</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col h-full items-center">
                        <Image
                            src="/uniplac.png"
                            alt="UNIPLAC"
                            width={64}
                            height={64}
                            className="mb-4"
                        />
                        <h3 className="text-xl font-semibold mb-4 text-center">Sistemas de Informação</h3>
                        <p className="text-gray-400 mb-2 text-center">UNIPLAC </p>
                        <p className="text-gray-300 text-center md:text-left">
                            Utilizei Git e GitHub para controle de versão, além de desenvolver projetos com HTML, CSS e Javascript.
                        </p>
                    </div>
                    <div className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col h-full items-center">
                        <Image
                            src="/ifsc.png"
                            alt="IFSC"
                            width={64}
                            height={64}
                            className="mb-4"
                        />
                        <h3 className="text-xl font-semibold mb-4 text-center">Informática para Internet</h3>
                        <p className="text-gray-400 mb-2 text-center">IFSC </p>
                        <p className="text-gray-300 text-center md:text-left">
                            Conhecimento prático em desenvolvimento web com Laravel, MySQL e React, além de metodologias ágeis como Scrum.
                        </p>    
                    </div>
                    <div className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col h-full items-center">
                        <Image
                            src="/academia-do-programador.png"
                            alt="Academia do Programador"
                            width={64}
                            height={64}
                            className="mb-4"
                        />
                        <h3 className="text-xl font-semibold mb-4 text-center">Desenvolvedor Full-Stack</h3>
                        <p className="text-gray-400 mb-2 text-center">Academia do Programador</p>
                        <p className="text-gray-300 text-center md:text-left">
                            Habilidades em C#, ASP.NET e programação orientada a objetos, com foco no desenvolvimento web.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}