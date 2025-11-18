export default function ProgressBar({ current, total }) {
  const percentage = (current / total) * 100;

  return (
    <div className="w-full">
      <p className="text-sm text-gray-700 mb-2 font-medium">
        Question {current} of {total}
      </p>

      <div className="w-full bg-gray-200 h-2 rounded-full">
        <div
          className="h-2 bg-green-500 rounded-full transition-all duration-300"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
}
