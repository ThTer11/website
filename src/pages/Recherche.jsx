import { useState } from "react";
import NavBar from "../components/NavBar";
import { FaFilePdf } from 'react-icons/fa';
import BibTex from '@heroicons/react/24/outline/BookmarkIcon';
import { Link } from "react-router-dom";
import { useLang } from '../App';

export default function Recherches() {
    const { t } = useLang();
    const [bibText, setBibText] = useState("");
    const [showModal, setShowModal] = useState(false);

    // Fonction pour récupérer le fichier .bib
    const openBib = async () => {
        const response = await fetch(`${process.env.PUBLIC_URL}/bibs/pericles_1945510059.bib`);
        const text = await response.text();
        setBibText(text);
        setShowModal(true);
    };

    return (
        <div className="min-w-screen min-h-screen bg-gray-50 dark:bg-[#1b1b1b] pb-10">
            <NavBar />

            <div className="flex flex-col pt-20 lg:pt-28 px-5 lg:px-20">
                <h1 className="dark:text-white text-4xl font-extrabold tracking-tight text-center lg:text-start">
                    {t.research.title}
                </h1>

                <div className="flex flex-col items-start mt-10 gap-6">

                    {/* Bloc recherche */}
                    <div className="w-full flex flex-col border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#252525] p-6 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 space-y-4 animate-defil">
                        <h1 className="dark:text-white text-2xl font-bold border-b border-gray-300 dark:border-gray-600 pb-2">
                            2024
                        </h1>
                        <h2 className="dark:text-white font-semibold text-lg">
                            {t.research.pub1Title}
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 text-sm text-justify leading-relaxed">
                            {t.research.pub1Authors}
                        </p>
                        <div className="flex justify-start w-full pt-3">
                            {/* Lien vers le PDF */}
                            <Link
                                target="_blank"
                                to="https://onlinelibrary.wiley.com/doi/epdf/10.1111/maps.14068"
                                className="flex items-center border border-red-500 px-3 py-2 rounded-lg shadow-md text-red-500 dark:text-red-400 dark:bg-[#141414] transition duration-200 hover:bg-red-500 hover:text-white dark:hover:text-white dark:hover:bg-red-500"
                            >
                                <FaFilePdf className="w-5 h-5" />
                                <span className="text-sm ml-2">PDF</span>
                            </Link>

                            {/* Bouton BibTeX */}
                            <button
                                onClick={openBib}
                                className="flex items-center border border-blue-600 px-3 py-2 ml-5 rounded-lg shadow-md text-blue-600 dark:text-blue-400 dark:bg-[#141414] transition duration-200 hover:bg-blue-600 hover:text-white dark:hover:text-white dark:hover:bg-blue-600"
                            >
                                <BibTex className="w-5 h-5" />
                                <span className="text-sm ml-2">BibTeX</span>
                            </button>
                        </div>
                    </div>

                    {/* Modal */}
                    {showModal && (
                        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                            <div className="bg-white dark:bg-[#252525] p-6 rounded-xl max-w-3xl w-full max-h-[80vh] overflow-auto relative">
                                <button
                                    onClick={() => setShowModal(false)}
                                    className="absolute top-3 right-3 text-gray-500 dark:text-gray-400 font-bold text-xl"
                                >
                                    ×
                                </button>
                                <pre className="text-sm text-gray-800 dark:text-gray-200 whitespace-pre-wrap">
                                    {bibText}
                                </pre>
                            </div>
                        </div>
                    )}

                </div>
            </div>
        </div>
    );
}
