import {useRef,useEffect} from 'react';
import image from './wp5521482.jpeg';
import './App.scss';
import NavHeader from './containers/NavHeader';
import eclipselogo from './eclipse.png';
import expresslogo from './express.png';
import angularlogo from './angular.png';
import fargochatimg from './fargochat.png';
import jslogo from './js.png';
import mvvmlogo from './mvvm.png';
import mvclogo from './mvc.png';
import tslogo from './ts.png';
import javalogo from './java.png'
import vscodelogo from './vscode.png';
import gitlogo from './git.png';
import githublogo from './github.png';
import mongologo from './mongo.png';
import mapImage from './map.png';
import nodejslogo from './nodejs.png';
import reactlogo from './react.png';
import project1 from './project1.png';
import project2 from './project2.png';
import TypeWriter from 'typewriter-effect';
import {Row,Col,Progress,Divider} from 'antd';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'; 
import {faDumbbell,faSkating,faFilm,faUtensils,faGamepad,faMusic,faPhoneAlt,faEnvelope,faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons';
import {faFacebookF,faLinkedinIn,faInstagram} from '@fortawesome/free-brands-svg-icons'
import {ArrowDownOutlined} from '@ant-design/icons';
import {gsap,TweenMax, Power3} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
function App() {
  console.log('gsap',gsap);
  let logoItem = useRef(null);


  ////////
  // let observer = useRef();
    
  // let observeElement = (element) => {
  //     console.log('element',observer);
  //       observer.current = new IntersectionObserver(entries => {
  //         console.log('entries',entries);
  //         if(entries[0].isIntersecting){
  //         console.log('visible');
  //         }
  //       });
  //     console.log('observer.current',observer);
  //     observer.current.observe(element)
  //   }
  /////////

  

  useEffect(() => {
  
    
    gsap.from(".section2",{
      duration:3,
      y:'100',
      // x:'200',
      opacity:0,
      ease:'ease',
      scrollTrigger:{
        trigger:'.section2',
        start:'start center',
        end:'center 90%',
        scrub:true,
        // markers:true,
        toggleActions:'restart complete reverse reset'
      }
    })

    gsap.from(".section3",{
      duration:3,
      y:'100',
      // x:'-200',
      opacity:0,
      ease:'ease-in',
      scrollTrigger:{
        trigger:'.section3',
        start:'start center',
        end:'center 90%',
        scrub:true,
        // markers:true,
        toggleActions:'restart complete reverse reset'
      }
    })

    gsap.from(".section4",{
      duration:3,
      y:'100',
      // x:'200',
      opacity:0,
      ease:'ease-in',
      scrollTrigger:{
        trigger:'.section4',
        start:'start center',
        end:'center 90%',
        scrub:true,
        // markers:true,
        toggleActions:'restart complete reverse reset'
      }
    })
    gsap.from(".section5",{
      duration:3,
      y:'100',
      // x:'-200',
      opacity:0,
      ease:'ease-in',
      scrollTrigger:{
        trigger:'.section5',
        start:'start center',
        end:'center 90%',
        scrub:true,
        // markers:true,
        toggleActions:'restart complete reverse reset'
      }
    })


    TweenMax.from(
      logoItem,
      1,
      {
        opacity:0,
        y:40,
        ease: Power3.easeOut,
        delay:.9
      }
    )

    
  }, [])

  return (
    <div>
      <div className="curser"></div>
      <div className="outer-container" >    
        <section id="about" className="section">
          <div className=" header-container">
              <div className="sociables">
                  <div className="icon-wrapper">
                    <FontAwesomeIcon icon={faInstagram}/>
                  </div>
                  <div className="icon-wrapper">
                    <a href="https://www.linkedin.com/in/manishkumardev/" target="_blank" rel="noreferrer" style={{color:"inherit"}}>
                      <FontAwesomeIcon icon={faLinkedinIn}/>
                    </a>
                  </div>
                  <div className="icon-wrapper">
                    <FontAwesomeIcon icon={faFacebookF}/>
                  </div>
              </div>
              <div className="scroll-wrapper">
                <div className="down-icon">
                  <ArrowDownOutlined />
                </div>
                <span className="scroll-text">Scroll</span>
              </div>
              <div className="black-backdrop" style={{opacity: "80%"}}>
              </div>
              <div className="nav-and-content-wrapper">
                  <NavHeader/>
                  <div ref={el => {
                    console.log('trigger ref');
                    logoItem = el;
                    }} className="header-content">
                      <div className="header-content-wrapper">
                          <span className="hi">Hi.</span>
                          <div className="my-name-description"><span className="my-name-starting"> I am</span> <span  id="whoiam" className="my-name"><TypeWriter options={{strings:['Manish Kumar','Full Stack','MEAN DEV.','MERN DEV.'],autoStart:true,loop:true}}/></span></div>
                          <p className="myself-description">I am a MEAN, MERN Stack developer, and good JS developer. I have the ability to create good and beautiful websites Using all these technologies. And having a logical and problem-solving ability to accomplish the work efficiently.</p>
                      </div>
                  </div>
              </div>
              <div className="bg">
                  <img src={image} alt="img"/>
              </div>
          </div>
        </section>
        <section id="projects" className="section section2 wide-margin">
          <div className="section-inner-wrapper">
            <h2 className="sections-title"><span className="white-shade1-color">Research</span> <span className="light-green-color">Projects</span></h2>
            <Row justify="space-between" gutter={[12,12]}>
              <Col 
              xs={{span:24}} 
              sm={{span:24}} 
              lg={{span:8}}>
                <div className="proj-card-container" style={{maxWidth:'300px'}}>
                  <div className="proj-card" style={{display:"flex",height:"200px",position:"relative"}}>
                    <img style={{minWidth:"100px",width:"100%",height:"100%",position:'absolute',objectFit:"cover",top:0,left:0 }} src={project1} alt="img"/>
                  </div>
                  <div style={{overflowWrap:"break-word",width:'100%'}}>
                    <h4 className="proj-card-title"><span className="light-green-color">MYJOB</span><span className="white-shade1-color"> | JOB PORTAL</span></h4>
                    <h5 className="proj-cart-description black-shade4-color" >
                    MYJOB Portal is built on React library with handle all errors and exceptions with all validations. I use Redux redux-thunk for data centralization or async call. I use react-router-dom for navigation in the application.
                    </h5>
                  </div>
                </div>
              </Col>
              <Col 
              xs={{span:24}} 
              sm={{span:24}} 
              lg={{span:8}}>
                <div className="proj-card-container" style={{maxWidth:'300px'}}>
                  <div className="proj-card" style={{display:"flex",height:"200px",position:"relative"}}>
                    <img style={{minWidth:"100px",width:"100%",height:"100%",position:'absolute',objectFit:"cover",top:0,left:0 }} src={project2} alt="img"/>
                  </div>
                  <div style={{overflowWrap:"break-word",width:'100%'}}>
                    <h4 className="proj-card-title"><span className="light-green-color">BOOK CAFE</span><span className="white-shade1-color"> | ONLINE BOOK PORTAL</span></h4>
                    <h5 className="proj-cart-description black-shade4-color" >
                    Book Cafe is Built on MERN. fronted is build on react using all essential APIs like Formik, redux, reduxthunk, Axios, query-string, react-pdf, react-router-dom, etc. And backend is build using Nodejs with express framework with all routing handling and using the mongo db server.
                    </h5>
                  </div>
                </div>
              </Col>
              <Col 
              xs={{span:24}} 
              sm={{span:24}} 
              lg={{span:8}}>
                <div className="proj-card-container" style={{maxWidth:'300px'}}>
                  <div className="proj-card" style={{display:"flex",height:"200px",position:"relative"}}>
                    <img style={{minWidth:"100px",width:"100%",height:"100%",position:'absolute',objectFit:"cover",top:0,left:0 }} src={fargochatimg} alt="img"/>
                  </div>
                  <div style={{overflowWrap:"break-word",width:'100%'}}>
                    <h4 className="proj-card-title"><span className="light-green-color">FARGOCHAT</span><span className="white-shade1-color"> | CHAT APPLICATION</span></h4>
                    <h5 className="proj-cart-description black-shade4-color" >
                    This chat app is built on Angular front-end framework and using socketIO with node js Backend and the express Framework. And for the Database, we are using a MySQL server.
                    </h5>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
            <Divider  style={{borderColor:'#444444',borderWidth:'1'}} />
        </section>
        <section id="skills" className="section section3 wide-margin" style={{position:'relative'}}>
          <h2 className="back-watermark" style={{position:'absolute',left:'-600px',top:'-29px',fontSize:'111px',fontWeight:'bold',opacity:'.1',whiteSpace:'nowrap'}} ><span className="white-shade1-color">Professional</span> <span className="light-green-color">Skills</span></h2>
          <div className="section-inner-wrapper">
            <h2 className="sections-title"><span className="white-shade1-color">Professional</span> <span className="light-green-color">Skills</span></h2>
            <Row justify="space-around" gutter={[16,16]} style={{marginBottom:'4rem'}}>
              <Progress type="circle" percent={60} format={(per)=>  <span className="white-shade1-color"><div >{per}%</div><div style={{fontSize:"17px"}} className="light-green-color">Backend</div></span>} width={150} strokeColor="#86C232"></Progress>
              <Progress type="circle" percent={72} format={(per)=>  <span className="white-shade1-color"><div >{per}%</div><div style={{fontSize:"17px"}} className="light-green-color">Frontend</div></span>} width={150} strokeColor="#86C232"></Progress>
              <Progress type="circle" percent={55} format={(per)=>  <span className="white-shade1-color"><div >{per}%</div><div style={{fontSize:"17px"}} className="light-green-color">Web Design</div></span>} width={150} strokeColor="#86C232"></Progress>
              <Progress type="circle" percent={50} format={(per)=>  <span className="white-shade1-color"><div >{per}%</div><div style={{fontSize:"17px"}} className="light-green-color">Data Base</div></span>} width={150} strokeColor="#86C232"></Progress>
            </Row>
            <Row gutter={[12,12]} justify="space-between">
              <Col  
              xs={{span:24}}
              sm={{span:24}}
              lg={{span:12}}>
                <div className="skillCard">
                    <h3 className="sillCardTitle">Frontend Technologies</h3>
                    <div style={{display:"flex",flexWrap:'wrap'}}>
                      <div className="technology-icon-wrapper">
                        <img src={angularlogo} alt="img"/>
                        <div className="technology-name">Angular</div>
                      </div>
                      <div className="technology-icon-wrapper">
                        <img src={reactlogo} alt="img"/>
                        <div className="technology-name">ReactJs</div>
                      </div>
                      <div className="technology-icon-wrapper">
                        <img src={nodejslogo} alt="img"/>
                        <div className="technology-name">Nodejs</div>
                      </div>
                      <div className="technology-icon-wrapper">
                        <img src={mongologo} alt="img"/>
                        <div className="technology-name">Mongodb</div>
                      </div>
                      <div className="technology-icon-wrapper">
                        <img src={expresslogo} alt="img"/>
                        <div className="technology-name">Expressjs</div>
                      </div>
                    </div>
                </div>
              </Col>
              <Col 
              xs={{span:24}}
              sm={{span:24}}  
              lg={{span:12}}>
                <div className="skillCard">
                    <h3 className="sillCardTitle">Programming Language</h3>
                    <div style={{display:"flex",flexWrap:'wrap'}}>
                      <div className="technology-icon-wrapper">
                        <img src={jslogo} alt="img"/>
                        <div className="technology-name">JavaScript</div>
                      </div>
                      <div className="technology-icon-wrapper">
                        <img src={nodejslogo} alt="img"/>
                        <div className="technology-name">Nodejs</div>
                      </div>
                      <div className="technology-icon-wrapper">
                        <img src={javalogo} alt="img" />
                        <div className="technology-name">Java</div>
                      </div>
                      <div className="technology-icon-wrapper">
                        <img src={tslogo} alt="img"/>
                        <div className="technology-name">TypeScript</div>
                      </div>
                    </div>
                </div>
              </Col>
              <Col  
              xs={{span:24}}
              sm={{span:24}}
              lg={{span:8}}>
                <div className="skillCard">
                    <h3 className="sillCardTitle">Version Control</h3>
                    <div style={{display:"flex",flexWrap:'wrap'}}>
                      <div className="technology-icon-wrapper">
                        <img src={gitlogo} alt="img"/>
                        <div className="technology-name">Git</div>
                      </div>
                      <div className="technology-icon-wrapper">
                        <img src={githublogo} alt="img"/>
                        <div className="technology-name">GitHub</div>
                      </div>
                    </div>
                </div>
              </Col>
              <Col  
              xs={{span:24}}
              sm={{span:24}}
              lg={{span:8}}>
                <div className="skillCard">
                    <h3 className="sillCardTitle">IDE</h3>
                    <div style={{display:"flex",flexWrap:'wrap'}}>
                      <div className="technology-icon-wrapper">
                        <img src={eclipselogo} alt="img"/>
                        <div className="technology-name">Eclipse</div>
                      </div>
                      <div className="technology-icon-wrapper">
                        <img src={vscodelogo} alt="img"/>
                        <div className="technology-name">VSCode</div>
                      </div>
                    </div>
                </div>
              </Col>
              <Col  
              xs={{span:24}}
              sm={{span:24}}
              lg={{span:8}}>
                <div className="skillCard">
                    <h3 className="sillCardTitle">Design Pattern</h3>
                    <div style={{display:"flex",flexWrap:'wrap'}}>
                      <div className="technology-icon-wrapper">
                        <img src={mvvmlogo} alt="img" style={{width:"90px"}}/>
                        <div className="technology-name">MVVM</div>
                      </div>
                      <div className="technology-icon-wrapper">
                        <img src={mvclogo} alt="img" style={{width:"90px"}}/>
                        <div className="technology-name">MVC</div>
                      </div>
                    </div>
                </div>
              </Col>
            </Row>
          </div>
          <Divider  style={{borderColor:'#444444',borderWidth:'1'}} />
        </section>
        <section id="extra" className="section section4 wide-margin">
          <div className="section-inner-wrapper">
            <h2 className="sections-title"><span className="white-shade1-color">Extra &amp;</span> <span className="light-green-color">Skills</span></h2>
            <div className="section-inner-wrapper">
            <div className="extra-and-skill-wrapper">
              <img src="https://media.istockphoto.com/photos/setting-of-laces-on-roller-skates-picture-id597660210?k=6&m=597660210&s=612x612&w=0&h=zt2G69b3htHUKfV7288bX9SDfkeqdu5NIZ_JXbo28hs=" alt="img" className="skill-wall"/>
                <div className="text-content-wrapper">
                  <h2 className="skill-title">Extra</h2>
                  <Row gutter={[16,16]}>
                    <Col xx={{span:8}} sm={{span:4}} lg={{span:6}}>
                      <div className="icon-wrapper">
                        <FontAwesomeIcon size="2x" className="light-green-color" icon={faDumbbell}/>
                        <h5 className="icon-text">Excercise</h5>
                      </div>
                    </Col>
                    <Col xx={{span:8}} sm={{span:4}} lg={{span:6}}>
                    <div className="icon-wrapper">
                        <FontAwesomeIcon size="2x" className="light-green-color" icon={faFilm}/>
                        <h5 className="icon-text">Movies</h5>
                      </div>
                    </Col>
                    <Col xx={{span:8}} sm={{span:4}} lg={{span:6}}>
                    <div className="icon-wrapper">
                        <FontAwesomeIcon size="2x" className="light-green-color" icon={faMusic}/>
                        <h5 className="icon-text">Music</h5>
                      </div>
                    </Col>
                    <Col xx={{span:8}} sm={{span:4}} lg={{span:6}}>
                    <div className="icon-wrapper">
                        <FontAwesomeIcon size="2x" className="light-green-color" icon={faUtensils}/>
                        <h5 className="icon-text">Foodie</h5>
                      </div>
                    </Col>
                    <Col xx={{span:8}} sm={{span:4}} lg={{span:6}}>
                    <div className="icon-wrapper">
                        <FontAwesomeIcon size="2x" className="light-green-color" icon={faGamepad}/>
                        <h5 className="icon-text">Gaming</h5>
                      </div>
                    </Col>
                    <Col xx={{span:8}} sm={{span:4}} lg={{span:6}}>
                    <div className="icon-wrapper">
                        <FontAwesomeIcon size="2x" className="light-green-color" icon={faSkating}/>
                        <h5 className="icon-text">Skating</h5>
                      </div>
                    </Col>
                  </Row>
                </div>
            </div>
          </div>
          </div>
          <Divider  style={{borderColor:'#444444',borderWidth:'1'}} />
        </section>
        <section id="certificates" className="section section5 wide-margin">
          <div className="section-inner-wrapper">
            <h2 className="sections-title"><span className="white-shade1-color">Certification</span> <span className="light-green-color"></span></h2>
            <div>
                <Row gutter={[16,16]}>
                  <Col xs={{span:24}} sm={{span:12}} lg={{span:8}}>
                    <div className="certificate-cards">
                      <div className="clip-effect">
                          <h2 className="clip-text">By Hacker Rank</h2>
                      </div>
                      <span style={{color:'white',fontSize:'18px'}}>Angular (Basic)</span>
                      <img src={angularlogo} alt="img"/>
                    </div>
                  </Col>
                  <Col xs={{span:24}} sm={{span:12}} lg={{span:8}}>
                    <div className="certificate-cards">
                      <div className="clip-effect">
                          <h2 className="clip-text">By Hacker Rank</h2>
                      </div>
                      <span style={{color:'white',fontSize:'18px'}}>Angular (Intermediate)</span>
                      <img src={angularlogo} alt="img"/>
                    </div>
                  </Col>
                  <Col xs={{span:24}} sm={{span:12}} lg={{span:8}}>
                    <div className="certificate-cards">
                      <div className="clip-effect">
                        <h2 className="clip-text">By Hacker Rank</h2>
                      </div>
                      <span style={{color:'white',fontSize:'18px'}}>JavaScript (intermediate)</span>
                      <img src={jslogo} alt="img"/>
                    </div>
                  </Col>
                  <Col xs={{span:24}} sm={{span:12}} lg={{span:8}}>
                    <div className="certificate-cards">
                      <div className="clip-effect">
                        <h2 className="clip-text">By Brain Mentors</h2>
                      </div>
                      <span style={{color:'white',fontSize:'18px'}}>
                        <div>java (Core)</div>
                        <div>java (Advance)</div>
                      </span>
                      <img src={javalogo} alt="img"/>
                    </div>
                  </Col>
                  <Col xs={{span:24}} sm={{span:12}} lg={{span:8}}>
                    <div className="certificate-cards" style={{backgroundColor:'#2D3033',padding:'20px',minWidth:"220px"}}>
                      <div className="clip-effect">
                        <h2 className="clip-text">By Brain Mentors</h2>
                      </div>
                      <span style={{color:'white',fontSize:'18px'}}>Frontend Master &amp; UI (Basic)</span>
                      <img src={reactlogo} alt="img"/>
                    </div>
                  </Col>
                </Row>
            </div>
          </div>
          <Divider  style={{borderColor:'#444444',borderWidth:'1'}} />
        </section>
        <section id="education" className="section section6 wide-margin">
          <div className="section-inner-wrapper">
            <h2 className="sections-title"><span className="white-shade1-color">Education</span> <span className="light-green-color"></span></h2>
            
          </div>
        </section>
        <section>
          <div style={{height:"300px",width:"100%",position:'relative',overflow:'hidden'}}>
            <div style={{width:"100%",height:"100%",position:'absolute',left:0,top:0}}>
                  <img src={mapImage} alt="img" style={{width:'100%',minWidth:'600px', height:'100%',objectFit:'cover',filter:'blur(1px)'}}/>
            </div>
            <div style={{width:"100%",height:'100%',position:'absolute',left:0,top:0,backgroundColor:'black',opacity:'.7',}}>

            </div>
            <div style={{width:"100%",position:'absolute',left:0,top:0}}>
              <div className="wide-margin contact-info" >
                <h2 className="contact-info-title">Contact Information</h2>
                <Row className="contact-data-wrapper" justify="space-between" gutter={[10,16]}>
                  <Col>
                    <div className="contact-icon-wrapper">
                      <FontAwesomeIcon size="2x" color="#86C232" icon={faPhoneAlt}/>
                      <span className="contact-text">+91 875 096 0833</span>
                    </div>
                  </Col>
                  <Col>
                    <div className="contact-icon-wrapper">
                      <FontAwesomeIcon size="2x" color="#86C232" icon={faEnvelope}/>
                      <span className="contact-text">manishkumar.1996.pj@gmail.com</span>
                    </div>
                  </Col>
                  <Col>
                    <div className="contact-icon-wrapper">
                      <FontAwesomeIcon size="2x" color="#86C232" icon={faMapMarkerAlt}/>
                      <span  className="contact-text">Rohini, New Delhi</span>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>

          </div>
        </section>
        <footer 
        // ref={observeElement}
        >
          <div className="low-margin" style={{display:"flex",justifyContent:"space-between",alignItems:'center',padding:'2rem 0',color:'white'}}>
            <h2 style={{color:'white'}}>Dev.</h2>
            <div>Let's Work Together</div>
            <div>
              <span style={{padding:"0 10px"}}>
                <FontAwesomeIcon size="lg" icon={faInstagram}/>
              </span>
              <span style={{padding:"0 10px"}}>
                <FontAwesomeIcon size="lg" icon={faLinkedinIn}/>
              </span>
              <span style={{padding:"0 10px"}}>
                <FontAwesomeIcon size="lg" icon={faFacebookF}/>
              </span>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
