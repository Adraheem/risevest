const extractWeight = (style: any) => {
  if (Array.isArray(style)) {
    for (let i = 0; i < style.length; i++) {
      const ind = style[i];
      if (ind?.hasOwnProperty("fontWeight")) {
        return ind["fontWeight"];
      }
    }
  } else if (style?.hasOwnProperty("fontWeight")) {
    return style["fontWeight"];
  }

  return undefined;
}

const textUtils = {extractWeight};
export default textUtils;
