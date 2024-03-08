import React from 'react'
import { motion } from "framer-motion";
import {
  Chat,
  Collections,
  Home,
  Layers,
  Search,
  WbIncandescent,
} from "@material-ui/icons";
import DescriptionIcon from '@mui/icons-material/Description';
import Item from "./Item";
import { useState } from "react";
import { ForkLeft } from "@mui/icons-material";

const Sidebar = () => {
  const [open, setOpen] = useState(true);

  // for collpsing sidebar
  const handleToggle = () => {
    setOpen(!open);
  };

  const sideContainerVariants = {
    true: {
      width: "4rem",
    },
    false: {
      transition: {
        delay: 0.6,
      },
    },
  };

  const sidebarVariants = {
    true: {},
    false: {
      width: "3rem",
      transition: {
        delay: 0.4,
      },
    },
  };

  const profileVariants = {
    true: {
      alignSelf: "center",
      width: "4rem",
    },
    false: {
      alignSelf: "flex-start",
      marginTop: "2rem",
      width: "3rem",
    },
  };
  return (
<div className="">
      <motion.div
        data-Open={open}
        variants={sideContainerVariants}
        initial={`${open}`}
        animate={`${open}`}
        className="sidebar_container"
      >
        {/* sidebar div */}
        <motion.div
          className="sidebar"
          initial={`${open}`}
          animate={`${open}`}
          variants={sidebarVariants}
        >
          {/* lines_icon */}
        
        
          <div className="groups">
           
            <div className="group">
          <h1 className='sidebarh1'
          // animate={{ opacity: open ? 1 : 0, height: open ? "auto" : 0 }}
          >
            M
          </h1>
          <hr style={{ background: "#fff", width: "100%" }} />

              <Item icon={<Home />} name="Engines" />
              <Item icon={<DescriptionIcon />} name="Editor" />
       
              <Item icon={<Layers />} name="Dokumente" />
              <Item icon={<Chat />} name="Chat" />{" "}
              <Item icon={<Collections />} name="Bilder" />
              <Item icon={<ForkLeft />} name="work flows" />
              <Item icon={<WbIncandescent />} name="Brain Strom" />
  
              <Item icon={<Search />} name="Recherche" />
     
        
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Sidebar