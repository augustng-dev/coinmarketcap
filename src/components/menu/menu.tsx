import { motion } from "framer-motion";
import React from "react";
  
  const outTransform = {
    top: { x: 0, y: -20 },
    left: { x: -20, y: 0 },
    bottom: { x: 0, y: 20 },
    right: { x: 20, y: 0 }
  };

const Menu = React.forwardRef(function Menu(
  { className, style, layerSide, children, props }: any,
  ref: any
) {
  return (
    <motion.ul
      ref={ref}
      className={className}
      style={{
        "transition": "color 0.15s, background-color 0.15s, width 0.25s ease-in-out",
        "position": "absolute",
        "top": "50px",
        "width": "160px",
        "padding": "4px 0px",
        "list-style": "none",
        "background-clip": "padding-box",
        "border-radius": "4px",
        "box-shadow": "0 1px 15px rgba(27, 31, 35, 0.15)",
        "margin": "0",
        "background-color": "white",
        "color": "#333",
        "border": "1px solid rgba(27, 31, 35, 0.15)",
        ...style
      }}
      // @ts-ignore
      initial={{ opacity: 0, scale: 0.85, ...outTransform[layerSide] }} // animate from
      animate={{ opacity: 1, scale: 1, x: 0, y: 0 }} // animate to
      // @ts-ignore
      exit={{ opacity: 0, scale: 0.85, ...outTransform[layerSide] }} // animate exit
      transition={{
        type: "spring",
        stiffness: 800,
        damping: 35,
        delay: 0.3
      }}
      {...props}
    >
      {children}
    </motion.ul>
  );
});

export function MenuItem({ className, style, children, ...rest }: any) {
  return (
    <li className={className} style={{
        "list-style": "none",
        "display": "block",
        "padding": "4px 8px 4px 16px",
        "overflow": "hidden",
        "color": "inherit",
        "text-overflow": "ellipsis",
        "white-space": "nowrap",
        "font-size": "14px",
        "line-height": "1.5",
        "cursor": "pointer",
    }} {...rest}>
      {children}
    </li>
  );
}

export default Menu;
