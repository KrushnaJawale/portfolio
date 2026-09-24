import { useState, useEffect } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';

const certificates = [
    {
        id: 1,
        title: "CJC Python for Data Structure",
        issuer: "CJC",
        year: "2025",
        image: "/certificates/cjc-python-for-data-structure-29-septmber-2025.jpg"
    },
    {
        id: 2,
        title: "FirstBit Solutions CURD Operations",
        issuer: "FirstBit Solutions",
        year: "2026",
        image: "/certificates/firstbitsolutions-curd-operations-09-march-2026.jpg"
    },
    {
        id: 3,
        title: "IIC Fusion",
        issuer: "IIC",
        year: "2025",
        image: "/certificates/iic-fusion-10-october-2025.jpg"
    },
    {
        id: 4,
        title: "HTML and CSS Bootcamp",
        issuer: "LET's Upgrade",
        year: "2026",
        image: "/certificates/lets-upgrade-html-and-css-bootcamp-07-march-2026.jpeg"
    },
    {
        id: 5,
        title: "Java Bootcamp",
        issuer: "LET's Upgrade",
        year: "2026",
        image: "/certificates/lets-upgrade-java-bootcamp-21-february-2026.jpeg"
    },
    {
        id: 6,
        title: "JavaScript Bootcamp",
        issuer: "LET's Upgrade",
        year: "2026",
        image: "/certificates/lets-upgrade-javascript-bootcamp-13-february-2026.jpeg"
    },
    {
        id: 7,
        title: "Node.js Bootcamp",
        issuer: "LET's Upgrade",
        year: "2026",
        image: "/certificates/lets-upgrade-nodejs-bootcamp-23-february-2026.jpeg"
    },
    {
        id: 8,
        title: "Python for Data Science",
        issuer: "Saylor Academy",
        year: "2026",
        image: "/certificates/saylor-academy-python-for-data-science-09-march-2026.jpg"
    },
    {
        id: 9,
        title: "Introduction to ASP.NET",
        issuer: "SimpliLearn",
        year: "2026",
        image: "/certificates/simplilearn-introduction-to-asp-dot-net-28-march-2026.jpg"
    },
    {
        id: 10,
        title: "Introduction to Large Language Models",
        issuer: "SimpliLearn",
        year: "2026",
        image: "/certificates/simplilearn-introduction-to-large-language-models-07-march-2026.jpg"
    },
    {
        id: 11,
        title: "Power BI for Beginners",
        issuer: "SimpliLearn",
        year: "2026",
        image: "/certificates/simplilearn-power-bi-for-beginners-03-march-2026.jpg"
    },
    {
        id: 12,
        title: "Python Libraries for Data Science",
        issuer: "SimpliLearn",
        year: "2026",
        image: "/certificates/simplilearn-python-libraries-for-data-science-06-march-2026.jpg"
    },
    {
        id: 13,
        title: "Code War",
        issuer: "Sinhgad Techtonic",
        year: "2025",
        image: "/certificates/sinhgad-techtonic-code-war-02-april-2025.jpg"
    },
    {
        id: 14,
        title: "Basics of Python",
        issuer: "UniAthena",
        year: "2026",
        image: "/certificates/uniathena-basics-of-python-01-march-2026.jpg"
    }
];

