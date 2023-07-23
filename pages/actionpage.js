import styles from "./Home.module.css";
import Image from "next/image";

const actionpage = () => {
    return (
        <div className={styles.actionContainer}>
            <div className={styles.colorShade1}></div>
            <div className={styles.colorShade2}></div>
            <div className={styles.colorShade3}></div>
            <div className={styles.colorShade4}></div>
            <div className={styles.colorShade5}></div>
            <div className={styles.colorShade6}></div>
            <div className={styles.welcome}>Welcome BAYC #31</div>
            <div className={styles.finishIt}>Finish Round</div>
            <div className={styles.leftBox}>
                <div className={styles.leftInnerBox}>
                    <div className={styles.bonusOdds}>Bonus Odds</div>
                    <div className={styles.colName1}>BAYC #31</div>
                    <div className={styles.upToTen1}>Up to 10%</div>
                    <div className={styles.tenBox}>10%</div>
                    <div className={styles.colName2}>OWNED APECOIN</div>
                    <div className={styles.tenBox1}>10%</div>
                    <div className={styles.upToTen2}>Up to 10%</div>
                    <div className={styles.support}>Supported Tokens:</div>
                    <Image
                        src="/apecoin.svg"
                        className={styles.apeLogo}
                        width={29}
                        height={29}
                        alt="Picture of the author"
                    />
                    <div className={styles.ape}>APECOIN</div>
                    <div className={styles.depositApe}>Deposit</div>
                </div>
            </div>
            <div className={styles.rightBox}>
                <div className={styles.pooledPrize}>926</div>
                <div className={styles.tokenType}>USDC</div>
                <div className={styles.max}>MAX</div>
                <div className={styles.rightDetails}>
                    <Image
                        src="/dai.svg"
                        className={styles.daiLogo}
                        width={29}
                        height={29}
                        alt="Picture of the author"
                    />
                    <div className={styles.DAI}>DAI</div>
                    <div className={styles.balance}>
                        Current Deposit Balance
                    </div>
                    <div className={styles.deposit}>Deposit to Win!</div>
                    <div className={styles.winningChance}>Winning Chance</div>
                    <div className={styles.depositedBalance}>0</div>
                    <div className={styles.winningChanceCount}>1 in 24</div>
                </div>
            </div>
        </div>
    );
};

export default actionpage;
