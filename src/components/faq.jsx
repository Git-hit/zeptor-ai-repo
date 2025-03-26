import { motion } from 'framer-motion';
import Accordion from "./accordion";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function FAQ() {
  const data = [
    {
      title: 'What is ZeptorAl?',
      content: 'ZeptorAl is an Al automation agency that builds pills, which are custom solutions like Al voice agents and custom workflows for solar companies. It streamlines business processes, making them smooth, fast, and efficient. All tailored to solar companies operations without paying thousands or millions in hefty staffing costs.'
    },
    {
      title: "What can ZeptorAl's Al Voice Agents do?",
      content: "ZeptorAI's AI Voice Agents answer customer calls naturally, handle inquiries, follow up with customers, act as a virtual receptionist for bookings and appointments, and provide support 24/7 in multiple languages."
    },
    {
      title: "Can the Al Voice Agent handle multiple languages?",
      content: "Our AI Voice Agents speak with customers in multiple languages, making it easy and convenient for all kinds of people from nearly every country."
    },
    {
      title: 'How much does an Al Voice Agent cost?',
      content: "ZeptorAI's pricing depends on the AI Voice Agent's complexity and the tasks it handles. To get an exact figure, we suggest scheduling our short 15-minute call for a clear, tailored answer."
    },
    {
      title: 'What if I have concerns about Al replacing human interaction?',
      content: "Our AI Voice Agents improve human interaction, not take its place. They manage repeat questions and tasks, letting your team focus on personal and tricky customer needs."
    },
  ];

  return (
    <motion.div 
      className="flex flex-col justify-center gap-10"
      initial="hidden"
      animate="visible"
      variants={fadeIn}
    >
      <motion.h2 
        className="text-gray-50 text-center text-2xl md:text-5xl font-medium"
        variants={fadeIn}
      >
        FAQs
      </motion.h2>
      <Accordion data={data} />
    </motion.div>
  )
}