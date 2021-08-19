/* eslint-disable no-fallthrough */
import React, {useState} from 'react';
import { useSSR } from 'react-i18next';
import './App.css';
import AnimationSection from './components/AnimationSection';
import DedicatedSection from './components/DedicatedSection';
import DedicatedSolutionsSection from './components/DedicatedSolutionsSection';
import GetCaseStudy from './components/GetCaseStudy';
import MainSection from './components/MainSection';
import SectionEntries from './components/SectionEntries';
import SectionForBiznes from './components/SectionForBiznes';
import SectionForCity from './components/SectionForCity';
import SectionForIt from './components/SectionForIt';
import video1 from './movies/mov_bbb.mp4'




function App() {
  const [sectionType, setSectionType] = useState(0);

  const getSection = (index) => {
    if(index === 0 ||index === 3 ) return  <SectionForCity/>;
    if(index === 1) return <SectionForBiznes/>
    if(index === 2) return <SectionForIt/>
  }


  return (
    <div className="App">
      <MainSection/>
      <SectionEntries/>
      <AnimationSection video={video1} />
      <DedicatedSolutionsSection  setSectionType={setSectionType}/>
      {getSection(sectionType)}
      <GetCaseStudy />
    </div>
  );
}

export default App;
