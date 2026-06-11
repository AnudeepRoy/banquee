type card = {
    brand : string,
    product : string,
    cost : string
}

export default function AppleCard ({brand, product, cost} : card) {
    return (
        <div className="apple-card flex items-center justify-between">
            <div className="card-left flex gap-4">
                <div className="img-container">
                    <img src={`/icons/ri_apple-fill.svg`} alt="apple" />
                </div>
                <div className="card-text">
                    <h4 className="font-medium">{brand}</h4>
                    <p>{product}</p>
                </div>
            </div>
            <div className="card-right">
                <h4>{`-${cost}£`}</h4>
            </div>
        </div>
    )
}