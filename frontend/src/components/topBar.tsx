import logo from '../image/logobkg.png'
export function TopBar(){

    return(
        <div className="flex justify-between items-center p-4  bg-stone-700 shadow-sm rounded-md m-3">
            <div className="flex items-center">
                <img src={logo} alt="Logo" className="w-10 h-10 mr-2" />
                <span className="text-lg font-thin text-pretty text-white ml-2"><i>Explore IGDTUW</i></span>
            </div>
            <div className="flex items-center">
                {/* <button className="ml-4 px-4 py-2 bg-sky-600 text-white font-thin rounded hover:bg-sky-700">Home</button> */}
                <button className="ml-4 px-4 py-2 bg-sky-600  text-white font-thin rounded hover:bg-sky-700">Login/Register</button>
            </div>
        </div>
    )
}