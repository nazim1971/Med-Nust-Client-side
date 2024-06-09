import { useEffect, useState } from "react";


const ReactClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (time) => {
    return time.toLocaleTimeString([], { hour12: false });
  };
    return (
      <div className="flex justify-center">
      <div className=" text-orange-400 rounded-md  font-bold ">{formatTime(time)}</div>
    </div>
    );
};

export default ReactClock;