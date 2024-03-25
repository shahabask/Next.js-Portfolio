import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact ,faJs,faNode,  faNodeJs,faHtml5, faCss3Alt, faGit, faAws, faCss3, faGithub, faGoogle, faGooglePay, faPaypal} from '@fortawesome/free-brands-svg-icons';
import { faBootstrap } from '@fortawesome/free-brands-svg-icons';
import { faDatabase, faServer,faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope, faCode, faFileAlt, faPaintBrush, faExternalLinkAlt, faBook, faFileCode, faBox } from "@fortawesome/free-solid-svg-icons";
import {  faRobot, faChessKnight, faCloud, faFilm, faToolbox, faClock } from "@fortawesome/free-solid-svg-icons";

const TAB_DATA = [
    {
      title: "Skills",
      id: "skills",
      content: (
        <ul className="list-disc pl-2 grid grid-cols-3 gap-2">
            <li className="flex items-center"> <FontAwesomeIcon
              icon={faJs}
              className="text-sky-400 mr-2 text-sm"
            />JavaScript</li>
          <li className="flex items-center "> <FontAwesomeIcon
              icon={faHtml5}
              className="text-sky-400 mr-2 text-sm"
            />HTML5</li>
          <li className="flex items-center"> <FontAwesomeIcon
              icon={faCss3Alt}
              className="text-sky-400 mr-2 text-sm"
            />CSS3</li>
        
         
          <li className="flex items-center"> <FontAwesomeIcon
              icon={faNode}
              className="text-sky-400 mr-2 text-sm"
            />Node.js</li>
          <li className="flex items-center"> <FontAwesomeIcon
              icon={faNodeJs}
              className="text-sky-400 mr-2 text-sm"
            />Express.js</li>
          
          <li className="flex items-center"> <FontAwesomeIcon
              icon={faGit}
              className="text-sky-400 mr-2 text-sm"
            />Git</li>
            <li className="flex items-center">
            <FontAwesomeIcon
              icon={faReact}
              className="text-sky-400 mr-2 text-sm"
            />
            React.js
          </li>
          <li className="flex items-center"> <FontAwesomeIcon
              icon={faReact}
              className="text-sky-400 mr-2 text-sm"
            />Next.js</li>
          <li className="flex items-center"> <FontAwesomeIcon
              icon={faReact}
              className="text-sky-400 mr-2 text-sm"
            />Redux toolkit</li>
          <li className="flex items-center"> <FontAwesomeIcon
              icon={faBootstrap}
              className="text-sky-400 mr-2 text-sm"
            />Bootstrap</li>
          <li className="flex items-center"> <FontAwesomeIcon
              icon={faAws}
              className="text-sky-400 mr-2 text-sm"
            />Aws(EC2)</li>
          <li className="flex items-center"> <FontAwesomeIcon
              icon={faServer}
              className="text-sky-400 mr-2 text-sm"
            />Nginx</li>
          <li className="flex items-center"> <FontAwesomeIcon
              icon={faCss3}
              className="text-sky-400 mr-2 text-sm"
            />Tailwind CSS</li>
             <li className="flex items-center list-disc"> <FontAwesomeIcon
              icon={faDatabase}
              className="text-sky-400 mr-2 text-sm"
            />MongoDB</li>
        </ul>
      ),
    },
    {
      title: "Education",
      id: "education",
      content: (
        <ul className="list-disc pl-2 grid grid-cols-3 gap-2">
           <li className="flex items-center list-disc">
    <FontAwesomeIcon
      icon={faGraduationCap}
      className="text-sky-400 mr-2 text-sm"
    />
    BCA (2019-2022)
  </li>
  <li className="flex items-center list-disc">
    <FontAwesomeIcon
      icon={faGraduationCap}
      className="text-sky-400 mr-2 text-sm"
    />Higher Secondary</li>
        </ul>
      ),
    },
    {
      title: "Tools",
      id: "tools",
      content: (
        <ul className="list-disc pl-2 grid grid-cols-3 gap-2">
           <li className='flex items-center'>
    <FontAwesomeIcon icon={faExternalLinkAlt} className="text-green-500 mr-2 text-sm" />
    Postman
  </li>
  <li className='flex items-center'>
    <FontAwesomeIcon icon={faPaintBrush} className="text-green-500 mr-2 text-sm" />
    Figma
  </li>
  <li className='flex items-center'>
    <FontAwesomeIcon icon={faEnvelope} className="text-green-500 mr-2 text-sm" />
    Resend (email)
  </li>
  <li className='flex items-center'>
    <FontAwesomeIcon icon={faGithub} className="text-green-500 mr-2 text-sm" />
    GitHub
  </li>
  <li className='flex items-center'>
    <FontAwesomeIcon icon={faBook} className="text-green-500 mr-2 text-sm" />
    Notion
  </li>
  <li className='flex items-center'>
    <FontAwesomeIcon icon={faBox} className="text-green-500 mr-2 text-sm" />
    Canva
  </li>
  <li className='flex items-center'>
    <FontAwesomeIcon icon={faFileCode} className="text-green-500 mr-2 text-sm" />
    Visual Studio Code
  </li>
        </ul>
      ),
    },
    {
      title: "Integrations",
      id: "integrations",
      content: (
        <ul className="list-disc pl-2 grid grid-cols-3 gap-2">
           <li className='flex items-center'>
    <FontAwesomeIcon icon={faGooglePay} className="text-sky-400 mr-2 text-sm" />
    Razorpay
  </li>
  <li className='flex items-center'>
    <FontAwesomeIcon icon={faRobot} className="text-sky-400 mr-2 text-sm" />
    Open AI
  </li>
  <li className='flex items-center'>
    <FontAwesomeIcon icon={faPaypal} className="text-sky-400 mr-2 text-sm" />
    Stripe Payment
  </li>
  <li className='flex items-center'>
    <FontAwesomeIcon icon={faGoogle} className="text-sky-400 mr-2 text-sm" />
    Google Firebase
  </li>
  <li className='flex items-center'>
    <FontAwesomeIcon icon={faChessKnight} className="text-sky-400 mr-2 text-sm" />
    Socket.IO
  </li>
  <li className='flex items-center'>
    <FontAwesomeIcon icon={faCloud} className="text-sky-400 mr-2 text-sm" />
    ZEGOCLOUD
  </li>
  <li className='flex items-center'>
    <FontAwesomeIcon icon={faEnvelope} className="text-sky-400 mr-2 text-sm" />
    Node Mailer
  </li>
  <li className='flex items-center'>
    <FontAwesomeIcon icon={faEnvelope} className="text-sky-400 mr-2 text-sm" />
    Resend
  </li>
  <li className='flex items-center'>
    <FontAwesomeIcon icon={faFilm} className="text-sky-400 mr-2 text-sm" />
    TMDB Api
  </li>
  <li className='flex items-center'>
    <FontAwesomeIcon icon={faToolbox} className="text-sky-400 mr-2 text-sm" />
    Redux Toolkit
  </li>
  <li className='flex items-center'>
    <FontAwesomeIcon icon={faClock} className="text-sky-400 mr-2 text-sm" />
    Crone job
  </li>
        </ul>
      ),
    },
  ];
  export default TAB_DATA