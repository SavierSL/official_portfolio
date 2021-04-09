import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect } from "react";
import { useGlobalDispatchContext } from "../components/Context/globalContext";
import CustomCursor from "../components/cursor";
import MainContainer from "../components/mainContainer";
import { pointerCursor } from "../components/redux/actions/cursor";
import { useRouter } from "next/router";
import {
  offTransition,
  onTransition,
} from "../components/redux/actions/transtition";
import { useDispatch } from "react-redux";
export interface BlogItProps {}

const BlogIt: React.FC<BlogItProps> = (props) => {
  const data = {
    ease: 0.1,
    current: 0,
    previous: 0,
    rounded: 0,
  };
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(offTransition());
  }, []);

  return (
    <>
      <div
        className="app"
        style={{
          zIndex: 2,
          overflow: "hidden",
          position: "fixed",
          top: 0,
          left: 0,
          height: "100%",
          width: "100%",
        }}
      >
        <MainContainer {...props}>
          <motion.div
            exit={{ opacity: 0 }}
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: {
                duration: 1,
                delay: 0.5,
              },
            }}
          >
            <CustomCursor data={data} />
            <h1
              onClick={() => {
                dispatch(onTransition());
                setTimeout(() => {
                  return router.push("/qshare");
                }, 1000);
              }}
            >
              BLOG IT
            </h1>
          </motion.div>
        </MainContainer>
      </div>
    </>
  );
};

export default BlogIt;
