import GradientWaves from './Particles';

const AuroraBg = ({ children, height = '40vh' }) => {
    return (
        <div className="relative w-full">
            {/* Particles Background - bottom only */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <GradientWaves
                    className="h-full w-full"
                    horizonColor="#5732F0"
                    waveColor="#5227FF"
                    crestColor="#623cea"
                    speed={0.4}
                    amplitude={0.5}
                    waveScale={0.6}
                    waveRatio={0.9}
                    swell={35}
                    turbulence={20}
                    tilt={1.11}
                    zoom={1}
                    height={5.5}
                    fogDepth={15}
                    detail="medium"
                    brightness={1}
                    opacity={1}
                    mouseInteraction
                    parallaxStrength={0.5}
                    grain={false}
                />
            </div>

            {/* Content */}
            <div className="relative z-10">
                {children}
            </div>
        </div>
    );
};

export default AuroraBg;