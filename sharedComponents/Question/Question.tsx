import React, { Dispatch, ReactElement, SetStateAction, useState } from 'react'
import Option from './components/Option';
import styles from "./Question.module.css"

interface Props {
  text: string;
  index: number;
  selectedOption: number | null;
  setSelectedOption: Dispatch<SetStateAction<number | null>>;
  onAskForNextQuestion: () => void;
  onAskForPrevQuestion: () => void;
}

export default function Question({ text, index, onAskForNextQuestion, onAskForPrevQuestion, setSelectedOption, selectedOption }: Props): ReactElement {
    

    return (
      <div className={styles["question"]}>
        <div>
          <h3>Pergunta {index}</h3>
        </div>
        <h2 className={styles["title"]}>{text}</h2>
        <div className={styles["options-area"]}>
          <span className={styles["options-label"]}>Não me descreve</span>
          <div className={styles["options-container"]}>
            <Option
              value={1}
              onChooseOption={(value) => setSelectedOption(value)}
              selectedOption={selectedOption}
            />
            <Option
              value={2}
              onChooseOption={(value) => setSelectedOption(value)}
              selectedOption={selectedOption}
            />
            <Option
              value={3}
              onChooseOption={(value) => setSelectedOption(value)}
              selectedOption={selectedOption}
            />
            <Option
              value={4}
              onChooseOption={(value) => setSelectedOption(value)}
              selectedOption={selectedOption}
            />
            <Option
              value={5}
              onChooseOption={(value) => setSelectedOption(value)}
              selectedOption={selectedOption}
            />
          </div>
          <span className={styles["options-label"]}>Me descreve</span>
        </div>
        <div>
          <button onClick={onAskForPrevQuestion}>Anterior</button>
          <button onClick={onAskForNextQuestion}>Próxima</button>
        </div>
      </div>
    );
}
