import Calendar from "@/components/etusivu/Calendar";
import Infosection from "@/components/etusivu/Infosection";
import News from "@/components/etusivu/News";
import Carousel from "@/components/etusivu/Carousel";
import Reviews from "@/components/etusivu/Reviews";
import Logos from "@/components/etusivu/Logos"
import DivaNameGenerator from "@/components/etusivu/DivaNameGenerator";
import Grainient from "@/components/Grainient"
import Link from "next/link";

export default function HomePage() {

return(
	<div className="relative">
		<style>
			{`
          html, body, *, button, a, input,
          .disabled, a:disabled, input:disabled {
            cursor: url('/cursor.png'), auto;
          }

          button:hover, a:hover, input:hover, .hover:hover {
            cursor: url('/pointer.png'), auto;
          }
			`}
		</style>
		<div className="fixed inset-0 -z-10">
  <Grainient
    color1="F2D4EC"
    color2="#F8CEE6"
    color3="#ce0074"
    timeSpeed={0.5}
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
  <div className="md:h-120 h-100">
	<Carousel /></div>
  <Infosection />
  <Reviews />
  <div className="md:flex flex-col md:mt-15 items-center p-3">
  <div className="md:flex flex-col md:flex-row md:gap-10 md:m-10">
  <div className="md:flex-1 mt-3 mb-4">
    <h1 className="flex text-2xl md:justify-start justify-center mb-3">NÄE JA KOE DIIVAT</h1>
    <Calendar
    frontpage={true}
    />
    </div>
  <div className="md:flex-1 mt-3 mb-4">
    <News
    frontpage={false}
    />
    </div>
    </div>
    <Link href="/ajankohtaista"
    className="flex justify-center bg-[#CE0074] text-center text-white rounded-lg p-4 mb-5">Kaikki ajankohtaiset
    </Link>
  </div>
  <Logos />
  </div>
);
}