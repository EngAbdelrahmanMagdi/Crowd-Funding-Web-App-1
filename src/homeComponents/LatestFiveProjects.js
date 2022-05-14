import { useEffect, useState } from "react";
import axiosInstance from "../network/axiosConfig";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ProjectCard from "../components/ProjectCard";
import './TopFiveProjects.css';

function LatestFiveProjects() {
    const [isLoading, setIsLoading] = useState(true);


    const [projects, setProjects] = useState([]);
    useEffect(() => {
        axiosInstance
            .get("projects/latestfive", { crossdomain: true })
            .then((response) => {
                setProjects(response.data);
                setIsLoading(false);
            })
            .catch((error) => console.log(error));
    }, []);
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 1
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <>
            {
                isLoading ?
                    <div className="d-flex justify-content-center mt-5">
                        <div className="spinner-border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                    :
                    <>
                    <div className="font-macondo">
                        <h1>Latest-Five Project</h1>
                    </div>
                    <Carousel responsive={responsive} className="carousel">
                        {projects.map((project) => {
                            return (
                                <div className="d-flex justify-content-center align-items-center project-card">
                                <ProjectCard project={project} key={project.id} />
                                </div>
                            );
                        })}
                    </Carousel>
                    </>
            }
        </>
    );
}

export default LatestFiveProjects;
