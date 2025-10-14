import profile from "../../assets/profile.png";
function ReviewCard() {
  return (
    <div className="rounded-xl border-gray-300 border-1 p-5 hover:border-blue-600 hover:shadow-[0_0_10px_rgb(120,120,255)] transition-all duration-100 w-full">
      <div className="flex md:p-5 p-3 md:gap-5 gap-1 items-center border-b-1 mb-5 border-gray-400">
        <img
          src={profile}
          alt="profile-"
          className="md:w-10 w-10 rounded-full p-1 bg-gray-300"
        />
        <div>
          <h5 className="md:text-xl text-sm text-blue-600">Md Irshad</h5>
          <p className="text-gray-600">software Engineer, Delhi</p>
        </div>
      </div>
      {/* Review detals */}
      <div className="flex flex-col md:gap-5 gap-2 py-1 px-5 rounded-4xl">
        <p className="italic text-gray-700 md:text-[18px] line-clamp-3 md:line-clamp-4 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio natus
          consectetur nesciunt, neque sequi, dignissimos sapiente dicta ab
          cupiditate placeat porro ratione eum, et repudiandae laudantium facere
          magni. Dignissimos, illum.
        </p>
      </div>
    </div>
  );
}

export default ReviewCard;
