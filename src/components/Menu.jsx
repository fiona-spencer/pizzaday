import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { menus } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const Pizza = ({ index, name, description, tags, image, source_code_link }) => {
  return (
    <div className="flex-wrap">
      <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
        <Tilt
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-white p-5 squared-2xl sm:w-[360px] w-full"
        >
          <div className="relative w-full h-[230px]">
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover squared-2xl"
            />
            <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
              <div
                onClick={() => window.open(source_code_link, "_blank")}
                className="black-gradient w-10 h-10 squared-full flex justify-center items-center cursor-pointer"
              >
                <img
                  src={github}
                  alt="github"
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
          </div>
          <div className="mt-5">
            <h3 className="text-red-600 font-bold text-[24px]">{name}</h3>
            <p className="mt-2 text-secondary text-[14px]">{description}</p>
          </div>
          <div className="mt-4 gap-2 items-center">
            {tags.map((tag) => (
              <>
                <p key={tag.cost} className={`text-[24px] ${tag.color}`}>
                  {tag.cost}
                </p>
                <p key={tag.name} className={`text-[14px] ${tag.color}`}>
                  {tag.name}
                </p>
              </>
            ))}
          </div>
        </Tilt>
      </motion.div>
    </div>
  );
};

const Wings = ({ index, name, description, tags, image, source_code_link }) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-white p-5 squared-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover squared-2xl"
          />
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 squared-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={github}
                alt="github"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>
        <div className="mt-5">
          <h3 className="text-red-600 font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Sides = ({ index, name, description, tags, image, source_code_link }) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-white p-5 squared-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover squared-2xl"
          />
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 squared-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={github}
                alt="github"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>
        <div className="mt-5">
          <h3 className="text-red-600 font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Menu = () => {
  return (
    <>
      <div>
        {/*-----PIZZA-----*/}
        <motion.div>
          <p className={styles.sectionSubText}>detroit style</p>
          <h2 className={styles.sectionHeadText}>Pizza</h2>
        </motion.div>
        <div className="w-full flex">
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="mt-3 white-red-900 text-[17px] max-w-3xl leading-[30px]"
          >
            Following projects showcases my skills and experience through
            real-world examples of my work. Each project is briefly described
            with links to code repositories and live demos in it. It reflects my
            ability to solve complex problems, work with different technologies,
            and manage projects effectively.
          </motion.p>
        </div>
        <div className="mt-20 flex flex-wrap gap-7">
          {menus.map((menu, index) => (
            <Pizza key={`project-${index}`} index={index} {...menu} />
          ))}
        </div>
        {/*-----WINGS-----*/}
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>juicy</p>
          <h2 className={styles.sectionHeadText}>Wings</h2>
        </motion.div>
        <div className="w-full flex">
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="mt-3 white-red-900 text-[17px] max-w-3xl leading-[30px]"
          >
            Following projects showcases my skills and experience through
            real-world examples of my work. Each project is briefly described
            with links to code repositories and live demos in it. It reflects my
            ability to solve complex problems, work with different technologies,
            and manage projects effectively.
          </motion.p>
        </div>
        <div className="mt-20 flex flex-wrap gap-7">
          {menus.map((menu, index) => (
            <Wings key={`project-${index}`} index={index} {...menu} />
          ))}
        </div>
        {/*-----SIDES-----*/}
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Amazing</p>
          <h2 className={styles.sectionHeadText}>Sides</h2>
        </motion.div>
        <div className="w-full flex">
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="mt-3 white-red-900 text-[17px] max-w-3xl leading-[30px]"
          >
            Following projects showcases my skills and experience through
            real-world examples of my work. Each project is briefly described
            with links to code repositories and live demos in it. It reflects my
            ability to solve complex problems, work with different technologies,
            and manage projects effectively.
          </motion.p>
        </div>
        <div className="mt-20 flex flex-wrap gap-7">
          {menus.map((menu, index) => (
            <Sides key={`project-${index}`} index={index} {...menu} />
          ))}
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Menu, "menu");
