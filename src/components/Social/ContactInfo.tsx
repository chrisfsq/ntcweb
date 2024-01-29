'use client';
import { IoLogoWhatsapp } from "react-icons/io";
import { FcOvertime } from "react-icons/fc";

export default function ContactInfo() {

    const redirWpp = () => {
        window.location.href = 'https://wa.me/5548988275381'
    }

    return (
        <div className="text-center font-bold flex justify-around text-cyan-600 p-3 shadow-lg">
            <div className="flex flex-row gap-2 items-center">
                <FcOvertime className="text-[30px]" />
                <p>Seg a Sex das 10:00 as 18:00</p>
            </div>

            <button className="flex flex-row gap-2 items-center" onClick={redirWpp}>
                <IoLogoWhatsapp className="text-green-500 text-[29px]" />
                <p>Converse conosco</p>
            </button>

        </div>
    )
}