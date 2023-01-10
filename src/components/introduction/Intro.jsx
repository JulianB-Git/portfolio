import './intro.scss'
import Me from '../../img/me.png'

const Intro = () => {
  return (
    <div className='intro'>
        <div className="left">
            <div className="wrapper">
                <h2 className='heading'>Hello, my name is</h2>
                <h1 className='name'>Julian Benade</h1>
                <div className="title">
                    <div className="title-wrapper">
                        <div className="title-item">Software Developer</div>
                        <div className="title-item">QA Automation Engineer</div>
                        <div className="title-item">Overall fun guy</div>
                    </div>
                </div>
                <p className="description">
                    I create masterpieces from scratch for customers of all sizes, specializing in creating automation frameworks, mordern web solutions, services and online stores.
                </p>
            </div>
        </div>
        <div className="right">
            <div className="bg"></div>
            <img src={Me} alt="" className="image" />
        </div>
    </div>
  )
}

export default Intro