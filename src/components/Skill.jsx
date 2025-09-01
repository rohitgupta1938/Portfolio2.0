export default function Skills() {
  return (
    <section id="skills" className="w-full bg-black py-17">
      <div className="px-10 md:px-20">
        <h1 className="text-center text-4xl md:text-5xl font-semibold text-white mb-8">
          My Skills
        </h1>
        <div className="flex flex-col">
          <div className="text-[23px] text-[#fffbf2] mb-1">Languages : C++ | Python | C</div>
          <div className="bg-amber-300 h-[6px] rounded-md mb-4"></div>

          <div className="text-[23px] text-[#fffbf2] mb-1">
            Frontend : HTML | CSS | Javascript | ReactJS | TailWind | Bootstrap | Wordpress
          </div>
          <div className="bg-amber-300 h-[6px] rounded-md mb-4"></div>

          <div className="text-[23px] text-[#fffbf2] mb-1">
            Backend : NodeJS | ExpressJS | SQL | MongoDB
          </div>
          <div className="bg-amber-300 h-[6px] rounded-md mb-4"></div>

          <div className="text-[23px] text-[#fffbf2] mb-1">
            Other : MySQL | Data Structures | OOPs
          </div>
          <div className="bg-amber-300 h-[6px] rounded-md mb-4"></div>

          <div className="text-[23px] text-[#fffbf2] mb-1">
            Tools : VS Code | Git | RapidAPI
          </div>
          <div className="bg-amber-300 h-[6px] rounded-md mb-4"></div>
        </div>
      </div>
    </section>
  );
}
