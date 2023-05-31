import { useEffect, useState } from "react";

const useMenu = () => {
    const [menus, setMenus] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch('/public/menu.json')
            .then(res => res.json())
            .then(data => {
                setMenus(data)
                setLoading(false)
            })
    }, [])

    return [menus, loading]
}

export default useMenu;