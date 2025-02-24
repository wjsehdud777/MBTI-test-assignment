import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center mb-6">
          로그인 후 이용해 주세요
        </h2>
        <div className="mb-4">
          <button className="w-full bg-red-400 text-white py-2 rounded-lg hover:bg-red-600 cursor-pointer">
            로그인
          </button>
        </div>
        <div className="text-center mt-4">
          <p className="text-gray-600">
            계정이 없으신가요?{" "}
            <Link to="/signup" className="text-red-600 hover:underline">
              회원가입
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
