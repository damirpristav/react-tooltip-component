import React, { Fragment, cloneElement, useState, useRef, useEffect } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

// Content
const TooltipContent = ({ tooltipClass, content, position, tooltipPosition, duration }) => {
  const tooltipEl = useRef();
  const targetEl = document.getElementById('root');

  useEffect(() => {
    const el = tooltipEl.current;

    if(el) {
      el.style.transitionDuration = duration + 'ms';

      setTimeout(() => {
        if(tooltipPosition === 'top') {
          el.style.top = `${position.top - el.clientHeight}px`;
          el.style.left = `${position.left}px`;
          el.style.transform = `translate(-50%, -15px) scale(1)`;
        }
        else if(tooltipPosition === 'bottom') {
          el.style.top = `${position.top}px`;
          el.style.left = `${position.left}px`;
          el.style.transform = `translate(-50%, 15px) scale(1)`;
        }
        else if(tooltipPosition === 'left') {
          el.style.top = `${position.top}px`;
          el.style.left = `${position.left - el.clientWidth}px`;
          el.style.transform = `translate(-15px, -50%) scale(1)`;
        }
        else if(tooltipPosition === 'right') {
          el.style.top = `${position.top}px`;
          el.style.left = `${position.left}px`;
          el.style.transform = `translate(15px, -50%) scale(1)`;
        }
        else if(tooltipPosition === 'top-left') {
          el.style.top = `${position.top - el.clientHeight}px`;
          el.style.left = `${position.left}px`;
          el.style.transform = `translate(0, -15px) scale(1)`;
        }
        else if(tooltipPosition === 'top-right') {
          el.style.top = `${position.top - el.clientHeight}px`;
          el.style.left = `${position.left}px`;
          el.style.transform = `translate(-100%, -15px) scale(1)`;
        }
        else if(tooltipPosition === 'bottom-left') {
          el.style.top = `${position.top}px`;
          el.style.left = `${position.left}px`;
          el.style.transform = `translate(0, 15px) scale(1)`;
        }
        else if(tooltipPosition === 'bottom-right') {
          el.style.top = `${position.top}px`;
          el.style.left = `${position.left}px`;
          el.style.transform = `translate(-100%, 15px) scale(1)`;
        }
        else if(tooltipPosition === 'left-top') {
          el.style.top = `${position.top}px`;
          el.style.left = `${position.left - el.clientWidth}px`;
          el.style.transform = `translate(-15px, 0) scale(1)`;
        }
        else if(tooltipPosition === 'left-bottom') {
          el.style.top = `${position.top}px`;
          el.style.left = `${position.left - el.clientWidth}px`;
          el.style.transform = `translate(-15px, -100%) scale(1)`;
        }
        else if(tooltipPosition === 'right-top') {
          el.style.top = `${position.top}px`;
          el.style.left = `${position.left}px`;
          el.style.transform = `translate(15px, 0) scale(1)`;
        }
        else if(tooltipPosition === 'right-bottom') {
          el.style.top = `${position.top}px`;
          el.style.left = `${position.left}px`;
          el.style.transform = `translate(15px, -100%) scale(1)`;
        }

        el.style.opacity = '1';
      }, 20);
    }
    // eslint-disable-next-line
  }, []);

  const output = <div className={tooltipClass} ref={tooltipEl}>{content}</div>

  return targetEl ? ReactDOM.createPortal(output, targetEl) : output;
}

TooltipContent.propTypes = {
  content: PropTypes.any.isRequired,
  tooltipClass: PropTypes.string.isRequired,
  position: PropTypes.shape({
    top: PropTypes.number.isRequired,
    left: PropTypes.number.isRequired
  }).isRequired,
  tooltipPosition: PropTypes.string.isRequired,
  duration: PropTypes.number.isRequired
}

