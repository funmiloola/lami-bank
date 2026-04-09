export default function HeaderSection({ children }) {
  return (
    <section className="flex flex-col gap-6 md:gap-0 md:flex-row md:justify-between items-center">
      <div className="flex gap-4 items-center">{children}</div>
      <div className="flex items-center gap-3">
        <button className="flex gap-3 items-center py-2.75 px-4.5 rounded-md bg-white hover:bg-gray-200 border border-[#D0D5DD] cursor-pointer">
          <span className="text-[#98A2B3]">This week</span>
          <img src="/Vector (23).svg" alt="" />
        </button>
        <button className="flex gap-3 items-center py-2.75 px-4.5 rounded-md bg-[#49B0C9] hover:bg-[#3b7d8d] cursor-pointer">
          <span className="text-white">Export</span>
          <img src="/Export.svg" alt="" />
        </button>
      </div>
    </section>
  );
}