export default function CertificatesSection() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlay, setIsAutoPlay] = useState(true);
    const [pauseTimer, setPauseTimer] = useState(null);
    const [timeLeft, setTimeLeft] = useState(0);

    // Auto-rotate every 2 seconds
    useEffect(() => {
        if (!isAutoPlay) return;

        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % certificates.length);
        }, 2000);

        return () => clearInterval(interval);
    }, [isAutoPlay]);

    // Countdown timer for pause
    useEffect(() => {
        if (!pauseTimer) return;

        const countdown = setInterval(() => {
            setTimeLeft((prev) => {
                if (prev <= 1) {
                    clearInterval(countdown);
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(countdown);
    }, [pauseTimer]);

    // Handle manual navigation
    const handlePrev = () => {
        setCurrentIndex((prev) => (prev - 1 + certificates.length) % certificates.length);
        pauseAutoPlay();
    };

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % certificates.length);
        pauseAutoPlay();
    };

    // Pause auto-play for 10 seconds after manual click
    const pauseAutoPlay = () => {
        setIsAutoPlay(false);
        setTimeLeft(10);

        if (pauseTimer) clearTimeout(pauseTimer);

        const timer = setTimeout(() => {
            setIsAutoPlay(true);
        }, 10000);

        setPauseTimer(timer);
    };

    // Get current, previous, and next certificates for peek effect
    const prevIndex = (currentIndex - 1 + certificates.length) % certificates.length;
    const nextIndex = (currentIndex + 1) % certificates.length;

    const prevCert = certificates[prevIndex];
    const currentCert = certificates[currentIndex];
    const nextCert = certificates[nextIndex];

    return (
        <section id="certificates" className="bg-white py-20 px-6 font-sans min-h-screen h-full flex flex-col justify-start">
            <div className="max-w-7xl mx-auto flex flex-col gap-12 items-center justify-start w-full">
                
                {/* Header (Top) */}
                <div className="w-full text-center pt-8">
                    <h2 className="text-3xl font-bold text-gray-900">Certifications & Credentials</h2>
                    <p className="text-gray-500 text-sm mt-2">
                        Verified certifications and professional accreditations earned over the years.
                    </p>

                    {/* Dots Indicator */}
                    <div className="flex flex-wrap justify-center gap-2 mt-8">
                        {certificates.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => {
                                    setCurrentIndex(index);
                                    pauseAutoPlay();
                                }}
                                className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentIndex
                                        ? 'bg-blue-600 w-8'
                                        : 'bg-gray-300 hover:bg-gray-400'
                                    }`}
                                aria-label={`Go to certificate ${index + 1}`}
                            />
                        ))}
                    </div>

                    {/* Auto-play status indicator */}
                    <div className="text-center mt-6 text-sm text-gray-500">
                        {isAutoPlay ? (
                            <p>click arrows to pause for 10s</p>
                        ) : (
                            <p>Auto-play resumes in {timeLeft}s</p>
                        )}
                    </div>
                </div>

                {/* Vertical Slider (Bottom) */}
                <div className="w-full relative flex flex-col items-center justify-center gap-4">
                    {/* Top Arrow */}
                    <button
                        onClick={handlePrev}
                        className="flex-shrink-0 p-3 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 transition-colors duration-200 z-30"
                        aria-label="Previous certificate"
                    >
                        <ChevronUp size={24} />
                    </button>



                    {/* Center Main Card (Big) */}
                    <div className="flex-shrink-0 w-full sm:w-96">
                        <div className="w-full bg-white rounded-sm overflow-hidden shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
                            <div className="w-full aspect-[1.41/1] bg-gray-100 overflow-hidden flex items-center justify-center p-2">
                                <img
                                    src={currentCert.image}
                                    alt={currentCert.title}
                                    className="w-full h-full object-contain"
                                />
                            </div>
                            <div className="p-5">
                                <h3 className="font-bold text-gray-900 text-lg line-clamp-2">
                                    {currentCert.title}
                                </h3>
                                <div className="flex items-center justify-between text-sm text-gray-500 mt-3">
                                    <span className="font-medium">{currentCert.issuer}</span>
                                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-semibold text-xs">
                                        {currentCert.year}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>



                    {/* Bottom Arrow */}
                    <button
                        onClick={handleNext}
                        className="flex-shrink-0 p-3 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 transition-colors duration-200 z-30"
                        aria-label="Next certificate"
                    >
                        <ChevronDown size={24} />
                    </button>
                </div>
            </div>
        </section>
    );
}