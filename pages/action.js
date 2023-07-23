import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import styles from "./Home.module.css";
import { ethers } from "ethers";
import { Web3Button } from "@web3modal/react";
import { useBalance, useAccount, useContractRead } from "wagmi";
import { readContract, writeContract, prepareWriteContract } from "@wagmi/core";
import DAIABI from "@/DAIABI";
import Account6551ABI from "@/Account6551ABI";
import RegistryABI from "@/RegistryABI";
import dynamic from "next/dynamic";
const provider = new ethers.providers.JsonRpcProvider(
    "https://frosty-few-surf.matic.quiknode.pro/995c8c0956bdbeee62ac02feed067e5bc55b9495/"
);

const action = () => {
    const router = useRouter();
    const { account, nft } = router.query;
    const accountObj = account && JSON.parse(account);
    const [usableAcc, setUsableAcc] = useState("");
    const [value, setValue] = useState("");
    const [balance, setBalance] = useState(0);

    const [isMounted, setIsMounted] = useState(false);
    useEffect(() => {
        setIsMounted(true);
    }, []);

    console.log(nft);
    const Useraccount = useAccount({
        onConnect({ address, connector, isReconnected }) {
            console.log("Connected", { address, connector, isReconnected });
        },
    });

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    // useEffect(() => {
    //    if (Array.isArray(accountObj) && accountObj.length > 0) {
    //        const account = accountObj[0].address.addresses[0];
    //        setUsableAcc(account);
    //        console.log(usableAcc); // Check the content and structure of the first element in accountObj
    //    } else {
    //        console.log("Invalid account data or empty array.");
    //     }
    // }, [accountObj]);

    const { data, isError, isLoading } = useContractRead({
        address: "0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063",
        abi: DAIABI,
        functionName: "allowance",
        args: [
            "0xd61F7B3Bb748A2bFdb25bE1968B54Ab2D29944fC",
            "0x2269B354e87361145456ad5Ce3E0BAB93Ed1Ed6a",
        ],
        watch: false,
    });
    console.log(data);

    const Balance = useBalance({
        address: Useraccount.address,
        token: "0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063",
        chainId: 137,
        onSuccess(data) {
            setBalance(data.formatted);
        },
    });

    async function SendDeposit() {
        const poolTogether6551 = new ethers.Contract(
            "0x2269B354e87361145456ad5Ce3E0BAB93Ed1Ed6a",
            RegistryABI,
            provider
        );
        const depositCalldata = poolTogether6551.interface.encodeFunctionData(
            "depositDAI",
            [value]
        );

        const configDeposit = await prepareWriteContract({
            address: "0xd61F7B3Bb748A2bFdb25bE1968B54Ab2D29944fC",
            abi: Account6551ABI,
            functionName: "executeCall",
            args: [
                "0x2269B354e87361145456ad5Ce3E0BAB93Ed1Ed6a",
                0,
                depositCalldata,
            ],
        });

        const { hash2 } = await writeContract(configDeposit);
        console.log(hash2);
    }

    async function sendApprove() {
        const DAIcontract = new ethers.Contract(
            "0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063",
            DAIABI,
            provider
        );

        const approveCalldata = DAIcontract.interface.encodeFunctionData(
            "approve",
            [
                "0x2269B354e87361145456ad5Ce3E0BAB93Ed1Ed6a",
                "99999999999999999999999999999999999",
            ]
        );

        const configApprove = await prepareWriteContract({
            address: "0xd61F7B3Bb748A2bFdb25bE1968B54Ab2D29944fC",
            abi: Account6551ABI,
            functionName: "executeCall",
            args: [
                "0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063",
                0,
                approveCalldata,
            ],
        });

        const { hash } = await writeContract(configApprove);
        console.log(hash);
    }

    async function finishRound() {
        const configApprove = await prepareWriteContract({
            address: "0x2269B354e87361145456ad5Ce3E0BAB93Ed1Ed6a",
            abi: RegistryABI,
            functionName: "finishRound",
            args: [
                "0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063",
                0,
                approveCalldata,
            ],
        });

        const { hash } = await writeContract(configApprove);
        console.log(hash);
    }

    return (
        <div className={styles.container}>
            <div className={styles.connect}>
                <button className={styles.buttony}>Finish Round</button>

                <Web3Button />
            </div>
            <div className={styles.box}>
                <div>Some other content</div>
                <div className={styles.buttonwrapperleft}>
                    <div className={styles.square}>
                        {" "}
                        {nft == "0xaccd4112dcc20b6a40068ec5dcc695e5cd8ee87f" ? (
                            <div>10%</div>
                        ) : (
                            <div>5%</div>
                        )}{" "}
                    </div>
                </div>
            </div>
            <div className={styles.box}>
                <div style={{ flexDirection: "row" }}>
                    <input
                        className={styles.inputbox}
                        type="text"
                        value={value}
                        onChange={handleChange}
                    />
                    <div>DAI</div>
                    <div>Balance: {balance}</div>
                </div>

                <div className={styles.buttonwrapper}>
                    {isMounted &&
                        (data ? (
                            <button
                                onClick={() => SendDeposit()}
                                className={styles.buttony}
                            >
                                Deposit
                            </button>
                        ) : (
                            <button
                                onClick={() => sendApprove()}
                                className={styles.buttony}
                            >
                                Approve
                            </button>
                        ))}
                    <button className={styles.buttony}>Withdraw</button>
                </div>
            </div>

            <footer className={styles.footer}>
                <a
                    href="https://rainbow.me"
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    Made with ❤️ by Ömer Özer
                </a>
            </footer>
        </div>
    );
};

export default action;
