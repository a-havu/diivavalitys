import ContactForm from "@/components/ContactForm";
import Image from "next/image";
import Grainient from "@/components/Grainient";
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Ota yhteyttä",
};

export default function ContactPage() {
    return(
        <div className="relative flex items-center flex-col md:flex-row justify-center md:gap-30 md:ml-30 md:mr-30 md:p-5 h-full">
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
			<div className="flex flex-col items-center md:m-10">
            <h1 className="mt-5 mb-5 text-2xl">OTA YHTEYTTÄ</h1>
        <ContactForm />
        </div>
        <div className="flex flex-col items-center mb-5 md:mt-10 md:gap-3 gap-1">
            <Image
			src="/ceo.jpeg"
			alt="CEO Jonas Kuusiso"
			width={220}
			height={200}
			className="mb-3 mt-10 rounded-lg"
			/>
			<h4 className="text-lg font-bold">Jonas Kuusisto</h4>
            <p className="italic">Toimitusjohtaja</p>
            <p>jonas@diivavalitys.fi</p>
            <p>+358 457 831 0826</p>
        </div>
        </div>
    );
}