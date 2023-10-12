export const SunIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({ className, ...rest }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='24'
    height='24'
    viewBox='0 0 24 24'
    {...rest}
    className={` ${className}`}
  >
    <g fill='none' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2'>
      <g strokeDasharray='2'>
        <path d='M12 21v1M21 12h1M12 3v-1M3 12h-1'>
          <animate fill='freeze' attributeName='stroke-dashoffset' dur='0.2s' values='4;2' />
        </path>
        <path d='M18.5 18.5l0.5 0.5M18.5 5.5l0.5 -0.5M5.5 5.5l-0.5 -0.5M5.5 18.5l-0.5 0.5'>
          <animate fill='freeze' attributeName='stroke-dashoffset' begin='0.2s' dur='0.2s' values='4;2' />
        </path>
      </g>
      <path
        fill='currentColor'
        d='M7 6 C7 12.08 11.92 17 18 17 C18.53 17 19.05 16.96 19.56 16.89 C17.95 19.36 15.17 21 12 21 C7.03 21 3 16.97 3 12 C3 8.83 4.64 6.05 7.11 4.44 C7.04 4.95 7 5.47 7 6 Z'
        opacity='0'
      >
        <set attributeName='opacity' begin='0.5s' to='1' />
      </path>
    </g>
    <g fill='currentColor' fillOpacity='0'>
      <path d='m15.22 6.03l2.53-1.94L14.56 4L13.5 1l-1.06 3l-3.19.09l2.53 1.94l-.91 3.06l2.63-1.81l2.63 1.81z'>
        <animate
          id='lineMdSunnyFilledLoopToMoonFilledLoopTransition0'
          fill='freeze'
          attributeName='fill-opacity'
          begin='0.6s;lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+6s'
          dur='0.4s'
          values='0;1'
        />
        <animate
          fill='freeze'
          attributeName='fill-opacity'
          begin='lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+2.2s'
          dur='0.4s'
          values='1;0'
        />
      </path>
      <path d='M13.61 5.25L15.25 4l-2.06-.05L12.5 2l-.69 1.95L9.75 4l1.64 1.25l-.59 1.98l1.7-1.17l1.7 1.17z'>
        <animate
          fill='freeze'
          attributeName='fill-opacity'
          begin='lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+3s'
          dur='0.4s'
          values='0;1'
        />
        <animate
          fill='freeze'
          attributeName='fill-opacity'
          begin='lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+5.2s'
          dur='0.4s'
          values='1;0'
        />
      </path>
      <path d='M19.61 12.25L21.25 11l-2.06-.05L18.5 9l-.69 1.95l-2.06.05l1.64 1.25l-.59 1.98l1.7-1.17l1.7 1.17z'>
        <animate
          fill='freeze'
          attributeName='fill-opacity'
          begin='lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+0.4s'
          dur='0.4s'
          values='0;1'
        />
        <animate
          fill='freeze'
          attributeName='fill-opacity'
          begin='lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+2.8s'
          dur='0.4s'
          values='1;0'
        />
      </path>
      <path d='m20.828 9.731l1.876-1.439l-2.366-.067L19.552 6l-.786 2.225l-2.366.067l1.876 1.439L17.601 12l1.951-1.342L21.503 12z'>
        <animate
          fill='freeze'
          attributeName='fill-opacity'
          begin='lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+3.4s'
          dur='0.4s'
          values='0;1'
        />
        <animate
          fill='freeze'
          attributeName='fill-opacity'
          begin='lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+5.6s'
          dur='0.4s'
          values='1;0'
        />
      </path>
    </g>
    <mask id='lineMdSunnyFilledLoopToMoonFilledLoopTransition1'>
      <circle cx='12' cy='12' r='12' fill='#fff' />
      <circle cx='22' cy='2' r='3' fill='#fff'>
        <animate fill='freeze' attributeName='cx' begin='0.1s' dur='0.4s' values='22;18' />
        <animate fill='freeze' attributeName='cy' begin='0.1s' dur='0.4s' values='2;6' />
        <animate fill='freeze' attributeName='r' begin='0.1s' dur='0.4s' values='3;12' />
      </circle>
      <circle cx='22' cy='2' r='1'>
        <animate fill='freeze' attributeName='cx' begin='0.1s' dur='0.4s' values='22;18' />
        <animate fill='freeze' attributeName='cy' begin='0.1s' dur='0.4s' values='2;6' />
        <animate fill='freeze' attributeName='r' begin='0.1s' dur='0.4s' values='1;10' />
      </circle>
    </mask>
    <circle cx='12' cy='12' r='6' fill='currentColor' mask='url(#lineMdSunnyFilledLoopToMoonFilledLoopTransition1)'>
      <set attributeName='opacity' begin='0.5s' to='0' />
      <animate fill='freeze' attributeName='r' begin='0.1s' dur='0.4s' values='6;10' />
    </circle>
  </svg>
)

