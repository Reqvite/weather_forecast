import { Loader, StickyContentLayout } from "@/shared/ui"

const MainPage = () => {
    return (
        <StickyContentLayout content={<Loader/>}  right={<Loader/>}/>
    )
}

export default MainPage
