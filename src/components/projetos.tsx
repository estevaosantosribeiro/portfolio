import Image from "next/image";

export default function Projetos() {
    return (
        <section id="projects" className="py-16 text-white">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-12 text-center">Projetos</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {/* Projeto 1 */}
                    <div className="bg-gray-800 rounded-xl shadow-2xl overflow-hidden flex flex-col">
                        <div className="relative w-full h-64 overflow-hidden group">
                            <Image
                                src="/hdcevents.png"
                                alt="HDCEvents"
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                                sizes="(max-width: 768px) 100vw, 50vw"
                                priority
                            />
                        </div>
                        <div className="p-6 flex flex-col flex-1">
                            <h3 className="text-2xl font-bold mb-2">HDC Events</h3>
                            <p className="mb-4 text-gray-300">
                                CRUD completo de eventos feito em Laravel. Permite criar, editar, listar e excluir eventos com integração a banco de dados.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                <span className="bg-gray-700 px-3 py-1 rounded-full text-sm">Laravel</span>
                                <span className="bg-gray-700 px-3 py-1 rounded-full text-sm">PHP</span>
                                <span className="bg-gray-700 px-3 py-1 rounded-full text-sm">MySQL</span>
                                <span className="bg-gray-700 px-3 py-1 rounded-full text-sm">CRUD</span>
                            </div>
                        </div>
                    </div>
                    {/* Projeto 2 */}
                    <div className="bg-gray-800 rounded-xl shadow-2xl overflow-hidden flex flex-col">
                        <div className="relative w-full h-64 overflow-hidden group">
                            <Image
                                src="/moovies.png"
                                alt="Moovies"
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </div>
                        <div className="p-6 flex flex-col flex-1">
                            <h3 className="text-2xl font-bold mb-2">Moovies</h3>
                            <p className="mb-4 text-gray-300">
                                Site de busca de filmes usando a API do TMDB. Permite pesquisar, visualizar detalhes e salvar favoritos.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                <span className="bg-gray-700 px-3 py-1 rounded-full text-sm">React</span>
                                <span className="bg-gray-700 px-3 py-1 rounded-full text-sm">TMDB API</span>
                                <span className="bg-gray-700 px-3 py-1 rounded-full text-sm">JavaScript</span>
                                <span className="bg-gray-700 px-3 py-1 rounded-full text-sm">CSS</span>
                            </div>
                        </div>
                    </div>
                    {/* Projeto 3 */}
                    <div className="bg-gray-800 rounded-xl shadow-2xl overflow-hidden flex flex-col">
                        <div className="relative w-full h-64 overflow-hidden group">
                            <Image
                                src="/pivolt.png"
                                alt="Pivolt"
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </div>
                        <div className="p-6 flex flex-col flex-1">
                            <h3 className="text-2xl font-bold mb-2">Pivolt</h3>
                            <p className="mb-4 text-gray-300">
                                Site institucional de uma empresa fictícia de multímetros. Layout moderno, responsivo e animado.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                <span className="bg-gray-700 px-3 py-1 rounded-full text-sm">HTML</span>
                                <span className="bg-gray-700 px-3 py-1 rounded-full text-sm">CSS</span>
                                <span className="bg-gray-700 px-3 py-1 rounded-full text-sm">JavaScript</span>
                            </div>
                        </div>
                    </div>
                    {/* Projeto 4 */}
                    <div className="bg-gray-800 rounded-xl shadow-2xl overflow-hidden flex flex-col">
                        <div className="relative w-full h-64 overflow-hidden group">
                            <Image
                                src="/epistoly.png"
                                alt="Epistoly"
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </div>
                        <div className="p-6 flex flex-col flex-1">
                            <h3 className="text-2xl font-bold mb-2">Epistoly</h3>
                            <p className="mb-4 text-gray-300">
                                Aplicativo de mensagens com IA própria, feito em React Native e integrado à API do Google Gemini.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                <span className="bg-gray-700 px-3 py-1 rounded-full text-sm">React Native</span>
                                <span className="bg-gray-700 px-3 py-1 rounded-full text-sm">Google Gemini API</span>
                                <span className="bg-gray-700 px-3 py-1 rounded-full text-sm">JavaScript</span>
                                <span className="bg-gray-700 px-3 py-1 rounded-full text-sm">Mobile</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}