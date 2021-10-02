import React, {FC} from 'react'

export interface ProjectProps {
    image: string;
    name: string;
    href: string;
    description: string;
}

export const Project:FC<ProjectProps> = ({description, image, name, href}) => {
    return (
        <div className="col-xs-12 col-md-4 col-lg-3">
            <div className="project">
                <div className="project-img"><img className="minimized" alt="клик для увеличения" src={image} /></div>
                <div className="name"><a href={href}>{name}</a></div>
                <div className="stack">{description}</div>
            </div>
        </div>
    )
}
