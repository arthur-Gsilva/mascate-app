import { RiRestaurant2Fill } from "react-icons/ri";
import { FaUser } from "react-icons/fa";
import { Button } from "./ui/button";
import { FaPlus } from "react-icons/fa6";


export const Navigation = () => {
    return(
        <div className="fixed bg-secondary w-screen bottom-0">
            <div className="container">
                <div className="relative flex justify-between items-center h-12">
                    <div>
                        <RiRestaurant2Fill className="text-2xl text-primary"/>
                    </div>
                    <div className="w-full flex justify-center items-center">
                        <div className="absolute top-[-25px]">
                            <div className=" backdrop-filter backdrop-blur-lg p-3 rounded-full">
                                <Button className="rounded-full">
                                    <FaPlus />
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <FaUser className="text-2xl text-gray-500"/>
                    </div>
                </div>
            </div>
        </div>
    )
}