import DivaNameGenerator from "./DivaNameGenerator"

export default function Reviews() {
    return(
        <div className="flex text-center md:text-start flex-col md:flex-row justify-center p-2 md:p-10 gap-10 border border-[#CE0074]">
        <div className="flex flex-col md:w-50">
        <h2>"Tosi jeppis kamaa"</h2>
        <p className="text-sm italic">- meitsi meikäläinen</p>
        </div>
        <div className="flex flex-col md:w-50">
        <h2>"Tosi jeppis kamaa, löysin itseni ja sain kokea aivan uskomattomia asioita"</h2>
        <p className="text-sm italic">- meitsi meikäläinen</p>
        </div>
                <div className="flex flex-col md:w-50">
        <h2>"Tosi jeppis kamaa"</h2>
        <p className="text-sm italic">- meitsi meikäläinen</p>
        </div>
        <div className="flex flex-col md:w-50">
        <h2>"Kyllä kannatti lähteä nämä diivat ovat taivaallisia!!"</h2>
        <p className="text-sm italic">- meitsi meikäläinen</p>
        </div>
        <DivaNameGenerator />
        </div>
    )
}