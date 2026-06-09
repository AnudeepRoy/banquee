type text = {
    text: string
}

export default function Bullet ({text} : text) {
    return (
        <div className="bullet flex items-center">
            <div className="img-wrapper">
                <img alt="tick" src={`/icons/ri_check-fill.svg`} />
            </div>
            <p>{text}</p>
        </div>
    )
}