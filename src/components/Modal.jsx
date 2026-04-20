import { useNavigate } from "react-router-dom"

export default function Modal({onClick}) {
    const navigate = useNavigate()
    const logout = () => {
        localStorage.removeItem("user")
        navigate('/')
    }
    return (
        <section className="bg-black/50 w-full h-screen fixed z-50 inset-0 flex items-center justify-center font-sans">
            <div className="bg-white w-fit px-10 py-7 rounded-md">
                <h2 className="font-sans font-semibold text-lg text-[#45B2C7]">Are you sure you want to logout?</h2>
                <div className="pt-25 flex gap-3 justify-end">
                    <button onClick={logout} className="bg-[#45B2C7] text-white px-6 py-0.5 rounded-md font-semibold cursor-pointer">Yes</button>
                    <button onClick={onClick} className="bg-white border border-gray-300 text-[#45B2C7] px-6 py-0.5 rounded-md font-semibold cursor-pointer text-[]">No</button>
                </div>
            </div>
        </section>
    )
}