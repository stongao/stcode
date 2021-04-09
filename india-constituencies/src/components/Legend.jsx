import React from "react"

const Legend = ({ legendItems }) => {
  return (
    <div style={{ display: "flex", alignItems: "stretch" }}>
      {legendItems.map((item) => (
        <div
          key={item.title}
          style={{
            backgroundColor: item.color,
            display: "flex",
            flex: 1,
            alignItems: "center",
            color: item.textColor,
            justifycontent: "center",
          }}
        >
          <span>{item.title}</span>
        </div>
      ))}
    </div>
  )
}

export default Legend
;<div>Legend</div>
