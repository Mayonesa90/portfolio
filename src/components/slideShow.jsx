import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import { motion } from "motion/react";

export function SlideShow({ images }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };
    
    const nextSlide = () => {
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    return (
        <section className="relative w-full max-w-3xl mx-auto overflow-hidden">
            <div className="relative flex items-center">
                {/* Previous Button */}
                <button
                    className="absolute left-0 z-10 bg-white p-2 rounded-full shadow-md hover:bg-gray-100"
                    onClick={prevSlide}
                >
                    <ChevronLeft size={24} />
                </button>
            
                {/* Image Wrapper */}
                <div className="flex w-full justify-center overflow-hidden">
                    <motion.div
                        className="flex w-full min-w-full"
                        animate={{ x: `-${currentIndex * 100}%` }}
                        transition={{ type: "spring", stiffness: 100 }}
                    >
                        {images.map((src, index) => (
                            <img
                            key={index}
                            src={src}
                            className="w-full flex-shrink-0 mx-auto object-cover transition-all duration-300 rounded-lg shadow-lg"
                            alt={`Gallery ${index + 1}`}
                            />
                        ))}
                        </motion.div>
                </div>
            
                {/* Next Button */}
                <button
                    className="absolute right-0 z-10 bg-white p-2 rounded-full shadow-md hover:bg-gray-100"
                    onClick={nextSlide}
                >
                    <ChevronRight size={24} />
                </button>
            </div>
        </section>
    )
}