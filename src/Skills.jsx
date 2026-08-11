import { Suspense, lazy } from 'react';
import useIsMobile from './hooks/useIsMobile';

const CircularGallery = lazy(() => import('./animations/CircularGallery'));

const Skills = () => {
    const isMobile = useIsMobile();

    return (
        <div name="skills" className="relative mx-auto w-full h-svh max-w-6xl rounded-[2rem] px-5 pb-10 pt-[8rem] sm:px-10 flex-col justify-center items-center">
            <div className="mx-auto mb-10 max-w-2xl text-center">
                <span className="section-label">Skills</span>
                <h2 className="section-title mt-5">Div-ing Into My Stack.</h2>
            </div>
            <div className="relative z-10">
                <Suspense
                    fallback={
                        <div className="h-[170px] rounded-[1.75rem] bg-slate-950/80 border border-white/10 shadow-[0_20px_80px_-30px_rgba(0,0,0,0.8)]" />
                    }
                >
                    {isMobile ? (
                        <div className="mt-[-2rem] text-2xl">
                            <CircularGallery
                                height={150}
                                bend={0}
                                textColor="#d1d5db"
                                borderRadius={0.08}
                                fontSize="750px"
                                scrollEase={1}
                                scrollSpeed={0.4}
                            />
                        </div>
                    ) : (
                        <CircularGallery
                            height={170}
                            bend={0}
                            textColor="#d1d5db"
                            borderRadius={0.05}
                            fontSize="600px"
                            scrollEase={0.05}
                            scrollSpeed={0.4}
                        />
                    )}
                </Suspense>
            </div>
        </div>
    );
};

export default Skills;