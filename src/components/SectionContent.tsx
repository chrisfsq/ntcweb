interface ContentProps {
    text: string,
    icon: React.ReactNode,
};

export default function Section(props:ContentProps) {
    return (
        <div >
            <div className="flex flex-row p-3 gap-3">
                {props.icon}
                <h2>{props.text}</h2>
            </div>
        </div>
    )
}