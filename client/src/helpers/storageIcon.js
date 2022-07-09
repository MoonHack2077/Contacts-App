import { FaSimCard } from "react-icons/fa";
import { MdOutlinePhoneIphone } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";

export const storageIcons = storageLocation => {
    if(storageLocation === 'SIM 1') return FaSimCard
    if(storageLocation === 'Phone') return MdOutlinePhoneIphone
    if(storageLocation === 'Google') return FcGoogle
}