import { FaUser } from "react-icons/fa";

export const UserBox = () => {
    return(
        <div className='container mt-7'>
            <div className="relative bg-gradient-to-l from-primary to-secondary p-3 pb-14 rounded-3xl overflow-hidden">
                <div>
                    <h3>Lya Cristina</h3>
                    <p>27 anos</p>
                </div>

                <FaUser className="text-[4rem] text-slate-100 absolute bottom-0 right-[-1rem]"/>
            </div>
        </div>
    )
}