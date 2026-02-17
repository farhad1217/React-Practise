export default function Model({ handlePopUp }) {
  return (
    <div
      onClick={handlePopUp}
      style={{
        width: "100vw",
        height: "100vh",
        position: "fixed",
        top: 0,
        left: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "rgba(0,0,0,0.4)",
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
        zIndex: 1000,
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          width: "50%",
          maxWidth: "500px",
          height: "50%",
          background: "red",
          borderRadius: "12px",
          padding: "20px",
          boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
          zIndex: 10001,
        }}
      >
        <button onClick={handlePopUp}>Close</button>
        <h1>this is a PopUP window</h1>
      </div>
    </div>
  );
}
