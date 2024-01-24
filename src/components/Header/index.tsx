// import ContactIcon from "../Icons/ContactIcon";
// import LocalIcon from "../Icons/LocalIcon";
import Logo from "../Logo";
import { MdEmail } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";
import Instagram from "../Social/Instagram";
import Facebook from "../Social/Facebook";

export default function Header() {
    return (
        <header className="flex gap-10  justify-evenly bg-slate-900">
            <div className="flex justify-center mb-4">
                <Logo />
            </div>
            <div>
            <div className="flex justify-center items-center bg-slate-800 w-[500px] h-20 rounded-b-lg border-[#F44336] border-b-4">
                <ul className="flex gap-5 align-center justify-center text-white font-bold">
                    <a href="" className="cursor-pointer uppercase px-4 py-2 active:translate-x-0.5 active:translate-y-0.5 hover:shadow-[0.5rem_0.5rem_#F44336,-0.5rem_-0.5rem_#00BCD4] transition"><li>Inicio</li></a>
                    <a href="" className="cursor-pointer uppercase px-4 py-2 active:translate-x-0.5 active:translate-y-0.5 hover:shadow-[0.5rem_0.5rem_#F44336,-0.5rem_-0.5rem_#00BCD4] transition"><li>Agendamentos</li></a>
                    <a href="" className="cursor-pointer uppercase px-4 py-2 active:translate-x-0.5 active:translate-y-0.5 hover:shadow-[0.5rem_0.5rem_#F44336,-0.5rem_-0.5rem_#00BCD4] transition"><li>Sobre nós</li></a>
                </ul>
            </div>
            <div className="bg-slate-800 flex justify-center mt-10 h-[20px] w-[100px] gap-10 items-center m-auto">
                <Instagram/>
                <Facebook/>
            </div>
            </div>
            <div className="flex text-cyan-400 items-center gap-5">
                <div className="flex flex-col items-center text-[15pt]">
                    <MdEmail className="text-white" />
                    <a href="">Contato</a>
                </div>
                <div className="divider"></div>
                <div className="flex flex-col items-center upperca text-[15pt]">
                    <FaMapMarkerAlt className="text-white" />
                    <a href="">Localização</a>
                </div>
            </div>
        </header>


    )
}