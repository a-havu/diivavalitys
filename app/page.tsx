import Calendar from "@/components/etusivu/Calendar";
import Infosection from "@/components/etusivu/Infosection";
import News from "@/components/etusivu/News";
import Carousel from "@/components/etusivu/Carousel";
import Reviews from "@/components/etusivu/Reviews";
import Logos from "@/components/etusivu/Logos"
import DivaNameGenerator from "@/components/etusivu/DivaNameGenerator";

export default function HomePage() {

return(
  <div>
  <div className="h-80"><Carousel /></div>
  <Infosection />
  <Reviews />
  <div className="flex flex-row m-20 gap-20">
  <div className="flex-1"><Calendar /></div>
  <div className="flex-1"><News /></div>
  </div>
  <div className="flex justify-center">
  <DivaNameGenerator />
  </div>
  <Logos />
  </div>
);
}