import "./Loading.css";

const Loading = () => {
  return (
    <div
      className="loading"
      style={{
        position: "absolute",
        backgroundColor: "var(--black)",
        width: "100%",
        height: "100%",
        zIndex: "10000000000000000000000000000000000",
      }}
    >
      <img
        src="https://res.cloudinary.com/dr0nki74e/image/upload/v1732248885/Global%20Solution%202/Logo/kotpf3cgbes7dszfywh6.gif"
        alt=""
        style={{ width: "550px" }}
      />
    </div>
  );
};

export default Loading;
