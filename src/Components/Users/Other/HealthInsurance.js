import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const HealthInsuranceLanding = () => {
  const [faqItems, setFaqItems] = useState([
    {
      question: 'What is the coverage area?',
      answer: 'Our plan covers a wide range of locations. Please contact us for details.',
      isOpen: false,
    },
    {
      question: 'How do I file a claim?',
      answer: 'We offer a streamlined claims filing process. Visit our website for instructions.',
      isOpen: false,
    },
    {
      question: 'What is the network of providers?',
      answer: 'We have a vast network of qualified healthcare providers. Find a doctor near you on our website.',
      isOpen: false,
    },
    {
      question: 'How do I add dependents to my plan?',
      answer: 'Adding dependents is easy. Contact our customer support team for assistance.',
      isOpen: false,
    },
    {
      question: 'What is the appeals process?',
      answer: 'We have a fair appeals process in place. Please refer to our policy documents for details.',
      isOpen: false,
    },
    {
      question: 'How do I access my policy documents?',
      answer: 'Your policy documents are readily available online. Log in to your account to view them.',
      isOpen: false,
    },
  ]);

  const toggleFaq = (index) => {
    setFaqItems(
      faqItems.map((item, i) => (i === index ? { ...item, isOpen: !item.isOpen } : item))
    );
  };

  return (
    <div className="w-full bg-gradient-to-r from-[#ECF2FF] to-[#FBFCFF]">
      <section className="  py-12 md:py-24 lg:py-16">
        <div className="container px-4 md:px-6">
          <div className="flex justify-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Comprehensive Health Insurance
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl ">
                  Protect yourself and your loved ones with our top-tier health insurance plan. Enjoy comprehensive coverage and peace of mind.
                </p>
              </div>
            </div>
           
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-16 px-8">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-white px-3 py-1 text-sm ">
                  Key Features
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Comprehensive Coverage
                </h2>
              </div>
              <div className="grid gap-4">
                <div className="grid gap-1">
                  <h3 className="text-lg font-bold">Inpatient Coverage</h3>
                  <p className="text-sm text-gray-500 ">
                    Our plan covers hospital stays, surgeries, and other inpatient
                  </p>
                  ... (previous code)

                </div>
                <div className="grid gap-1">
                  <h3 className="text-lg font-bold">Outpatient Care</h3>
                  <p className="text-sm text-gray-500 ">
                    Get coverage for doctor visits, lab tests, and other outpatient services.
                  </p>
                </div>
                <div className="grid gap-1">
                  <h3 className="text-lg font-bold">Preventive Care</h3>
                  <p className="text-sm text-gray-500 ">
                    Stay healthy with coverage for annual checkups, screenings, and immunizations.
                  </p>
                </div>
                <div className="grid gap-1">
                  <h3 className="text-lg font-bold">Prescription Drugs</h3>
                  <p className="text-sm text-gray-500 ">
                    Enjoy coverage for your essential medications.
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-white px-3 py-1 text-sm ">
                  Policy Details
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Deductibles and Copays
                </h2>
              </div>
              <div className="grid gap-4">
                <div className="grid gap-1">
                  <h3 className="text-lg font-bold">Deductible</h3>
                  <p className="text-sm text-gray-500 ">$500 individual, $1,000 family</p>
                </div>
                <div className="grid gap-1">
                  <h3 className="text-lg font-bold">Copays</h3>
                  <p className="text-sm text-gray-500 ">$20 for primary care, $40 for specialists</p>
                </div>
                <div className="grid gap-1">
                  <h3 className="text-lg font-bold">Out-of-Pocket Maximum</h3>
                  <p className="text-sm text-gray-500 ">$3,000 individual, $6,000 family</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-16">
        <div className="container px-4 md:px-6">
          <div className="space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-white px-3 py-1 text-sm ">
                FAQ
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Frequently Asked Questions
              </h2>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {faqItems.map((faqItem, index) => (
                <div key={index} data-state={faqItem.isOpen ? 'open' : 'closed'} className="space-y-2">
                  <button
                    type="button"
                    aria-controls={`radix-:r${index + 1}`}
                    aria-expanded={faqItem.isOpen}
                    onClick={() => toggleFaq(index)}
                    className="flex w-full items-center justify-between rounded-md bg-white px-4 py-3 text-sm font-medium transition-colors hover:bg-gray-200 focus:bg-gray-200 focus:outline-none  "
                  >
                    {faqItem.question}
                   

                    <FontAwesomeIcon icon={faChevronDown} className={`h-5 w-5 transition transform duration-200 ${faqItem.isOpen ? 'rotate-180' : ''}`} />
                  </button>
                  <div
                    data-state={faqItem.isOpen ? 'open' : 'closed'}
                    id={`radix-:r${index + 1}`}
                    hidden={!faqItem.isOpen}
                    className="space-y-2 px-4 py-2 bg-gray-50  rounded-b-md"
                  >
                    <p className="text-sm text-gray-500 ">{faqItem.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HealthInsuranceLanding;

