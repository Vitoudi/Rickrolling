import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import { allQuestions } from '../data/questions'
import Header from '../sharedComponents/Header/Header'
import Question from '../sharedComponents/Question/Question'
import styles from '../styles/Home.module.css'

export type Option = number | null;

const Home: NextPage = () => {
  const [errorMsg, setErrorMsg] = useState("");
  const [selectedOption, setSelectedOption] = useState<Option>(null);
  const questions = allQuestions;
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(1);
  const [shouldShowSeeResultsButton, setShouldShowSeeResultsButton] = useState(false);
  const currentQuestion = questions[currentQuestionIndex - 1];

  function handleNewOptionAppear() {
    setSelectedOption(null);
    setErrorMsg("");
  }

  function getNextQuestion() {
    handleNewOptionAppear()

    if (!selectedOption) {
      setErrorMsg("Selecione uma opção para prosseguir")
      return;
    }

    const hasQuestionsAvailable = questions.length > currentQuestionIndex;

    if (!hasQuestionsAvailable) {
      setShouldShowSeeResultsButton(true);
      return;
    };

    setCurrentQuestionIndex(currentQuestionIndex + 1);
  }

  function getPrevQuestion() {
    handleNewOptionAppear();

    const hasPrevQuestion = currentQuestionIndex > 1;
    if (!hasPrevQuestion) return;

    setCurrentQuestionIndex(currentQuestionIndex - 1);
  }

  return (
    <div className={styles["container"]}>
      <Head>
        <title>Que universidade mais combina com sua personalidade?</title>
        <meta
          name="description"
          content="Cada universidade tem sua cultura e estilo, veja qual é ideal para
              você"
        />
        <link rel="icon" href="/assets/logo.png" />
        <meta
          property="og:title"
          content="Que universidade mais combina com sua personalidade?"
        />
        <meta
          property="og:description"
          content="Cada universidade tem sua cultura e estilo, veja qual é ideal para
              você!"
        />
        <meta property="og:image" content="/assets/banner.jpg" />
        <meta
          property="og:url"
          content="http://euro-travel-example.com/index.htm"
        />
        <meta
          name="twitter:title"
          content="Que universidade mais combina com sua personalidade? "
        />
        <meta
          name="twitter:description"
          content=" Cada universidade tem sua cultura e estilo, veja qual é ideal para
              você!"
        />
        <meta name="twitter:image" content=" /assets/banner.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <Header />
      <div>
        <div className={styles["banner-container"]}>
          <div className={styles["banner-text"]}>
            <h1 className={styles["main-title"]}>
              Descubra que universidade mais combina com sua personalidade
            </h1>
            <p>
              Cada universidade tem sua cultura e estilo, veja qual é ideal para
              você!
            </p>
          </div>
          <Image
            className={styles["banner"]}
            placeholder="blur"
            blurDataURL="/assets/banner.jpg"
            alt="post-image"
            layout="fill"
            src="/assets/banner.jpg"
            objectFit="cover"
            objectPosition="center"
          />
        </div>
      </div>

      <main className={styles["main-content"]}>
        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
          <h2>Teste:</h2>
          <p>
            O teste a seguir foi baseado no estudo de 2016 da Universidade
            Federal de Minas Gerais (UFMG) e não reflete a opnião da Uni Media e
            seus associados.
          </p>
        </a>

        {!shouldShowSeeResultsButton ? (
          <div style={{display: "grid", justifyContent: "center", alignContent: "center", alignItems: "center", justifyItems: "center"}}>
            <Question
              selectedOption={selectedOption}
              setSelectedOption={setSelectedOption}
              text={currentQuestion}
              index={currentQuestionIndex}
              onAskForNextQuestion={getNextQuestion}
              onAskForPrevQuestion={getPrevQuestion}
            />
            {errorMsg && <div>{errorMsg}</div>}
          </div>
        ) : (
          <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
            <button>Ver resultados</button>
          </a>
        )}
      </main>
    </div>
  );
}

export default Home
