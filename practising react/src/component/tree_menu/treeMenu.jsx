import menus from "./data"
import MenuList from "./menuList"
export default function TreeMenu(){

    return <div>
        <MenuList menus = {menus}/>
    </div>
}