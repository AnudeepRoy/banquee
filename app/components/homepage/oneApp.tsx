import AppCard from '../common/app-card';
import data from '../../data.json';

export default function OneApp () {
    const oneApp = data['one-app'];
    return (
        <section className="p-160">
            <div className="container flex g-124">
                <div className="app-left flex-grow">
                    <h3 className="section-heading">
                        One app<br/>
                        One Bank
                    </h3>
                    <div className="card-grid grid grid-cols-2">
                        {oneApp.map((item, i)=>(
                            <AppCard 
                                key={i}
                                title={item.title} 
                                text={item.text}
                                image={item.image}
                            />
                        ))}
                    </div>
                </div>
                <div className="app-right flex-grow flex-col flex justify-start flex-shrink-0">
                    <img alt="one-app" src={`/images/one-app.png`} />
                </div>
            </div>
        </section>
    )
}