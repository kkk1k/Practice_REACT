import React, { useEffect, useState } from "react";

function SocketComponent() {
  const [socket, setSocket] = useState(null);
  const [message, setMessage] = useState("");
  const [receivedMessages, setReceivedMessages] = useState([]);

  useEffect(() => {
    const ws = new WebSocket("wss://echo.websocket.org");

    ws.onopen = () => {
      console.log("웹소켓 연결 성공");
    };

    ws.onmessage = (event) => {
      console.log("서버에서 받은 메시지", event);
      setReceivedMessages((prevMessages) => [...prevMessages, event.data]);
    };

    ws.onerror = (error) => {
      console.error("WebSocket 오류", error);
    };

    ws.onclose = () => {
      console.log("WebSocket 연결 종료");
    };

    setSocket(ws);
  }, []);

  const sendMessage = () => {
    if (socket && message) {
      socket.send(message);
      setMessage("");
    }
  };

  const handleMessage = (e) => {
    setMessage(e.target.value);
  };

  const closeMessage = () => {
    socket.close();
  };
  return (
    <div>
      <h1>웹 소켓 Practice</h1>
      <input type="text" value={message} onChange={handleMessage} />
      <button onClick={sendMessage}>메시지 전송</button>
      <button onClick={closeMessage}>웹 소켓 종료</button>
      <h2>받은 메시지</h2>
      <ul>
        {receivedMessages.map((msg, idx) => (
          <li key={msg + idx}>{msg}</li>
        ))}
      </ul>
    </div>
  );
}

export default SocketComponent;
