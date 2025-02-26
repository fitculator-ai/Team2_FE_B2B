interface IconTypes {
  name: string;
  color?: string;
  width?: number;
  height?: number;
  fontSize?: number;
}

export default function Icon({ name, color, fontSize }: IconTypes) {
  const style = {
    display: "inline-flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: `${fontSize}rem`,
    color: color,
  };

  if (name === "icon-logo-dark") {
    return (
      <span className="icon-logo-dark" style={style}>
        <span className="path1"></span>
        <span className="path2"></span>
      </span>
    );
  } else if (name === "icon-logo-light") {
    return (
      <span className="icon-logo-light" style={style}>
        <span className="path1"></span>
        <span className="path2"></span>
      </span>
    );
  } else {
    return <span className={name} style={style}></span>;
  }
}

/* 
  ※ name
  logo : icon-logo-light, icon-logo-dark
  logoText : icon-logo-text-light, icon-logo-text-dark
  arrow(top, down, right, left) : icon-arrow-top/down/right/left
  chevron(left, right, down) : icon-chevron-left/right/down
  point(*) : icon-point
  checkbox : icon-checkbox-checked/unchecked
  email : icon-email
  thread : icon-thread
  instagram : icon-instagram
  plus: icon-plus
*/
