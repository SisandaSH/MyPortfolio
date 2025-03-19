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
          className="flex-1 p-4 flex flex-col gap-8 justify-center"
          custom={3}
          variants={textAnimation}
        >
          <p className="text-lg">
          Hi! My name is Sisanda Vukile Shwala and I am a web developer who is passionate about creating creative, practical and responsive web applications. I am a fast learner and always looking to expand my knowledge and skills.

My portfolio features a few select apps, and the link below shows (almost) all the projects I've worked on.

My goal is to continue to improve as a developer and take part in the creation of high-quality and effective products.
          </p>
          <p className="text-lg">
          My portfolio features a few select apps, and the link below shows (almost) all the projects I've worked on.
          </p>
          <p className="text-lg">
          My goal is to continue to improve as a developer and take part in the creation of high-quality and effective products.
          </p>
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
