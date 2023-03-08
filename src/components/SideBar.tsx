import React from "react";

interface SideBarProps {
    steps: Steps[]
}

type Steps = {
    stepActive: boolean,
    stepPage: number,
    title: string
}

export function SideBar({ steps }: SideBarProps) {

    return (
        <aside className='aside'>
            <div className='cont-steps'>
                {steps.map(step => (
                    <div key={step.title} className='step'>
                        <div className={`${step.stepActive ? 'hover-number' : 'step-number'}`}>
                            <p>{step.stepPage}</p>
                        </div>
                        <div className='text-step'>
                            <p className='step-p'>STEP {step.stepPage}</p>
                            <p><p className='step-p2'>{step.title}</p></p>
                        </div>
                    </div>
                ))}
            </div>
        </aside>
    );
}