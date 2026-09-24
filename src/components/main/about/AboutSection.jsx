import { RefreshCw, Sparkles, ArrowRight } from "lucide-react";

export default function AboutSection() {
    return (
        <section id="about" className="bg-white text-gray-900 font-sans py-16 px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                {/* Left Column - Text Content */}
                <div className="lg:col-span-5 space-y-6 text-center md:text-left">
                    <h2 className="text-3xl font-bold text-gray-900">
                        About me
                    </h2>

                    <p className="text-gray-500 text-sm mt-2">
                        Hi, I’m Krushna — a Computer Engineering student and Software Developer & Builder who enjoys turning ideas into real-world applications. I work with Python, Java, Flask, SQL, JavaScript, and React, and I’m exploring Spring Boot, AI, cloud technologies, and modern software architecture.
                    </p>

                    <div>
                        <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm px-5 py-3 rounded-xl flex items-center gap-2 transition-all shadow-sm">
                            <span>Learn More</span>
                            <ArrowRight className="w-4 h-4" />
                        </button>
                    </div>
                </div>

                {/* Right Column - Bento Grid Layout */}
                <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-4">

                    {/* Column 1 */}
                    <div className="space-y-4 flex flex-col">
                        {/* Top Image Card */}
                        <div className="bg-gray-100 rounded-3xl overflow-hidden h-64 shadow-xs">
                            <img
                                src="/owner.png"
                                alt="3D Abstract"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Bottom Text Card */}
                        <div className="bg-[#f8f9fa] p-6 rounded-3xl space-y-3 flex-1 flex flex-col justify-center border border-gray-100">
                            <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center shrink-0">
                                <Sparkles className="w-5 h-5" />
                            </div>
                            <h3 className="font-bold text-gray-900 text-lg">AI & Problem Solving</h3>
                            <p className="text-xs text-gray-500 leading-relaxed">
                                Exploring AI-powered solutions and turning real-world ideas into practical software.
                            </p>
                        </div>
                    </div>

                    {/* Column 2 */}
                    <div className="space-y-4 flex flex-col">
                        {/* Top Text Card */}
                        <div className="bg-[#f8f9fa] p-6 rounded-3xl space-y-3 border border-gray-100">
                            <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center shrink-0">
                                <RefreshCw className="w-5 h-5" />
                            </div>
                            <h3 className="font-bold text-gray-900 text-lg">Full-Stack Development</h3>
                            <p className="text-xs text-gray-500 leading-relaxed">
                                Building fast, reactive interfaces with live status tracking and efficient state management.
                            </p>
                        </div>

                        {/* Bottom Portrait Card */}
                        <div className="bg-gray-100 rounded-3xl overflow-hidden h-72 shadow-xs">
                            <img
                                src="https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?q=80&w=800&auto=format&fit=crop"
                                alt="Portrait"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
}