type heading = {
    heading: string
}

export default function HeroHeader ({heading}:heading) {
    return (
        <h2 className="hero-heading">
            {heading}
        </h2>
    )
}