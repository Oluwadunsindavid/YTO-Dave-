import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

const ResponsiveMenu = ({ open, setOpen }) => {
  const location = useLocation();

  useEffect(() => {
    // Close the menu when the route changes
    setOpen(false);
  }, [location, setOpen]);

  return (
    <AnimatePresence mode="wait">
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.3 }}
          className="absolute top-20 left-0 w-full h-screen z-10"
        >
          <div className=" text-xl font-normal bg-white text-black py-10">
            <ul className="flex-col vl:hidden ">
              <li className="py-1 text-center">
                <Link to="/" className="text-light">
                  Home
                </Link>
              </li>
              <li className="py-1 text-center">
                <Link to="/ourPrograms" className="text-light">
                  Our Programs
                </Link>
              </li>
              <li className="py-1 text-center">
                <Link to="/about" className="text-light">
                  About
                </Link>
              </li>
              <li className="py-1 text-center">
                <Link to="/gallery" className="text-light">
                  Gallery
                </Link>
              </li>
            </ul>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ResponsiveMenu;
// fixed top-0 left-0 w-full h-full bg-black/60 z-10"
