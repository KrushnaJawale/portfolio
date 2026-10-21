import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function CertificatesSection() {

    return (
        <section id="certificates" className="bg-white py-16 px-6 font-sans">
            <div className="max-w-7xl mx-auto flex flex-col gap-12 items-center justify-start w-full">
                <div className="w-full text-center">
                    <h2 className="text-3xl font-bold text-gray-900">Certifications & Credentials</h2>
                    <p className="text-gray-500 text-sm mt-2">
                        Verified certifications and professional accreditations earned over the years.
                    </p>
                </div>

                <div className="w-full flex justify-center">
                    <Link
                        to="/certificates"
                        className="group relative block w-full max-w-sm rounded-2xl border border-gray-200 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600"
                        aria-label="Browse all certificates"
                    >
                        {/* Image Container */}
                        <div className="relative aspect-video overflow-hidden rounded-xl bg-gray-50 border border-gray-100 mb-4">
                            <img
                                src="/certificate_section.png"
                                alt=""
                                className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                            />
                        </div>

                        {/* Card Footer / Title area */}
                        <div className="flex items-center justify-between">
                            <div>
                                <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                                    Certificates
                                </h3>
                                <p className="text-sm text-gray-500">View all earned credentials</p>
                            </div>

                            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gray-50 text-gray-700 border border-gray-200 transition-all duration-300 group-hover:bg-blue-50 group-hover:text-blue-600 group-hover:border-blue-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                                <ArrowUpRight size={18} aria-hidden="true" />
                            </span>
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    );
}
