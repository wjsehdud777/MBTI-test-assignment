const Profile = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-semibold text-center text-red-400 mb-6">
          프로필 수정
        </h1>
        <div className="space-y-6">
          <div>
            <label
              htmlFor="nickname"
              className="block text-lg font-medium text-red-600"
            >
              닉네임
            </label>
            <input
              id="nickname"
              type="text"
              className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-700"
            />
          </div>
          <button className="w-full bg-red-300 text-white py-3 rounded-md hover:bg-red-500 transition duration-300">
            프로필 업데이트
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
