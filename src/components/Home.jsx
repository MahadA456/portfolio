import react from 'react';
import Header from './Header';
import Introduction from './Introduction';
import Skills from './Skills'
import Projects from './Projects';
const Home = () => {
    return (
        <div>
            <Header/>
            <br/>
            <Introduction/>
            <Skills/>
            <Projects/>
        </div>
    );
}

export default Home