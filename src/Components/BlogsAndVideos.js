import React, { useState } from "react";
import { useNavigate  } from "react-router-dom";
import "../Styles/BlogsAndVideos.css";
import SolutionStep from "./SolutionStep";
import Footer from "./Footer";


function Blogs() {
  const [expanded, setExpanded] = useState(false);
  const content = [`Ayushman Bharat Digital Mission (ABDM) is a groundbreaking initiative aimed at revolutionizing healthcare delivery in India through digital technology. 
  \Launched under the flagship Ayushman Bharat Pradhan Mantri Jan Arogya Yojana (AB PM-JAY), ABDM envisions a future where every citizen has seamless access to affordable and quality healthcare services,
   facilitated by digital innovation. ABDM seeks to achieve the ambitious goal of providing Universal Health Coverage (UHC) to all citizens, ensuring that no one is left behind in accessing essential healthcare services. 
   By leveraging digital tools and technologies, the mission aims to streamline healthcare processes, enhance efficiency, and bridge existing gaps in service delivery. Ayushman Bharat Digital Mission represents a landmark
    initiative towards realizing the vision of a digitally-enabled, inclusive healthcare ecosystem in India. By harnessing the transformative power of technology, ABDM holds the potential to significantly improve health outcomes, 
    enhance patient experiences, and contribute to the overall well-being of the nation's populace.`,

    `Ayushman Bharat Digital Mission (ABDM) is a groundbreaking initiative aimed at revolutionizing healthcare delivery in India through digital technology. 
    \Launched under the flagship Ayushman Bharat Pradhan Mantri Jan Arogya Yojana (AB PM-JAY), ABDM envisions a future where every citizen has seamless access to affordable and quality healthcare services,
     facilitated by digital innovation. ABDM seeks to achieve the ambitious goal of providing Universal Health Coverage (UHC) to all citizens, ensuring that no one is left behind in accessing essential healthcare services. 
     By leveraging digital tools and technologies, the mission aims to streamline healthcare processes, enhance efficiency, and bridge existing gaps in service delivery. Ayushman Bharat Digital Mission represents a landmark
      initiative towards realizing the vision of a digitally-enabled, inclusive healthcare ecosystem in India. By harnessing the transformative power of technology, ABDM holds the potential to significantly improve health outcomes, 
      enhance patient experiences, and contribute to the overall well-being of the nation's populace.`,
      
      `Ayushman Bharat Digital Mission (ABDM) is a groundbreaking initiative aimed at revolutionizing healthcare delivery in India through digital technology. 
      \Launched under the flagship Ayushman Bharat Pradhan Mantri Jan Arogya Yojana (AB PM-JAY), ABDM envisions a future where every citizen has seamless access to affordable and quality healthcare services,
       facilitated by digital innovation. ABDM seeks to achieve the ambitious goal of providing Universal Health Coverage (UHC) to all citizens, ensuring that no one is left behind in accessing essential healthcare services. 
       By leveraging digital tools and technologies, the mission aims to streamline healthcare processes, enhance efficiency, and bridge existing gaps in service delivery. Ayushman Bharat Digital Mission represents a landmark
        initiative towards realizing the vision of a digitally-enabled, inclusive healthcare ecosystem in India. By harnessing the transformative power of technology, ABDM holds the potential to significantly improve health outcomes, 
        enhance patient experiences, and contribute to the overall well-being of the nation's populace.`];

  const toggleExpanded = () => {
      setExpanded(!expanded);
  };

  return (
    <div className=" flex flex-col">    <div className=" pb-5 " id="blogs">
     <div className=" flex flex-col  bg-gradient-to-r from-[#ECF2FF] to-[#FBFCFF]] mt-4 w-full p-6">
     <h3 className="ba-title">
          <span className="items-center ml-[500px]">Blogs And Videos</span>
        </h3>
        <div className="grid lg:grid-cols-2 grid-cols-1  mt-10">
        <video width="600" height="400" controls className=" rounded-lg m-4">
    <source src={'https://s3.amazonaws.com/myrecords.in/%E0%A4%B0%E0%A4%BE%E0%A4%B7%E0%A5%8D%E0%A4%9F%E0%A5%8D%E0%A4%B0%E0%A5%80%E0%A4%AF+%E0%A4%A1%E0%A4%BF%E0%A4%9C%E0%A4%BF%E0%A4%9F%E0%A4%B2+%E0%A4%B8%E0%A5%8D%E0%A4%B5%E0%A4%BE%E0%A4%B8%E0%A5%8D%E0%A4%A5%E0%A5%8D%E0%A4%AF+%E0%A4%AE%E0%A4%BF%E0%A4%B6%E0%A4%A8+%E0%A4%AD%E0%A4%BE%E0%A4%B0%E0%A4%A4+%E0%A4%AE%E0%A5%87%E0%A4%82+%E0%A4%B8%E0%A5%8D%E0%A4%B5%E0%A4%BE%E0%A4%B8%E0%A5%8D%E0%A4%A5%E0%A5%8D%E0%A4%AF+%E0%A4%B8%E0%A5%87%E0%A4%B5%E0%A4%BE%E0%A4%93%E0%A4%82+%E0%A4%95%E0%A5%87+%E0%A4%A1%E0%A4%BF%E0%A4%9C%E0%A4%BF%E0%A4%9F%E0%A4%B2%E0%A5%80%E0%A4%95%E0%A4%B0%E0%A4%A3+%E0%A4%95%E0%A5%80+%E0%A4%A8%E0%A4%AF%E0%A5%80+%E0%A4%95%E0%A5%8D%E0%A4%B0%E0%A4%BE%E0%A4%82%E0%A4%A8%E0%A5%8D%E0%A4%A4%E0%A4%BF++NDHM.mp4'} type="video/mp4" className=" rounded-lg"/>
  </video>
    <div className="ml-2 p-4">
      <div className=" flex justify-between">
       <div><h2 className="text-xl font-bold mb-2 width-100% ">Importance of Health Monitoring</h2> </div>
      <div className="text-gray-500  text-sm text-right ">  April 22, 2024</div>

      </div>
           
            <p>
              Welcome to our blog post discussing the innovative features and capabilities of our latest health monitoring application. In today's fast-paced world, staying on top of your health is more crucial than ever. Our application aims to empower individuals by providing them with easy-to-use tools for tracking and managing their well-being.<br></br> <br></br>
              In the hustle and bustle of daily life, it's easy to overlook our health. However, regular monitoring is key to detecting potential issues early and preventing them from escalating. Our application serves as a comprehensive health companion, allowing users to monitor various aspects of their health conveniently from their smartphones or other devices.
            </p>
          </div>
        </div>  
  </div>
    <div className="videos grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1  gap-5 p-6" height="400px" width="23%" style={{fontFamily:'"Wix Madefor Display", sans-serif'}}>
        <div className="video-2 flex flex-col justify-center border">
          <video controls className="" style={{height:"210px"}}>
        <source src={'https://s3.amazonaws.com/myrecords.in/Talk+Ayushman+Bharat+Digital+Mission+(ABDM).mp4'} type="video/mp4" className=" "/>
            </video>
            <div className="ml-2 ">
    <div className=" flex flex-col px-3 py-4">
       <div><h2 className="text-xl font-bold mb-2 width-100% ">Ayushman Bharat Digital Mission</h2> </div>
      <div className="text-gray-500  text-sm  ">  April 22, 2024</div>

    </div>
           
    <div className="px-3">
            {expanded ? content[0] : `${content[0].split(' ').slice(0, 50).join(' ')}...`}
            {!expanded && <button onClick={toggleExpanded} className="text-blue-500">Read More</button>}
        </div>  
          </div>
        </div>
        <div className="video-2 flex flex-col justify-center border">
          <video controls className="" style={{height:"210px"}}>
        <source src={'https://s3.amazonaws.com/myrecords.in/EMR+vs+EHR+What+is+the+difference.mp4'} type="video/mp4" className=" "/>
            </video>
            <div className="ml-2 ">
    <div className=" flex flex-col px-3 py-4">
       <div><h2 className="text-xl font-bold mb-2 width-100% ">Elecronic Medical Records</h2> </div>
      <div className="text-gray-500  text-sm  ">  April 22, 2024</div>

    </div>
           
    <div className="px-3">
            {expanded ? content[1] : `${content[1].split(' ').slice(0, 50).join(' ')}...`}
            {!expanded && <button onClick={toggleExpanded} className="text-blue-500">Read More</button>}
        </div> 
          </div>
        </div>
        <div className="video-2 flex flex-col justify-center border">
          <video controls className="w-200px" style={{height:"210px"}}>
        <source src={'https://s3.amazonaws.com/myrecords.in/The+Difference+Between+EMR++EHR.mp4'} type="video/mp4" className=" "/>
            </video>
            <div className="ml-2 ">
    <div className=" flex flex-col px-3 py-4">
       <div><h2 className="text-xl font-bold mb-2 width-100% ">EMR vs EHR</h2> </div>
      <div className="text-gray-500  text-sm  ">  April 22, 2024</div>

    </div>
           
    <div className="px-3">
            {expanded ? content[2] : `${content[2].split(' ').slice(0, 50).join(' ')}...`}
            {!expanded && <button onClick={toggleExpanded} className="text-blue-500">Read More</button>}
        </div> 
          </div>
        </div>

       

       
      </div>

    </div>
    <Footer/>
    </div>

  );
}

export default Blogs;
