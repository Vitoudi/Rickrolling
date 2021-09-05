import Image from 'next/image';
import React, { ReactElement } from 'react'
import RickRollLink from '../RickRollLink';
import styles from "./Header.module.css";

interface Props {
    
}

export default function Header({}: Props): ReactElement {
    return (
      <header className={styles["header"]}>
        <RickRollLink>
          <div className={styles["logo"]}>
            <Image src="/assets/logo.png" width={85} height={75} alt="icon" />
            <span>UNI MEDIA</span>
          </div>
        </RickRollLink>
        <div className={styles["menu"]}>
          <Image src="/assets/menu.png" width={40} height={40} alt="icon" />
        </div>
      </header>
    );
}
