export default function Input({children,type,placeholder,label,...rest}) {
    return (
        <>
            <label className="flex justify-center items-start flex-col gap-2 text-[#6B7280] text-sm font-semibold">
            {label}
        <input type={type} placeholder={placeholder} {...rest} className="w-full outline-none border border-[#E4E7EC] rounded-lg px-2 py-3 font-normal text-base"/> 
           {children}     
        </label>
        </>
    )
}