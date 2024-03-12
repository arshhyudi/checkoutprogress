import React, { useEffect, useRef, useState } from "react";

const CheckoutStepper = ({ setpsConfig = [] }) => {
  const [currentstep, setCurrentstep] = useState(1);
  const [isComplete, setIsComplete] = useState(false);
  const [margins, setMargins] = useState({
    marginLeft: 0,
    marginRight: 0,
  });

  const stepRef = useRef([]);

  useEffect(()=>{
    setMargins({
        marginLeft:stepRef.current[0].offsetWidth/2,
        marginRight:stepRef.current[setpsConfig.length-1].offsetWidth
    })
    console.log(stepRef.current[setpsConfig.length-1].offsetWidth)
  },[stepRef])




  const handleNext = () => {
    setCurrentstep((prevStep) => {
      if (prevStep === setpsConfig.length) {
        setIsComplete(true);
        return prevStep;
      } else {
        return prevStep + 1;
      }
    });
  };
  
  const calculateProgressBarWidth = () => {
    return ((currentstep - 1) / (setpsConfig.length - 1)) * 100;
  };

  if (!setpsConfig.length) {
    return <></>;
  }
  const ActiveComponent = setpsConfig[currentstep - 1]?.Component;
  return (
    <>
      <div className="stepper">
        {setpsConfig.map((item, index) => {
          return (
            <div
              key={item.name}
              ref={(el) => (stepRef.current[index] = el)}
              className={`step ${
                currentstep > index + 1 || isComplete ? "complete" : ""
              } ${currentstep === index + 1 ? "active" : ""}`}
            >
              <div className="step-number">
                {currentstep > index + 1 || isComplete ? (
                  <span>&#10003;</span>
                ) : (
                  index + 1
                )}
              </div>
              <div className="step-name">{item.name}</div>
            </div>
          );
        })}
        <div className="progress-bar" style={{
            width:`calc(100%-${margins.marginLeft + margins.marginRight}px)`,
            marginLeft:margins.marginLeft,
            marginRight:margins.marginRight,
        }}>
          <div
            className="progress "
            style={{ width: `${calculateProgressBarWidth()}%` }}
          ></div>
        </div>
      </div>

     <div className="btnComponent">
     <ActiveComponent className="compenont" />
      {!isComplete && (
        <button className="btn" onClick={handleNext}>
          {currentstep === setpsConfig.length ? "Finish" : "Next"}
        </button>
      )}
     </div>
    </>
  );
};

export default CheckoutStepper;
