function CustomButtons({ title, bgc, textColor, setColor }) {
  return (
    <div>
      <button
        onClick={() => setColor(bgc)}
        className="bg-white rounded-md flex items-center justify-center font-bold text-white h-10  min-w-24 shadow-lg"
        style={{ backgroundColor: bgc, color: textColor }}
      >
        {title}
      </button>
    </div>
  );
}

export { CustomButtons };
