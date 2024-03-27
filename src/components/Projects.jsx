import {Container, Row, Col} from 'react-bootstrap';
import projectImg1 from '../assets/img/project-img1.png';
function Projects() {
    const projects = [
        {
            title : "Portfolio",
            techStack : ["Bootstrap", "React.js"],
            imgUrl : projectImg1
        }, 
        {
            title : "Simon-says",
            techStack : ["HTML5", "CSS3", "JavaScript"],
            imgUrl : projectImg1
        }, 
        {
            title : "Spotify-clone",
            techStack : ["HTML5", "CSS3"],
            imgUrl : projectImg1
        }
    ];
    return (
        <section className="projects" id="projects">
            <Container>
                <Row>
                    <Col>
                        <h2>Projects</h2>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit, sit delectus incidunt aliquam saepe consequatur quasi laudantium quia, sunt alias, veritatis eos nisi itaque perspiciatis in distinctio! Accusantium, totam dicta.</p>
                        <Row>

                        </Row>
                    </Col>
                </Row>
            </Container>
        </section>
    );

}

export default Projects;