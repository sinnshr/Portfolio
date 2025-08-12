import Particles from './Particles';

const ParticlesBg = ({ children }) => {
    return (
        <div className="relative w-full">
            {/* Particles Background */}
            <div className="absolute inset-0">
                <Particles
                    particleColors={['#7B1FA2', '#ffffff']}
                    particleCount={500}
                    particleSpread={10}
                    speed={0.1}
                    particleBaseSize={130}
                    moveParticlesOnHover={true}
                    alphaParticles={true}
                    disableRotation={false}
                />
            </div>

            {/* Content */}
            <div className="relative z-10 pointer-events-none">
                {children}
            </div>
        </div>
    );
};

export default ParticlesBg;