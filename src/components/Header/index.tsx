import ContactIcon from "../Icons/ContactIcon";
import LocalIcon from "../Icons/LocalIcon";
import Logo from "../Logo";
import { MdEmail } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";

export default function Header() {
    return (
        <header className="flex gap-10 bg-white justify-evenly">
            <div className="flex justify-center mb-4">
                <Logo/>
            </div>
            <div className="flex justify-center items-center">
                <ul className="flex gap-5 align-center justify-center text-cyan-500">
                    <a href="" className="hover:text-sky-700"><li>Inicio</li></a>
                    <a href="" className="hover:text-sky-700"><li>Agendamentos</li></a>
                    <a href="" className="hover:text-sky-700"><li>Sobre nós</li></a>
                </ul>
            </div>
            <div className="flex text-cyan-500 items-center gap-5">
                <div className="flex flex-col items-center font-bold text-[15pt]">
                <MdEmail />
                    <a href="">Contato</a>
                </div>
                <div className="divider"></div>
                <div className="flex flex-col items-center font-bold text-[15pt]">
                <FaMapMarkerAlt />
                    <a href="">Localização</a>
                </div>
            </div>
        </header>


    )
}