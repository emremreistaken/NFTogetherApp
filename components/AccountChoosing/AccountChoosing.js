import { useState, useEffect } from "react";
import styles from "./AccountChoosing.module.css";
import { init, useLazyQuery } from "@airstack/airstack-react";
import AccountDisplay from "../AccountDisplay/AccountDisplay";
import { useRouter } from "next/router";
init("ddfcc652b902475e99ee40f6db959ff9");

let getAccounts = `
query MyQuery {
Accounts(
    input: {
      filter: {
        standard: {_eq: ERC6551},
        tokenAddress: {_eq: "0xaccd4112dcc20b6a40068ec5dcc695e5cd8ee87f"},
        tokenId: {_eq: "2"}
      }, 
      blockchain: polygon, 
      limit: 1
    }
  ) {
    Account {
      address {
        addresses
      }
    }
  }
}
`;
const AccountChoosing = ({ clickedNFTs }) => {
    const router = useRouter();
    const handleNavigation = () => {
        router.push({
            pathname: "/action",
            query: {
                account: JSON.stringify(Acc6551?.Accounts?.Account),
                nft: NFTDetails.address,
            },
        });
    };

    const [NFTDetails, setNFTDetails] = useState();
    const [Acc6551, setAcc6551] = useState([]);

    useEffect(() => {
        if (clickedNFTs.length > 0) {
            setNFTDetails({
                address: clickedNFTs[0].address,
                tokenId: clickedNFTs[0].tokenId,
            });
        }
    }, [clickedNFTs]);

    const [fetch_Accounts, { loading, data }] = useLazyQuery(getAccounts);

    useEffect(() => {
        if (NFTDetails) {
            fetch_Accounts();
            console.log(NFTDetails);
        }
    }, [NFTDetails]);

    useEffect(() => {
        if (!loading && data) {
            setAcc6551(data);
        }
    }, [loading, data]);

    console.log(Acc6551?.Accounts?.Account);

    return (
        <div>
            <h2>Account Choosing</h2>
            {Acc6551?.Accounts?.Account?.map((acc, index) => (
                <AccountDisplay acc={acc} key={index} />
            ))}
            <button onClick={handleNavigation}>Go to Action Page</button>
        </div>
    );
};

export default AccountChoosing;
