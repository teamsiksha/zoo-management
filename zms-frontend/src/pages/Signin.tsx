import { SigninCard } from "../components/custom/SigninCard"
import { MagicCard } from "../components/magicui/magic-card"
import Header from "../components/custom/Header"
const Signin = () => {
    return (
        <div className="min-h-screen w-full bg-white relative">
            <Header />
            <div className="relative z-10 flex items-center justify-center min-h-screen bg-orange-50">
                <MagicCard>
                    <SigninCard />
                </MagicCard>
            </div>
        </div>
    )
}

export default Signin
