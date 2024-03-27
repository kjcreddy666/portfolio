function ProjectCard({title, techStack, imgUrl}) {
    return(
        <Col sm={6} md={4}>
            <a href="#">
                <div className="proj-imgbx">
                    <img src={imgUrl} />

                    <div className="proj-txtx">
                        <h4>{title}</h4>
                        <span><bold>{`Tech Stack : {techStak}`}</bold></span>
                    </div>
                </div>
            </a>
        </Col>
    );
}

return ProjectCard;