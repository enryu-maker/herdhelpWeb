import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom';

// Icons
const BackIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#009A48]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
    </svg>
);

const DownloadIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
    </svg>
);

const FileIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 text-[#009A48] opacity-20 mb-4" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
    </svg>
);


export default function Download() {
    const { state } = useLocation();
    // Safety check just in case state is null (though flow dictates it shouldn't be)
    const data = state?.data || { link: '' };
    const navigate = useNavigate()

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
            {/* Header */}
            <div className="bg-white border-b border-gray-200 px-6 py-4 sticky top-0 z-30 shadow-sm">
                <div className=" mx-auto flex items-center space-x-4">
                    <button
                        onClick={() => navigate(-1)}
                        className="p-2 rounded-full bg-green-50 hover:bg-green-100 transition-colors"
                    >
                        <BackIcon />
                    </button>
                    <h1 className="text-xl font-bold text-gray-900">Download Report</h1>
                </div>
            </div>

            {/* Content */}
            <div className="flex-1 flex flex-col items-center justify-center p-6">
                <div className="bg-white rounded-2xl shadow-sm p-8 max-w-sm w-full text-center border border-gray-100">

                    <div className="flex justify-center">
                        <FileIcon />
                    </div>

                    <h2 className="text-xl font-bold text-gray-900 mb-2">Report Ready</h2>
                    <p className="text-gray-500 mb-8">
                        Your report has been generated successfully. Click the button below to download it.
                    </p>

                    <button
                        onClick={() => {
                            if (data.link) {
                                window.open(data["link"], '_blank')
                            } else {
                                // Fallback or alert if link is missing?
                                alert("Download link not available.");
                            }
                        }}
                        className="w-full bg-[#009A48] hover:bg-[#007f3b] text-white font-bold py-3 px-6 rounded-lg shadow-md flex items-center justify-center transition-all transform hover:-translate-y-1"
                    >
                        <DownloadIcon />
                        Download PDF
                    </button>

                </div>
            </div>
        </div>
    )
}