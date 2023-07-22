import { useRouter } from "next/router"
import { useState, useEffect } from "react";
import styles from './Home.module.css';

const action = () => {
    const router = useRouter()
    const { account } = router.query
    const accountObj = account && JSON.parse(account)
    const [usableAcc, setUsableAcc] = useState("")
    
    useEffect(() => {
        if (Array.isArray(accountObj) && accountObj.length > 0) {
            const account = accountObj[0].address.addresses[0];
            setUsableAcc(account);
            console.log(usableAcc); // Check the content and structure of the first element in accountObj
        } else {
            console.log('Invalid account data or empty array.');
        }
    }, [accountObj]);


    return (
        <div className={styles.container}>
            <div className={styles.box}>
                <div>{usableAcc}</div>
                <div>Some other content</div>
                <div className={styles.buttonwrapper}>
                    <button className={styles.buttony}>Deposit</button>
                    <button className={styles.buttony}>Withdraw</button>
                </div>
            </div>
            <footer className={styles.footer}>
                <a href="https://rainbow.me" rel="noopener noreferrer" target="_blank">
                    Made with ❤️ by your frens at 🌈
                </a>
            </footer>
        </div>
    )
}

export default action