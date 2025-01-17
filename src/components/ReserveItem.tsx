import { Reserve } from "@/types/reserve"

type Props = {
    data: Reserve
}

export const ReserveItem = ({ data }: Props) => {
    return(
        <div className="flex flex-col bg-secondary h-64 rounded-xl">
            <div style={{ backgroundImage: `url(${data.image})`}} className="bg-cover bg-center h-1/2 w-full mb-4 rounded-t-xl">
            </div>

            <div className="pl-4 pr-4 pb-20">
                <h5 className="text-lg font-bold">Reserva {data.id}</h5>

                <ul>
                    <li>{data.people} pessoas</li>
                    <li>{data.dishes} pratos</li>
                </ul>
            </div>
        </div>
    )
}