import Image from 'next/image'

function Logo() {
    return (
        <Image
            src={'/images/logo3.png'}
            alt='arka logo'
            width={100}
            height={100}
        />
    )
}

export default Logo