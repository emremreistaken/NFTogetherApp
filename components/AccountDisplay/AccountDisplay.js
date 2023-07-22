import styles from './AccountDisplay.module.css'

const AccountDisplay = ({acc}) => {

    console.log(acc)
    return(
        <div>{acc.address.addresses}</div>
    )
}

export default AccountDisplay;
