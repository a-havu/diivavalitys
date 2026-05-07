import Calendar from "@/components/etusivu/Calendar";
import Infosection from "@/components/etusivu/Infosection";
import News from "@/components/etusivu/News";
import Carousel from "@/components/etusivu/Carousel";
import Reviews from "@/components/etusivu/Reviews";
import Logos from "@/components/etusivu/Logos"
import DivaNameGenerator from "@/components/etusivu/DivaNameGenerator";
import Grainient from "@/components/Grainient"

export default function HomePage() {

return(
	<div className="relative">
		<div className="fixed inset-0 -z-10">
  <Grainient
    color1="F2D4EC"
    color2="#F8CEE6"
    color3="#ce0074"
    timeSpeed={0.05}
    colorBalance={-0.24}
    warpStrength={1.95}
    warpFrequency={1.6}
    warpSpeed={2}
    warpAmplitude={50}
    blendAngle={-138}
    blendSoftness={0.25}
    rotationAmount={500}
    noiseScale={2}
    grainAmount={0.1}
    grainScale={2}
    grainAnimated={false}
    contrast={1.35}
    gamma={1}
    saturation={1.15}
    centerX={0}
    centerY={0}
    zoom={0.9}>
		</Grainient>
		</div>
  <div className="h-80"><Carousel /></div>
  <Infosection />
  <Reviews />
  <div className="flex flex-row m-20 gap-20">
  <div className="flex-1"><Calendar /></div>
  <div className="flex-1"><News /></div>
  </div>
  <div className="flex justify-center">
  </div>
  <Logos />
  </div>
);
}