import React from 'react'
import LadyHero from '../../component/Events/LadyBoss/LadyHero'
import AboutLadyBoss from '../../component/Events/LadyBoss/AboutLadyBoss'
import LadyBossBC from '../../component/Events/LadyBoss/LadyBossBC'

function LadyBoss() {
  return (
    <div style={{ marginTop: "118px" }}>
      <LadyHero />
      <AboutLadyBoss />
      <LadyBossBC />
    </div>
  )
}

export default LadyBoss