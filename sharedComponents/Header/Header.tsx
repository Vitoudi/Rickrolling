import Image from 'next/image';
import React, { ReactElement } from 'react'
import styles from "./Header.module.css";

interface Props {
    
}

export default function Header({}: Props): ReactElement {
    return (
        <header className={styles["header"]}>
            <div className={styles["logo"]}>
                <Image src="/assets/logo.png" width={85} height={75} alt="icon"/>
                <span>UNI MEDIA</span>
            </div>
        </header>
    )
}
