import React from 'react'
import './css/winpg.css'

function WinPg() {
return (
    <div className='winContainer'>
        <div className="winWrapper">
            <div className="headBar">
                <div className="ProgressBar"></div>
                <div className="cross">
                    <div className="iconOfCross">X</div>
                </div>
            </div>
            <div className="next">
                <h2>Lesson Components</h2>
                <span>Tags</span>
                <div className="gift">
                    <img src="https://pinnacle.works/wp-content/uploads/2022/06/dummy-image.jpg"  alt="" style={{height:'30px'}} className="left" />
                    <div className="centerTag">
                        <h3>XP earned</h3>
                        <div>50XP</div>
                    </div>
                    <img src="https://pinnacle.works/wp-content/uploads/2022/06/dummy-image.jpg"  alt="" style={{height:'30px'}} className="right" />
                </div>
            </div>
        </div>
    </div>
)
}

export default WinPg