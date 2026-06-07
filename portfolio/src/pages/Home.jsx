import IntroCard from "../components/cards/IntroCard";
import LocationCard from "../components/cards/LocationCard";
import ProfileCard from "../components/cards/ProfileCard";
import QuoteCard from "../components/cards/QuoteCard";
import LinksCard from "../components/cards/LinksCard";
import FavouritesCard from "../components/cards/FavouritesCard";
import RoleCard from "../components/cards/RoleCard";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center bg-[#0D0C1D] p-6">
      <div className="w-full max-w-5xl grid grid-cols-12 grid-rows-12 gap-3 h-[750px]">

        <IntroCard      className="col-span-8 row-span-3 col-start-1 row-start-1" />
        <LinksCard      className="col-span-4 row-span-6 col-start-9 row-start-1" />
        <LocationCard   className="col-span-4 row-span-2 col-start-1 row-start-4" />
        <ProfileCard    className="col-span-4 row-span-5 col-start-5 row-start-4" />
        <FavouritesCard className="col-span-4 row-span-7 col-start-1 row-start-6" />
        <RoleCard       className="col-span-4 row-span-2 col-start-9 row-start-7" />
        <QuoteCard      className="col-span-8 row-span-4 col-start-5 row-start-9" />

      </div>
    </div>
  );
}
