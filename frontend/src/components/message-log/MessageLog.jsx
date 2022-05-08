import "./ml.scss"

function MessageLog(props) { 
    return (
      <div className="message-log">
          <p>{props.text}</p>
      </div>
    );
  }
  
  export default MessageLog;