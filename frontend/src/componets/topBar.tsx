import logo from '../image/logo.jpg'
export function TopBar(){

    return(
        <div className="flex justify-between items-center p-4 bg-gray-100">
            <div className="flex items-center">
                <img src={logo} alt="Logo" className="w-8 h-8 mr-2" />
                <span className="text-lg font-bold">Explore IGDTUW</span>
            </div>
            <div className="flex items-center">
                {/* <button className="ml-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">Home</button> */}
                <button className="ml-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">Login/Register</button>
            </div>
        </div>
    )
}