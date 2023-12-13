import React from 'react'
import LadyHero from '../../component/Events/LadyBoss/LadyHero'
import AboutLadyBoss from '../../component/Events/LadyBoss/AboutLadyBoss'
import LadyBossBC from '../../component/Events/LadyBoss/LadyBossBC'
import Testimonial from '../../component/About/Testimonial'
import LadyBoseBCTeam from '../../component/Events/LadyBoss/LadyBoseBCTeam'

function LadyBoss() {
  return (
    <div style={{ marginTop: "118px" }}>
      <LadyHero />
      <AboutLadyBoss />
      <LadyBossBC />
      <Testimonial />
      <LadyBoseBCTeam />
    </div>
  )
}

export default LadyBoss