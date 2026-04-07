export default function Pagination(){
    const page = ["/Vector (28).svg",1,2,3,"/Text.svg",100,"/Vector (29).svg"]
    return (
        <footer className="pt-11.75 flex justify-between items-center px-3 md:px-8 pb-5.75">
        <h3 className="text-[10px] md:text-sm text-[#6B7280]">Showing <strong>1-5</strong> of <strong>1000</strong></h3>
            <div className="flex px-3 py-1 items-center">
                {page.map((p, index) => (
                    <div key={index} className={`border border-[#D1D5DB] ${
      index >= 1 && index <= 5 ? "hidden md:block" : ""
    }`}>
                        {typeof p === "string" && p.startsWith('/') ? <img src={p} className={` ${index === 4 ? "px-3 py-2.75" : "px-4.75 py-[7px]"} `} /> : <span className="py-1.25 px-3 text-sm font-medium text-[#6B7280]">{p}</span>}
                    </div>  
                ))}
         </div>
        </footer>
    )
}