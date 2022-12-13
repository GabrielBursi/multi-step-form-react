import React from 'react';
import Step1Page from './pages/Step1Page';

import './styles/App.scss'

function App() {
  return (
    <div className='container'>
      <main className='main'>
        <aside className='aside'>
          <div className='cont-steps'>
            <div className='step'>
              <div className='step-number'>
                1
              </div>
              <div className='text-step'>
                <span>STEP 1</span>
                <p>YOUR INFO</p>
              </div>
            </div>
            <div className='step'>
              <div className='step-number'>
                2
              </div>
              <div className='text-step'>
                <span>STEP 2</span>
                <p>SELECT PLAN</p>
              </div>
            </div>
            <div className='step'>
              <div className='step-number'>
                3
              </div>
              <div className='text-step'>
                <span>STEP 3</span>
                <p>ADD-ONS</p>
              </div>
            </div>
            <div className='step'>
              <div className='step-number'>
                4
              </div>
              <div className='text-step'>
                <span>STEP 4</span>
                <p>SUMMARY</p>
              </div>
            </div>
          </div>
        </aside>
        <Step1Page/>
      </main>
    </div>
  );
}

export default App;
