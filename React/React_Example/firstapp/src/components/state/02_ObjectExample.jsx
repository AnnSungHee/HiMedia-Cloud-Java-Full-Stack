import { useState } from "react"

const [area, setArea] = useState(
    { left: 0, top: 0, width: 200, height: 100}
);

setArea({ left: 50, top: 0, width: 200, height: 100});

const [position, setPosition] = useState(
    {left: 0, top: 0}
);
const [size, setSize] = useState(
    {width: 200, height: 100}
);