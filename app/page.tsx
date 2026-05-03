import Calendar from "@/components/etusivu/Calendar";
import Infosection from "@/components/etusivu/Infosection";
import News from "@/components/etusivu/News";
import Carousel from "@/components/etusivu/Carousel"

export default function HomePage() {

return(
  <div>
  <div className="h-80"><Carousel /></div>
  <Infosection />
  <div className="flex flex-row m-20 gap-20">
  <div className="flex-1"><Calendar /></div>
  <div className="flex-1"><News /></div>
  </div>
  </div>
);
}