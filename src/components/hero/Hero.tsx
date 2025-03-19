import { motion } from "framer-motion";
import { navItems } from "../header/navItems";
import ScrollDown from "./ScrollDown";
import ButtonLink from "../ui/ButtonLink";
import ThemeSwitch from "./ThemeSwitch";
import { FC, Ref } from "react";

const textAnimation = {
  hidden: {
    x: -100,
    opacity: 0,
  },
  visible: (custom: number) => ({
    x: 0,
    opacity: 1,
    transition: { delay: custom * 0.3, duration: 1 },
  }),
};

const iconAnimation = {
  hidden: {
    y: 100,
    opacity: 0,
  },
  visible: (custom: number) => ({
    y: 0,
    opacity: 1,
    transition: { delay: custom * 0.3, duration: 1 },
  }),
};

interface IProps {
  refer: Ref<HTMLDivElement>;
  dark: boolean;
  setDark: (dark: boolean) => void;
}

const Hero: FC<IProps> = ({ refer, dark, setDark }) => {
  return (
    <section className="min-h-svh flex items-center section" id="home">
      <div className="flex flex-col gap-28 px-10 tablet:px-2">
        <motion.div
          initial="hidden"
          whileInView="visible"
          className="flex flex-col gap-8"
          viewport={{ once: true }}
        >
          <motion.h1
            custom={1}
            variants={textAnimation}
            className="text-6xl tablet:text-4xl"
          >
           Sisanda Vukile Shwala
          </motion.h1>

          <motion.h2
            custom={2}
            variants={textAnimation}
            className="font-medium text-4xl tablet:text-3xl"
          >
            <span className="text-accent-clr">Full Stack</span> Developer
          </motion.h2>

          <motion.p
            custom={3}
            variants={textAnimation}
            className="max-w-[400px]"
          >
            I am a full stack developer ,ready to craft your digital product from ideation to creation 
          </motion.p>

          <motion.div
            className="flex gap-4 laptop:grid laptop:grid-cols-2"
            custom={4}
            variants={textAnimation}
            ref={refer}
          >
            {navItems.map((item) => {
              return (
                <ButtonLink href={"#" + item.href} key={item.title} ext={false}>
                  {item.title}
                </ButtonLink>
              );
            })}
          </motion.div>
          <div className="flex justify-between items-center mt-8">
            <motion.div className="" custom={5} variants={iconAnimation}>
              <ScrollDown />
            </motion.div>
            <motion.div
              className="text-[35px] inline-flex"
              custom={6}
              variants={iconAnimation}
            >
              <ThemeSwitch dark={dark} setDark={setDark} />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
