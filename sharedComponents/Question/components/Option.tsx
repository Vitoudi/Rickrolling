import React, { ReactElement } from 'react'
import styles from "../Question.module.css";

interface Props {
    value: number;
    onChooseOption: (value: number) => void;
    selectedOption: number | null;
}

export default function Option({ value, onChooseOption: onClick, selectedOption }: Props): ReactElement {
    const thisOptionIsSelected = selectedOption === value;

    return (
      <div className={`${styles["option"]} ${thisOptionIsSelected && styles["selected-option"]}`} onClick={() => onClick(value)}>
        <span>{value}</span>
      </div>
    );
}
