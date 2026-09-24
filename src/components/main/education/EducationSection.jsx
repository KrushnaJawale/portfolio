export default function EducationSection() {
    return (
        <section id="education" className="bg-gray-50 py-16 px-6 font-sans">
            <div className="max-w-7xl mx-auto">
                {/* Header - Exactly matches Projects header alignment */}
                <div className="mb-8 w-full text-center">
                    <h2 className="text-3xl font-bold text-gray-900">Education</h2>
                <p className="text-gray-500 text-sm mt-2">
                       A timeline of my formal education, specialized training, and credentials.
                    </p>
                </div>

                <div className="bg-white rounded-lg p-6">
                    <div className="flex items-start justify-between">
                        <div className="flex-1">
                            <h3 className="text-lg font-bold text-gray-900">Computer Engineering</h3>
                            <p className="text-sm font-semibold text-gray-600 mt-1">Sinhgad Institute of Technology, Lonavala</p>
                            <p className="text-xs text-gray-500 mt-3">2024 - 2028</p>
                        </div>
                        <div className="ml-4 bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">
                            Present
                        </div>
                    </div>
                </div>
                
            </div>
        </section>
    );
}