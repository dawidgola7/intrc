/* eslint-disable no-fallthrough */
import React, {useState} from 'react';
import { CSSTransition } from 'react-transition-group';
import './App.css';
import AnimationSection from './components/AnimationSection';
import DedicatedSolutionsSection from './components/DedicatedSolutionsSection';
import GetCaseStudy from './components/GetCaseStudy';
import MainForm from './components/MainForm';
import MainSection from './components/MainSection';
import MonitoringSection from './components/MonitoringSection';
import SectionEntries from './components/SectionEntries';
import SectionForBiznes from './components/SectionForBiznes';
import SectionForCity from './components/SectionForCity';
import SectionForIt from './components/SectionForIt';
import SupportUsersSection from './components/SupportUsersSection';
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
      <CSSTransition
        timeout={400}
        in={true}
        classNames="popup"
        unmountOnExit
      >
      {getSection(sectionType)}
      </CSSTransition>
      <GetCaseStudy />
      <AnimationSection video={video1} videoEn='https://samplelib.com/lib/preview/mp4/sample-5s.mp4'/>
      <MonitoringSection/>
      <SupportUsersSection/>
    </div>
  );
}

export default App;
