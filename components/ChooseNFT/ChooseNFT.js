import styles from './ChooseNFT.module.css';
import NFTDisplay from '../NFTDisplay/NFTDisplay';
import AccountChoosing from '../AccountChoosing/AccountChoosing';
import { useState } from 'react';

const ChooseNFT = ({ isOpen, onClose, nftData, onNftClick, clickedNFTs }) => {
  if (!isOpen) return null;

  const [navState, setNavState] = useState(false)
  const handleNav = () => {
    setNavState(true)
  }

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
      {navState ? (
            <AccountChoosing clickedNFTs={clickedNFTs} />
        ) : (
            <>
              <h2>NFT Choosing</h2>
              <div className={styles.nftContainer}>
                {nftData && nftData.TokenBalances.TokenBalance.map((nft, index) => (
                  <NFTDisplay nft={nft} key={index} onNftClick={onNftClick} />
                ))}
              </div>
              <br />
              {clickedNFTs.length ? 
                <button onClick={handleNav}>Continue</button> :
                <button onClick={onClose}>Close</button> 
              }
            </>
        )}
      </div>
    </div>
  );
};

export default ChooseNFT;
