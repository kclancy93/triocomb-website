import { FiCommand, FiCompass, FiDollarSign, FiTrendingUp } from "react-icons/fi";

import client1 from '../assets/images/team/01.jpg'
import client2 from '../assets/images/team/02.jpg'
import client3 from '../assets/images/team/03.jpg'
import client4 from '../assets/images/team/04.jpg'
import client5 from '../assets/images/team/05.jpg'
import client6 from '../assets/images/team/06.jpg'

import blog1 from '../assets/images/blog/01.jpg'
import blog2 from '../assets/images/blog/02.jpg'
import blog3 from '../assets/images/blog/03.jpg'
import blog4 from '../assets/images/blog/04.jpg'

import partner1 from '../assets/images/team/amazon.svg'
import partner2 from '../assets/images/team/google.svg'
import partner3 from '../assets/images/team/lenovo.svg'
import partner4 from '../assets/images/team/paypal.svg'
import partner5 from '../assets/images/team/shopify.svg'
import partner6 from '../assets/images/team/spotify.svg'

export const servicesData = [
    {
        icon: FiTrendingUp,
        title: 'Liaison',
        desc: `We provide services to bridge the gap between talents and clients`
    },
    {
        icon: FiDollarSign,
        title: 'Finance',
        desc: `We provide services to handle payments with transparent process between talents and clients`
    },
    {
        icon: FiCompass,
        title: 'Screening',
        desc: `We provide services to handle background check and verify individual's identity`
    },
    {
        icon: FiCommand,
        title: 'Interviewing',
        desc: `We provide services to handle interviews for clients identifying the right talents`
    }
]

export const clientData = [
    {
        image: client1,
        name: 'Calvin Carlo',
        position: 'Lead Software Engineer, Fintech Startup',
        desc: `" Comb Inc. helped us scale our backend team in under a week. The engineer we hired hit the ground running—writing clean code, contributing to architecture discussions, and even mentoring junior devs. "`,
        rate: ['mdi mdi-star', 'mdi mdi-star', 'mdi mdi-star', 'mdi mdi-star']
    },
    {
        image: client2,
        name: 'Christa Smith',
        position: 'Engineering Manager, SaaS Company',
        desc: `"We were facing a critical deadline when one of our senior developers went on leave. Comb Inc. stepped in with a top-tier talent who not only matched the skillset but improved our pipeline efficiency by 30%."`,
        rate: ['mdi mdi-star', 'mdi mdi-star', 'mdi mdi-star', 'mdi mdi-star']
    },
    {
        image: client3,
        name: 'Jemina CLone',
        position: 'Senior Software Engineer',
        desc: `" When I had to step away from work due to a family emergency, Comb Inc. stepped in like an extension of our team. They quickly provided a highly skilled engineer who picked up my responsibilities seamlessly. Knowing the project was in good hands gave me peace of mind during a difficult time. "`,
        rate: ['mdi mdi-star', 'mdi mdi-star', 'mdi mdi-star', 'mdi mdi-star', 'mdi mdi-star']
    },
    {
        image: client4,
        name: 'Steven Mulvey',
        position: 'Software Engineer',
        desc: `" Getting matched with a U.S. client through Comb Inc. was a turning point in my career. I had the chance to work on cutting-edge technologies, collaborate with an amazing team, and grow both technically and professionally. The support from Comb made the transition smooth, and the experience has truly been life-changing. "`,
        rate: ['mdi mdi-star', 'mdi mdi-star', 'mdi mdi-star', 'mdi mdi-star', 'mdi mdi-star']
    },
    {
        image: client5,
        name: 'Cristino Murfi',
        position: 'Senior Data Architect',
        desc: `"What stood out most to me was Comb Inc.’s commitment to fairness. I received equal pay for the same work as my U.S. peers—something that’s rare in global hiring. On top of that, the team offered constant support, mentorship, and resources to help me succeed. It truly feels like I’m part of something bigger."`,
        rate: ['mdi mdi-star', 'mdi mdi-star', 'mdi mdi-star', 'mdi mdi-star', 'mdi mdi-star']
    },
]

export const offerData = [
    {
        image: blog1,
        title: 'Design Your Apps In Your Own Way',
        desc: `We offer robust support and mentorship to empower talent in securing jobs and excelling in their project work`
    },
    {
        image: blog2,
        title: 'Lucrative Collaboration',
        desc: `We offer lucrative projects and foster respectful, reliable relationships between talents and clients.`
    },
    {
        image: blog3,
        title: 'Remote Work Environment',
        desc: `We offer a remote work environment to enhance work-life balance for our talents.`
    },
    {
        image: blog4,
        title: 'Strong Community',
        desc: `We offer a robust talent community, enabling talents to find individuals who are aligned with their needs easily.`
    },
]
export const partnerData = [
    partner1, partner2, partner3, partner4, partner5, partner6
]