const getTime = () => {
  let now = new Date(),
    time = (new Date("2023-07-02") - now + 1000) / 1000,
    seconds = ("0" + Math.floor(time % 60)).slice(-2),
    minutes = ("0" + Math.floor((time / 60) % 60)).slice(-2),
    hours = ("0" + Math.floor((time / 3600) % 24)).slice(-2),
    days = Math.floor(time / (3600 * 24));
  return {
    seconds,
    minutes,
    hours,
    days,
    time,
  };
};

const countdown = (element) => {
  const item = document.getElementById(element);
  setInterval(() => {
    let currenTime = getTime();

    item.innerHTML = `
        <div class="container">
            <div class="row">
                <div class="col">
                    <div class="countdown-container">
                        <div class="number">
                            ${currenTime.days}
                        </div>
                        <div class="concept">
                            Días
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="countdown-container">
                        <div class="number">
                            ${currenTime.hours}
                        </div>
                        <div class="concept">
                            Horas
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="countdown-container">
                        <div class="number">
                            ${currenTime.minutes}
                        </div>
                        <div class="concept">
                            Minutos
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="countdown-container">
                        <div class="number">
                            ${currenTime.seconds}
                        </div>
                        <div class="concept">
                            Segundos
                        </div>
                    </div>
                </div>
            </div>
        </div>`;
  }, 1000);
};

countdown("countdown1");
