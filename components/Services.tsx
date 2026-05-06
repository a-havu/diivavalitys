import Image from 'next/image'

export default function Services() {
	return(
		<div className="flex flex-col ml-30 mr-30">
			<p className="text-center ml-50 mr-50 mb-10">Kaikki palvelumme ovat lähtökohtaisesti saatavilla suomeksi ja englanniksi. Kysy muista kielistä!
Valikoimamme kehittyy jatkuvasti. Seuraa sivujamme pysyäksesi ajan tasalla uusista palveluista. Innostumme myös uusista haasteista ja erikoisista ideoista. Kysy rohkeasti, mikäli sivun palvelut eivät vastaa hakemaasi.</p>
			<div className="flex flex-row gap-6 mb-10">
			<Image
			src="/ruppaul.webp"
			alt="dragshow"
			width={500}
			height={0}
			/>
			<div>
				<h3 className="text-xl mb-5">Drag show</h3>
				<p>Kaipasit sitten yksittäistä ohjelmanumeroa tai koko illan spektaakkelia, Diivavälityksen monipuolisesta rosterista löydät esiintyjät tilaisuuteen kuin tilaisuuteen. Kuratoimme kokonaisuuksia ja voimme toteuttaa tarvittaessa myös koko tapahtuman tuotannon.</p>
			</div>
			</div>

			<div className="flex flex-row gap-6 mb-10">
			<div>
				<h3 className="text-xl mb-5 text-right">DJ</h3>
				<p className="text-right">Dj-diivamme laittavat bileet pystyyn yöllä tai päivällä, aamulla tai illalla. Olemme erikoistuneet pop-hitteihin ja -huteihin, pop-remixeihin, diskoon sekä houseen.</p>
			</div>
			<Image
			src="/ruppaul.webp"
			alt="dragshow"
			width={500}
			height={0}
			/>
			</div>

			<div className="flex flex-row gap-6 mb-10">
			<Image
			src="/ruppaul.webp"
			alt="dragshow"
			width={500}
			height={0}
			/>
			<div>
				<h3 className="text-xl mb-5">Juontaja</h3>
				<p>Näyttävät ja kokeneet drag-juontajamme kuljettavat tilaisuuden sulavasti alusta loppuun pilke silmäkulmassa. Oli sitten häät, hautajaiset, seminaari tai pikkujoulut, diivamme luovat tervetulleen olon jokaiselle osallistujalle.</p>
			</div>
			</div>

			<div className="flex flex-row gap-6 mb-10">
			<div>
				<h3 className="text-xl mb-5 text-right">Meikkityöpaja</h3>
				<p className="text-right">Opi drag-meikin salat alan ammattilaisilta. Isommalle ryhmälle tai yksilöllistä opastusta.</p>
			</div>
			<Image
			src="/ruppaul.webp"
			alt="dragshow"
			width={500}
			height={0}
			/>
			</div>

			<div className="flex flex-row gap-6 mb-10">
			<Image
			src="/ruppaul.webp"
			alt="dragshow"
			width={500}
			height={0}
			/>
			<div>
				<h3 className="text-xl mb-5">Konsultointi</h3>
				<p>Onko projektisi, organisaatiosi tai tuotantosi hyödyntämässä drag-taidetta ja kaipaat asiantuntijan neuvoja? Artistimme ovat toimineet muun muassa esiintymisvalmentajina elokuvissa ja teattereissa, asiantuntijahaastateltavina kirjoissa, radiossa ja televisiossa, konsultoineet tapahtumajärjestäjiä ja tuottaneet lukemattomia drag-tapahtumia, työpajoja ja kursseja.</p>
			</div>
			</div>

			<div className="flex flex-row gap-6 mb-10">
			<div>
				<h3 className="text-xl mb-5 text-right">Työpaja</h3>
				<p className="text-right">Drag-taiteen ammattilaiset kertovat dragin historiasta ja opastavat oman drag-hahmon luomisessa sekä esimerkiksi esiintymisessä, maskeerauksessa, asuissa ja peruukeissa. Työpajat ovat muokattavissa tilaajan toiveiden, kohderyhmän ja erityistarpeiden mukaan. Tarjoamme sekä henkilökohtaista että ryhmäopetusta.</p>
			</div>
			<Image
			src="/ruppaul.webp"
			alt="dragshow"
			width={500}
			height={0}
			/>
			</div>
		</div>
	)
}