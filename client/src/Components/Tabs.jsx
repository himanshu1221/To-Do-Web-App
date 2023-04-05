import { useDispatch } from "react-redux"
import { TABS } from "../Redux/actions/type"
import { toggleTab } from "../Redux/actions";


const Tabs = ({ currentTab }) => {
    const dispatch = useDispatch();
    return(
        TABS.map(tab=>(
            <button className = {tab===currentTab ? "button selected" : "button"}
            onClick={()=>dispatch(toggleTab(tab))}
            >
                {tab}
            </button>
        ))
    )
}

export default Tabs