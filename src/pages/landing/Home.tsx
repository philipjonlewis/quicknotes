import PublicLayout from "../../components/layouts/PublicLayout";
import {  DisplayEditor } from "../../components";

import { motion } from "framer-motion";

const Home = () => {
  return (
    <PublicLayout>
      <div className="home-page">
        <div className="hero-text">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, y: 100 },
              visible: { opacity: 1, y: 0, transition: { delay: 0.5 } },
            }}
            className="logo"
          >
            QuickNotes
          </motion.div>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, y: 100 },
              visible: { opacity: 1, y: 0, transition: { delay: 1 } },
            }}
            className="typewriter"
          >
       
          </motion.div>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, y: 100 },
              visible: { opacity: 1, y: 0, transition: { delay: 1.5 } },
            }}
            className="subtitle"
          >
            <p>Minimalist block-style text editor</p>
          </motion.div>
        </div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 100 },
            visible: { opacity: 1, y: 0, transition: { delay: 2 } },
          }}
          className="hero-sample"
        >
          <div className="display-editor">
            <DisplayEditor />
          </div>
        </motion.div>
      </div>
    </PublicLayout>
  );
};

export default Home;
