import React from 'react';
import styles from './HomepageFeatures.module.css';
import Feature from './Feature';

const DeploymentList = [
    {
        title: 'MYT Gateway',
        Svg: require('../../static/img/undraw_code_typing.svg').default,
        description: (
            <>
                MYT gateway will be the giving you access to MYT's Micro-Service Framework (MYT-MSF)
                and all it's amazing capabilities. Stay tuned!
            </>
        ),
    }
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
