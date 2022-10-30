import { useDrag } from "react-dnd";

type DragItemProps = {
    children: string;
    value: string;
    bgImage: string;
};

const DragItem = ({ children, value, bgImage }: DragItemProps) => {
    const [, drag] = useDrag(() => ({
        type: "item",
        item: { value, bgImage },
    }));

    return <span ref={drag}>{children}</span>;
};

export default DragItem;
