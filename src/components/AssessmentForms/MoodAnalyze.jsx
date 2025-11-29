import { useEffect, useRef, useState } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";

export default function Page() {
  const data = [
    {
      header: "Happy",
      color: "#fbbf24",
      categories: [
        {
          name: "Playful",
          color: "#f59e0b",
          children: [
            { label: "Cheeky", color: "#fcd34d" },
            { label: "Silly", color: "#fde68a" },
            { label: "Giddy", color: "#fef3c7" },
          ],
        },
        {
          name: "Content",
          color: "#f472b6",
          children: [
            { label: "Free", color: "#f9a8d4" },
            { label: "Joyful", color: "#fbcfe8" },
            { label: "Satisfied", color: "#fce7f3" },
          ],
        },
      ],
    },
    {
      header: "Sad",
      color: "#60a5fa",
      categories: [
        {
          name: "Lonely",
          color: "#3b82f6",
          children: [
            { label: "Isolated", color: "#93c5fd" },
            { label: "Abandoned", color: "#bfdbfe" },
          ],
        },
        {
          name: "Vulnerable",
          color: "#2563eb",
          children: [
            { label: "Fragile", color: "#93c5fd" },
            { label: "Victimized", color: "#bfdbfe" },
          ],
        },
      ],
    },

    // etc…
  ];


  return (
    <div className="p-10 flex justify-center">
      <TripleWheel data={data} />
    </div>
  );
}

function TripleWheel({ data, size = 420 }) {
  const canvasRef = useRef(null);

  const [rotation, setRotation] = useState(0);
  const [dragging, setDragging] = useState(false);
  const [startAngle, setStartAngle] = useState(0);

  const [selectedItems, setSelectedItems] = useState([]); // save header + category + subcategory
  const [highlight, setHighlight] = useState(null);

  const ringWidth = size / 6;
  const rad = (deg) => (deg * Math.PI) / 180;

  // Build dynamic lists
  const headers = data.map(h => ({
    label: h.header,
    color: h.color
  }));

  const categories = data.flatMap(h =>
    h.categories.map(cat => ({
      label: cat.name,
      color: cat.color
    }))
  );

  const subcategories = data.flatMap(h =>
    h.categories.flatMap(cat =>
      cat.children.map(child => ({
        label: child.label,
        color: child.color
      }))
    )
  );

  const drawWheel = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, size, size);

    const cx = size / 2;
    const cy = size / 2;

    ctx.save();
    ctx.translate(cx, cy);
    ctx.rotate(rad(rotation));
    ctx.translate(-cx, -cy);

    // ------- Ring 1: Headers -------
    drawRing(ctx, cx, cy, ringWidth * 0, ringWidth * 1, headers, "#7c3aed");

    // ------- Ring 2: Categories -------
    drawRing(ctx, cx, cy, ringWidth * 1, ringWidth * 2, categories, "#3b82f6");

    // ------- Ring 3: Subcategories -------
    drawRing(ctx, cx, cy, ringWidth * 2, ringWidth * 3, subcategories, "#10b981");

    ctx.restore();
  };

  const drawRing = (ctx, cx, cy, innerR, outerR, items) => {
    const angle = 360 / items.length;

    items.forEach((item, i) => {
      const start = rad(i * angle);
      const end = rad((i + 1) * angle);

      ctx.beginPath();
      ctx.arc(cx, cy, outerR, start, end);
      ctx.arc(cx, cy, innerR, end, start, true);
      ctx.closePath();

      ctx.fillStyle = highlight === item.label
        ? lighten(item.color, 0.4)
        : lighten(item.color, 0.1);

      ctx.fill();

      ctx.strokeStyle = "#fff";
      ctx.lineWidth = 2;
      ctx.stroke();

      // TEXT
      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(start + (end - start) / 2);
      ctx.fillStyle = "#fff";
      ctx.font = "bold 12px sans-serif";
      ctx.textAlign = "center";
      ctx.fillText(item.label, (innerR + outerR) / 2, 5);
      ctx.restore();
    });
  };


  const lighten = (color, amt) =>
    color.replace(")", `, ${amt})`).replace("rgb", "rgba");

  // ----- Interaction -----
  const onMouseDown = (e) => {
    setDragging(true);
    setStartAngle(Math.atan2(e.clientY - size / 2, e.clientX - size / 2));
  };

  const onMouseMove = (e) => {
    if (!dragging) return;

    const angle =
      Math.atan2(e.clientY - size / 2, e.clientX - size / 2) - startAngle;

    setRotation((r) => r + angle * (180 / Math.PI));
    setStartAngle(Math.atan2(e.clientY - size / 2, e.clientX - size / 2));
  };

  const onMouseUp = () => setDragging(false);

  // ------ Click Selection -------
  const onClick = (e) => {
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();

    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;

    const angle = ((Math.atan2(y, x) * 180) / Math.PI + 360 - rotation) % 360;
    const dist = Math.sqrt(x * x + y * y);

    // --- FIXED RING DETECTION ---
    let ringIndex = -1;

    if (dist >= ringWidth * 0 && dist < ringWidth * 1) ringIndex = 1; // headers
    else if (dist >= ringWidth * 1 && dist < ringWidth * 2) ringIndex = 2; // categories
    else if (dist >= ringWidth * 2 && dist < ringWidth * 3) ringIndex = 3; // subcategories

    let ringArr = null;
    if (ringIndex === 1) ringArr = headers;
    if (ringIndex === 2) ringArr = categories;
    if (ringIndex === 3) ringArr = subcategories;
    if (!ringArr) return;

    const index = Math.floor((angle / 360) * ringArr.length);
    const clickedLabel = ringArr[index].label;

    setHighlight(clickedLabel);

    setSelectedItems(prev => {
      if (prev.includes(clickedLabel)) {
        return prev.filter(item => item !== clickedLabel);
      }
      return [...prev, clickedLabel];
    });

  };


  useEffect(drawWheel, [rotation, highlight]);

  return (
    <div className="flex flex-col items-center select-none">
      <canvas
        ref={canvasRef}
        width={size}
        height={size}
        className="cursor-pointer rounded-full shadow-xl"
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseUp}
        onMouseUp={onMouseUp}
        onClick={onClick}
      />

      {/* Spin Button */}
      {/* <button
        onClick={() => setRotation((r) => r + 720)}
        className="mt-4 px-4 py-2 rounded-xl bg-indigo-600 text-white shadow"
      >
        Spin Wheel
      </button> */}

      {/* Selected List in Input */}
      <div className="mt-6 w-full max-w-lg flex flex-col sm:flex-row items-center gap-3">
        <textarea
          type="text"
          readOnly
          value={selectedItems.join(", ")}
          placeholder="Chosen options"
          className="flex-1 bg-white border rounded-md px-3 py-2 shadow-sm"
        />

        <button className="inline-flex items-center gap-2 bg-purple-200 px-4 py-2 rounded-md font-medium">
          Analyze Mood
        </button>
      </div>
    </div>
  );
}