import React from 'react'
import LadyHero from '../../component/Events/LadyBoss/LadyHero'
import AboutLadyBoss from '../../component/Events/LadyBoss/AboutLadyBoss'
import LadyBossBC from '../../component/Events/LadyBoss/LadyBossBC'
import Testimonial from '../../component/About/Testimonial'
import Solution from '../../component/Home/Solution'
import Count from '../../component/Home/Count'
// import LadyBoseBCTeam from '../../component/Events/LadyBoss/LadyBoseBCTeam'

function LadyBoss() {
  return (
    <div style={{ marginTop: "150px" }}>
      <LadyHero />
      <AboutLadyBoss />
      <LadyBossBC />
      <Testimonial />
      <Solution />
      <Count /> 
      {/* <LadyBoseBCTeam /> */}
    </div>
  )
}

export default LadyBoss