import next from "next";
import Head from 'next/head'

import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";
import { CompletedChallenges } from "../components/CompletedChallenges";
import { ChallengesBox } from "../components/ChallengesBox";

import styles from "../styles/pages/Home.module.css"
import Countdown from "../components/Countdown";
import { CountdownProvider } from "../contexts/CountdownContext";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Início | Helath-Cycles</title>
      </Head>
      <ExperienceBar />

      <CountdownProvider>
        <section>
          <div>
            <Profile />
            <CompletedChallenges />
            <Countdown />
          </div>
          <div>
            <ChallengesBox />
          </div>
        </section>
      </CountdownProvider>
    </div>
  )
}
