import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-start h-screen">
      <h1 className="text-4xl font-bold text-center text-red-300 my-8">
        무료 성격 테스트
      </h1>
      <h3 className="font-bold text-center">
        자신의 성격 유형을 확인할 수 있도록 솔직하게 답변해 주세요.
      </h3>
      <Link
        to={"/login"}
        className="bg-red-400 text-white py-2 px-4 rounded hover:bg-red-500 cursor-pointer text-center mt-8"
      >
        로그인하기
      </Link>
    </div>
  );
};

export default Home;
