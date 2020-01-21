import "./traffic-lighter.scss";

function trafficLighter(test) {
  const trafficLighterRoot = document.querySelector(test);
  const lights = trafficLighterRoot.querySelectorAll(".traffic-lighter__light");
  const togglerBtn = trafficLighterRoot.querySelector(
    ".traffic-lighter__toggler"
  );
  let isEnabled = false;
  let activeIndex = 0;
  let intervalId = 0;

  const toggleOffAll = () => {
    for (let i = 0; i < lights.length; i++) {
      lights[i].classList.remove("active");
    }
  };
  const activateLight = () => {
    lights[activeIndex].classList.add("active");
  };

  for (let i = 0; i < lights.length; i++) {
    lights[i].onclick = function() {
      if (isEnabled) {
        clearInterval(intervalId);
        toggleOffAll();
        activeIndex = i;
        activateLight();
        startAutoChange();
      }
    };
  }

  const changeIndex = () => {
    if (activeIndex + 1 < lights.length) {
      activeIndex += 1;
    } else {
      activeIndex = 0;
    }
  };

  const toggleOffLighter = () => {
    isEnabled = false;
    toggleOffAll();
    activeIndex = 0;
    clearInterval(intervalId);
  };
  const startAutoChange = () => {
    intervalId = setInterval(() => {
      toggleOffAll();
      changeIndex();
      activateLight();
    }, 1000);
  };
  const toggleOnLighter = () => {
    isEnabled = true;
    activateLight(0);
    startAutoChange();
  };

  const togglerClickHandler = () => {
    if (isEnabled) {
      toggleOffLighter();
    } else {
      toggleOnLighter();
    }
  };

  togglerBtn.onclick = togglerClickHandler;
}

export { trafficLighter };
