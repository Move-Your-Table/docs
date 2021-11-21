import React from 'react';
import Feature from './Feature';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Hybrid Work, Made easy',
    Svg: require('../../static/img/undraw_digital_nomad.svg').default,
    description: (
      <>
        MYT allows you to control how you work,
        by offering tools to make sure you can reserve your desk of choice & know your colleagues work lifestyle.
      </>
    ),
  },
  {
    title: 'Hybrid Management, Made easy',
    Svg: require('../../static/img/undraw_control_panel.svg').default,
    description: (
      <>
        Our MYT admin panel allows you to easily manage your company's buildings,
        room & desks and know which ones have problems & need attention.
      </>
    ),
  },
  {
    title: 'Available for everyone, everywhere',
    Svg: require('../../static/img/undraw_explore.svg').default,
    description: (
      <>
        Thanks to wide range of applications, an innovative infrastructure and easy-to-use interfaces,
        you can rest assure that your whole company will be able to find the work lifestyle they desire.
      </>
    ),
  },
];



export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}


