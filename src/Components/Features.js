import React from "react";
import InformationCard from "./InformationCard";
import digital from '../Assets/health records.jpg';
import tracker from '../Assets/health-track.jpg';
import women from '../Assets/Info (Female).jpg';
import baby from '../Assets/babyNewborn.jpg';
import appointment from '../Assets/appointment 1.jpg';
import tree from '../Assets/Family Tree Design.png';
import stress from '../Assets/Stress management1.jpg';
import weight from '../Assets/deit-weight.jpg';
import senior from '../Assets/Senior-Citizens-Health-Insurance.jpg';
import report from '../Assets/report.jpg';
import policy from '../Assets/health-insurance policy.jpg';
import data from '../Assets/secure data storage.jpg'
import { faBaby,faCalendarCheck } from "@fortawesome/free-solid-svg-icons";
import "../Styles/Features.css";
import { IoWoman } from "react-icons/io5";
import { MdElderlyWoman, MdHealthAndSafety } from "react-icons/md";
import { TiCloudStorage } from "react-icons/ti";
import playstore from "../Assets/Google_Play_Store_badge_EN.svg.webp"
import applestore from "../Assets/download-on-the-app-store-apple-logo-svgrepo-com.svg"
// import { ReactComponent as Badge } from '../Assets/Google_Play_Store_badge_EN.svg';

