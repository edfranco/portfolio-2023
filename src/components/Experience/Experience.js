import './Experience.scss';

function Experience(props) {
    const renderBulletPoints = arr => {
        return arr.map((li, i)=> {
            return <li key={i}>{li}</li>
        });
    };

    return(  
        <div className="experience" style={props.index % 2 !== 0 ? {flexDirection: 'row'} : {flexDirection: 'row-reverse'}}>
            <div className="experience-image-container">
                <img src={props.image} alt={`${props.company} homepage`}/>
            </div>
            <div className="experience-text">
                <h1><a href={props.link} target="_blank" rel="noreferrer">{props.company}</a></h1>
                <h3 style={{color:'#3fff'}}>{props.date}</h3>
                <ul>
                    {renderBulletPoints(props.duties)}
                </ul>
            </div>
        </div>
    );
}

export default Experience;