// Tooltip
const Tooltip = ({ children, position, content, animationDuration = 200 }) => {
  const [elPosition, setElPosition] = useState({ top: 0, left: 0 });
  const [show, setShow] = useState(false);
  let tooltipClass = 'tooltip';

  const getPosition = (e) => {
    const pos = e.currentTarget.getBoundingClientRect();

    if(position === 'top') {
      setElPosition({ top: pos.top + window.pageYOffset, left: pos.left + (pos.width / 2) + window.pageXOffset });
    }
    else if(position === 'bottom') {
      setElPosition({ top: pos.bottom + window.pageYOffset, left: pos.left + (pos.width / 2) + window.pageXOffset });
    }
    else if(position === 'left') {
      setElPosition({ top: pos.top + (pos.height / 2) + window.pageYOffset, left: pos.left + window.pageXOffset });
    }
    else if(position === 'right') {
      setElPosition({ top: pos.top + (pos.height / 2) + window.pageYOffset, left: pos.left + pos.width + window.pageXOffset });
    }
    else if(position === 'top-left') {
      setElPosition({ top: pos.top + window.pageYOffset, left: pos.left + window.pageXOffset });
    }
    else if(position === 'top-right') {
      setElPosition({ top: pos.top + window.pageYOffset, left: pos.left + pos.width + window.pageXOffset });
    }
    else if(position === 'bottom-left') {
      setElPosition({ top: pos.top + pos.height + window.pageYOffset, left: pos.left + window.pageXOffset });
    }
    else if(position === 'bottom-right') {
      setElPosition({ top: pos.top + pos.height + window.pageYOffset, left: pos.left + pos.width + window.pageXOffset });
    }
    else if(position === 'left-top') {
      setElPosition({ top: pos.top + window.pageYOffset, left: pos.left + window.pageXOffset });
    }
    else if(position === 'left-bottom') {
      setElPosition({ top: pos.bottom + window.pageYOffset, left: pos.left + window.pageXOffset });
    }
    else if(position === 'right-top') {
      setElPosition({ top: pos.top + window.pageYOffset, left: pos.left + pos.width + window.pageXOffset });
    }
    else if(position === 'right-bottom') {
      setElPosition({ top: pos.bottom + window.pageYOffset, left: pos.left + pos.width + window.pageXOffset });
    }

    setShow(true);
  }

  if(position === 'top') {
    tooltipClass += ' tooltip--top';
  }
  else if(position === 'bottom') {
    tooltipClass += ' tooltip--bottom';
  }
  else if(position === 'left') {
    tooltipClass += ' tooltip--left';
  }
  else if(position === 'right') {
    tooltipClass += ' tooltip--right';
  }
  else if(position === 'top-left') {
    tooltipClass += ' tooltip--top-left';
  }
  else if(position === 'top-right') {
    tooltipClass += ' tooltip--top-right';
  }
  else if(position === 'bottom-left') {
    tooltipClass += ' tooltip--bottom-left';
  }
  else if(position === 'bottom-right') {
    tooltipClass += ' tooltip--bottom-right';
  }
  else if(position === 'left-top') {
    tooltipClass += ' tooltip--left-top';
  }
  else if(position === 'left-bottom') {
    tooltipClass += ' tooltip--left-bottom';
  }
  else if(position === 'right-top') {
    tooltipClass += ' tooltip--right-top';
  }
  else if(position === 'right-bottom') {
    tooltipClass += ' tooltip--right-bottom';
  }

  return(
    <Fragment>
      {show && <TooltipContent tooltipClass={tooltipClass} position={elPosition} content={content} tooltipPosition={position} duration={animationDuration} />}
      {cloneElement(children, {...children.props, onMouseOver: getPosition, onMouseLeave: () => setShow(false)})}
    </Fragment>
  );
}

Tooltip.propTypes = {
  children: PropTypes.element.isRequired,
  content: PropTypes.any.isRequired,
  position: PropTypes.oneOf(['top', 'bottom', 'left', 'right', 'top-left', 'top-right', 'bottom-left', 'bottom-right', 'left-top', 'left-bottom', 'right-top', 'right-bottom']).isRequired,
  animationDuration: PropTypes.number
}

export default Tooltip;