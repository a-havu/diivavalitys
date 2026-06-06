import DivaNameGenerator from "./DivaNameGenerator"

export default function Reviews() {
    return(
        <div className="flex text-center md:text-start flex-col md:flex-row justify-center items-center p-5 md:p-10 gap-10 border border-[#CE0074]">
        <div className="flex flex-col md:w-50 mt-5">
        <h2>"Ammattimainen tapahtumajärjestäjä vahvalla visiolla, hyvät sisällöt ja brändi kunnossa. Yhteistyö on sujuvaa, ja myös todella mukavaa!"</h2>
        <p className="text-sm italic mt-1">- Lani Nordlund, Kulttuuritalo</p>
        </div>
		<div className="flex flex-col md:w-50">
        <h2>"Ammattitaito ja mutkattomuus, sitä on Diivamyynti."</h2>
        <p className="text-sm italic mt-1">- Ilosaarirock</p>
        </div>
        <div className="flex flex-col md:w-50">
        <h2>"Diivavälitys kannattaa ottaa vakiokumppaniksi minkä tahansa näköisiin tapahtumajärjestelyihin! Meille Diivat tulevat ensimmäisenä tapetille, kun jotain lähdetään suunnittelemaan! :)"</h2>
        <p className="text-sm italic mt-1">- Tiia, Cipy Oy</p>
        </div>
        <div className="flex flex-col md:w-50">
        <h2>"Kyllä kannatti lähteä nämä diivat ovat taivaallisia!!"</h2>
        <p className="text-sm italic mt-1">- Anonyymi yleisöpalaute</p>
        </div>
        <DivaNameGenerator />
        </div>
    )
}