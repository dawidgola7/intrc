/* eslint-disable no-fallthrough */
import React, {useState} from 'react';
import { useSSR } from 'react-i18next';
import './App.css';
import AnimationSection from './components/AnimationSection';
import DedicatedSection from './components/DedicatedSection';
import DedicatedSolutionsSection from './components/DedicatedSolutionsSection';
import GetCaseStudy from './components/GetCaseStudy';
import MainForm from './components/MainForm';
import MainSection from './components/MainSection';
import SectionEntries from './components/SectionEntries';
import SectionForBiznes from './components/SectionForBiznes';
import SectionForCity from './components/SectionForCity';
import SectionForIt from './components/SectionForIt';
import video1 from './movies/mov_bbb.mp4'


function App() {
  const [sectionType, setSectionType] = useState(0);
  const [showForm, setShowForm] = useState(false); 

  const getSection = (index) => {
    if(index === 0 ||index === 3 ) return  <SectionForCity/>;
    if(index === 1) return <SectionForBiznes/>
    if(index === 2) return <SectionForIt/>
  }

  const handleSetShowForm = () => {
    setShowForm(prev => !prev)
  }


  return (
    <div className="App">
      {showForm && <MainForm handleSetShowForm={handleSetShowForm}/>}
      <MainSection handleSetShowForm={handleSetShowForm}/>
      <SectionEntries />
      <AnimationSection video={video1} videoEn='https://samplelib.com/lib/preview/mp4/sample-5s.mp4'/>
      <DedicatedSolutionsSection  setSectionType={setSectionType}/>
      {getSection(sectionType)}
      <GetCaseStudy />
      <AnimationSection video={video1} videoEn='https://samplelib.com/lib/preview/mp4/sample-5s.mp4'/>
    </div>
  );
}

export default App;
