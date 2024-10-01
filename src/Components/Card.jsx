import MemberShip from "./MemberShip";
import SocialMedia from "./SocialMedia";

function Card() {
  return (
    <div className="flex items-center h-screen justify-center font-normal">
      <div className="bg-zinc-200 text-black  w-[420px] rounded-md shadow-md flex flex-col items-center space-y-1 pt-8">
        <img src="/me.png" alt="" className="w-20 h-20 rounded-full" />
        <h1>Aziz Ahmad Azimi</h1>
        <div className="flex font-thin">
          <img src="/map-pin.svg" alt="" />
          <h2>Sofi Abad,Herat-Afghanistan</h2>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
          asperiores beatae velit voluptas culpa hic error a. Perferendis
          repellat consequatur quas veritatis?
        </p>
        <MemberShip />
        <SocialMedia/>
      </div>
    </div>
  );
}
export default Card;
