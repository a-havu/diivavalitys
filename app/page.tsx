import Calendar from "@/components/Calendar";
import Infosection from "@/components/Infosection";
import News from "@/components/News";

export default function HomePage() {

return(
  <>
  <Infosection />
  <div className="flex flex-row">
    <Calendar />
    <News />
  </div>
  </>
);
}