import React, {useState, useEffect} from "react";
import { FaAngleDoubleRight } from 'react-icons/fa';

const url = 'https://course-api.com/react-tabs-project';

const App = () => {
    const [loading, setLoading] = useState(true);
    const [jobs, setJobs] = useState([]);
    const [value, setValue] = useState(0);

    const fetchUrl = async () => {
        try {
            setLoading(true)
            const resolve = await fetch(url)
            const data = await resolve.json();
            setJobs(data)
            setLoading(false)  
        } catch (error) {
            console.log(error);
        }
        
    }

    useEffect(() => {
        return fetchUrl();
    }, [] );


    if(loading){
        return (<main>
            
            <h1 className='loading'>Loading...</h1>
            
        </main>)
    }

    const {company, dates, duties, id, order, title} = jobs[value]
    return (
        <main>
            <section className="section">
            <h1 className='title'>Experience</h1>
            <div className="job__inner">
                <div className="btn__container">
                    {jobs.map((item, index) => {
                        return <button key={item.id} className={`btn ${index === value && 'btn-active'}`} onClick={()=> setValue(index)}>{item.company}</button>
                    })}
                </div>
                <div className="job__item">
                    <h3 className="job__item-title">{title}</h3>
                    <h4 className="job__item-company">{company}</h4>
                    <div className="job__item-data">{dates}</div>
                    {duties.map((duty, index) => {
                        return <div key={index} className="job__item-info">
                            <FaAngleDoubleRight className='job__item-icon' />
                            <p>{duty}</p>

                        </div>
                    })}
                </div>
            </div>
            </section>
        </main>
            
    
    );
};

export default App;
