const Card = () => {
  return (
    <div className="w-full md:w-1/2 lg:w-1/3 p-4">
      <div className="bg-white rounded-lg shadow-lg">
        <img
          src="/images/course-pic2.jpg"
          alt="Course"
          className="w-full h-48 object-cover rounded-t-lg"
        />
        <div className="p-4">
          <span className="flex justify-between">
            <h2 className="text-xl font-semibold">Shoes!</h2>
            <div className="badge badge-secondary">NEW</div>
          </span>
          <p className="text-gray-600">
            If a dog chews shoes whose shoes does he choose?
          </p>
          <div className="flex justify-end mt-4">
            <div className="badge badge-outline">Fashion</div>
            <div className="badge badge-outline">Products</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
