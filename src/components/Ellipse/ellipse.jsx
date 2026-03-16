import "./ellipse.css"

const Ellipse = ({ size = 120, color = "#F4B24E", bg = "transparent", top, left, right, bottom, zIndex = 0  }) => {
  return (
    <div
      className="ellipse"
      style={{
        width: size,
        height: size,
        border: `3px dashed ${color}`,
        backgroundColor: bg,
        top: top,
        left: left,
        right: right,
        bottom: bottom,
        position: "absolute",
        borderRadius: "50%",
        zIndex,
      }}
    ></div>
  )
}

export default Ellipse