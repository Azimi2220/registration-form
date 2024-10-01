function MemberShip() {
  return (
    <div className="flex  justify-between w-full px-8 font-thin">
      <div>
        <h3 className="text-start">MEMBERSHIP</h3>
        <div className="flex text-left">
          <img src="/star.png" alt="" className="text-left" />
          <p className="text-start">
            GOLD <span className="text-yellow-400 font-bold">MEMBERSHIP</span>
          </p>
        </div>
      </div>
      <button className=" border-2 border-green-600 text-green-600  h-10  w-20 mt-3 shadow-xl">
        Renew
      </button>
    </div>
  );
}
export default MemberShip;
