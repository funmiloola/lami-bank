export default function Navbar(){
    return (
        <div className="flex items-center justify-end w-full border-b border-[#E2E4E9] py-3 gap-3 pr-8">
            <div className=" flex items-center border border-[#E2E4E9] rounded-[10px] p-3 gap-4 cursor-pointer">
                <p>Admin</p>
                <img src="/Vector (23).svg" alt="arrow-icon" />
            </div>
            <img src="/bell.svg" alt="bell-icon"  className="cursor-pointer"/>
            <div className="flex gap-1.25 items-center">
                <img src="/Avatar (7).svg" alt="avatar-icon" className="cursor-pointer"/>
                <img src="/Vector (23).svg" alt="arrow-icon" className="cursor-pointer"/>
            </div>
        </div>
    )
}