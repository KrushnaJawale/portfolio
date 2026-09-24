import { useState, useEffect } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';

const projects = [
    {
        id: 1,
        title: "College Talk (Flask Version)",
        image: "/projects/college_talk_flask_version.png",
        url: "collegetalk.vercel.app"
    },
    {
        id: 2,
        title: "College Talk (PHP Version)",
        image: "/projects/college_talk_php_version.png",
        url: "collegetalk.free.nf"
    },
    {
        id: 3,
        title: "Kanteen",
        image: "/projects/kanteen.png",
        url: "https://kanteen-rosy.vercel.app"
    },
    {
        id: 4,
        title: "K-Dairy",
        image: "/projects/kdairy.png",
        url: "https://ktech.free.nf/kdairy"
    },
    {
        id: 5,
        title: "Kisan Mitra",
        image: "/projects/kisanmitra.png",
        url: "https://ekisanmitra.vercel.app/"
    },
    {
        id: 6,
        title: "K-Talk",
        image: "/projects/ktalk.png",
        url: "https://ktech.free.nf/ktalk"
    },
    {
        id: 7,
        title: "QRoll",
        image: "/projects/qroll.png",
        url: "https://qroll.kesug.com"
    },
    {
        id: 8,
        title: "Sweet Dreams",
        image: "/projects/sweet_dreams.png",
        url: "https://ktech.free.nf/cake_shop"
    }
];

export default function ProjectsSection() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlay, setIsAutoPlay] = useState(true);
    const [pauseTimer, setPauseTimer] = useState(null);
    const [timeLeft, setTimeLeft] = useState(0);

    // Auto-rotate every 2 seconds
    useEffect(() => {
        if (!isAutoPlay) return;

        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % projects.length);
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
        setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
        pauseAutoPlay();
    };

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % projects.length);
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

    const prevIndex = (currentIndex - 1 + projects.length) % projects.length;
    const nextIndex = (currentIndex + 1) % projects.length;

    const prevProject = projects[prevIndex];
    const currentProject = projects[currentIndex];
    const nextProject = projects[nextIndex];

    return (
        <section id="projects" className="bg-white py-16 px-6 font-sans min-h-screen h-full flex flex-col justify-start">
            <div className="max-w-7xl mx-auto flex flex-col gap-12 items-center justify-start w-full">
                {/* Header (Top) */}
                <div className="w-full text-center pt-8">
                    <h2 className="text-3xl font-bold text-gray-900">My Projects</h2>
                    <p className="text-gray-500 text-sm mt-2">
                        Explore some of our recent work and creative designs.
                    </p>
                </div>

                {/* Horizontal Slider (Bottom) */}
                <div className="w-full relative flex flex-col items-center justify-center gap-4">

                    {/* Center Main Card (Big) */}
                    <div className="flex-shrink-0 w-full sm:w-96 cursor-pointer" onClick={() => window.open(currentProject.url, '_blank')}>
                        <div className="w-full bg-white rounded-sm overflow-hidden shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
                            <div className="w-full aspect-video bg-gray-100 overflow-hidden flex items-center justify-center p-2">
                                <img
                                    src={currentProject.image}
                                    alt={currentProject.title}
                                    className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                            <div className="p-5">
                                <h3 className="font-bold text-gray-900 text-lg line-clamp-2">
                                    {currentProject.title}
                                </h3>
                                <div className="flex items-center justify-between text-sm text-gray-500 mt-3">
                                    <span className="font-medium">Web App</span>
                                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-semibold text-xs">
                                        Live
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Unified Controls Row */}
                    <div className="flex items-center justify-center gap-4 mt-8 w-full max-w-md mx-auto">

                        {/* Left Arrow */}
                        <button
                            onClick={handlePrev}
                            className="flex-shrink-0 p-3 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 transition-colors duration-200 z-30"
                            aria-label="Previous project"
                        >
                            <ChevronLeft size={24} />
                        </button>

                        {/* Dots Indicator (Scrolls on X-Axis horizontally) */}
                        <div className="overflow-hidden max-w-[160px] py-2">
                            <style>{`
            .no-scrollbar::-webkit-scrollbar { display: none; }
            .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        `}</style>
                            <div
                                className="flex items-center gap-2 overflow-x-auto no-scrollbar scroll-smooth"
                            >
                                {projects.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => {
                                            setCurrentIndex(index);
                                            pauseAutoPlay();
                                        }}
                                        className={`h-2 rounded-full transition-all duration-300 flex-shrink-0 ${index === currentIndex
                                                ? 'bg-blue-600 w-8'
                                                : 'bg-gray-300 hover:bg-gray-400 w-2'
                                            }`}
                                        aria-label={`Go to project ${index + 1}`}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Right Arrow */}
                        <button
                            onClick={handleNext}
                            className="flex-shrink-0 p-3 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 transition-colors duration-200 z-30"
                            aria-label="Next project"
                        >
                            <ChevronRight size={24} />
                        </button>

                    </div>


                </div>
            </div>
        </section>
    );
}