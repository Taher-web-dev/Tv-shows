import { useState } from "react";

const TimebTyping = () => {
    const [tolc, setTolc] = useState(Date.now());
    const updateTlastchange = (newTime) => {
        setTolc(newTime);
    };
    return { tolc, updateTlastchange };
};

export default TimebTyping;