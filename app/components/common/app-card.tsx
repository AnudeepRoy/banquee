type card = {
    "title" : string,
    "text" : string,
    "image" : string
}

export default function AppCard ({title, text, image}: card) {
    return (
        <div className="app-card flex flex-col">
            <div className="img-container w-50">
                <img alt="card-img" src={image} />
            </div>
            <h4>{title}</h4>
            <p>{text}</p>
        </div>
    )
}