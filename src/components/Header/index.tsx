import ContactIcon from "../Icons/ContactIcon";
import LocalIcon from "../Icons/LocalIcon";

export default function Header() {
    return (
        <header className="flex gap-10 bg-white justify-evenly">
            <div className="flex justify-center mb-4">
                <img src="/images/logo.png" alt="Logo" width="100" />
            </div>
            <div className="flex justify-center items-center">
                <ul className="flex gap-5 align-center justify-center text-cyan-500">
                    <a href=""><li>INICIO</li></a>
                    <a href=""><li>AGENDAMENTO</li></a>
                    <a href=""><li>SOBRE NÓS</li></a>
                </ul>
            </div>
            <div className="flex text-cyan-500 items-center gap-16">
                <div className="flex flex-col items-center">
                    <ContactIcon />
                    <a href="">Contato</a>
                </div>
                <div className="flex flex-col items-center">
                    <LocalIcon/>
                    <a href="">Localização</a>
                </div>
            </div>
        </header>
    )
}