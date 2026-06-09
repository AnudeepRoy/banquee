import HeroHeader from "../common/hero-header";
import Bullet from "../common/bullet";
import LinkText from "../common/link-text";
import data from '../../data.json';

export default function HomeHero () {

    const homeHero = data['home-hero'];

    return (
        <section className="home-hero">
            <div className="container flex items-center">
                <div className="hero-left flex-grow">
                    <HeroHeader 
                        heading="Banking starts here"
                    />
                    <div className="bullet-points">
                        {homeHero.map((item, i)=>(
                            <Bullet key={i} text={item.text} />
                        ))}
                    </div>
                    <LinkText 
                        text="Compare Cards"
                    />
                </div>
                <div className="hero-right flex-grow">
                    <img src={`/images/cards.png`} />
                </div>
                
            </div>
        </section>
    )
}