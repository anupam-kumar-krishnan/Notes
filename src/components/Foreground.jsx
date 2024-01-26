import Card from "./Card";
import { useRef } from "react";

function Foreground() {
  // const data = [
  //   icon, desc, filesize, closeorDownload, tagdetails
  // ];
  const ref = useRef(null);

  const data = [
    {
      desc: "Hello React this is first note",
      filesize: ".9mb",
      close: true,
      tag: {
        isOpen: true,
        tagTitle: "Download Now",
        tagColor: "pink",
      },
    },
    {
      desc: "Hello React this is first note",
      filesize: ".9mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "blue" },
    },
    {
      desc: "Hello React this is first note",
      filesize: ".9mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Upload", tagColor: "green" },
    },
  ];
  return (
    <div
      ref={ref}
      className="fixed top-0 left-0 z-[3] w-full h-full flex gap-10 flex-wrap p-8"
    >
      {data.map((item, index) => (
        <Card data={item} reference={ref} />
      ))}
    </div>
  );
}

export default Foreground;
