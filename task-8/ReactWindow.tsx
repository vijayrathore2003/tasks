import { useState } from "react";
import { List } from "react-window";
import { type RowComponentProps } from "react-window";

function ReactWindow() {
    const [show, setShow] = useState(false)
    const listData = Array.from({ length: 10000 }, (_, idx) => `List item - ${idx + 1}`);
    return (
        <div className="h-screen w-screen flex flex-col items-center">
            <div className="flex gap-2 mt-5">
                <button className="w-full p-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl shadow" onClick={() => setShow(true)}>Render</button>
                <button className="w-full p-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl shadow" onClick={() => setShow(false)}>Clear</button>
            </div>

            {
                show &&
                <List
                    rowHeight={25}
                    rowCount={10000}
                    rowProps={{ listData }}
                    rowComponent={RowComponent}
                    style={{width: '70vw'}}
                ></List>
            }


        </div>
    )
}

function RowComponent({
    index,
    listData,
    style
}: RowComponentProps<{ listData: string[] }>) {
    return (
        <div className=" w-screen flex items-center justify-between" style={style}>
            {listData[index]}
            <div className="text-slate-500 text-xs">{`${index + 1} of ${listData.length}`}</div>
        </div>
    )
}

export default ReactWindow