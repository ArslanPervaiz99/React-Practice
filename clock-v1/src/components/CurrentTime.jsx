function CurrentTime() {
  let time = new Date();
  return (
    <p className="lead">
      This is the Current Time: {time.toLocaleTimeString()} -{" "}
      {time.toLocaleDateString()}
    </p>
  );
}
export default CurrentTime;
