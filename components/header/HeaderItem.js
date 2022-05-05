function HeaderItem({Icon,title}){
    return (
        <div className="hover:text-white w-12 sm:w-20 group flex items-center cursor-pointer flex-col">
            <Icon className={'h-8 mb-1 hover:animate-bounce'}/>
            <p className="hover:animate-pulse opacity-0 group-hover:opacity-100 tracking-widest">{title}</p>
        </div>
    )
}
export default HeaderItem