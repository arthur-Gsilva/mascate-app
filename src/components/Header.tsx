import { BiRestaurant } from "react-icons/bi";
import { ThemeToggle } from "./theme-toggle";


export const Header = () => {
    return(
        <header className="border-b border-primary pb-3">
            <div className="container pt-5">
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3 text-2xl font-bold">Mascate <BiRestaurant /></div>
                    <div>
                        <ThemeToggle />
                    </div>
                </div>

                <div className="mt-5">
                    <p>Restaurante Aberto</p>
                </div>
            </div>
        </header>
    )
}