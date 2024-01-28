interface ContentProps {
    text: string,
    icon: React.ReactNode,
};

export default function Section(props:ContentProps) {
    return (
       
        <div className="flex flex-row justify-center items-center m-auto">
            <div className="flex flex-col p-3 gap-3 justify-center items-center">
                {props.icon}
                <h2>{props.text}</h2>
            </div>
        </div>

    )
}