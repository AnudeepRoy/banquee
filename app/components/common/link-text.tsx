type link = {
    link?: string,
    text: string
}

export default function LinkText ({link, text}:link) {
    return (
        <a className="link-text flex items-center" href={link}>
            {text}
            <img alt="arrow" src={`/icons/ri_arrow-right-line.svg`} />
        </a>
    )
}