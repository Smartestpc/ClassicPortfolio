function Btn({ logintext }) {
  return (
    <>
        <button className="mt- border border-blue-700 bg-white text-blue-700 font-semibold px-6 py-2 rounded-lg hover:bg-blue-600 hover:text-white transition duration-300 cursor-pointer">
          {logintext}
        </button>
    </>
  );
}

export default Btn;
