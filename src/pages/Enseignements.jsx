import NavBar from "../components/NavBar";
import { FaFilePdf } from 'react-icons/fa';
import { Link } from "react-router-dom";
import { useLang } from '../App';

export default function Enseignements() {
    const { t } = useLang();
        
    return (
        <div className="min-w-screen min-h-screen bg-gray-50 dark:bg-[#1b1b1b] pb-10">
            <NavBar />

            <div className="flex flex-col pt-20 lg:pt-28 px-5 lg:px-20">
                <h1 className="dark:text-white text-4xl font-extrabold tracking-tight text-center lg:text-start">
                    {t.teaching.title}
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
                    
                    {/* Bloc enseignement */}
                    <div className="flex flex-col border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#252525] p-6 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 space-y-6 animate-defil">
                        <h1 className="dark:text-white text-2xl font-bold border-b border-gray-300 dark:border-gray-600 pb-3">
                            2025-2026
                        </h1>

                        <div>
                            <h2 className="dark:text-white font-semibold text-lg">{t.teaching.teach1.title}</h2>
                            <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">{t.teaching.teach1.desc1}</p>
                        </div>

                        <div>
                            <h2 className="dark:text-white font-semibold text-lg">{t.teaching.teach1.title2}</h2>
                            <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">{t.teaching.teach1.desc2}</p>
                        </div>

                        <div>
                            <h2 className="dark:text-white font-semibold text-lg">{t.teaching.teach1.title3}</h2>
                            <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">{t.teaching.teach1.desc3}</p>
                        </div>

                        <div>
                            <h2 className="dark:text-white font-semibold text-lg">{t.teaching.teach1.title4}</h2>
                            <p className="text-gray-600 dark:text-gray-400 text-sm mt-1" dangerouslySetInnerHTML={{ __html: t.teaching.teach1.desc4 }}>
                            </p>
                        </div>
                    </div>

                    {/* Bloc enseignement */}
                    <div className="flex flex-col border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#252525] p-6 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 space-y-6 animate-defil">
                        <h1 className="dark:text-white text-2xl font-bold border-b border-gray-300 dark:border-gray-600 pb-3">
                            2024-2025
                        </h1>

                        <div>
                            <h2 className="dark:text-white font-semibold text-lg">{t.teaching.teach2.title}</h2>
                            <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">{t.teaching.teach2.desc1}</p>
                            <Link target="__blank" to='' className="inline-flex items-center mt-3 dark:bg-[#141414] border border-red-500 px-3 py-2 rounded-lg shadow-md transition duration-200 text-red-500 hover:bg-red-500 hover:text-white dark:hover:text-white dark:hover:bg-red-500">
                                <FaFilePdf className="w-5 h-5" /> <span className="text-sm ml-2">PDF</span>
                            </Link>
                        </div>

                        <div>
                            <h2 className="dark:text-white font-semibold text-lg">{t.teaching.teach2.title2}</h2>
                            <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">{t.teaching.teach2.desc2}</p>
                            <Link target="__blank" to='' className="inline-flex items-center mt-3 dark:bg-[#141414] border border-red-500 px-3 py-2 rounded-lg shadow-md transition duration-200 text-red-500 hover:bg-red-500 hover:text-white dark:hover:text-white dark:hover:bg-red-500">
                                <FaFilePdf className="w-5 h-5" /> <span className="text-sm ml-2">PDF</span>
                            </Link>
                        </div>

                        <div>
                            <h2 className="dark:text-white font-semibold text-lg">{t.teaching.teach2.title3}</h2>
                            <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">{t.teaching.teach2.desc3}</p>
                            <Link target="__blank" to='' className="inline-flex items-center mt-3 dark:bg-[#141414] border border-red-500 px-3 py-2 rounded-lg shadow-md transition duration-200 text-red-500 hover:bg-red-500 hover:text-white dark:hover:text-white dark:hover:bg-red-500">
                                <FaFilePdf className="w-5 h-5" /> <span className="text-sm ml-2">PDF</span>
                            </Link>
                        </div>
                    </div>

                    {/* Bloc enseignement */}
                    <div className="flex flex-col border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#252525] p-6 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 space-y-6 animate-defil">
                        <h1 className="dark:text-white text-2xl font-bold border-b border-gray-300 dark:border-gray-600 pb-3">
                            2023-2024
                        </h1>

                        <div>
                            <h2 className="dark:text-white font-semibold text-lg">{t.teaching.teach3.title}</h2>
                            <p className="text-gray-600 dark:text-gray-400 text-sm mt-1" dangerouslySetInnerHTML={{ __html: t.teaching.teach3.desc }}>
                            </p>
                            <Link target="__blank" to='' className="inline-flex items-center mt-3 dark:bg-[#141414] border border-red-500 px-3 py-2 rounded-lg shadow-md transition duration-200 text-red-500 hover:bg-red-500 hover:text-white dark:hover:text-white dark:hover:bg-red-500">
                                <FaFilePdf className="w-5 h-5" /> <span className="text-sm ml-2">PDF</span>
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
