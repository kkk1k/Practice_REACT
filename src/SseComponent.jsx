import { useEffect, useState, useRef } from "react";

function SseComponent() {
  const [changes, setChanges] = useState([]);
  let message = useRef(0);

  useEffect(() => {
    const eventSource = new EventSource(
      "https://stream.wikimedia.org/v2/stream/recentchange"
    );

    eventSource.onmessage = (e) => {
      try {
        const data = JSON.parse(e.data);
        message.current += 1;
        setChanges((prevChanges) => {
          const updatedChanges = [data, ...prevChanges];
          if (updatedChanges.length > 10) {
            return updatedChanges.slice(0, 10);
          }
          return updatedChanges;
        });
        console.log(data);

        if (message.current >= 10) {
          eventSource.close();
          console.log(`SSE 연결이 ${10}개의 메시지 후에 종료되었습니다.`);
        }
      } catch (error) {
        console.error(error);
      }
    };

    return () => {
      eventSource.close();
    };
  }, []);

  return (
    <div>
      {changes.map((item) => (
        <>
          {" "}
          <h1 key={item.id}>{item.title}</h1>
          <a href={item.title_url}>{item.title_url}</a>
        </>
      ))}
    </div>
  );
}

export default SseComponent;
