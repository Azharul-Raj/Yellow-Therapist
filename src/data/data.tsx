import greenBook from '../assets/color.png';
import blueBook from '../assets/color-blue.png';
import pinkBook from '../assets/color-pink.png';
import { LightBulbIcon,NewspaperIcon,WrenchScrewdriverIcon,AcademicCapIcon } from '@heroicons/react/24/solid';
const books=[
    {
        id:1,
        title:"Super Book Shop",
        subtitle:"for book learners",
        image:greenBook,
        desc:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
        price:50,        
    },
    {
        id:2,
        title:"Super Book Shop",
        subtitle:"for book learners",
        image:blueBook,
        desc:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
        price:70,        
    },
    {
        id:3,
        title:"Super Book Shop",
        subtitle:"for book learners",
        image:pinkBook,
        desc:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
        price:80,        
    },
]
export default books;

export const category1=[
    {
        name:"Fantasy"        
    },
    {name:"Adventure"},
    {name:"Romance"},
    {name:"Contemporary"},
    {name:"Dystopian"},
    {name:"Mystery"},
    {name:"Horror"},
    {name:"Thriller"},
    {name:"Paranormal"},
    {name:"Historical fiction"},
    {name:"Science Fiction"},
    {name:"Science Children’s"},
]

export const category2=[
    {
        name:"Memoir"        
    },
    {name:"Cookbook"},
    {name:"Art"},
    {name:"Self-help"},
    {name:"Development"},
    {name:"Motivational"},
    {name:"Health"},
    {name:"History"},
    {name:"Travel"},
    {name:"Historical"},
    {name:"Families"},
    {name:"Science Humor"},
]

export const cardData=[
    {
        title:"Career Growth",
        icon:<LightBulbIcon height={50} fill={'#2fca2d'}/>
    },
    {
        title:"Increase Productivity",
        icon:<NewspaperIcon height={50} fill='#2fca2d'/>
    },
    {
        title:"Skill Improvement",
        icon:<WrenchScrewdriverIcon height={50} fill='#2fca2d'/>
    },
    {
        title:"Mental Growth",
        icon:<AcademicCapIcon height={50} fill='#2fca2d'/>
    }
]