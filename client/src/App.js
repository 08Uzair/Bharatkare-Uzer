import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/custom/Navbar";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Main from "./pages/Main";
import Footer from "./components/custom/Footer";
import CheckOut from "./components/general/CheckOut";
import SingleDisease from "./components/general/SingleDisease";
import Data from "./components/general/Data";
import SingleCard4 from "./components/general/SingleCard4";
import Loaader from "./components/custom/Loader";
import Home from "./components/custom/Home";
import { Test } from "./components/custom/Test";
import SingleService from "./components/general/SingleService";
// import Home1 from "./components/custom/Home1";

function App() {
  // const content =
  //   '<figure ="wp-block-image size-full"><img decoding="async" width="72" height="72" src="https://bharatkare.com/wp-content/uploads/2024/10/Appendectomy.png" alt="Appendicitis" class="wp-image-559"/></figure><p><strong>WHAT IS APPENDICITIS?</strong></p><p>The appendix is a finger-shaped pouch that protrudes out of the colon on the lower right side of the abdomen, and the inflammation of the appendix is called appendicitis. It causes sharp and severe pain and discomfort around the belly; in most cases, the pain begins around the navel and travels around the abdomen.</p><p>Appendicitis is a medical procedure that is recommended in acute cases where there is a high risk of the appendix bursting out on its own. This is a medical emergency if not treated well on time and if bursts can lead to infection being spread across other organs of the abdomen, a condition called peritonitis. An emergency surgery is recommended in such chronic cases.</p><p>The appendectomy/appendix removal procedure is the surgery for the removal of an appendix in case it gets inflamed or infected. It is of utmost pertinent to treat acute cases of appendicitis, especially where the condition is advancing rapidly, to avoid emergency cases where the appendix can burst out, leading to infections and life-threatening conditions. Timely treatment is of utmost pertinence as the chances of other complications decrease in such cases.</p><p>Patients most affected by appendicitis are aged between 10 and 30 years. The line of treatment to manage the pain of appendicitis is pain medicines/antibiotics and surgery to remove the appendix.</p><p><strong>CAUSES OF APPENDICITIS:&nbsp;</strong></p><ul class="wp-block-list"><li>Blockage in the lining of the appendix is the main cause of appendicitis.&nbsp; This blockage, further, causes an infection; the bacteria then multiply quickly, leading the appendix to swell, inflame, and fill with pus.</li>\n\n<li>Other GI infections, inflammatory bowel disease (IBD), and abdominal trauma injury can also lead to appendicitis.</li>\n\n<li>Long-term stress can affect normal bowel function, leading to low immunity (defences) can lead to infections that can also be a contributing factor for appendicitis.</li></ul><p>If not diagnosed and treated immediately, the appendix can rupture, leading to life-threatening conditions.</p><p><strong>SYMPTOMS OF APPENDICITIS:</strong></p><ul class="wp-block-list"><li> Sudden sharp and shooting pain on the right side of your lower abdomen.</li>\n\n<li> Sudden, intense pain that begins from the navel and moves to the right lower abdomen.</li>\n\n<li> Pain in the abdomen that worsens while you cough, laugh, or do other movements.</li>\n\n<li> Nausea and vomiting.</li>\n\n<li> Loss of appetite</li>\n\n<li> Low-grade fever.</li>\n\n<li> Severe constipation and abdominal bloating</li>\n\n<li> IBD, parasites, or viruses in your digestive tract.</li>\n\n<li> Flatulence/gas.</li></ul><p><strong>DIAGNOSIS OF APPENDICITIS:</strong></p><ul class="wp-block-list"><li>Your healthcare provider would perform a physical examination to check for abdominal stiffness or put a little pressure on the painful area to check for inflammation.</li>\n\n<li>The lower rectum could also be examined by using a lubricated, gloved finger glove (ie. e rectal exam).&nbsp; A pelvic exam could also be performed to check for other problems causing pain.</li>\n\n<li>If you’re suffering from a pre-existing medical condition or illness like gallbladder problems, Crohn’s disease, gastritis, kidney stones, IBD, and ovary problems, your physician may perform a few tests to rule out or diagnose appendicitis.</li>\n\n<li>Urine test (to rule out a UTI)</li>\n\n<li>Blood test to check for white blood count levels (if your body is fighting against an infection).</li>\n\n<li>CT scans/MRI</li>\n\n<li>Ultrasound/X-ray</li></ul><p><strong>TREATMENT OPTIONS FOR APPENDICITIS:</strong></p><ul class="wp-block-list"><li>The core treatment for appendicitis is the removal of an inflamed appendix by a surgical procedure called appendectomy. In cases with mild symptoms, the doctor may use a strong dose of antibiotics. However, your healthcare provider may recommend a surgical procedure if you are experiencing severe symptoms like pain and discomfort.</li>\n\n<li>Over-the-counter, prescription medicines to relieve the pain.</li>\n\n<li>Appendicitis, if not diagnosed timely may increase the risk of complications like miscarriage in the case of pregnant ladies.</li></ul><p><strong>BENEFITS OF APPENDICITIS TREATMENT:</strong></p><ul class="wp-block-list"><li>A major benefit of laparoscopic appendectomy is&nbsp;increased cosmetic satisfaction and a decrease in the postoperative wound infection rate.</li>\n\n<li>Minimal invasive procedure leading to a decrease in postoperative pain.</li>\n\n<li>Quicker return to normal bowel function.</li>\n\n<li>Return to a normal pain-free life.</li>\n\n<li>Decrease the chance of other health problems (by avoiding bursts).</li>\n\n<li>Under open appendectomy, your doctor would clean the abdominal cavity (if it bursts).</li></ul><p><strong>RISK AND DELAY IN TREATMENT FOR APPENDICITIS:</strong></p><ul class="wp-block-list"><li>Appendicitis is a medical emergency that, if not treated on time, can rupture, leading to life-threatening conditions.</li>\n\n<li>Long hospital stays due to postoperative complications.</li>\n\n<li>Risk of complications like perforation or abscess.</li></ul><p></p>';
  // const imgUrl = content.split('src="')[1].split('"')[0];
  // console.log(imgUrl);
  return (
    <>
      <BrowserRouter>
        <ToastContainer />
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/home" element={<Home />} />
          <Route path="/service" element={<SingleService />} />
          <Route path="/test" element={<Test />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/checkout" element={<CheckOut />} />
          <Route path="/disease/:slug" element={<SingleDisease />} />
          <Route path="/services/:slug" element={<SingleCard4 />} />
          <Route path="/data" element={<Data />} />
          <Route path="/load" element={<Loaader />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
