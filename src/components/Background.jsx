export const Background = ()=>{
  return (
      <div
        style={{
          position: "fixed",
          top: 0, right: 0,
          bottom: 0, left: 0,
          zIndex: -1,
          background: "#000",
          backgroundImage: `
            radial-gradient(circle, rgba(255, 255, 255, 0.2) 1.5px, transparent 1.5px)
          `,
          backgroundSize: "30px 30px",
          backgroundPosition: "0 0",
        }}
      />
  )
}
