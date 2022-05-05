import Image from "next/image";
import HeaderItem from "./HeaderItem";
import {BadgeCheckIcon, CollectionIcon, HomeIcon, LightningBoltIcon, SearchIcon, UserIcon} from "@heroicons/react/outline";
function Header() {
    return(
        <header className={'flex flex-col sm:flex-row m-5 justify-between items-center'}>
            <div className="flex flex-grow justify-evenly max-w-2xl">
                <HeaderItem title={'Home'} Icon={HomeIcon}/>
                <HeaderItem title={'Trending'} Icon={LightningBoltIcon}/>
                <HeaderItem title={'Verified'} Icon={BadgeCheckIcon}/>
                <HeaderItem title={'Collections'} Icon={CollectionIcon}/>
                <HeaderItem title={'Search'} Icon={SearchIcon}/>
                <HeaderItem title={'Account'} Icon={UserIcon}/>
            </div>
            <Image className={'object-contain'}
                width={200} height={100} src={'https://nicepng.com/png/full/242-2424140_hulu-png-logo-hulu-logo-white-png.png'}/>
        </header>
    )
}
export default Header