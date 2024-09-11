<template>
  <div class="not-found">
    <h1>404: Page Not Found</h1>
    <div class="glitch" data-text="ERROR">ERROR</div>
    <p>Oops! Looks like you've ventured into uncharted digital territory.</p>
    <router-link to="/" class="button">Return to Home Base</router-link>
  </div>
</template>

<script>
export default {
  name: '404',
}
</script>

<style scoped>
.not-found {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
  background-color: var(--background-color);
  color: var(--text-color);
}

h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: var(--primary-color);
  text-shadow: 0 0 10px var(--primary-color);
}

.glitch {
  font-size: 5rem;
  font-weight: bold;
  text-transform: uppercase;
  position: relative;
  color: var(--secondary-color);
  letter-spacing: 3px;
  animation: glitch 1s linear infinite;
}

@keyframes glitch {
  2%,
  64% {
    transform: translate(2px, 0) skew(0deg);
  }
  4%,
  60% {
    transform: translate(-2px, 0) skew(0deg);
  }
  62% {
    transform: translate(0, 0) skew(5deg);
  }
}

.glitch:before,
.glitch:after {
  content: attr(data-text);
  position: absolute;
  top: 0;
  width: 100%;
  background: var(--background-color);
  clip: rect(0, 0, 0, 0);
}

.glitch:before {
  left: -2px;
  text-shadow: 2px 0 var(--primary-color);
  animation: glitch-anim 2s infinite linear alternate-reverse;
}

.glitch:after {
  left: 2px;
  text-shadow: -2px 0 var(--secondary-color);
  animation: glitch-anim 3s infinite linear alternate-reverse;
}

@keyframes glitch-anim {
  0% {
    clip: rect(64px, 9999px, 98px, 0);
  }
  5% {
    clip: rect(30px, 9999px, 16px, 0);
  }
  10% {
    clip: rect(80px, 9999px, 130px, 0);
  }
  15% {
    clip: rect(20px, 9999px, 76px, 0);
  }
  20% {
    clip: rect(48px, 9999px, 29px, 0);
  }
  25% {
    clip: rect(27px, 9999px, 97px, 0);
  }
  30% {
    clip: rect(47px, 9999px, 73px, 0);
  }
  35% {
    clip: rect(67px, 9999px, 82px, 0);
  }
  40% {
    clip: rect(14px, 9999px, 49px, 0);
  }
  45% {
    clip: rect(15px, 9999px, 32px, 0);
  }
  50% {
    clip: rect(62px, 9999px, 38px, 0);
  }
  55% {
    clip: rect(12px, 9999px, 54px, 0);
  }
  60% {
    clip: rect(72px, 9999px, 53px, 0);
  }
  65% {
    clip: rect(95px, 9999px, 39px, 0);
  }
  70% {
    clip: rect(5px, 9999px, 29px, 0);
  }
  75% {
    clip: rect(6px, 9999px, 25px, 0);
  }
  80% {
    clip: rect(95px, 9999px, 73px, 0);
  }
  85% {
    clip: rect(66px, 9999px, 39px, 0);
  }
  90% {
    clip: rect(57px, 9999px, 70px, 0);
  }
  95% {
    clip: rect(79px, 9999px, 26px, 0);
  }
  100% {
    clip: rect(6px, 9999px, 46px, 0);
  }
}

p {
  font-size: 1.2rem;
  margin-bottom: 2rem;
}

.button {
  background-color: var(--primary-color);
  color: var(--background-color);
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: all 0.3s ease;
  text-decoration: none;
}

.button:hover {
  background-color: var(--secondary-color);
  box-shadow: 0 0 15px var(--secondary-color);
}
</style>
