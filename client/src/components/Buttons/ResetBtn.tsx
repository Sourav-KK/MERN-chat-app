const ResetBtn = ({ handleReset }: { handleReset: (e: any) => void }) => {
  return (
    <button
      className="btn btn-xs btn-circle btn-ghost"
      type="reset"
      onClick={handleReset}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#2a2d32"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-rotate-ccw"
      >
        <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
        <path d="M3 3v5h5" />
      </svg>
    </button>
  );
};

export default ResetBtn;
