import Chart from "./Chart"
import Details from "./Details"
import Table from "./Table"
export default function ClientVerification() {
    return (
        <section className="px-8">
            <Details />
            <Chart />
            <Table/>
        </section>
    )
}