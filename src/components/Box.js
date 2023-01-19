export default function Box(props) {
  const styles = {
    backgroundColor: props.on ? "#fff" : "#000",
    color: props.on ? "#000" : "#fff",
    border: props.on ? "1px solid #000" : "#fff",
  };
  return <div style={styles} className="box" onClick={props.toggle}></div>;
}