export const MoonIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({ className, ...rest }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='24'
    height='24'
    viewBox='0 0 24 24'
    {...rest}
    className={` ${className}`}
  >
    <rect x='0' y='0' width='24' height='24' fill='rgba(255, 255, 255, 0)' />
    <g fill='none' stroke='currentColor' strokeDasharray='2' strokeDashoffset='2' strokeLinecap='round' strokeWidth='2'>
      <path d='M0 0'>
        <animate
          fill='freeze'
          attributeName='d'
          begin='1.2s'
          dur='0.2s'
          values='M12 19v1M19 12h1M12 5v-1M5 12h-1;M12 21v1M21 12h1M12 3v-1M3 12h-1'
        />
        <animate fill='freeze' attributeName='stroke-dashoffset' begin='1.2s' dur='0.2s' values='2;0' />
      </path>
      <path d='M0 0'>
        <animate
          fill='freeze'
          attributeName='d'
          begin='1.5s'
          dur='0.2s'
          values='M17 17l0.5 0.5M17 7l0.5 -0.5M7 7l-0.5 -0.5M7 17l-0.5 0.5;M18.5 18.5l0.5 0.5M18.5 5.5l0.5 -0.5M5.5 5.5l-0.5 -0.5M5.5 18.5l-0.5 0.5'
        />
        <animate fill='freeze' attributeName='stroke-dashoffset' begin='1.5s' dur='1.2s' values='2;0' />
      </path>
      <animateTransform
        attributeName='transform'
        dur='30s'
        repeatCount='indefinite'
        type='rotate'
        values='0 12 12;360 12 12'
      />
    </g>
    <g fill='currentColor'>
      <path d='M15.22 6.03L17.75 4.09L14.56 4L13.5 1L12.44 4L9.25 4.09L11.78 6.03L10.87 9.09L13.5 7.28L16.13 9.09L15.22 6.03Z'>
        <animate fill='freeze' attributeName='fill-opacity' dur='0.4s' values='1;0' />
      </path>
      <path d='M19.61 12.25L21.25 11L19.19 10.95L18.5 9L17.81 10.95L15.75 11L17.39 12.25L16.8 14.23L18.5 13.06L20.2 14.23L19.61 12.25Z'>
        <animate fill='freeze' attributeName='fill-opacity' begin='0.2s' dur='0.4s' values='1;0' />
      </path>
    </g>
    <g fill='currentColor' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2'>
      <path d='M7 6 C7 12.08 11.92 17 18 17 C18.53 17 19.05 16.96 19.56 16.89 C17.95 19.36 15.17 21 12 21 C7.03 21 3 16.97 3 12 C3 8.83 4.64 6.05 7.11 4.44 C7.04 4.95 7 5.47 7 6 Z' />
      <set attributeName='opacity' begin='0.6s' to='0' />
    </g>
    <mask id='lineMdMoonFilledToSunnyFilledLoopTransition0'>
      <circle cx='12' cy='12' r='12' fill='#fff' />
      <circle cx='18' cy='6' r='12' fill='#fff'>
        <animate fill='freeze' attributeName='cx' begin='0.6s' dur='0.4s' values='18;22' />
        <animate fill='freeze' attributeName='cy' begin='0.6s' dur='0.4s' values='6;2' />
        <animate fill='freeze' attributeName='r' begin='0.6s' dur='0.4s' values='12;3' />
      </circle>
      <circle cx='18' cy='6' r='10'>
        <animate fill='freeze' attributeName='cx' begin='0.6s' dur='0.4s' values='18;22' />
        <animate fill='freeze' attributeName='cy' begin='0.6s' dur='0.4s' values='6;2' />
        <animate fill='freeze' attributeName='r' begin='0.6s' dur='0.4s' values='10;1' />
      </circle>
    </mask>
    <circle
      cx='12'
      cy='12'
      r='10'
      fill='currentColor'
      mask='url(#lineMdMoonFilledToSunnyFilledLoopTransition0)'
      opacity='0'
    >
      <set attributeName='opacity' begin='0.6s' to='1' />
      <animate fill='freeze' attributeName='r' begin='0.6s' dur='0.4s' values='10;6' />
    </circle>
  </svg>
)
export const YoutubeIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({ className, ...rest }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    data-name='Layer 1'
    viewBox='0 0 128 128'
    width='24'
    height='24'
    {...rest}
    className={`${className}`}
  >
    <circle cx={64} cy={64} r={64} fill='#4B5663' />
    <path
      fill='#fff'
      fillRule='evenodd'
      d='M98.62 53.92c-.49-6.75-1.72-13.72-10.35-14.23a426.5 426.5 0 00-48.55 0c-8.63.5-9.86 7.48-10.35 14.23a135 135 0 000 20.16c.49 6.75 1.72 13.72 10.35 14.23a426.5 426.5 0 0048.55 0c8.63-.5 9.86-7.48 10.35-14.23a135 135 0 000-20.16zM57 73V53l19 10z'
    />
  </svg>
)

