import { Header } from "@/components/Header"
import { Navigation } from "@/components/Navigation"
import { ReserveItem } from "@/components/ReserveItem"
import { UserBox } from "@/components/UserBox"
import { reserves } from "@/utils/reservers"

const page = () => {
    return(
        <div className="min-h-screen mb-20">
            <Header />

            <main>
                <UserBox />

                <div className="container mt-7">
                    <div className="bg-card p-2 rounded-xl text-center">
                        Suas Reservas
                    </div>
                </div>

                <div className="container mt-7">
                    <div className="grid grid-cols-2 gap-4">
                        {reserves.map((item) => (
                            <ReserveItem key={item.id} data={item}/>
                        ))}
                    </div>
                </div>
            </main>

            <Navigation />
        </div >
    )
}

export default page