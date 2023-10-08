import Experience from '../../components/Experience/Experience';
import experiences from '../../constants/resume';

function ExperienceContainer() {
    const renderExperiences = arr => {
        return arr.map((exp, i)=> {
            return <Experience 
                company={exp.company}
                date={exp.date}
                duties={exp.duties}
                image={exp.image}
                link={exp.link}
                key={i}
                index={i}
            />
        });
    };

    return(
        <div id="experience-container" name="experience-container" style={{ margin:'5em 0', flexDirection:'column' }}>
            {renderExperiences(experiences)}
        </div>
    );
}

export default ExperienceContainer;