export const GithubIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({ className, ...rest }) => (
  <svg
    fill='currentColor'
    viewBox='0 0 24 24'
    aria-hidden='true'
    width='24'
    height='24'
    {...rest}
    className={`${className}`}
  >
    <path d='M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z' />
  </svg>
)
export const FacebookIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({ className, ...rest }) => (
  <svg
    fill='currentColor'
    viewBox='0 0 24 24'
    aria-hidden='true'
    width='24'
    height='24'
    {...rest}
    className={`${className}`}
  >
    <path d='M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z' />
  </svg>
)

export const LanguageIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({ className, ...rest }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 20 20'
    fill='currentColor'
    width='24'
    height='24'
    {...rest}
    className={`${className}`}
  >
    <path
      fillRule='evenodd'
      d='M7 2a1 1 0 011 1v1h3a1 1 0 110 2H9.578a18.87 18.87 0 01-1.724 4.78c.29.354.596.696.914 1.026a1 1 0 11-1.44 1.389c-.188-.196-.373-.396-.554-.6a19.098 19.098 0 01-3.107 3.567 1 1 0 01-1.334-1.49 17.087 17.087 0 003.13-3.733 18.992 18.992 0 01-1.487-2.494 1 1 0 111.79-.89c.234.47.489.928.764 1.372.417-.934.752-1.913.997-2.927H3a1 1 0 110-2h3V3a1 1 0 011-1zm6 6a1 1 0 01.894.553l2.991 5.982a.869.869 0 01.02.037l.99 1.98a1 1 0 11-1.79.895L15.383 16h-4.764l-.724 1.447a1 1 0 11-1.788-.894l.99-1.98.019-.038 2.99-5.982A1 1 0 0113 8zm-1.382 6h2.764L13 11.236 11.618 14z'
      clipRule='evenodd'
    />
  </svg>
)

export const CartIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({ className, ...rest }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 20 20'
    fill='currentColor'
    width='24'
    height='24'
    {...rest}
    className={`${className}`}
  >
    <path d='M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z' />
  </svg>
)

export const SearchIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({ className, ...rest }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 24 24'
    stroke='currentColor'
    strokeWidth={2}
    width='24'
    height='24'
    {...rest}
    className={`${className}`}
  >
    <path strokeLinecap='round' strokeLinejoin='round' d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z' />
  </svg>
)
