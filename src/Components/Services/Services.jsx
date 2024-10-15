import React from 'react';
import styles from './Services.module.css';

const Services = () => {
    return (
        <section className={styles.servicesSection}>
            <h1 className={styles.servicesHeader}>Our Services</h1>
            <div className={styles.serviceCard}>
                <div className={styles.serviceLogo}>
                    <img src="path/to/logo1.png" alt="Service 1" />
                </div>
                <h4 className={styles.serviceTitle}>Service 1</h4>
                <p>Description of Service 1.</p>
            </div>
            <div className={styles.serviceCard}>
                <div className={styles.serviceLogo}>
                    <img src="path/to/logo2.png" alt="Service 2" />
                </div>
                <h4 className={styles.serviceTitle}>Service 2</h4>
                <p>Description of Service 2.</p>
            </div>
            <div className={styles.serviceCard}>
                <div className={styles.serviceLogo}>
                    <img src="path/to/logo3.png" alt="Service 3" />
                </div>
                <h4 className={styles.serviceTitle}>Service 3</h4>
                <p>Description of Service 3.</p>
            </div>
        </section>
    );
};

export default Services;
