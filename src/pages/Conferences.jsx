import NavBar from "../components/NavBar";
import { FaFilePdf } from 'react-icons/fa';
import { Link } from "react-router-dom";
import { useLang } from '../App';

export default function Conferences() {
    const { t } = useLang();

    return (
        <div className="min-w-screen min-h-screen bg-gray-50 dark:bg-[#1b1b1b] pb-10">
            <NavBar />

            <div className="flex flex-col pt-20 lg:pt-28 px-5 lg:px-20">
                <h1 className="dark:text-white text-4xl font-extrabold tracking-tight text-center lg:text-start">
                    {t.conferences.title}
                </h1>

                <div className="flex flex-col items-start mt-10">
                    
                    {/* Bloc conférence */}
                    <div className="w-full max-w-3xl flex flex-col border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#252525] p-6 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 space-y-4 animate-defil">
                        <h1 className="dark:text-white text-2xl font-bold border-b border-gray-300 dark:border-gray-600 pb-2">
                            2025
                        </h1>
                        <h2 className="dark:text-white font-semibold text-lg">
                            {t.conferences.conf1Title}
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 text-sm text-justify leading-relaxed">
                            {t.conferences.conf1Desc}
                        </p>
                        <div className="flex justify-start w-full pt-3">
                            <Link 
                                target="__blank" 
                                to="/docs/" 
                                className="inline-flex items-center dark:bg-[#141414] border border-red-500 px-3 py-2 rounded-lg shadow-md transition duration-200 text-red-500 hover:bg-red-500 hover:text-white dark:hover:text-white dark:hover:bg-red-500"
                            >
                                <FaFilePdf className="w-5 h-5" /> 
                                <span className="text-sm ml-2">PDF</span>
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
