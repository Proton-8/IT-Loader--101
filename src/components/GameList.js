
import React, { Fragment } from 'react';

// take our props(project)
export const ShowCard = (project) => {
    return (
        // Set up style and format for the card itself. 
        <Fragment>
            <figure>
                <img className="rounded" src={project.venueImg} alt="placeholder"></img>
            </figure>
            <div className="ml-25">
                <h2>
                    {project.venue}
                </h2>
                <p>
                    {project.desc}
                </p>
                <p>
                    <a className="btn btn-dark" href={project.href}>View App</a>
               </p>
            </div>
        </Fragment>
    )
}