import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact ,faJs,faNode,  faNodeJs,faHtml5, faCss3Alt, faGit, faAws, faCss3} from '@fortawesome/free-brands-svg-icons';
import { faBootstrap } from '@fortawesome/free-brands-svg-icons';
import { faDatabase, faServer } from "@fortawesome/free-solid-svg-icons";

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
          <li>BCA (2019-2022)</li>
          <li>Higher Secondary</li>
        </ul>
      ),
    },
    {
      title: "Tools",
      id: "tools",
      content: (
        <ul className="list-disc pl-2 grid grid-cols-3 gap-2">
          <li>Postman</li>
          <li>Figma</li>
          <li>Resend (email)</li>
          <li>GitHub</li>
          <li>Notion</li>
          <li>Canva</li>
          <li>Visual studio Code</li>
        </ul>
      ),
    },
    {
      title: "Integrations",
      id: "integrations",
      content: (
        <ul className="list-disc pl-2 grid grid-cols-3 gap-2">
          <li>Razorpay</li>
          <li>Open Ai</li>
          <li>Stripe Payment Gateway</li>
          <li>Google Firebase</li>
          <li>Socket.IO</li>
          <li>ZEGOCLOUD</li>
          <li>Node Mailer</li>
          <li>Resend</li>
          <li>TMDB Api</li>
          <li>Redux Toolkit</li>
          <li>Crone job</li>
        </ul>
      ),
    },
  ];
  export default TAB_DATA