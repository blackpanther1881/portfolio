import { border } from "@chakra-ui/react";
import { p } from "framer-motion/client";

const variants = {
  outline: (props: any) => ({
    tab: {
      p:"4px",
      color: `${props.colorMode}.text.100`,
      fontWeight: 800,
      bg: `${props.colorMode}.text.700`,
      _selected: {
        color: `${props.colorMode}.text.700`,
        bg: `brand.600`,
        borderColor: `brand.700`,
        border: "0px solid",
        borderRadius: "10px",
      },
      // _last: {
      //   borderRadius: "0 10px 10px 0", // For example, right-rounded last tab
      // },
      _disabled: {
        color: `${props.colorMode}.button.disabledTextColor`,
        opacity: 0.8,
      },
    },
    tablist: {
      p: "4px",
      overflow: "hidden",
      borderWidth: "1px",
      borderRadius: "10px",
      borderColor: `brand.700`,
    },
    tabpanel: {
      p: "0px",
    },
  }),
};

export default {
  variants,
  defaultProps: {
    variant: "outline",
  },
};
