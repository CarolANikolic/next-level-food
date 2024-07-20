
import styles from "./menu-icon.module.css"

export default function MenuIcon(props) {
    const {menu, setMenu} = props.toggleMenu;

    return (
        <>
            <div 
            className={`
                ${styles.menuDropdownIcon} 
                ${menu && styles.changeMenu}`}
            onClick={() => setMenu(!menu)}>
                <div className={styles.bar1}></div>
                <div className={styles.bar2}></div>
                <div className={styles.bar3}></div>
            </div>       
        </>
    )
}