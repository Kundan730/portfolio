import { useEffect } from 'react';
import {
  MapPinIcon,
  AtSymbolIcon,
  CalendarIcon,
  AcademicCapIcon,
  BriefcaseIcon,
} from '@heroicons/react/20/solid';
import AOS from 'aos';
import 'aos/dist/aos.css';
const features = [
  {
    name: 'Age:',
    description: '19 years old',
    icon: CalendarIcon,
  },
  {
    name: 'Email:',
    description: 'espkundan@gmail.com',
    icon: AtSymbolIcon,
  },
  {
    name: 'Location:',
    description: 'Bangalore, Karnataka, India',
    icon: MapPinIcon,
  },
];

export default function About() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div
      className="relative isolate overflow-hidden  px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0"
      id="about"
    >
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <h2 className="text-lg leading-7">Get to know more</h2>
              <p className="mt-2 text-4xl font-bold tracking-tight sm:text-6xl">
                About Me
              </p>
              <p className="mt-6 text-lg leading-8" data-aos="fade-right">
                As a passionate Full Stack Web Applications Developer, I bring a
                unique blend of technical expertise and creative problem-solving
                skills to every project I undertake. With a solid background in
                web development and valuable internship experiences in diverse
                industries.
                <br />
                <strong>Education and Internships </strong>
                I have a strong foundation in Full Stack Web Applications
                Development, having honed my skills through a combination of
                formal education and hands-on experience. During my internships
                at a home decor enterprise and a fashion e-commerce platform, I
                gained valuable insights into the industry and successfully
                designed and implemented RESTful APIs, enhancing the integration
                between the backend server and the UI to dynamically display
                product availability.
                <br />
                <strong>Projects and Achievements </strong>
                Throughout my academic and professional journey, I have
                developed many creative and technical projects for clients and
                agencies by connecting through my college community. These
                projects have allowed me to showcase my ability to create
                engaging and user-friendly web applications while adhering to
                industry best practices and client requirements.
                <br />
                <strong>Technical Skills and Expertise </strong>
                With 1.5 years of hands-on experience in the field and
                proficiency in your specified tech stack, I am well-versed in
                the latest technologies and methodologies in web development. I
                am adept at using a wide range of programming languages,
                frameworks, and tools to deliver high-quality, scalable, and
                maintainable web applications.
              </p>
            </div>
          </div>
        </div>
        <div
          className="-ml-12 -mt-12 p-12 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden"
          data-aos="fade-left"
        >
          <img
            className="w-[38rem] ring-2 ring-base-300 max-w-none rounded-xl shadow-xl sm:w-[57rem]"
            src="https://i.ibb.co/b6hLqBr/Whats-App-Image-2024-09-14-at-15-35-13-cfec3b7.jpg"
            alt="Person"
          />
        </div>
      </div>
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:gap-x-8 lg:px-8">
          <div className="text-base leading-7">
            <div className="grid gap-x-6 sm:grid-cols-2">
              <div
                className="ring-2 ring-base-300 bg-base-200 rounded-2xl mt-10 p-5 shadow-xl"
                data-aos="zoom-in"
              >
                <BriefcaseIcon className="h-5 w-5 mx-auto" aria-hidden="true" />
                <h2 className=" text-2xl text-center font-bold tracking-tight">
                  Experience
                </h2>
                <p className="mt-3 list-item list-inside">
                Full Stack Development • Internship Apr 2024 - Jun 2024
                Brihat Infotech, Virtual
                </p>
                <p className="mt-3 list-item list-inside">
                Software Development Engineering (Web) • Internship Aug 2022 - Apr 2023
                Radhika Home Solutions, Virtual
                </p>
                <p className="mt-3 list-item list-inside">
                  Web Application Developer at Flash API
                </p>
              </div>
              <div
                className="ring-2 ring-base-300 bg-base-200 rounded-2xl mt-10 p-5 shadow-xl"
                data-aos="zoom-in"
              >
                <AcademicCapIcon
                  className="h-5 w-5 mx-auto"
                  aria-hidden="true"
                />
                <h2 className=" text-2xl text-center font-bold tracking-tigh">
                  Education
                </h2>
                <p className="mt-3 list-item list-inside">
                Bachelor of Computer Applications (BCA), Computer Science 2024 - 2027 Reva University Bangalore
                </p>
                <p className="mt-3 list-item list-inside">
                Senior Secondary (XII), CBSE 2022
                GOSSNER COLLEGE RANCHI
                </p>
                <p className="mt-3 list-item list-inside">
                Secondary (X), CBSE 2020
                St. Michael's School, Muri
                </p>
              </div>
            </div>
            <dl
              className="mt-10 space-y-8 text-base leading-7 lg:max-w-none"
              data-aos="fade-right"
            >
              {features.map((feature) => (
                <div key={feature.name} className="relative pl-9">
                  <dt className="inline font-semibold">
                    <feature.icon
                      className="absolute left-1 top-1 h-5 w-5"
                      aria-hidden="true"
                    />
                    {feature.name}
                  </dt>{' '}
                  <dd className="inline">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}
