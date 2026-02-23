const Header=({user, setUser}) =>{
    return (
        <div className="flex justify-around items-center text-center">
            <span className="text-3xl font-bold m-3">Welcom {user}!</span>
            <button
            className="bg-red-500 text-white px-4 py-2 rounded  m-3 hover:bg-red-700"
             onClick={() => setUser(null)}>Logout</button>
        </div>
    )
}
export default Header;