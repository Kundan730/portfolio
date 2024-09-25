import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const projects = [
  {
    id: 1,
    name: 'BlockToons ↗ ',
    href: 'https://block-toons.vercel.app/',
    imageSrc: 'https://i.ibb.co/Yhq72kv/Screenshot-2024-09-01-153058.png',
    used: 'NextJs, TailwindCSS',
    description:
      'Discover and read the best webtoons from around the world on the blockchain.',
  },
  {
    id: 2,
    name: 'Sangharsh',
    href: 'https://sangharsh.vercel.app/',
    imageSrc: 'https://i.ibb.co/sV4nttJ/Screenshot-2024-09-26-000259.png',
    used: 'ReactJS, TailwindCSS, MongoDB',
    description:
      'Explore your future with our AI assessments, immersive AR/VR simulations, expert mentorship, and interactive tools. Unlock your potential with personalized guidance and innovative technology.',
  },
  {
    id: 3,
    name: 'Sandbox',
    href: 'https://sandbox-23.vercel.app/',
    imageSrc: 'https://i.ibb.co/kSPM5jJ/Screenshot-2024-09-14-080339.png',

    used: 'ReactJS, TailwindCSS',
    description:
      'Sandbox is an all-in-one platform designed to transform academic project management by providing a comprehensive solution for showcasing, managing, and connecting projects.',
  },
  {
    id: 4,
    name: 'Xugaadu',
    href: 'https://e-commerce-xugaadu-in.vercel.app/',
    imageSrc: 'https://i.ibb.co/M5VQ9mN/Screenshot-2024-09-26-002240.png',
    used: 'ReactJS, TailwindCSS',
    description:
      'Developed a working fashion e-commerce web application with NextJS, MongoDB, TailwindCSS and integrated many essential features to complete the order.',
  },
];

export default function Projects() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div id="projects">
      <div className="mx-auto max-w-2xl px-6 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8">
        <h2 className="text-lg leading-7">Browse my recent</h2>
        <p className="mt-2 text-4xl font-bold tracking-tight sm:text-6xl">
          Projects
        </p>
        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative ring-2 ring-base-300 bg-base-200 rounded-2xl shadow-xl"
              data-aos="flip-left"
            >
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md lg:aspect-none group-hover:brightness-75 duration-300 delay-100 lg:h-80 rounded-t-2xl ">
                <img
                  src={project.imageSrc}
                  alt={project.name}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between p-4">
                <div className="p-4">
                  <h3 className="text-lg font-bold">
                    <a href={project.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {project.name}
                    </a>
                  </h3>
                  <p className="mt-1 mb-5 text-sm">{project.description}</p>
                  <p className="text-sm font-medium">{project.used}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-16 flex justify-center">
          <button className="btn btn-outline">View More</button>
        </div>
      </div>
    </div>
  );
}
