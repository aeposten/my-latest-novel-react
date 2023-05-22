import "./LoadingMessage.css";

function LoadingMessage(props) {
  const { loadingMessage } = props;
  return <section>{loadingMessage}</section>;
}

export default LoadingMessage;