function Features() {
  return (
    <>
    {/* <div className="w-full pt-20">
     <div className="p-8 flex flex-col justify-center relative w-full flex-wrap">
  <div className="mb-6">
    <h1 className="text-center font-extrabold text-6xl" style={{fontFamily:"'Poppins', sans-serif"}}>One App,<br />Complete Health Empowerment</h1>
  </div>
  <div className="max-w-[60%] w-[60%] text-center mx-auto">
    <p className="text-center text-xl" style={{fontFamily:"'Rubik', sans-serif"}}>Uncover the power of seamless health management with an array of intuitive features designed for your proactive health journey.</p>
  </div> 

  <div className=" mt-8">
   <img src={playstore} alt="Google Play Store" className="w-60"/>
   <img src={applestore} alt="Apple" className="w-60" />
  </div>
  <p></p>
</div> 
    </div> */}
        <div className="info-section" id="features">
      <div className="info-title-content">
        <h3 className="info-title">
          <span>What We Do</span>
        </h3>
        <p className="info-description">
          We bring healthcare to your convenience, offering a comprehensive
          range of on-demand medical services tailored to your needs. Our
          platform allows you to connect with experienced online doctors who
          provide expert medical advice, issue online prescriptions, and offer
          quick refills whenever you require them.
        </p>
      </div>
     

      <div className="info-cards-content">
        
        <div className="info-cards">
      <span className="info-card-icon text-[#f99a1c] text-2xl">
       
      </span>
      <img src={digital} className="w-44 h-40 ml-28 mt-4"/>
      <p className="info-card-title">Digital Health Records</p>
      <p className="info-card-description text-left">Digital Health Records (DHR) are like electronic files for your health. Instead of carrying around paper records, all your medical information is stored digitally, usually on a computer system. It includes details about your visits to the doctor, test results, medications, allergies, and more.
DHR makes it easier for doctors and healthcare providers to access your information quickly and securely, no matter where you are. They can see your medical history, which helps them make better decisions about your care.</p>
    </div>
       
    <div className="info-cards">
      <span className="info-card-icon text-[#f99a1c] text-2xl">
       
      </span>
      <img src={tracker} className="w-54 h-40 ml-16 mt-4"/>
      <p className="info-card-title">Health Tracker</p>
      <p className="info-card-description">Health Tracker helps you monitor and manage your well-being easily. Track vital signs like heart rate, blood pressure, and weight, along with daily activities and sleep patterns. Set goals, receive reminders, and view trends to stay motivated. Access educational resources for better health decisions. Your data is securely stored and can be visualized for insights. Compatible with mobile and web for convenient access anywhere. Stay on top of your health effortlessly with Health Tracker.</p>
    </div>
    <div className="info-cards">
      <span className="info-card-icon text-[#f99a1c] text-2xl">
       
      </span>
      <img src={report} className="w-44 h-36 mb-8 ml-28 mt-4"/>
      <p className="info-card-title">Reports Management</p>
      <p className="info-card-description">Reports management in health records simplifies data organization and analysis, compiling patient information into clear summaries for easy understanding by healthcare professionals. These reports cover various aspects such as lab reports, X-rays, MRI and other scans, treatment progress, aiding in informed decision-making. By offering concise insights, they streamline communication among medical teams and improve patient care. Reports management ensures efficient record-keeping, enabling quick access to critical data whenever needed.</p>
    </div>
      <div className="info-cards">
      <span className="info-card-icon text-[#f99a1c] text-2xl">
       
      </span>
      <img src={women} className="w-40 h-40 ml-28 mt-4"/>
      <p className="info-card-title">Women Health Management</p>
      <p className="info-card-description">Women's health management encompasses caring for physical, mental, and emotional well-being. This includes understanding and monitoring the menstrual cycle, a natural monthly process where the body prepares for pregnancy. By tracking menstruation, women can better manage their reproductive health, detect irregularities, and plan accordingly. It's essential to prioritize self-care, maintain a balanced diet, exercise regularly, and seek medical advice for any concerns. Regular check-ups, screenings, and open communication with healthcare providers contribute to overall wellness and empowerment.</p>
    </div>

    <div className="info-cards">
      <span className="info-card-icon text-[#f99a1c] text-2xl">
      
      </span>
      <img src={senior} className="w-56 ml-20 mt-8"/>
      <p className="info-card-title">Senior Citizens Health Management</p>
      <p className="info-card-description">Senior Citizens' Health Management simplifies daily life by sending reminders for medication and doctor check-ups. It tracks health records, ensuring nothing gets missed. With gentle prompts, it helps seniors stay on top of their health routines effortlessly. Whether it's remembering to take pills or scheduling regular check-ups, this tool ensures seniors feel supported and in control of their health journey. By keeping everything organized and accessible, it promotes peace of mind for both seniors and their caregivers.</p>
    </div>
    <div className="info-cards">
      <span className="info-card-icon text-[#f99a1c] text-2xl">
       
      </span>
      <img src={baby} className="w-48 ml-28 mt-8"/>
      <p className="info-card-title">Newborn Baby Immunization</p>
      <p className="info-card-description">Ensure your newborn's health with our Newborn Baby Immunization program. Track vaccinations as per MHA guidelines with a handy Vaccination Cart, receiving timely reminders. Monitor doctor visits and keep records of periodic check-ups. Track your child's overall development with comprehensive reports. Access medical history from day one for seamless healthcare management. Prioritize your baby's well-being effortlessly.</p>
    </div>
    <div className="info-cards">
      <span className="info-card-icon text-[#f99a1c] text-2xl">
       
      </span>
      <img src={weight} className="w-44 ml-28 mt-8"/>
      <p className="info-card-title">Diet & Weight Management</p>
      <p className="info-card-description">Diet and weight management are about eating the right foods and maintaining a healthy weight. It's not just about losing weight; it's also about feeling good and having energy. Eating a balanced diet with plenty of fruits, vegetables, lean proteins, and whole grains helps keep you healthy. Portion control is important too, so you don't eat too much. Exercise is also crucial for weight management. It helps burn calories and build muscle, which can boost your metabolism. By making small, sustainable changes to your eating habits and staying active, you can achieve and maintain a healthy weight.</p>
    </div>
      <div className="info-cards">
      <span className="info-card-icon text-[#f99a1c] text-2xl">
       
      </span>
      <img src={stress} className="w-56 ml-20 mt-4"/>
      <p className="info-card-title">Stress Management</p>
      <p className="info-card-description">Stress management is about handling the pressures of life in a healthy way. It involves techniques to reduce and cope with stressors, which are things that cause stress. This includes identifying stress triggers, practicing relaxation techniques like deep breathing or meditation, exercising regularly, getting enough sleep, and maintaining a balanced diet. It's also important to set boundaries, prioritize tasks, and seek support from friends, family, or professionals when needed. By taking proactive steps to manage stress, we can improve our overall well-being and lead happier, more fulfilling lives.</p>
    </div>
    
    <div className="info-cards">
      <span className="info-card-icon text-[#f99a1c] text-2xl">
       
      </span>
      <img src={tree} className="w-44 ml-28 mt-8"/>
      <p className="info-card-title">Family User Management</p>
      <p className="info-card-description">Family User Management in health simplifies managing multiple users' health data. It allows families to create profiles for each member, track their health records, appointments, and medication schedules in one place. Users can easily switch between family members' profiles for personalized care. This system ensures efficient communication with healthcare providers, streamlines appointment scheduling, and enhances coordination for better health outcomes. By centralizing health information, families can stay organized, support each other's wellness journey, and make informed decisions together, promoting a healthier and happier family life.</p>
    </div>
    
    <div className="info-cards">
      <span className="info-card-icon text-[#f99a1c] text-2xl">
       
      </span>
      <img src={appointment} className="w-44 ml-28 mt-8"/>
      <p className="info-card-title">Appointment Management</p>
      <p className="info-card-description">Appointment management in healthcare ensures patients receive timely care. It involves scheduling appointments for medical consultations, tests, and procedures. Patients book appointments with doctors or healthcare facilities, often through phone calls or online platforms. Receptionists or automated systems manage appointment calendars, coordinating patient needs with available slots. Reminders via text, email, or phone calls help patients remember appointments, reducing no-shows. Efficient appointment management streamlines healthcare delivery, reducing wait times and ensuring patients receive the care they need when they need it."</p>
    </div> 

        <div className="info-cards">
      <span className="info-card-icon text-[#f99a1c] text-2xl">
      
      </span>
      <img src={policy} className="w-32 ml-28 mt-4"/>
      <p className="info-card-title"> Health Insurance Policy </p>
      <p className="info-card-description">Health insurance policies protect you financially by covering medical expenses. When you get sick or injured, the insurance company pays for part or all of your treatment costs, depending on the policy's terms. These policies typically cover doctor visits, hospital stays, prescription medications, and preventive care. You pay a monthly premium to keep your coverage active. In return, the insurance company helps you pay for healthcare services when needed, reducing your out-of-pocket expenses. Having health insurance gives you peace of mind, ensuring that you can access necessary medical care without worrying about the high costs.</p>
    </div>
    <div className="info-cards">
      <span className="info-card-icon text-[#f99a1c] text-2xl">
      
      </span>
      <img src={data} className="w-48 ml-28 mt-8"/>
      <p className="info-card-title"> Secure Data Storage</p>
      <p className="info-card-description">Secure data storage in health records ensures sensitive information like medical history and personal details are protected from unauthorized access or breaches. This is achieved through encryption, which scrambles data into unreadable code without the correct key. Access controls limit who can view or modify records, while regular backups prevent data loss. Secure servers and firewalls shield against cyber threats, and audits ensure compliance with privacy regulations like HIPAA. These measures safeguard patient confidentiality, trust, and the integrity of healthcare systems.</p>
    </div>
      </div>
    </div>
    </>

  );
}

export default Features;
