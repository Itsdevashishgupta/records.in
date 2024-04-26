import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../Footer'

const Security = () => {
  return (
    <div className="legal-section-title">
        <h1 className="legal-siteTitle">
        <Link to="/">
        SECURITY
        </Link>
      </h1>
      <div className="legal-text-content">
      <p className="legal-title">Privacy Practices</p>
        <p className="legal-description">
        We will never rent or sell your information or data to anyone. We never use or transfer your data for serving ads, including retargeting, personalised, or interest-based advertising; We will never provide any part of your information to anyone unless explicitly agreed by you. Please refer to our Privacy Policy for more information.
        </p>
      <p className="legal-title">Cloud Infrastructure</p>
        <p className="legal-description">
        My-records.in is hosted on a Virtual Private Cloud on Amazon Web Services which provides a secure and scalable technology platform to ensure we can provide you services securely and reliably. Our infrastructure is launched in compliance with the AWS Well Architected Framework and from the security perspective incorporating practices from the AWS Cloud Adoption Framework.

We use HTTPS protocol for our website and mobile applications (hereinafter referred to as “Platform”). All communication between the Platform and our servers are protected via 256bit encrypted HTTPS protocol. This prevents MITM (Man in the Middle) attacks on our platform and connection between us and our user is fully secure. We have strict network segmentation and isolation of environments and services in place. 
        </p>
      <p className="legal-title">Host Security</p>
        <p className="legal-description">
        We use industry leading solutions around anti-virus, anti-malware, intrusion prevention systems, intrusion detection systems, file integrity monitoring, application control, application and audit log aggregation, and automated patching.

All our servers are launched using the Center for Internet Security Benchmarks for Amazon Linux.
        </p>
      <p className="legal-title">Data Security</p>
        <p className="legal-description">
        The user log-in is based on One-Time Password (OTP) & PIN authentication on My-records.in website and mobile application.

All user data and internal stored data is protected by encryption at rest and sensitive data by application-level encryption.

We employ separation of environments and segregation of duties and have strict role-based access control on a documented, authorized & need-to-use basis. We use key management services to limit access to data except the data team. Stored data is protected by encryption at rest and sensitive data by application-level encryption. We use data replication for data resiliency & disaster recovery, snapshotting for data durability and backup/restore testing for data reliability. We only use anonymized and aggregated data for internal analytics and business intelligence purposes.
        </p>
      <p className="legal-title">Incident and Change Management</p>
        <p className="legal-description">
        We have deployed mature processes around Change Management which enables us to release thoroughly tested features for you both reliably and securely enabling you to enjoy the My-records.in experience with maximum assurance and security.

We have a very aggressive stance on Incident Management on both Systems downtime and Security and Network Operations Center and an Information Security Management System in place which quickly reacts, remediates or escalates any Incidents arising out of planned or unplanned changes. 
        </p>
      <p className="legal-title">Vulnerability Assessment and Penetration Testing</p>
        <p className="legal-description">
        We work with a network security team that uses industry-leading leading products to conduct manual and automated VA/PT activities. Including pentration testing of all the applications and endpoints.

We employ both static application security testing and dynamic application security testing which is incorporated into our continuous integration / continuous deployment pipeline.

We leverage CERT-IN certified auditors to do periodic external testing and audits.
        </p>
      <p className="legal-title">Annual security assessment</p>
        <p className="legal-description">
        We undergo an annual security assessment from a Google-designated third party and keep the same updated from time and time or as per instructions from Google and will publish the “letter of assessment” on My-records.in website and mobile applications.
        </p>
      <p className="legal-title">Responsible Disclosure</p>
        <p className="legal-description">
        We at My-records.in (Orbi Health Private Limited) are committed to our user's data and privacy. We blend security at multiple steps within our products with state-of-the-art technology to ensure our systems maintain strong security measures. The overall data and privacy security design allow us to

defend our systems from various attacks. If you are a security enthusiast or a researcher and you have found a possible security vulnerability on My-records.in, we encourage you to report the issue to us responsibly You could submit a bug report to us at contact@my-records.in with detailed steps required to reproduce the vulnerability We shall put best of our efforts to investigate and fix the legitimate issues in a reasonable time frame, meanwhile, requesting you not to publicly disclose it.
        </p>
      </div>
      <Footer/>
    </div>
  )
}

export default Security