import image from './wp5521482.jpeg';
import './App.scss';
import NavHeader from './containers/NavHeader';
import eclipselogo from './eclipse.png';
import expresslogo from './express.png';
import angularlogo from './angular.png';
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

function App() {

  // let tag = document.querySelector('#whoiam');
  // let typewriter = new TypeWriter(tag,{
  //   loop: true,
  //   strings:['Manish Kumar','FullStack Dev.','MEANSTACK Dev','MERNSTACK DEV'],
  //   delay:75
  // });

  return (
    <div>
      <div className="curser"></div>
      <div className="outer-container" >    
        <section id="home" className="section">
          <div className=" header-container">
              <div className="sociables">
                  <div className="icon-wrapper">
                    <FontAwesomeIcon icon={faInstagram}/>
                  </div>
                  <div className="icon-wrapper">
                    <FontAwesomeIcon icon={faLinkedinIn}/>
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
                  <div className="header-content">
                      <div className="header-content-wrapper">
                          <span className="hi">Hi.</span>
                          <div className="my-name-description"><span className="my-name-starting"> I am</span> <span  id="whoiam" className="my-name"><TypeWriter options={{strings:['Manish Kumar','Full Stack','MEAN DEV.','MERN DEV.'],autoStart:true,loop:true}}/></span></div>
                          <p className="myself-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati exercitationem sit ipsa ipsam explicabo, veritatis rerum itaque dignissimos rem, quis corrupti non sapiente aspernatur tempora dicta officia ullam praesentium placeat?</p>
                      </div>
                  </div>
              </div>
              <div className="bg">
                  <img src={image} alt="img"/>
              </div>
          </div>
        </section>
        <section id="about" className="section section2 wide-margin">
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
                      lorem lasd flasjdfls lf aslf las flas lflsdajf lsa fls alf salf lsa dflajs dlflsadjf lsa jjlfj saldf sld flsa fljsalfj saldf lsa flsa dfjdas
                      dfalsdjf lasjdflasjlfd asljflasjfjlsaj dlfjasljflsajf lsajfls alf jlsa dfjlsaj dfljasldfjslad
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
                    <h4 className="proj-card-title"><span className="light-green-color">MYJOB</span><span className="white-shade1-color"> | JOB PORTAL</span></h4>
                    <h5 className="proj-cart-description black-shade4-color" >
                      lorem lasd flasjdfls lf aslf las flas lflsdajf lsa fls alf salf lsa dflajs dlflsadjf lsa jjlfj saldf sld flsa fljsalfj saldf lsa flsa dfjdas
                      dfalsdjf lasjdflasjlfd asljflasjfjlsaj dlfjasljflsajf lsajfls alf jlsa dfjlsaj dfljasldfjslad
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
                    <img style={{minWidth:"100px",width:"100%",height:"100%",position:'absolute',objectFit:"cover",top:0,left:0 }} src="https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832__340.jpg" alt="img"/>
                  </div>
                  <div style={{overflowWrap:"break-word",width:'100%'}}>
                    <h4 className="proj-card-title"><span className="light-green-color">MYJOB</span><span className="white-shade1-color"> | JOB PORTAL</span></h4>
                    <h5 className="proj-cart-description black-shade4-color" >
                      lorem lasd flasjdfls lf aslf las flas lflsdajf lsa fls alf salf lsa dflajs dlflsadjf lsa jjlfj saldf sld flsa fljsalfj saldf lsa flsa dfjdas
                      dfalsdjf lasjdflasjlfd asljflasjfjlsaj dlfjasljflsajf lsajfls alf jlsa dfjlsaj dfljasldfjslad
                    </h5>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
            <Divider  style={{borderColor:'#444444',borderWidth:'1'}} />
        </section>
        <section id="projects" className="section section3 wide-margin" style={{position:'relative'}}>
          <h2 className="back-watermark" style={{position:'absolute',left:'-600px',top:'-120px',fontSize:'111px',fontWeight:'bold',opacity:'.1',whiteSpace:'nowrap'}} ><span className="white-shade1-color">Professional</span> <span className="light-green-color">Skills</span></h2>
          <div className="section-inner-wrapper">
            <h2 className="sections-title"><span className="white-shade1-color">Professional</span> <span className="light-green-color">Skills</span></h2>
            <Row justify="space-around" style={{marginBottom:'4rem'}}>
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
        <section id="skills" className="section section4 wide-margin">
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
        <section id="education" className="section section5 wide-margin">
          <div className="section-inner-wrapper">
            <h2 className="sections-title"><span className="white-shade1-color">Certification</span> <span className="light-green-color"></span></h2>
            <div>
                <Row gutter={[16,16]}>
                  <Col xs={{span:24}} sm={{span:12}} lg={{span:8}}>
                    <div class="certificate-cards" style={{backgroundColor:'#2D3033',padding:'20px',minWidth:"220px"}}>
                      <span style={{color:'white',fontSize:'18px'}}>Angular (Basic)</span>
                    </div>
                  </Col>
                  <Col xs={{span:24}} sm={{span:12}} lg={{span:8}}>
                    <div class="certificate-cards" style={{backgroundColor:'#2D3033',padding:'20px',minWidth:"220px"}}>
                      <span style={{color:'white',fontSize:'18px'}}>Angular (Intermediate)</span>
                    </div>
                  </Col>
                  <Col xs={{span:24}} sm={{span:12}} lg={{span:8}}>
                    <div class="certificate-cards" style={{backgroundColor:'#2D3033',padding:'20px',minWidth:"220px"}}>
                      <span style={{color:'white',fontSize:'18px'}}>JavaScript (intermediate)</span>
                    </div>
                  </Col>
                  <Col xs={{span:24}} sm={{span:12}} lg={{span:8}}>
                    <div class="certificate-cards" style={{backgroundColor:'#2D3033',padding:'20px',minWidth:"220px"}}>
                      <span style={{color:'white',fontSize:'18px'}}>
                        <div>java (Core)</div>
                        <div>java (Advance)</div>
                      </span>
                    </div>
                  </Col>
                  <Col xs={{span:24}} sm={{span:12}} lg={{span:8}}>
                    <div class="certificate-cards" style={{backgroundColor:'#2D3033',padding:'20px',minWidth:"220px"}}>
                      <span style={{color:'white',fontSize:'18px'}}>Frontend Master &amp; UI (Basic)</span>
                    </div>
                  </Col>
                </Row>
            </div>
          </div>
          <Divider  style={{borderColor:'#444444',borderWidth:'1'}} />
        </section>
        <section id="extra" className="section section6 wide-margin">
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
              <div className="wide-margin" style={{textAlign:"center",color:'white'}}>
                <h2 style={{marginTop:"3rem ",marginBottom:'5rem',color:'white',fontWeight:'bold',fontSize:"30px"}}>Contact Information</h2>
                <div style={{display:"flex",justifyContent:'space-between'}}> 
                  <div className="contact-icon-wrapper">
                    <FontAwesomeIcon size="2x" color="#86C232" icon={faPhoneAlt}/>
                    <span className="contact-text">+91 875 096 0833</span>
                  </div>
                  <div className="contact-icon-wrapper">
                    <FontAwesomeIcon size="2x" color="#86C232" icon={faEnvelope}/>
                    <span className="contact-text">manishkumar.1996.pj@gmail.com</span>
                  </div>
                  <div className="contact-icon-wrapper">
                    <FontAwesomeIcon size="2x" color="#86C232" icon={faMapMarkerAlt}/>
                    <span  className="contact-text">Rohini, New Delhi</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>
        <footer>
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
