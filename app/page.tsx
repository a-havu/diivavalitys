import Calendar from "@/components/Calendar";
import Infosection from "@/components/Infosection";
import News from "@/components/News";
import Carousel from "@/components/Carousel"

export default function HomePage() {

return(
  <>
  <div className="h-80"><Carousel /></div>
  <Infosection />
  <div className="flex flex-row">
    <Calendar />
    <News />
  </div>
  </>
);
}