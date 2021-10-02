import { portfolioData } from 'constants/portfolio'
import React from 'react'
import { Project } from './Project'

export const Portfolio = () => {
    return (
        <section id="portfolio" className="projects">
            <div className="projects-container">
                <div className="title">МОИ ПРОЕКТЫ</div>
                <div className="projects-wrapper">
                    <div className="container">
                        <div className="row">
                            {portfolioData.map(i => <Project name={i.name} description={i.description} href={i.href} image={i.image} key={i.name} />)}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}