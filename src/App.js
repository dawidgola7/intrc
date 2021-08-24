/* eslint-disable no-fallthrough */
import React, {useState} from 'react';
import CSSTransitionGroup from 'react-addons-css-transition-group';
import AnimationSection from './components/AnimationSection';
import Contact from './components/Contact';
import DedicatedSolutionsSection from './components/DedicatedSolutionsSection';
import GetCaseStudy from './components/GetCaseStudy';
import MainForm from './components/MainForm';
import MainSection from './components/MainSection';
import MonitoringSection from './components/MonitoringSection';
import OpinionSection from './components/OpinionSection';
import SectionEntries from './components/SectionEntries';
import SectionForBiznes from './components/SectionForBiznes';
import SectionForCity from './components/SectionForCity';
import SectionForIt from './components/SectionForIt';
import SupportUsersSection from './components/SupportUsersSection';
import video1 from './movies/mov_bbb.mp4'
import './App.css';

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
      <CSSTransitionGroup
          transitionName="example"
          transitionEnterTimeout={300}
          transitionLeaveTimeout={300}>
        {getSection(sectionType)}
      </CSSTransitionGroup>
      <GetCaseStudy />
      <AnimationSection video={video1} videoEn='https://samplelib.com/lib/preview/mp4/sample-5s.mp4'/>
      <MonitoringSection/>
      <SupportUsersSection/>
      <OpinionSection/>
      <Contact/>
    </div>
  );
}

export default App;
