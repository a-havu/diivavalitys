import Calendar from "@/components/etusivu/Calendar";
import News from "@/components/etusivu/News";
import Grainient from "@/components/Grainient";

export default function NewsPage () {
    return(
        <div className="relative flex flex-col items-center gap-5 mt-5 mb-5 ml-30 mr-30">
        
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
        
        <h1 className="text-4xl">AJANKOHTAISTA</h1>
        <div className="flex flex-row gap-18">
        <Calendar
        frontpage={false}
        />
        <News
        frontpage={false} />
        </div>
        </div>
    )
}