import React from 'react'

const Impdate = () => {
  return (
    <div className="wrapper important-dates text-center">
      <div className="imp-left"><img src="images/important-left.jpg" alt="" /></div>
      <div className="imp-right"><img src="images/important-right.jpg" alt="" /></div>
      <div className="container">
        <div className="heading">
          <h2>Important <span>Dates</span></h2>
        </div>
        <div className="imp-dates">
          <div className="row">
            <h3 className="date">23<sup>rd</sup> June 2022</h3>
            <div className="bullet-design"><div className="bullet-design-hover" /></div>
            <h3 className="submission-of" style={{ width: '562px' }}>Call for Papers</h3>
          </div>
          <div className="row">
            <h3 className="date"> 05<sup>th</sup> Oct 2022 <br /> <del style={{ color: '#ff0000' }}>31<sup>st</sup> Aug 2022</del></h3>
            <div className="bullet-design"><div className="bullet-design-hover" /></div>
            <h3 className="submission-of" style={{ width: '562px' }}>Paper Submission Deadline</h3>
          </div>
          <div className="row">
            <h3 className="date">20<sup>th</sup> Oct 2022 <br /> <del style={{ color: '#ff0000' }}>25<sup>th</sup> Sep 2022</del></h3>
            <div className="bullet-design"><div className="bullet-design-hover" /></div>
            <h3 className="submission-of" style={{ width: '562px' }}>Acceptance Notification</h3>
          </div>
          <div className="row">
            <h3 className="date">28<sup>th</sup> Oct 2022<br /><del style={{ color: '#ff0000' }}>11<sup>th</sup> Oct 2022</del></h3>
            <div className="bullet-design"><div className="bullet-design-hover" /></div>
            <h3 className="submission-of" style={{ width: '562px' }}> Registrations Deadline - Presenters </h3>
          </div>
          <div className="row">
            <h3 className="date">28<sup>th</sup> Oct 2022<br /><del style={{ color: '#ff0000' }}>25<sup>th</sup> Oct 2022 </del></h3>
            <div className="bullet-design"><div className="bullet-design-hover" /></div>
            <h3 className="submission-of" style={{ width: '562px' }}>Camera Ready Copy Submission</h3>
          </div>
          <div className="row">
            <h3 className="date">20<sup>th</sup> Nov 2022<br /><del style={{ color: '#ff0000' }}>11<sup>th</sup> Oct 2022</del></h3>
            <div className="bullet-design"><div className="bullet-design-hover" /></div>
            <h3 className="submission-of" style={{ width: '562px' }}> Registrations Deadline - Other Participants </h3>
          </div>
          <div className="row">
            <h3 className="date">24<sup>th</sup> Nov 2022 </h3>
            <div className="bullet-design"><div className="bullet-design-hover" /></div>
            <h3 className="submission-of" style={{ width: '562px' }}> Pre-Conference Workshop</h3>
          </div>
          <div className="row">
            <h3 className="date">25<sup>th</sup> to 26<sup>th</sup>  Nov 2022 </h3>
            <div className="bullet-design"><div className="bullet-design-hover" /></div>
            <h3 className="submission-of" style={{ width: '562px' }}>Conference Dates</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Impdate