import { LuUserRound } from "react-icons/lu";
function ReviewCard({ profile = null, name, review, course }) {
  return (
    <div className="flex flex-col gap-3 md:gap-6 justify-center items-center p-2 md:p-4 shadow-raisin rounded-2xl">
      {!profile && (
        <div className="md:w-15 md:h-15 bg-celestial-blue  p-3 rounded-full">
          <LuUserRound className="text-white w-full h-full" />
        </div>
      )}
      <p className="flex-1 text-center text-muted italic max-w-xl">
        "{review}"
      </p>
      <div className="flex flex-col gap-1 items-center">
        <p className="text-seasalt font-bold md:text-xl">{name}</p>
        <p className=" text-center text-wheat text-sm">{course}</p>
      </div>
    </div>
  );
}

export default ReviewCard;
