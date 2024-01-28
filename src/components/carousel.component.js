"use client";
import { useState, useEffect } from "react";
import { BsFillArrowLeftSquareFill } from "react-icons/bs";
import { BsFillArrowRightSquareFill } from "react-icons/bs";

export default function Carousel({ slides }) {

    let [current, setCurrent] = useState(0);

    let previousSlide = () => {
        if (current === 0) setCurrent(slides.length - 1);
        else setCurrent(current - 1);
    }

    let nextSlide = () => {
        if (current === slides.length - 1) setCurrent(0);
        else setCurrent(current + 1);
    };

    // Adiciona o intervalo para avançar automaticamente os slides
    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 3000); // Troque para o intervalo desejado (em milissegundos), por exemplo, 3000 para 3 segundos.

        // Limpa o intervalo quando o componente é desmontado
        return () => clearInterval(interval);
    }, [current]);


    return (
        <div className="overflow-hidden relative">
            <div
                className={`flex transition ease-out duration-500`}
                style={{
                    transform: `translateX(-${current * (100 / slides.length)}%)`,
                    width: `${slides.length * 100}%`
                }}
            >
                {slides.map((s, index) => (
                    <div key={index} style={{ flex: `0 0 ${100 / slides.length}%`, height: "700px" }}>
                        <img
                            src={s}
                            alt={`Slide ${index}`}
                            style={{ width: "100%", height: "600px", objectFit: "cover" }}
                        />
                    </div>
                ))}
            </div>
            <div className="absolute top-0 h-full w-full items-center flex justify-between text-[#F44336] px-10 text-3xl">
                <button onClick={previousSlide}>
                    <BsFillArrowLeftSquareFill />
                </button>
                <button onClick={nextSlide}>
                    <BsFillArrowRightSquareFill />
                </button>
            </div>
        </div>
    );


}