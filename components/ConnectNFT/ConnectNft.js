import styles from './ConnectNft.module.css'
import { useState } from 'react';
import ChooseNFT from '../ChooseNFT/ChooseNFT';

const ConnectNft = ({nftData}) => {

    const [isModalOpen, setModalOpen] = useState(false);
    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);
    const [clickedNFTs, setClickedNFTs] = useState([]);

    const handleNftClick = (nft) => {
        // this is where you'll have access to the clicked NFT data
        console.log(nft);
        // add clicked NFT to the state only if it's not already there
        setClickedNFTs(prevClickedNFTs => {
          if (!prevClickedNFTs.some(existingNft => existingNft.tokenNfts.tokenId === nft.tokenNfts.tokenId)) {
            return [...prevClickedNFTs, nft];
          } else {
            return prevClickedNFTs;
          }
        });
      }


    return(
        <div className={styles.main}>
            <button onClick={openModal} className={styles.buttonx}>Connect NFT</button>
            <ChooseNFT nftData={nftData} isOpen={isModalOpen} onClose={closeModal} onNftClick={handleNftClick} clickedNFTs={clickedNFTs} />
        </div>
    )
}

export default ConnectNft