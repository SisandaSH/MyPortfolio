import CV from "src/assets/cv/cv.pdf";
import ButtonLink from "../ui/ButtonLink";
import { motion } from "framer-motion";
import SvgWebDeveloper from "src/assets/images/WebDeveloper";
import Me from "src/assets/images/me.png";


const About = () => {
  const textAnimation = {
    hidden: {
      y: 100,
      opacity: 0,
    },
    visible: (custom: number) => ({
      y: 0,
      opacity: 1,
      transition: { delay: custom * 0.2, duration: 0.5 },
    }),
  };

  return (
    <motion.section
      className="section flex flex-col gap-16 py-16 tablet:pb-4 tablet:pt-14"
      id="about"
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2, once: true }}
    >
      <motion.h2
        className="text-center font-medium text-4xl phone:text-3xl"
        custom={1}
        variants={textAnimation}
      >
         <span className="text-accent-clr">About Me</span>
      </motion.h2>

      <div className="custom-container flex gap-10 laptop:flex-col laptop:gap-0">
        <motion.div
          className="flex-1 flex items-center justify-center"
          custom={2}
          variants={textAnimation}
        >
          <div className="size-[350px] min-w-[250px] object-contain ">
            <SvgWebDeveloper />
          </div>
        </motion.div>

        <motion.div
          className="flex-1 p-4 flex flex-col gap-8 justify-center  shadow-white shadow-lg"
          custom={3}
          variants={textAnimation}
        >
          <p className="text-lg">
          Hi! My name is Sisanda Vukile Shwala and I am a <span className="text-accent-clr">Junior Full Stack Developer</span> who is passionate about creating visually appealing, functional applications. I strive to upskill myself in various technologies.
          </p>
          <p className="text-lg">
          My portfolio features a few select apps that I have worked on.
          </p>
          <p className="text-lg">
          My goal is to continue to improve as a developer and take part in the creation of high-quality and effective products.
          </p>
          <div className="education flex gap-4">
            <div className="flex flex-col gap-2">
              <h3 className="text-xl font-medium text-accent-clr">Education</h3>
              <div className="flex flex-col gap-2 w-[200px] shadow-accent-clr">
              <p className="text-lg ">BSc in Mathematics and Computer Science <span className="text-sm">University of South Africa</span></p>
              </div>
              <div className="flex flex-col gap-2 w-[200px]">
              <p className="text-lg">Certificate in Software Engineering</p>
              <p className="text-sm">ALX</p>
              </div>
            </div>
            <div className="experience flex flex-col gap-2 ml-[120px]">
              <h3 className="text-xl font-medium text-accent-clr">Experience</h3>
              <p className="text-lg">Junior Full Stack Developer - Shaper </p>
              <small className="text-sm">2024-10-01 - 2025-03-31</small>
              
              </div>
          </div>
          <motion.div
            className="flex gap-4"
            custom={4}
            variants={textAnimation}
          >
            <ButtonLink href={CV} ext={true}>
              <i className="bx bx-file"></i>
              Resume
            </ButtonLink>
            <ButtonLink href={"https://github.com/SisandaSH"} ext={true}>
              <i className="devicon-github-original"></i>
              Github
            </ButtonLink>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;
