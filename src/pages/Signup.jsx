import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-50">
      <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-sm">
        <button className="w-full py-3 bg-red-400 text-white font-semibold rounded-lg hover:bg-red-600 transition duration-400">
          회원가입
        </button>
        <div className="mt-4 text-center">
          <p className="text-gray-600">
            이미 계정이 있으신가요?{" "}
            <Link
              to="/login"
              className="text-red-700 hover:text-red-500 font-semibold"
            >
              로그인
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
