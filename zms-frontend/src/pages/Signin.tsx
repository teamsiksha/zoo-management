import { SigninCard } from "../components/custom/SigninCard"
import { MagicCard } from "../components/magicui/magic-card"
import { Button } from "../components/ui/button"

const Signin = () => {
    return (
        <div className="min-h-screen w-full bg-white relative">
            {/* Amber Glow Background */}
            <div
                className="absolute inset-0 z-0"
                style={{
                    backgroundImage: `
                      radial-gradient(125% 125% at 50% 90%, #ffffff 40%, #f59e0b 100%)
                    `,
                    backgroundSize: "100% 100%",
                }}
            />

            {/* Foreground Content */}
            <div className="relative z-10 flex items-center justify-center min-h-screen">
                <MagicCard>
                    <SigninCard />
                </MagicCard>
            </div>
        </div>
    )
}

export default Signin
