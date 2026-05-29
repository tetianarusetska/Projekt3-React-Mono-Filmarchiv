export default function Content() {
  return (
    <div className='bg-(--mainColor) py-8 px-12 h-full w-full flex flex-col justify-between'>
        <Section1 />
        <Section2 />
    </div>
  )
}

const Section1 = () => {
    return (
        <div>
            <Nav />
        </div>
    )
}

const Section2 = () => {
    return (
        <div className='flex justify-between items-end text-(--bgColor) font-[Inter]'>
            <h1 className='text-[14vw] leading-[0.8] mt-10'>MONO. DEIN FOTOARCHIV</h1>
            <p className='font-medium'>©2026</p>
        </div>
    )
}

const Nav = () => {
    return (
        <div className='flex shrink-0 gap-20'>
            <div className='flex flex-col gap-2 font-[Untitled] text-[20px] text-(--bgColor)'>
                <h3 className='mb-2 uppercase text-[20px]'>Menu 1</h3>
                <p>Menu Item 1</p>
                <p>Menu Item 2</p>
                <p>Menu Item 3</p>
            </div>
            <div className='flex flex-col gap-2 font-[Untitled] text-[20px] text-(--bgColor)'>
                <h3 className='mb-2 uppercase text-[20px]'>Menu 2</h3>
                <p>Menu Item 1</p>
                <p>Menu Item 2</p>
                <p>Menu Item 3</p>
            </div>
        </div>
    )
}