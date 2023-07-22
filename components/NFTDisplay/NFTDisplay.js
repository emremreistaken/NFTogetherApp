import Image from "next/image";
import styles from "./NFTDisplay.module.css";

const NFTDisplay = ({ nft, onNftClick }) => {
    const handleClick = () => {
        onNftClick(nft.tokenNfts);
    };

    return (
        <div className={styles.nftContainer} onClick={handleClick}>
            <div className={styles.imageContainer}>
                {nft.tokenNfts.contentValue.image?.original && (
                    <Image
                        src={nft.tokenNfts.contentValue.image.original}
                        width={150}
                        height={150}
                        alt="Picture of the author"
                    />
                )}

                <div className={styles.tokenId}>{nft.tokenNfts.tokenId}</div>
            </div>
        </div>
    );
};

export default NFTDisplay;
