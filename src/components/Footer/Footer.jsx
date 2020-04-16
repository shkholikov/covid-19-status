import React from 'react';
import styles from "./Footer.module.css"

function StickyFooter() {
    const copyright = () => {
        let year = new Date().getFullYear();
        return (<div>Copyright © Covid-19 Status {year}</div>)
    };

    return (
        <footer className={styles.footer}>
            <div>STAY AT HOME🏠 Created by Shakhzod Kholikov👨🏻‍💻</div>
            {copyright()}
        </footer>

    );
}

export default StickyFooter;