import Calendar from "@/components/etusivu/Calendar";
import News from "@/components/etusivu/News";
import Grainient from "@/components/Grainient";
import PastEvents from "@/components/PastEvents";

export default function NewsPage () {
    return(
        <div className="relative flex flex-col items-center gap-5 mt-10 mb-5 ml-30 mr-30">
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
        <div className="flex flex-col md:flex-row gap-5 md:gap-18">
            <div>
			<h1 className="text-2xl md:text-4xl flex mb-3">TULEVAT TAPAHTUMAT</h1>
        <Calendar
        frontpage={false}
        />
		<div className="md:block hidden">
			<PastEvents />
		</div>
        </div>
        <News
        frontpage={false} />
		<div className="md:hidden">
		<PastEvents />
		</div>
        </div>
        </div>
    )
}