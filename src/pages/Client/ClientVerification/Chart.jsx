import MetricsChart from "./Charts";
import SideStats from "./SideStats";

export default function Chart() {
    return (
        <section className="flex flex-col md:flex-row gap-11.75 w-full pt-6">
            <div className="w-full md:w-2/3">
                <MetricsChart/>
            </div>
            <div className="1/3">
                <SideStats/>
            </div>
        </section>
    )
}