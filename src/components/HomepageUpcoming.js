import React from 'react';
import styles from './HomepageFeatures.module.css';
import Feature from './Feature';

const DeploymentList = [
]

export default function HomepageUpcoming() {
    return (
        <section className={styles.features}>
            <div className="container">
                <h2 className="text--center">Upcoming Deployments</h2>
                <div className="row">
                    {DeploymentList.map((props, idx) => (
                        <Feature key={idx} {...props} />
                    ))}
                </div>
            </div>
        </section>
    );
}
