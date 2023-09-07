import './experience.scss'
export default function Experience() {
    return (
        <div id="experience" className="section">
            <h1>experience</h1>
            <div className="experienceSection odd">
                <div className="experienceSectionContents">
                    <div className="logo">
                        <img src="../../assets/IBM_logo.png" />
                    </div>
                </div>
                <div className="experienceSectionContents">
                    <div className="experienceText">
                        <h3>full stack developer intern</h3>
                        <div className="italics">
                            <i>IBM </i><br/>
                            <i>may 2023 - aug 2023</i>
                        </div>
                        <ul>
                            <li>
                                spearheaded the sunset of an outdated incident management 
                                slack app and communicated migration plans to
                                ensure a seamless transition for an optimized incident response process
                            </li>
                            <li>
                                developed a task board slack app with minimal footprint using typescript, bolt, 
                                and mongoose and deployed to IBM cirrus, enabling real-time incident management 
                                directly within the messaging platform
                            </li>
                            <li>
                                implemented features to an AI-powered support bot including training question bulk 
                                upload via CSV file
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="experienceSection even">
                <div className="experienceSectionContents">
                    <div className="experienceText">
                        <h3>software engineer intern</h3>
                        <div className="italics">
                            <i>state farm</i><br/>
                            <i>may 2022 - aug 2022</i>
                        </div>
                        <ul>
                            <li>
                                deployed containerized batch applications to migrate 2 million data entries from 
                                TP2 to AWS via kubernetes
                            </li>
                            <li>
                                built custom dockerfile and docker image loaded with psql and aws-cli
                            </li>
                            <li>
                                stood up kafka cluster and integrated javascript batch jobs with real-time database manager
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="experienceSectionContents">
                    <div className="logo">
                        <img src="../../assets/state_farm_logo.png" />
                    </div>
                </div>
            </div>
            <div className="experienceSection odd">
                <div className="experienceSectionContents">
                    <div className="logo">
                        <img src="../../assets/abbvie_logo.png" />
                    </div>
                </div>
                <div className="experienceSectionContents">
                    <div className="experienceText">
                        <h3>frontend developer intern</h3>
                        <div className="italics">
                            <i>abbvie</i><br/>
                            <i>nov 2021 - may 2022</i>
                        </div>
                        <ul>
                            <li>
                                created user-centered, simple, and clean visualization dashboards using python and dash for R&D data
                            </li>
                            <li>
                                developed components used to automate functionalities in visualization dashboards in the R&D area
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}