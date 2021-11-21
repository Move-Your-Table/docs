import React from 'react';
import styles from './HomepageFeatures.module.css';
import Feature from './Feature';

const DeploymentList = [
    {
        title: 'MYT Web',
        Svg: require('../../static/img/undraw_working_remotely.svg').default,
        description: (
            <>
                MYT Web is the main interface design for employees as admins.
                <a href="https://move-your-table-main.herokuapp.com"> Try it here!</a>
            </>
        ),
    },
    {
        title: 'MYT Documentation',
        Svg: require('../../static/img/undraw_file_searching.svg').default,
        description: (
            <>
                Stuck with something? Don't worry, our documentation should get you up & running.
                <a href="https://move-your-table-docs.herokuapp.com"> Try it here!</a>
            </>
        ),
    }
]

export default function HomepageDeployments() {
    return (
        <section className={styles.features}>
            <div className="container">
                <h2 className="text--center">Available Deployments</h2>
                <div className="row">
                    {DeploymentList.map((props, idx) => (
                        <Feature key={idx} {...props} />
                    ))}
                </div>
            </div>
        </section>
    );
}
