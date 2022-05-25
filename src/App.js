// import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
// import Header from './my-components/Header';
import LabCards from './my-components/LabCards';
import ExpCards from './my-components/ExpCards';
import ErrorPage from './my-components/ErrorPage';
import Footer from './my-components/Footer';


function App() {
  const navButtons = [
      {name: "Home", link:"/labs-data/home"},
      {name: "DSP", link:"/labs-data/home/dsp"},
      {name: "MC", link:"/labs-data/home/mc"},
      {name: "MWE", link:"/labs-data/home/mwe"},
  ];
  const dspExpData = [
      {title:"Experiment 1", id: "tab-1", code:"sdf", pdfLink: "https://prithvi12890.github.io/lab-data/pdfs/dsp/record/exp1.pdf", outputs:"https://prithvi12890.github.io/lab-data/pdfs/dsp/outputs/exp1.pdf"},
      {title:"Experiment 2", id: "tab-2", code:"sdf", pdfLink: "https://prithvi12890.github.io/lab-data/pdfs/dsp/record/exp2.pdf", outputs:"https://prithvi12890.github.io/lab-data/pdfs/dsp/outputs/exp2.pdf"},
      {title:"Experiment 3", id: "tab-3", code:"sdf", pdfLink: "https://prithvi12890.github.io/lab-data/pdfs/dsp/record/exp3.pdf", outputs:"https://prithvi12890.github.io/lab-data/pdfs/dsp/outputs/exp3.pdf"},
      {title:"Experiment 4", id: "tab-4", code:"sdf", pdfLink: "https://prithvi12890.github.io/lab-data/pdfs/dsp/record/exp4.pdf", outputs:"https://prithvi12890.github.io/lab-data/pdfs/dsp/outputs/exp4.pdf"},
      {title:"Experiment 5", id: "tab-5", code:"sdf", pdfLink: "https://prithvi12890.github.io/lab-data/pdfs/dsp/record/exp5.pdf", outputs:"https://prithvi12890.github.io/lab-data/pdfs/dsp/outputs/exp5.pdf"},
      {title:"Experiment 6", id: "tab-6", code:"sdf", pdfLink: "https://prithvi12890.github.io/lab-data/pdfs/dsp/record/exp6.pdf", outputs:"https://prithvi12890.github.io/lab-data/pdfs/dsp/outputs/exp6.pdf"},
      {title:"Cycle 2 Intro", id: "tab-7", code:"sdf", pdfLink: "https://prithvi12890.github.io/lab-data/pdfs/dsp/record/cycle2-intro.pdf", outputs:"https://prithvi12890.github.io/lab-data/pdfs/dsp/outputs/exp7.pdf"},
      {title:"Experiment 7", id: "tab-8", code:"sdf", pdfLink: "https://prithvi12890.github.io/lab-data/pdfs/dsp/record/exp7.pdf", outputs:"https://prithvi12890.github.io/lab-data/pdfs/dsp/outputs/exp7.pdf"},
      {title:"Experiment 8", id: "tab-9", code:"sdf", pdfLink: "https://prithvi12890.github.io/lab-data/pdfs/dsp/record/exp8.pdf", outputs:"https://prithvi12890.github.io/lab-data/pdfs/dsp/outputs/exp8.pdf"},
      {title:"Experiment 9", id: "tab-10", code:"sdf", pdfLink: "https://prithvi12890.github.io/lab-data/pdfs/dsp/record/exp9.pdf", outputs:"https://prithvi12890.github.io/lab-data/pdfs/dsp/outputs/exp9.pdf"},
      {title:"Experiment 10", id: "tab-11", code:"sdf", pdfLink: "https://prithvi12890.github.io/lab-data/pdfs/dsp/record/exp10.pdf", outputs:"https://prithvi12890.github.io/lab-data/pdfs/dsp/outputs/exp10.pdf"},
  ];
  const mcExpData = [
      {title:"Experiment 1", id: "tab-1", code:"sdf", pdfLink: "https://prithvi12890.github.io/lab-data/pdfs/mc/record/exp1.pdf", outputs:"https://prithvi12890.github.io/lab-data/pdfs/mc/outputs/exp1.pdf"},
      {title:"Experiment 2", id: "tab-2", code:"sdf", pdfLink: "https://prithvi12890.github.io/lab-data/pdfs/mc/record/exp2.pdf", outputs:"https://prithvi12890.github.io/lab-data/pdfs/mc/outputs/exp2.pdf"},
      {title:"Experiment 3", id: "tab-3", code:"sdf", pdfLink: "https://prithvi12890.github.io/lab-data/pdfs/mc/record/exp3.pdf", outputs:"https://prithvi12890.github.io/lab-data/pdfs/mc/outputs/exp3.pdf"},
      {title:"Experiment 4", id: "tab-4", code:"sdf", pdfLink: "https://prithvi12890.github.io/lab-data/pdfs/mc/record/exp4.pdf", outputs:"https://prithvi12890.github.io/lab-data/pdfs/mc/outputs/exp4.pdf"},
      {title:"Experiment 5", id: "tab-5", code:"sdf", pdfLink: "https://prithvi12890.github.io/lab-data/pdfs/mc/record/exp5.pdf", outputs:"https://prithvi12890.github.io/lab-data/pdfs/mc/outputs/exp5.pdf"},
      {title:"Experiment 6", id: "tab-6", code:"sdf", pdfLink: "https://prithvi12890.github.io/lab-data/pdfs/mc/record/exp6.pdf", outputs:"https://prithvi12890.github.io/lab-data/pdfs/mc/outputs/exp6.pdf"},
      {title:"Experiment 7", id: "tab-7", code:"sdf", pdfLink: "https://prithvi12890.github.io/lab-data/pdfs/mc/record/exp7.pdf", outputs:"https://prithvi12890.github.io/lab-data/pdfs/mc/outputs/exp7.pdf"},
      {title:"Experiment 8", id: "tab-8", code:"sdf", pdfLink: "https://prithvi12890.github.io/lab-data/pdfs/mc/record/exp8.pdf", outputs:"https://prithvi12890.github.io/lab-data/pdfs/mc/record/exp8.pdf"},
      {title:"Experiment 9", id: "tab-9", code:"sdf", pdfLink: "https://prithvi12890.github.io/lab-data/pdfs/mc/record/exp9.pdf", outputs:"https://prithvi12890.github.io/lab-data/pdfs/mc/record/exp9.pdf"},
      // {title:"Experiment 10", id: "tab-10", code:"sdf", pdfLink: "https://prithvi12890.github.io/lab-data/pdfs/mc/record/exp10.pdf", outputs:"https://prithvi12890.github.io/lab-data/pdfs/mc/outputs/exp10.pdf"},
  ];
  const mweExpData = [
    {title:"Lab Manual", id: "tab-0", code:"sdf", pdfLink: "https://prithvi12890.github.io/lab-data/pdfs/mwe/lab-manual.pdf", outputs:"https://prithvi12890.github.io/lab-data/pdfs/mwe/lab-manual.pdf"},
    {title:"V.S.W.R.", id: "tab-1", code:"sdf", pdfLink: "https://prithvi12890.github.io/lab-data/pdfs/mwe/record/vswr.pdf", outputs:"https://prithvi12890.github.io/lab-data/pdfs/mwe/outputs/vswr.pdf"},
    {title:"Wavelength & Freq", id: "tab-2", code:"sdf", pdfLink: "https://prithvi12890.github.io/lab-data/pdfs/mwe/record/waveFreq.pdf", outputs:"https://prithvi12890.github.io/lab-data/pdfs/mwe/outputs/waveFreq.pdf"},
    {title:"Reflex Klystron", id: "tab-3", code:"sdf", pdfLink: "https://prithvi12890.github.io/lab-data/pdfs/mwe/record/klystron.pdf", outputs:"https://prithvi12890.github.io/lab-data/pdfs/mwe/outputs/klystron.pdf"},
    {title:"Gunn Osc", id: "tab-4", code:"sdf", pdfLink: "https://prithvi12890.github.io/lab-data/pdfs/mwe/record/gunn-oscillator.pdf", outputs:"https://prithvi12890.github.io/lab-data/pdfs/mwe/outputs/gunn-oscillator.pdf"},
    {title:"Dir Coupler", id: "tab-5", code:"sdf", pdfLink: "https://prithvi12890.github.io/lab-data/pdfs/mwe/record/directional-coupler.pdf", outputs:"https://prithvi12890.github.io/lab-data/pdfs/mwe/outputs/directional-coupler.pdf"},
    {title:"Impedance", id: "tab-6", code:"sdf", pdfLink: "https://prithvi12890.github.io/lab-data/pdfs/mwe/record/impedance-measurement.pdf", outputs:"https://prithvi12890.github.io/lab-data/pdfs/mwe/outputs/impedance-measurement.pdf"},
    {title:"Magic Tee", id: "tab-7", code:"sdf", pdfLink: "https://prithvi12890.github.io/lab-data/pdfs/mwe/record/magic-tee.pdf", outputs:"https://prithvi12890.github.io/lab-data/pdfs/mwe/outputs/magic-tee.pdf"},
    {title:"Circulator", id: "tab-8", code:"sdf", pdfLink: "https://prithvi12890.github.io/lab-data/pdfs/mwe/record/circulator.pdf", outputs:"https://prithvi12890.github.io/lab-data/pdfs/mwe/outputs/circulator.pdf"},
    {title:"Horn Antenna", id: "tab-9", code:"sdf", pdfLink: "https://prithvi12890.github.io/lab-data/pdfs/mwe/record/horn-antenna.pdf", outputs:"https://prithvi12890.github.io/lab-data/pdfs/mwe/outputs/horn-antenna.pdf"},
    {title:"Study Exp", id: "tab-10", code:"sdf", pdfLink: "https://prithvi12890.github.io/lab-data/pdfs/mwe/record/various-antennas.pdf", outputs:"https://prithvi12890.github.io/lab-data/pdfs/mwe/outputs/various-antennas.pdf"},
    {title:"MWE record", id: "tab-11", code:"sdf", pdfLink: "https://prithvi12890.github.io/lab-data/pdfs/mwe/record/complete-record.pdf", outputs:"https://prithvi12890.github.io/lab-data/pdfs/mwe/outputs/complete-record.pdf"},
  ];
  return (
    <div className="App">
        <BrowserRouter>
          <div className='nav-bar'>
            <h3><a href="/labs-data">LABS</a></h3>
            <ul className="nav-list">
                {navButtons.map((navButton) => <li><Link className="link-style" to={navButton.link}>{navButton.name}</Link></li>)}
            </ul>
          </div>

            {/* <Header/> */}

            <Routes>
                <Route path="/labs-data" element={<LabCards/>} />
                <Route path="/labs-data/home" element={<LabCards/>} />
                <Route path="/labs-data/home/dsp" element={<ExpCards expData={dspExpData}/>} />
                <Route path="/labs-data/home/mc" element={<ExpCards expData={mcExpData}/>} />
                <Route path="/labs-data/home/mwe" element={<ExpCards expData={mweExpData}/>} />
                <Route path="*" element={<ErrorPage/>} />
            </Routes>

        </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
