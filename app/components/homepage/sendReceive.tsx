import AppleCard from '../common/apple-card';
import Bullet from '../common/bullet';
import data from '../../data.json';

export default function SendReceive () {

    const cardData = data["apple-card"];

    return (
        <section className="bg-secondary p-128">
            <div className="container flex g-140">
                <div className="section-left flex-grow basis-0">
                    <h3 className="section-heading">
                        Send & Receive Money Instantly
                    </h3>
                    <p className="section-text">Officia reprehenderit ad do pariatur duis dolore consectetur eu. Aute exercitation officia anim consectetur nisi et nulla.</p>
                    
                </div>
                <div className="section-right flex-grow flex-shrink flex flex-col gap-4 basis-0">
                    {cardData.map((item, i)=>(
                        <AppleCard 
                            key={i}
                            brand={item.brand}
                            product={item.product}
                            cost={item.cost}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}